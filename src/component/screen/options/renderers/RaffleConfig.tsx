import { Checkbox } from "@mui/material";
import { useState } from "react";
import TextSetting from "./TextSetting";
import ButtonSetting from "./ButtonSetting";
import { Image } from "@mui/icons-material";
import Gridbox from "../../Raffle/Gridbox";

type RaffleConfigComponent = {
  raffleName: string;
  backgroundPicture: string;
  handleChange: () => void;
};

export default function RaffleConfig({
  raffleName,
  backgroundPicture,
  handleChange,
}: RaffleConfigComponent) {
  const [isChecked, setIsChecked] = useState(true);
  const backgroundColor = undefined;
  const fontColor = undefined;

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        width: "100%",
        padding: "10px",
        border: "1px solid white",
        borderRadius: "1rem",
      }}
    >
      <div style={{ fontSize: "2rem" }}>{raffleName}</div>
      <div style={{ display: "flex", flexFlow: "row" }}>
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            padding: "10px",
            width: "100%",
            //   border: "1px solid white",
            borderRadius: "1rem",
          }}
        >
          <TextSetting
            settingTitle="Raffle Name"
            settingExplanationText="Changes the Raffle Name"
            text={"hello"}
            handleChange={handleChange}
          />
          <ButtonSetting
            settingTitle="Raffle Background File"
            settingExplanationText="Upload your raffle background file here"
            buttonText="Upload Background"
            handleClick={handleChange}
            isUploadFile={true}
          />
          <TextSetting
            settingTitle="Font"
            settingExplanationText="Changes the font used for each box"
            text={"hello"}
            handleChange={handleChange}
          />
          <TextSetting
            settingTitle="Font Color"
            settingExplanationText="Changes the font color used in each box"
            text={"hello"}
            handleChange={handleChange}
          />
          <TextSetting
            settingTitle="Box Color"
            settingExplanationText="Changes the fill background color used for each box"
            text={"hello"}
            handleChange={handleChange}
          />
          <TextSetting
            settingTitle="Box Border Color"
            settingExplanationText="Changes the box border color for each box"
            text={"hello"}
            handleChange={handleChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            padding: "10px",
            width: "100%",
            //   border: "1px solid white",
            borderRadius: "1rem",
          }}
        >
          <div
            style={{ backgroundColor: backgroundColor, color: fontColor }}
            className={"box-enabled grid-box-preview"}
          >
            0232
          </div>
          <div className={"box-disabled grid-box-preview"}>023</div>
          <img
            src="https://www.w3schools.com/images/w3schools_green.jpg"
            style={{ objectFit: "scale-down" }}
          />
        </div>
      </div>
    </div>
  );
}
