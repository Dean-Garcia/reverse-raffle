import { Checkbox, TextField } from "@mui/material";
import { useState } from "react";
import { RaffleConfigType } from "../../../../interfaces/types";

type TextSettingComponent = {
  settingTitle: string;
  settingExplanationText: string;
  handleChange: (event: any, property: keyof (keyof RaffleConfigType)) => void;
  text: string;
  property: string;
};

export default function TextSetting({
  settingTitle,
  settingExplanationText,
  text,
  property,
  handleChange,
}: TextSettingComponent) {
  const [value, setValue] = useState(text);

  return (
    <div style={{ display: "flex", flexFlow: "column", padding: "10px" }}>
      <div style={{ textAlign: "left", color: "white", fontSize: "1.5rem" }}>
        {settingTitle}
      </div>
      <div style={{ display: "flex", flexFlow: "row", gap: "10px" }}>
        <TextField
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
          }}
          onBlur={(event) => handleChange(event, property)}
        />
        <div style={{ alignContent: "center", color: "white" }}>
          {settingExplanationText}
        </div>
      </div>
    </div>
  );
}
