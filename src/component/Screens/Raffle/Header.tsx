import { useState } from "react";
import "../../../styles.css";
import {
  Button,
  FormControl,
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
import { selectDrawnEntries, selectStoreState } from "../../../redux/reducer";
import readXlsxFile from "read-excel-file";
import { getRaffleEntries } from "../../../utilities/utility";
import { DialogBox } from "../../DialogBox";
import { FileData } from "../../../interfaces/types";

type HeaderProps = {
  startRaffle: () => number | undefined;
  activeRaffle: string;
  raffleData: object;
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

const Header = ({ activeRaffle, startRaffle, raffleData }: HeaderProps) => {
  const drawnEntries = useSelector(selectDrawnEntries);
  const dispatch = useDispatch();
  const handleChange = (event: any) => {
    dispatch(updateCurrentRaffle(event.target.value));
    dispatch(updateDrawnEntries([]));
  };
  const [open, setOpen] = useState(false);

  const handleFile = (event: any) => {
    readXlsxFile(event.target.files[0]).then((data) => {
      let newFileData = data.slice(1);
      let newRaffleList = data[0].slice(1);
      let newRaffleData = getRaffleEntries(
        newFileData as FileData,
        newRaffleList as string[]
      );
      console.log(
        "data",
        newFileData,
        "raffleNameList",
        newRaffleList,
        "raffleData",
        newRaffleData
      );

      let newStoreData = {
        originalFileData: newFileData as FileData,
        currentFileData: newFileData as FileData,
        currentRaffle: newRaffleList[0] as string,
        activeRaffleData: newRaffleData[newRaffleList[0] as string],
        raffleNameList: newRaffleList as string[],
        raffleData: newRaffleData,
      };
      dispatch(updateStore(newStoreData));
    });
  };

  const getMenuOptions = () => {
    let keys = Object.keys(raffleData);
    let menuOptionsArray: any = [];
    keys.map((key) => {
      menuOptionsArray.push(<MenuItem value={key}>{key}</MenuItem>);
    });
    return menuOptionsArray;
  };

  const handleStartClick = () => {
    startRaffle();
  };

  const optionsClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload Excel File
        <VisuallyHiddenInput type="file" onChange={handleFile} multiple />
      </Button>
      <Button variant="contained" onClick={handleStartClick}>
        Start Raffle
      </Button>
      <div style={{ fontSize: "2rem", color: "white" }}>
        {drawnEntries.slice(-1)[0] ?? ""}
      </div>
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
      <Button variant="contained" onClick={optionsClick}>
        Options
      </Button>
      <DialogBox open={open} onClose={handleClose} text={"OPTIONS (WIP)"} />
    </div>
  );
};

export default Header;
