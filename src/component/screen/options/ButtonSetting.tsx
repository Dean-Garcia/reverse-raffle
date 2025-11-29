import { Button, Checkbox } from "@mui/material";
import { useState } from "react";

type ButtonSettingComponent = {
  settingTitle: string;
  settingExplanationText: string;
  buttonText: string;
  handleClick: () => void;
};

export default function ButtonSetting({
  settingTitle,
  settingExplanationText,
  buttonText,
  handleClick,
}: ButtonSettingComponent) {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div style={{ display: "flex", flexFlow: "column", padding: "10px" }}>
      <div style={{ textAlign: "left", color: "white", fontSize: "1.5rem" }}>
        {settingTitle}
      </div>
      <div style={{ display: "flex", flexFlow: "row", gap: "10px" }}>
        <Button variant="contained" onClick={handleClick}>
          {buttonText}
        </Button>
        <div style={{ alignContent: "center", color: "white" }}>
          {settingExplanationText}
        </div>
      </div>
    </div>
  );
}
