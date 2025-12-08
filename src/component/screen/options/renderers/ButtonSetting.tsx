import { Button, Checkbox } from "@mui/material";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "@emotion/styled";
import readXlsxFile from "read-excel-file";
import {
  getDefaultRaffleConfigs,
  getRaffleEntries,
} from "../../../../utilities/utility";
import { FileData } from "../../../../interfaces/types";
import { useDispatch, useSelector } from "react-redux";
import { updateStore } from "../../../../redux/actions/actions";
import RaffleConfig from "./RaffleConfig";
import { selectStoreState } from "../../../../redux/reducer";

type ButtonSettingComponent = {
  settingTitle: string;
  settingExplanationText: string;
  buttonText: string;
  handleClick: () => void;
  isUploadFile: boolean;
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

export default function ButtonSetting({
  isUploadFile,
  settingTitle,
  settingExplanationText,
  buttonText,
  handleClick,
}: ButtonSettingComponent) {
  const dispatch = useDispatch();
  const handleFile = (event: any) => {
    readXlsxFile(event.target.files[0]).then((data) => {
      let newFileData = data.slice(1);
      let newRaffleList = data[0].slice(1);
      let newRaffleData = getRaffleEntries(
        newFileData as FileData,
        newRaffleList as string[]
      );

      // let raffleObj = {};
      // newRaffleList.map((raffle, index) => {
      //   console.log("raffleName", raffle);
      //   raffleObj[raffle as string] = getDefaultRaffleConfigs(
      //     raffle,
      //     index + 1
      //   );
      // });

      // Does not create new configs. Uses from default state for now.
      let newStoreData = {
        originalFileData: newFileData as FileData,
        currentFileData: newFileData as FileData,
        currentRaffle: newRaffleList[0] as string,
        activeRaffleData: newRaffleData[newRaffleList[0] as string],
        raffleNameList: newRaffleList as string[],
        raffleData: newRaffleData,
      };

      console.log("newStoreData", newStoreData);
      dispatch(updateStore(newStoreData));
    });
  };
  return (
    <div style={{ display: "flex", flexFlow: "column", padding: "10px" }}>
      <div style={{ textAlign: "left", color: "white", fontSize: "1.5rem" }}>
        {settingTitle}
      </div>
      <div style={{ display: "flex", flexFlow: "row", gap: "10px" }}>
        {isUploadFile ? (
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            {buttonText}
            <VisuallyHiddenInput type="file" onChange={handleFile} multiple />
          </Button>
        ) : (
          <Button variant="contained" onClick={handleClick}>
            {buttonText}
          </Button>
        )}
        <div style={{ alignContent: "center", color: "white" }}>
          {settingExplanationText}
        </div>
      </div>
    </div>
  );
}
