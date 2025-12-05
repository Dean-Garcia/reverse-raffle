import { RaffleConfigType } from "../../../interfaces/types";
import RaffleConfig from "./renderers/RaffleConfig";

type RaffleConfigurationOptionsComponent = {
  raffleNameList: string[];
  raffleConfigs: RaffleConfigType;
};

export default function RaffleConfigurationOptions({
  raffleNameList,
  raffleConfigs,
}: RaffleConfigurationOptionsComponent) {
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
    <div className="options-raffle-config">{raffleConfigComponentArray}</div>
  );
}
