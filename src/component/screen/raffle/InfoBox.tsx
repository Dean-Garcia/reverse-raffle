import { useRef, useState } from "react";
import "../../../styles.css";
import { useSelector } from "react-redux";
import {
  selectActiveRaffleData,
  selectDrawnEntries,
  selectRaffleConfigs,
  selectWinners,
} from "../../../redux/reducer";

type InfoBoxProps = {
  text: string;
  num: number;
};

const InfoBox = ({ text, num, raffleData }: InfoBoxProps) => {
  const activeDrawn = useSelector(selectDrawnEntries);
  const raffleConfig = useSelector(selectRaffleConfigs);
  const winner = useSelector(selectWinners);
  const numberDrawn = activeDrawn.length;

  const numRef = useRef(num);
  const numberLeft: number = numRef.current - numberDrawn;
  const last15Pulled = activeDrawn.slice(-15);
  const description = raffleConfig[text]?.description;
  const startingTicketsText = `Starting Tickets: ${numRef.current}`;
  const ticketsLeftText = `Tickets Left: ${numberLeft}`;

  const list = last15Pulled.map((name, index) => {
    const nameWithoutNumber = name?.split("-")[0];
    return <div key={`name-${index}`}>{nameWithoutNumber}</div>;
  });

  const ticketsElements = winner[text] ? (
    <div>{`Winner: ${winner[text]?.split("-")[0]}`}</div>
  ) : (
    <div>{ticketsLeftText}</div>
  );

  return (
    <>
      <div className="info-box">
        <div>{description}</div>
        <div>{startingTicketsText}</div>
        {ticketsElements}
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
