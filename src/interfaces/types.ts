export type StoreState = {
  originalFileData: FileData;
  currentFileData: FileData;
  raffleData: RaffleData;
  currentRaffle: string;
  raffleNameList: string[];
  raffleConfigs: RaffleConfig;
  activeRaffleData: string[];
  drawnEntries: string[];
  isRaffleActive: boolean;
  options: Options;
  winners: {
    [key: string]: string;
  };
};

type RaffleConfig = {
  [raffleName: string]: {
    name: string;
    backgroundImage: string;
    font: string;
    fontColor: string;
    boxColor: string;
    boxBorderColor: string;
    boxTransparency: number;
  };
};

export type Options = {
  isShuffleEnabled: boolean;
  isLandscape: boolean;
};

export type RaffleData = {
  [key: string]: string[];
};

export type FileData = [string, ...number[]][];

export type RaffleEntriesType = {
  [key: string]: string[];
};
