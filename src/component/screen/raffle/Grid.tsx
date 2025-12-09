import { useEffect, useMemo, useState } from "react";
import "../../../styles.css";
import {
  getClosestSquare,
  getGridBoxStyleFromConfigs,
  getGridDimensions,
  getStyleFromConfigs,
} from "../../../utilities/utility";
import Gridbox from "./Gridbox";
import _ from "lodash";
import { shallowEqual, useSelector } from "react-redux";
import {
  selectActiveRaffleData,
  selectCurrentRaffle,
  selectDrawnEntries,
  selectOptions,
  selectRaffleConfigs,
  selectStoreState,
  selectWinners,
} from "../../../redux/reducer";
import { RaffleConfigType } from "../../../interfaces/types";
import RRR from "../../../data/images/RRR.jpg";

type GridProps = {};

const Grid = ({}: GridProps) => {
  const [gridBoxes, setGridBoxes] = useState(); // List of GridBox Components Rendered
  const activeRaffleData = useSelector(selectActiveRaffleData, {
    equalityFn: shallowEqual,
  });
  const currentRaffle = useSelector(selectCurrentRaffle);
  const drawnEntries = useSelector(selectDrawnEntries);
  const options = useSelector(selectOptions);
  const isShuffleEnabled = useSelector(selectOptions).isShuffleEnabled; // When enabled, shuffle boxes instead of in index order
  const numEntries = activeRaffleData?.length ?? -1;
  const gridDimensions = useMemo(() => {
    // Used to get number of row/columns to display boxes in
    return getGridDimensions(numEntries, options.isLandscape);
  }, [numEntries]);
  const gridArea = gridDimensions.column * gridDimensions.row;
  const dummySquares = gridArea - numEntries; // Squares left to complete rectangle display
  const raffleConfig = useSelector(selectRaffleConfigs, {
    equalityFn: shallowEqual,
  });
  const activeRaffleConfig = raffleConfig[currentRaffle];
  const gridBoxStyle = getGridBoxStyleFromConfigs(activeRaffleConfig);

  // Create gridbox components for grid
  const createGridBoxes = (numBoxes: number) => {
    // No Data Output
    if (numBoxes === -1 || !numBoxes) {
      return (
        <Gridbox
          gridBoxStyle={gridBoxStyle}
          key={"no-entries-box"}
          boxNumber={0}
          name={"no-entries-box"}
          text="No Data"
          isEnabled={false}
        />
      );
    }
    let boxes = [];
    // Generate Boxes
    for (let i = 0; i < numBoxes; i++) {
      boxes.push(
        <Gridbox
          gridBoxStyle={gridBoxStyle}
          key={activeRaffleData?.[i] ?? i}
          boxNumber={i}
          name={activeRaffleData?.[i] ?? ""}
          text=""
          isEnabled={true}
        />
      );
    }
    // Shuffle order of boxes
    if (isShuffleEnabled) boxes = _.shuffle(boxes);

    // Fill out rest of container with dummy boxes
    for (let j = 0; j < dummySquares; j++) {
      boxes.push(
        <Gridbox
          key={`dummy-${j}`}
          boxNumber={j}
          dummy={true}
          text=""
          isEnabled={false}
        />
      );
    }
    return boxes;
  };

  useEffect(() => {
    setGridBoxes(createGridBoxes(numEntries));
  }, [currentRaffle]);

  return (
    <div
      className="grid-staging"
      style={{ backgroundImage: `url(${activeRaffleConfig?.backgroundImage})` }}
    >
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${gridDimensions.column}, 1fr)` }}
      >
        {gridBoxes}
      </div>
    </div>
  );
};

export default Grid;
