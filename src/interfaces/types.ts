export type StoreState = {
  originalFileData: FileData;
  currentFileData: FileData;
  raffleData: RaffleData;
  currentRaffle: string;
  raffleList: string[];
  activeRaffleData: string[];
  drawnEntries: string[];
  isRaffleActive: boolean;
  options: Options;
  winners: {
    [key: string]: string;
  };
};

export type Options = {
  isShuffleEnabled: boolean;
  isLandscape: boolean;
};

export type RaffleData = {
  [key: string]: string[];
};

export type FileData = (number | string)[][];

export type RaffleEntriesType = {
  [key: string]: any;
};
