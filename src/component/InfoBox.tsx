import { useState } from "react";
import "../styles.css";

type InfoBoxProps = {
  text: string;
  num: number;
};

const InfoBox = ({ text, num, raffleData }: InfoBoxProps) => {
  let boxText = `${text}: 
    ${num}    
    `;

  return (
    <>
      <div className="info-box">{boxText}</div>
    </>
  );
};

export default InfoBox;
