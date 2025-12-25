import React, { useEffect, useState } from "react";
import { InfoBoxAccordion } from "./InfoBoxAccordion";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCurrentRaffle,
  updateDrawnEntries,
} from "../../../redux/actions/actions";
import { selectIsRaffleActive } from "../../../redux/reducer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "rgb(37, 37, 37)",
    height: "95vh",
    display: "flex",
    flexDirection: "column",
  },
}));

export const InfoBoxContainer = ({ activeRaffle, raffleData }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(activeRaffle);
  const isRaffleRunning = useSelector(selectIsRaffleActive);
  const handleChange = (panel) => (event, isExpanded) => {
    if (isRaffleRunning) return;
    setExpanded(isExpanded ? panel : false);
    dispatch(updateCurrentRaffle(panel));
    dispatch(updateDrawnEntries([]));
  };

  const createInfoBoxArray = () => {
    let infoBoxArray = [];
    let textArray = Object.keys(raffleData) ?? [];
    let values = Object.values(raffleData);
    let lengthArray = values.map((raffleValues) => raffleValues.length);
    for (let i = 0; i < textArray.length; i++) {
      infoBoxArray.push(
        <InfoBoxAccordion
          key={textArray[i]}
          name={textArray[i]}
          count={lengthArray[i]}
          expanded={expanded}
          handleChange={handleChange}
        />
      );
    }
    return infoBoxArray;
  };

  useEffect(() => {
    if (expanded !== activeRaffle) setExpanded(activeRaffle);
  }, [activeRaffle]);

  return <div className={classes.root}>{createInfoBoxArray()}</div>;
};

export default InfoBoxContainer;
