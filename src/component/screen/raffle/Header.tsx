import { useState } from "react";
import "../../../styles.css";
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCurrentRaffle,
  updateDrawnEntries,
  updateIsRaffleActive,
  updateRaffleData,
  updateStore,
} from "../../../redux/actions/actions";
import {
  selectDrawnEntries,
  selectIsRaffleActive,
  selectStoreState,
  selectWinners,
} from "../../../redux/reducer";
import readXlsxFile from "read-excel-file";
import { getRaffleEntries } from "../../../utilities/utility";
import { DialogBox } from "../../DialogBox";
import { FileData } from "../../../interfaces/types";
import OptionsScreen from "../options/OptionsScreen";
import { Settings } from "@mui/icons-material";

type HeaderProps = {
  startRaffle: () => number | undefined;
  activeRaffle: string;
  raffleData: object;
  toggleOptionsMenu: () => void;
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Header = ({
  activeRaffle,
  startRaffle,
  raffleData,
  toggleOptionsMenu,
}: HeaderProps) => {
  const drawnEntries = useSelector(selectDrawnEntries);
  const dispatch = useDispatch();
  const isRaffleRunning = useSelector(selectIsRaffleActive);
  const handleChange = (event: any) => {
    if (isRaffleRunning) return;
    dispatch(updateCurrentRaffle(event.target.value));
    dispatch(updateDrawnEntries([]));
  };
  const winners = useSelector(selectWinners);

  const getMenuOptions = () => {
    let keys = Object.keys(raffleData);
    let menuOptionsArray: any = [];
    keys.map((key) => {
      menuOptionsArray.push(
        <MenuItem key={key} value={key}>
          {key}
        </MenuItem>
      );
    });
    return menuOptionsArray;
  };

  const handleStartClick = () => {
    startRaffle();
  };

  const lastDrawnEntry = drawnEntries.slice(-1)[0]?.split("-")[0] ?? "";
  const winnerName = winners[activeRaffle]?.split("-")[0];
  const winnerText = `${winnerName} has won the ${activeRaffle} raffle!`;

  const headerText = winnerName ? winnerText : lastDrawnEntry;

  return (
    <div className="header">
      <Button variant="contained" onClick={handleStartClick}>
        Start Raffle
      </Button>
      <div style={{ fontSize: "2rem", color: "white" }}>{headerText}</div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Raffle</InputLabel>
        <Select
          id="raffle-select"
          value={activeRaffle}
          onChange={handleChange}
          input={<OutlinedInput label="Raffle" />}
          sx={{ color: "white" }}
        >
          {getMenuOptions()}
        </Select>
      </FormControl>
      <IconButton onClick={toggleOptionsMenu} sx={{ width: "10%" }}>
        <Settings />
      </IconButton>
    </div>
  );
};

export default Header;
