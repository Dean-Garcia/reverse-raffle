export type StoreState = {
  originalFileData: FileData;
  currentFileData: FileData;
  raffleData: RaffleData;
  currentRaffle: string;
  raffleNameList: string[];
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

export type FileData = [string, ...number[]][];

export type RaffleEntriesType = {
  [key: string]: string[];
};
