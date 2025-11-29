import { Checkbox, TextField } from "@mui/material";
import { useState } from "react";

type TextSettingComponent = {
  settingTitle: string;
  settingExplanationText: string;
  handleChange: () => void;
  text: string;
};

export default function TextSetting({
  settingTitle,
  settingExplanationText,
  handleChange,
}: TextSettingComponent) {
  return (
    <div style={{ display: "flex", flexFlow: "column", padding: "10px" }}>
      <div style={{ textAlign: "left", color: "white", fontSize: "1.5rem" }}>
        {settingTitle}
      </div>
      <div style={{ display: "flex", flexFlow: "row" }}>
        <TextField onBlur={(event) => handleChange} />
        <div style={{ alignContent: "center", color: "white" }}>
          {settingExplanationText}
        </div>
      </div>
    </div>
  );
}
