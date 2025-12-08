import { useRef, useState } from "react";
import "../../../styles.css";
import { useSelector } from "react-redux";
import {
  selectActiveRaffleData,
  selectDrawnEntries,
  selectRaffleConfigs,
} from "../../../redux/reducer";

type InfoBoxProps = {
  text: string;
  num: number;
};

const InfoBox = ({ text, num, raffleData }: InfoBoxProps) => {
  const activeDrawn = useSelector(selectDrawnEntries);
  const raffleConfig = useSelector(selectRaffleConfigs);
  const numberDrawn = activeDrawn.length;
  const numberLeft = num - numberDrawn;
  const numRef = useRef(num);
  const last15Pulled = activeDrawn.slice(-15);
  const description = raffleConfig[text]?.description;
  const startingTicketsText = `Starting Tickets: ${numRef.current}`;
  const ticketsLeftText = `Tickets Left: ${numberLeft}`;

  const list = last15Pulled.map((name, index) => {
    const nameWithoutNumber = name?.split("-")[0];
    return <div key={`name-${index}`}>{nameWithoutNumber}</div>;
  });

  return (
    <>
      <div className="info-box">
        <div>{description}</div>
        <div>{startingTicketsText}</div>
        <div>{ticketsLeftText}</div>
        <div> </div>
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            overflowY: "hidden",
          }}
        >
          {`Recently Pulled:
          `}
          {list}
        </div>
      </div>
    </>
  );
};

export default InfoBox;
