import { useRef, useState } from "react";
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
  const winnerText = `${winnerName} is the winner!`;

  const headerText = winnerName ? winnerText : lastDrawnEntry;

  const getTitleText = () => {
    let text;
    let fontSize = "3rem";
    console.log("activeraffle", activeRaffle);
    switch (activeRaffle) {
      case "Home Depot":
        text = "Home Depot $500 Gift Card";
        break;
      case "Soothe":
        text = "Soothe $500 Gift Card";
        break;
      case "RRR":
        text = "Roemerman Ranch Retreat";
        break;
      case "KitchenAid":
        text = "KitchenAid Stand Mixer & Williams Sonoma $500 Gift Card";
        fontSize = "3rem";
        break;
      case "Kamado Joe":
        text = "Kamado Joe Classic Joe II";
        break;
      case "Grand Prix":
        text = "Indy Car Grand Prix Arlington - 2 Reserved Weekend Passes";
        fontSize = "3rem";
        break;
      case "PS5":
        text = "PS5 Bundle";
        break;
      case "Nintendo":
        text = "Nintendo Bundle";
        break;
      case "TV":
        text = `85" TV with Soundbar`;
        break;
      case "Apple":
        text = `13" iPad Air & AirPods Pro 3`;
        break;
      case "Travel":
        text = `$2500 Travel Voucher`;
        break;
      default:
        text = "No Raffle Selected";
    }
    return [text, fontSize];
  };

  const [title, fontSize] = getTitleText();

  return (
    <div className="header">
      <div className="header-start">
        <Button
          variant="contained"
          onClick={handleStartClick}
          sx={{ width: "100%" }}
        >
          Start Raffle
        </Button>
      </div>
      <div className="header-text">
        <div
          style={{
            fontSize: fontSize,
            color: "white",
            padding: "0px 50px 0px 50px",
            // border: "1px solid white",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "3rem",
            color: "white",
            alignItems: "center",
            justifyContent: "center",
            verticalAlign: "center",
            display: "flex",
          }}
        >
          {headerText}
        </div>
      </div>

      <div className="header-settings">
        <IconButton
          onClick={toggleOptionsMenu}
          // sx={{ border: "1px solid red" }}
        >
          <Settings />
        </IconButton>
      </div>

      {/* <div className="header-actions"></div> */}
    </div>
  );
};

export default Header;
