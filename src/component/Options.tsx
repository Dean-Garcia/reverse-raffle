import "../styles.css";
import Grid from "./Grid";
import InfoBoxContainer from "./InfoBoxContainer";
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
} from "../redux/reducer";
import {
  updateActiveRaffleData,
  updateDrawnEntries,
  updateIsRaffleActive,
  updateStore,
  updateWinners,
} from "../redux/actions/actions";
import { useState } from "react";

type PageProps = {};

export default function Page({}: PageProps) {
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

  return <div className="page"></div>;
}
