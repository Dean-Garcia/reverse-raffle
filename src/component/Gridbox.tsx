import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectDrawnEntries } from "../redux/reducer";
import "../styles.css";

type GridboxProps = {
  boxNumber: number;
  text?: string;
  dummy?: boolean;
  name?: string;
  isEnabled?: boolean;
};

const Gridbox = ({
  boxNumber,
  text,
  dummy = false,
  name,
  isEnabled,
}: GridboxProps) => {
  const boxName = useRef(name);
  const boxText = text ? text : boxNumber;
  const drawnEntries = useSelector(selectDrawnEntries);
  if (drawnEntries.includes(boxName.current as string)) isEnabled = false;
  let boxClass =
    isEnabled && !dummy ? "grid-box box-enabled" : "grid-box box-disabled";

  return (
    <div style={{ containerType: "inline-size" }}>
      <div className={boxClass}>{boxText}</div>
    </div>
  );
};

export default Gridbox;
