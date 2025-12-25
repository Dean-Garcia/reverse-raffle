import ButtonSetting from "./renderers/ButtonSetting";

const drawerWidth = 240;

export default function InitializeOptions() {
  const handleChange = () => {};
  return (
    <div className="options-main">
      <ButtonSetting
        settingTitle="Upload Raffle File"
        settingExplanationText="Upload your raffle file here"
        buttonText="Upload"
        handleClick={handleChange}
        isUploadFile={true}
        type={"entries"}
      />
      <ButtonSetting
        settingTitle="Upload Config File"
        settingExplanationText="Upload your raffle config file here"
        buttonText="Upload"
        handleClick={handleChange}
        isUploadFile={true}
        type={"config"}
      />
    </div>
  );
}
