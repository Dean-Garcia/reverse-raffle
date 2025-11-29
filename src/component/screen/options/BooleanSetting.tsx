import { Checkbox } from "@mui/material";
import { useState } from "react";

type BooleanSettingComponent = {
  settingTitle: string;
  settingExplanationText: string;
  handleChange: () => void;
};

export default function BooleanSetting({
  settingTitle,
  settingExplanationText,
  handleChange,
}: BooleanSettingComponent) {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div style={{ display: "flex", flexFlow: "column", padding: "10px" }}>
      <div style={{ textAlign: "left", color: "white", fontSize: "1.5rem" }}>
        {settingTitle}
      </div>
      <div style={{ display: "flex", flexFlow: "row" }}>
        <Checkbox checked={isChecked} onChange={handleChange} />
        <div style={{ alignContent: "center", color: "white" }}>
          {settingExplanationText}
        </div>
      </div>
    </div>
  );
}
