export type StoreState = {
  /**
   * @description Unchanged File Data organized by Name
   * @example
   *     [
   *         ["John Smith", 12,0,3,32,0],
   *         ["Jane Doe", 0,3,2,1,4],
   *     ]
   */
  originalFileData: FileData;
  /**
   * @description File Data organized by Name
   * @example
   *     [
   *         ["John Smith", 12,0,3,32,0],
   *         ["Jane Doe", 0,3,2,1,4],
   *     ]
   */
  currentFileData: FileData;
  /**
   * @description Raffle Entries Object by Raffle Name
   * @example
   *     {
   *         "Home Depot": ["John Smith", "Jane Doe"],
   *         "Travel": ["John Doe", "Jane Smith"]
   *     }
   */
  raffleData: RaffleData;
  /**
   * @description Raffle Name
   * @example "Home Depot"
   */
  currentRaffle: string;
  /**
   * @description Array of Raffle Names, Determined by Column Headers in Excel File
   * @example
   *     [ "Home Depot", "Travel" ]
   */
  raffleNameList: string[];
  /**
   * @description Raffle Configuration Settings, including Styling
   * @example
   *     [
   *         ["John Smith", 12,0,3,32,0],
   *         ["Jane Doe", 0,3,2,1,4],
   *     ]
   */
  raffleConfigs: RaffleConfigType;
  /**
   * @description Raffle Entries List of the Currenet Raffle
   * @example
   *     [
   *         "John Smith", "Jane Doe", "Jane Smith", "Jane Smith"
   *     ]
   */
  activeRaffleData: string[];
  /**
   * @description List of Drawn Entries of the Current Raffle
   * @example
   *     [
   *         "John Smith", "Jane Doe", "Jane Smith", "Jane Smith"
   *     ]
   */
  drawnEntries: string[];
  /**
   * @description List of Final 10 Entries of Current Raffle
   * @example
   *     [
   *         "John Smith", "Jane Doe", "Jane Smith", "Jane Smith", ...
   *     ]
   */
  finalTenEntries: string[];
  /**
   * @description Boolean on whether there is a running raffle
   */
  isRaffleActive: boolean;
  /**
   * @description Currently unused.
   */
  options: Options;
  /**
   * @description Object by Raffle Name with Winners
   * @example
   *     {
   *         "Home Depot": "John Smith",
   *         "Travel": "Jane Doe"
   *     }
   */
  winners: {
    [key: string]: string;
  };
};

export type RaffleConfigType = {
  [raffleName: string]: {
    name?: string;
    backgroundImage?: string;
    font?: string;
    fontColor?: string;
    boxColor?: string;
    boxBorderColor?: string;
    boxTransparency?: number;
    description?: string;
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
