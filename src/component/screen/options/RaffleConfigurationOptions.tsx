import RaffleConfig from "./renderers/RaffleConfig";

type RaffleConfigurationOptionsComponent = {
  raffleNameList: string[];
};

export default function RaffleConfigurationOptions({
  raffleNameList,
}: RaffleConfigurationOptionsComponent) {
  const raffleConfigs = raffleNameList.map((raffle) => {
    return <RaffleConfig raffleName={raffle} />;
  });
  return <div className="options-raffle-config">{raffleConfigs}</div>;
}
