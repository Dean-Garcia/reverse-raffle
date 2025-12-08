import "../../../styles.css";
import Grid from "./Grid";
import Header from "./Header";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  selectActiveRaffleData,
  selectRaffleData,
  selectCurrentRaffle,
  selectDrawnEntries,
  selectIsRaffleActive,
  selectWinners,
  selectCurrentFileData,
  selectRaffleNameList,
  selectFinalTenEntries,
} from "../../../redux/reducer";
import {
  updateActiveRaffleData,
  updateDrawnEntries,
  updateFinalTenEntries,
  updateIsRaffleActive,
  updateStore,
  updateWinners,
} from "../../../redux/actions/actions";
import { DialogBox } from "../../DialogBox";
import { useState } from "react";
import { WinnerDialogBox } from "./WinnerDialogBox";
import {
  getFileArrayIndexWithName,
  getRaffleEntries,
} from "../../../utilities/utility";
import OptionsScreen from "../options/OptionsScreen";
import InfoBoxContainer from "./InfoBoxContainer";
import { useKeyboardShortcut } from "../../../customHooks/useKeyboardShortcut";

type PageProps = {};

export default function Page({}: PageProps) {
  const dispatch = useDispatch();
  const currentRaffle = useSelector(selectCurrentRaffle);
  const activeRaffleData = useSelector(selectActiveRaffleData, {
    equalityFn: shallowEqual,
  });
  const drawnEntries = useSelector(selectDrawnEntries);
  const isRaffleActive = useSelector(selectIsRaffleActive);
  const raffleData = useSelector(selectRaffleData);
  const winners = useSelector(selectWinners);
  const currentFileData = useSelector(selectCurrentFileData);
  const raffleNameList = useSelector(selectRaffleNameList);
  const finalTenList = useSelector(selectFinalTenEntries);

  const [isWinnerDialogOpen, setIsWinnerDialogOpen] = useState(false); // for win screen popup
  const [isOptionsOpen, setIsOptionsOpen] = useState(false); // for options

  // Random Number Generator for raffle. Max is excluded.
  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  // Returns variable delay based on number of entries left.
  // Slows down as entries left gets lower.
  const getDelay = (numLeft: number) => {
    if (numLeft >= 101) return 0;
    else if (numLeft >= 100) return 5;
    else if (numLeft >= 60) return 50;
    else if (numLeft >= 30) return 75;
    else if (numLeft >= 10) return 100;
    else if (numLeft >= 1) return 50;
    // else if (numLeft >= 9) return 300;
    // else if (numLeft >= 8) return 600;
    // else if (numLeft >= 7) return 700;
    // else if (numLeft >= 6) return 800;
    // else if (numLeft >= 5) return 900;
    // else if (numLeft >= 4) return 1000;
    // else if (numLeft >= 3) return 2000;
    return 5000;
  };

  const startRaffle = () => {
    if (isRaffleActive) return;

    dispatch(updateIsRaffleActive(true));
    let newDrawnEntries = [...drawnEntries];
    let newActiveRaffleData = [...activeRaffleData];

    // Only One Entry in Raffle, Pick Winner Immediately
    if (newActiveRaffleData.length === 1) {
      let winnerPayload = { [currentRaffle]: newActiveRaffleData[0] };

      // remove winner from file data
      let newCurrentFileData = [...currentFileData];
      const winnerName = newActiveRaffleData[0].slice(0, -2);
      const winnerIndex = getFileArrayIndexWithName(
        winnerName,
        newCurrentFileData
      );
      newCurrentFileData.splice(winnerIndex, 1);
      const newRaffleData = getRaffleEntries(
        newCurrentFileData,
        raffleNameList
      );
      dispatch(
        updateStore({
          isRaffleActive: false,
          winners: winnerPayload,
          currentFileData: newCurrentFileData,
          raffleData: newRaffleData,
        })
      );
      setTimeout(() => {
        setIsWinnerDialogOpen(true);
      }, 1000);
      return;
    }

    let delay = 100;
    let interval: any;

    // Runs the timer interval and does the business logic for the raffle
    const runLoop = async () => {
      let entriesLeft = newActiveRaffleData.length;
      // clear out old interval so we can start a new one
      clearInterval(interval);

      // When 10 entries left, await manual key press.
      if (entriesLeft <= 10) {
        await new Promise((r) => document.addEventListener("keypress", r));
      }

      // get delay for new interval
      delay = getDelay(entriesLeft);
      // Pick the losing ticket, add to drawn array, and remove from raffle ticket array
      let ranNum = randomIntFromInterval(0, newActiveRaffleData.length);
      newDrawnEntries.push(newActiveRaffleData[ranNum]);
      // console.log(
      //   "entries",
      //   newDrawnEntries,
      //   newActiveRaffleData.length,
      //   delay
      // );
      newActiveRaffleData.splice(ranNum, 1);
      dispatch(updateDrawnEntries(newDrawnEntries));

      // Close loop, show winner, and update file
      if (newActiveRaffleData.length === 1) {
        clearInterval(interval);
        let winnerPayload = { [currentRaffle]: newActiveRaffleData[0] };

        // remove winner from file data
        let newCurrentFileData = [...currentFileData];
        const winnerName = newActiveRaffleData[0].slice(0, -2);
        const winnerIndex = getFileArrayIndexWithName(
          winnerName,
          newCurrentFileData
        );
        // console.log(
        //   "winnerIndex",
        //   newCurrentFileData[winnerIndex],
        //   winnerIndex,
        //   newCurrentFileData.length
        // );
        newCurrentFileData.splice(winnerIndex, 1);
        // console.log("length", newCurrentFileData.length);
        const newRaffleData = getRaffleEntries(
          newCurrentFileData,
          raffleNameList
        );
        dispatch(
          updateStore({
            isRaffleActive: false,
            winners: winnerPayload,
            currentFileData: newCurrentFileData,
            raffleData: newRaffleData,
          })
        );
        setTimeout(() => {
          setIsWinnerDialogOpen(true);
        }, 1000);
        return;
      }

      // continue loop
      interval = setInterval(runLoop, delay);
    };

    runLoop();

    return interval;
  };

  // const pickFinalTenTicket = () => {
  //   dispatch(updateIsRaffleActive(true));
  // };

  // useKeyboardShortcut({
  //   key: "Enter",
  //   onKeyPressed: pickFinalTenTicket,
  // });

  // Close of winner dialog box
  const handleClose = () => {
    setIsWinnerDialogOpen(false);
  };

  const toggleWinnnerDialogBox = () => {
    setIsWinnerDialogOpen(!isWinnerDialogOpen);
  };

  const toggleOptionsMenu = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const getWinnerText = () => {
    if (!currentRaffle || !winners[currentRaffle]) return "No Winner Yet";
    let winner = winners[currentRaffle];
    let winnerName = winner.slice(0, -2);
    return `Congratulations to

     ${winnerName} 
    
     for winning ${currentRaffle}!
     `;
  };

  return (
    <div className="raffle-screen">
      <Header
        activeRaffle={currentRaffle}
        startRaffle={startRaffle}
        raffleData={raffleData}
        toggleOptionsMenu={toggleOptionsMenu}
      />
      <InfoBoxContainer activeRaffle={currentRaffle} raffleData={raffleData} />
      <Grid />
      <WinnerDialogBox
        open={isWinnerDialogOpen}
        onClose={toggleWinnnerDialogBox}
        text={getWinnerText()}
      />
      {isOptionsOpen ? <OptionsScreen onClose={toggleOptionsMenu} /> : null}
    </div>
  );
}
