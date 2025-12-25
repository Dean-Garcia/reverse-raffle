import { Button, Checkbox } from "@mui/material";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "@emotion/styled";
import readXlsxFile from "read-excel-file";
import {
  getDefaultRaffleConfigs,
  getRaffleEntries,
  parseConfigFileToStoreFormat,
  parseEntryDataToStoreFormat,
  parseEntryFileToStoreFormat,
} from "../../../../utilities/utility";
import { FileData } from "../../../../interfaces/types";
import { useDispatch, useSelector } from "react-redux";
import {
  updateRaffleConfigs,
  updateStore,
} from "../../../../redux/actions/actions";
import RaffleConfig from "./RaffleConfig";
import { selectStoreState } from "../../../../redux/reducer";

type ButtonSettingComponent = {
  settingTitle: string;
  settingExplanationText: string;
  buttonText: string;
  handleClick: () => void;
  isUploadFile: boolean;
  type?: "entries" | "config";
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
  type,
}: ButtonSettingComponent) {
  const dispatch = useDispatch();
  const handleFile = async (event: any) => {
    let data;
    switch (type) {
      case "entries":
        data = await parseEntryFileToStoreFormat(event);
        dispatch(updateStore(data));
        break;
      case "config":
        data = await parseConfigFileToStoreFormat(event);
        dispatch(updateRaffleConfigs(data));
        // console.log("data", data);
        break;
      default:
        console.error(
          "Something went wrong with the ButtonSetting handleFile()"
        );
    }
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
