import { MenuItem, Select } from "@mui/material";
import { useState } from "react";

type DropdownSettingComponent = {
  dropdownList: string[];
  settingTitle: string;
  settingExplanationText: string;
  handleChange: () => void;
};

export default function DropdownSetting({
  dropdownList,
  settingTitle,
  settingExplanationText,
  handleChange,
}: DropdownSettingComponent) {
  const getMenuOptions = () => {
    let menuOptionsArray: any = [];
    dropdownList.map((key) => {
      menuOptionsArray.push(<MenuItem value={key}>{key}</MenuItem>);
    });
    return menuOptionsArray;
  };

  return (
    <div style={{ display: "flex", flexFlow: "column", padding: "10px" }}>
      <div style={{ textAlign: "left", color: "white", fontSize: "1.5rem" }}>
        {settingTitle}
      </div>
      <div style={{ display: "flex", flexFlow: "row", gap: "10px" }}>
        <Select
          id={`setting-${settingTitle}`}
          onChange={handleChange}
          sx={{ color: "white", width: "150px" }}
        >
          {getMenuOptions()}
        </Select>
        <div style={{ alignContent: "center", color: "white" }}>
          {settingExplanationText}
        </div>
      </div>
    </div>
  );
}
