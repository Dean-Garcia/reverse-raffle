import { useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import {
  selectDrawnEntries,
  selectFinalTenEntries,
} from "../../../redux/reducer";
import "../../../styles.css";
import { RaffleConfigType } from "../../../interfaces/types";

type GridboxProps = {
  boxNumber: number;
  text?: string;
  dummy?: boolean;
  name?: string;
  isEnabled?: boolean;
  gridBoxStyle?: any;
};

const Gridbox = ({
  boxNumber,
  text,
  dummy = false,
  name,
  isEnabled,
  gridBoxStyle,
}: GridboxProps) => {
  // const [boxStyle, setBoxStyle] = useState(gridBoxStyle, shallowEqual);
  const isFinalTen = useSelector(selectFinalTenEntries);
  if (isFinalTen.length > 0) {
    text = name?.split("-")[0];
  }
  const boxName = useRef(name);
  const boxText = text ? text : boxNumber;
  const drawnEntries = useSelector(selectDrawnEntries);
  if (drawnEntries.includes(boxName.current as string)) isEnabled = false;
  let boxClass =
    isEnabled && !dummy ? "grid-box box-enabled" : "grid-box box-disabled";

  let boxStyle = isEnabled && !dummy ? gridBoxStyle : {};
  return (
    <div style={{ containerType: "inline-size" }}>
      <div style={boxStyle} className={boxClass}>
        {boxText}
      </div>
    </div>
  );
};

export default Gridbox;
