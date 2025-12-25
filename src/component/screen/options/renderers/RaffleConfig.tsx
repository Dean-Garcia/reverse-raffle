import TextSetting from "./TextSetting";
import ButtonSetting from "./ButtonSetting";
import { RaffleConfigType } from "../../../../interfaces/types";
import { updateRaffleConfigs } from "../../../../redux/actions/actions";
import { useDispatch } from "react-redux";

type RaffleConfigComponent = {
  raffleName: string;
  raffleConfigs: RaffleConfigType;
  backgroundPicture?: string;
  handleChange?: () => void;
};

export default function RaffleConfig({
  raffleName,
  raffleConfigs,
  backgroundPicture,
}: RaffleConfigComponent) {
  let backgroundColor;
  const dispatch = useDispatch();
  const {
    name,
    backgroundImage,
    font,
    fontColor,
    boxColor,
    boxBorderColor,
    boxTransparency,
  } = raffleConfigs[raffleName];

  const handleChange = (event, property: keyof (keyof RaffleConfigType)) => {
    const newConfig = { ...raffleConfigs[raffleName] };
    newConfig[property] = event?.target?.value;
    const newRaffleConfig: RaffleConfigType = {
      ...raffleConfigs,
      [raffleName]: newConfig,
    };

    dispatch(updateRaffleConfigs(newRaffleConfig));
  };

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
            text={raffleName}
            property={"name"}
            handleChange={handleChange}
          />
          <ButtonSetting
            settingTitle="Raffle Background File"
            settingExplanationText="Upload your raffle background file here"
            buttonText="Upload Background"
            handleClick={handleChange}
            isUploadFile={true}
          />
          {/* <TextSetting
            settingTitle="Font"
            settingExplanationText="Changes the font used for each box"
            text={font}
            property="font"
            handleChange={handleChange}
          /> */}
          <TextSetting
            settingTitle="Font Color"
            settingExplanationText="Changes the font color used in each box"
            text={fontColor}
            property={"fontColor"}
            handleChange={handleChange}
          />
          <TextSetting
            settingTitle="Box Color"
            settingExplanationText="Changes the fill background color used for each box"
            text={boxColor}
            property={"boxColor"}
            handleChange={handleChange}
          />
          <TextSetting
            settingTitle="Box Border Color"
            settingExplanationText="Changes the box border color for each box"
            text={boxBorderColor}
            property={"boxBorderColor"}
            handleChange={handleChange}
          />
          <TextSetting
            settingTitle="Box Color Opacity"
            settingExplanationText="Changes the box color transparency"
            text={boxTransparency}
            property={"boxTransparency"}
            handleChange={handleChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            padding: "10px",
            width: "100%",
            flexFlow: "column",
            //   border: "1px solid white",
            borderRadius: "1rem",
          }}
        >
          <div className="flex-row" style={{}}>
            <div
              className={"box-enabled grid-box-preview"}
              style={{
                backgroundColor: boxColor,
                color: fontColor,
                border: `1px solid ${boxBorderColor}`,
                opacity: boxTransparency,
              }}
            >
              12
            </div>
            <div
              className={"box-enabled grid-box-preview"}
              style={{
                backgroundColor: boxColor,
                color: fontColor,
                border: `1px solid ${boxBorderColor}`,
                opacity: boxTransparency,
              }}
            >
              13
            </div>
            <div
              className={"box-enabled grid-box-preview"}
              style={{
                backgroundColor: boxColor,
                color: fontColor,
                border: `1px solid ${boxBorderColor}`,
                opacity: boxTransparency,
              }}
            >
              14
            </div>
            {/* <div className={"box-disabled grid-box-preview"}>023</div> */}
          </div>
          <img
            // src="https://magazine.northeast.aaa.com/wp-content/uploads/2017/11/yellowstone-national-park-guide-yellowstone-1.jpg"
            src={backgroundImage}
            style={{ maxWidth: "75%", objectFit: "scale-down" }}
          />
        </div>
      </div>
    </div>
  );
}
