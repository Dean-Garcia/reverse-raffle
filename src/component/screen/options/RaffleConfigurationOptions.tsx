import { RaffleConfigType } from "../../../interfaces/types";
import ButtonSetting from "./renderers/ButtonSetting";
import RaffleConfig from "./renderers/RaffleConfig";

type RaffleConfigurationOptionsComponent = {
  raffleNameList: string[];
  raffleConfigs: RaffleConfigType;
};

export default function RaffleConfigurationOptions({
  raffleNameList,
  raffleConfigs,
}: RaffleConfigurationOptionsComponent) {
  console.log("raffleconfigs", raffleConfigs);
  const exportConfigFile = () => {
    const data = JSON.stringify(raffleConfigs);
    const blob = new Blob([data], { type: "text/json;charset=utf-8," });
    const objUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = objUrl;
    link.setAttribute("download", `RaffleConfig.json`);

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  };
  const raffleConfigComponentArray = raffleNameList.map((raffle) => {
    return (
      <RaffleConfig
        key={raffle}
        raffleConfigs={raffleConfigs}
        raffleName={raffle}
      />
    );
  });
  return (
    <div className="flex-column options-main">
      <ButtonSetting
        settingTitle="Export Config File"
        settingExplanationText="Exports configurations to file. Can be used in Initialize Tab to load."
        buttonText="Export"
        handleClick={exportConfigFile}
        isUploadFile={false}
      />
      <div className="options-raffle-config">{raffleConfigComponentArray}</div>
    </div>
  );
}
