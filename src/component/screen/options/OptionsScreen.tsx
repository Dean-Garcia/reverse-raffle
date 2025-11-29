import "../../../styles.css";
import Grid from "../Grid";
import InfoBoxContainer from "../raffle/InfoBoxContainer";
import Header from "../raffle/Header";
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
} from "../../../redux/reducer";
import {
  updateActiveRaffleData,
  updateDrawnEntries,
  updateIsRaffleActive,
  updateStore,
  updateWinners,
} from "../../../redux/actions/actions";
import { useState } from "react";
import { Button, Dialog } from "@mui/material";

type OptionsProps = {
  open: boolean;
  onClose: () => void;
};

export default function OptionsScreen({ open, onClose }: OptionsProps) {
  const dispatch = useDispatch();
  const currentRaffle = useSelector(selectCurrentRaffle);
  const activeRaffleData = useSelector(selectActiveRaffleData, {
    equalityFn: shallowEqual,
  });
  let drawnEntries = useSelector(selectDrawnEntries);
  const isRaffleActive = useSelector(selectIsRaffleActive);
  const raffleData = useSelector(selectRaffleData);
  const winners = useSelector(selectWinners);
  const currentFileData = useSelector(selectCurrentFileData);
  const raffleNameList = useSelector(selectRaffleNameList);

  const [isWinOpen, setIsWinOpen] = useState(false); // for win screen popup

  const handleTest = () => {
    console.log("hi");
  };

  return (
    <Dialog className="options-screen" onClose={onClose} open={open}>
      <div className="test">awefawef</div>;
      <Button variant="contained" onClick={handleTest}>
        Start Raffle
      </Button>
    </Dialog>
  );
}
