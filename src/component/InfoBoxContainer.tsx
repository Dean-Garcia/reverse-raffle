import { useState } from "react";
import "../styles.css";
import InfoBox from "./InfoBox";
import { RaffleEntriesType } from "./App";

type InfoBoxContainerProps = {
  activeRaffle: string;
  raffleData: RaffleEntriesType;
};

const InfoBoxContainer = ({
  activeRaffle,
  raffleData,
}: InfoBoxContainerProps) => {
  const createInfoBoxArray = () => {
    let infoBoxArray = [];
    let textArray = Object.keys(raffleData) ?? [];
    let values = Object.values(raffleData);
    let lengthArray = values.map((raffleValues) => raffleValues.length);
    for (let i = 0; i < textArray.length; i++) {
      infoBoxArray.push(
        <InfoBox key={textArray[i]} text={textArray[i]} num={lengthArray[i]} />
      );
    }
    return infoBoxArray;
  };

  let infoBoxes = createInfoBoxArray();

  return <div className="info-box-container">{infoBoxes}</div>;
};

export default InfoBoxContainer;
