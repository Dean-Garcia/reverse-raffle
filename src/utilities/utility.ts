import {
  FileData,
  RaffleConfigType,
  RaffleEntriesType,
} from "../interfaces/types";

import {
  apple,
  grandPrix,
  homeDepot,
  kamadoJoe,
  kitchenAid,
  nintendo,
  PS5,
  RRR,
  soothe,
  travel,
  tv,
} from "../data/images";

const getPerfectSquareArray = () => {
  let squares = [];
  for (let i = 1; i <= 1000; i++) {
    squares.push(i ** 2);
  }
  return squares;
};

const getClosestSquare = (num: number) => {
  const perfectSquareArray = getPerfectSquareArray();
  for (let number of perfectSquareArray) {
    if (num > number) continue;
    else return number;
  }
  return 1;
};

export const getGridDimensions = (num: number, isLandscape = true) => {
  let closestSq = Math.sqrt(getClosestSquare(num));
  let dimensions = { row: closestSq, column: closestSq };
  if (closestSq * (closestSq - 1) >= num) {
    if (isLandscape) return { ...dimensions, row: closestSq - 1 };
    return { ...dimensions, column: closestSq - 1 };
  }
  return dimensions;
};

/** Returns RaffleEntries Object -->
 *  @returns {RaffleEntriesType} {
 * raffle1: 'John Doe-0', 'John Doe-1', 'Jane Doe-0',
 *
 * raffle2: 'John Doe-0', 'John Doe-1', 'Jane Doe-0'
 *  } */
export const getRaffleEntries = (
  fileData: FileData,
  raffleNameList: string[]
) => {
  if (!raffleNameList) {
    console.error("No Raffle List Found");
    return {};
  }
  let raffleEntries: RaffleEntriesType = {};
  raffleNameList.map((raffle, index) => {
    if (!fileData) return;
    let raffleEntryArray = [];
    let fileLength = fileData?.length ?? 0;

    for (let rowIndex = 0; rowIndex < fileLength; rowIndex++) {
      let name = fileData[rowIndex][0];
      let numEntries = fileData[rowIndex][index + 1] as number;
      for (let entry = 0; entry < numEntries; entry++) {
        raffleEntryArray.push(`${name}-${entry}`);
      }
    }

    raffleEntries[raffle as string] = raffleEntryArray;
  });
  return raffleEntries;
};

export const getFileArrayIndexWithName = (name: string, fileData: any) => {
  let arrLength = fileData.length;

  for (let i = 0; i < arrLength; i++) {
    if (fileData[i][0].includes(name)) return i;
  }
  return -1;
};

export const getDefaultRaffleConfigs = (raffle?: string, index?: number) => {
  return {
    name: `raffle`,
    id: index,
    backgroundImage: undefined,
    font: "defaultFont",
    fontColor: "white",
    boxColor: "rgb(0, 0, 0)",
    boxBorderColor: "white",
    // boxTransparency: 0.9,
  };
};

export const getGridBoxStyleFromConfigs = (raffleConfig: RaffleConfigType) => {
  let style = {
    font: raffleConfig?.font ?? "defaultFont",
    color: raffleConfig?.fontColor ?? "white",
    border: `1px solid ${raffleConfig?.boxBorderColor}`,
    backgroundColor: raffleConfig?.boxColor ?? "rgb(0, 0, 0)",
    opacity: raffleConfig?.boxTransparency ?? 1,
  };

  return style;
};

/**
 * home depot - orange and black
 * soothe - pastel light blue
 * ranch retreat - green and red
 * kitchen - silver and black
 * kamado joe - red and black
 * indy - blue and red
 * ps5 white and black?
 * nintendo switch - red
 * tv - purple
 * apple bundles -turquoise
 * travel - hot pink and black
 * @returns
 */
export const get2025RaffleConfigs = () => {
  return {
    "Home Depot": {
      name: `Home Depot`,
      id: 0,
      backgroundImage: `${homeDepot}`,
      font: "defaultFont",
      fontColor: "black",
      boxColor: "orange",
      boxBorderColor: "black",
      boxTransparency: .8,
      description: `Home Depot Gift Card\n\nValue: $500\n\n`,
    },
    Soothe: {
      name: `Soothe`,
      id: 1,
      backgroundImage: `${soothe}`,
      font: "defaultFont",
      fontColor: "black",
      boxColor: "rgb(222, 136, 175)",
      boxBorderColor: "white",
      boxTransparency: .8,
      description: `Soothe Gift Card\n\nValue: $500\n\n`,
    },
    RRR: {
      name: `RRR`,
      id: 2,
      backgroundImage: `${RRR}`,
      font: "defaultFont",
      boxColor: "rgb(138, 187, 108)",
      boxBorderColor: "rgba(122, 8, 8, 0.5)",
      fontColor: "rgba(46, 126, 9, 1)",
      boxTransparency: .8,
      description: `Roemerman Ranch Retreat\n\nValue: PRICELESS\n\n`,
    },
    KitchenAid: {
      name: `Kitchen Aid`,
      id: 3,
      backgroundImage: `${kitchenAid}`,
      font: "defaultFont",
      fontColor: "silver",
      boxColor: "black",
      boxBorderColor: "silver",
      boxTransparency: .8,
      description: `KitchenAid 5.5 Quart \nBowl-Lift Stand Mixer\n\nWilliams Sonoma\n$500 Gift Card\n\n Total Value: $1000\n\n`,
    },
    "Kamado Joe": {
      name: `Kamado Joe`,
      id: 4,
      backgroundImage: `${kamadoJoe}`,
      font: "defaultFont",
      fontColor: "white",
      boxColor: "rgba(126, 3, 3, 1)",
      boxBorderColor: "black",
      boxTransparency: .8,
      description: `Kamado Joe Classic Joe II\n(includes cover)\n\nValue: $1600\n\n`,
    },
    "Grand Prix": {
      name: `Grand Prix`,
      id: 5,
      backgroundImage: `${grandPrix}`,
      font: "defaultFont",
      fontColor: "white",
      boxColor: "royalblue",
      boxBorderColor: "rgb(0, 34, 68)",
      boxTransparency: .8,
      description: `Indy Car Grand Prix Arlington\n2 Reserved Weekend Passes\n\nValue: $540\n\n`,
    },
    PS5: {
      name: `PS5`,
      id: 6,
      backgroundImage: `${PS5}`,
      font: "defaultFont",
      fontColor: "white",
      boxColor: "black",
      boxBorderColor: "rgb(50, 157, 232)",
      boxTransparency: .8,
      description: `PS5 Bundle\n\nValue: $800\n\n`,
    },
    Nintendo: {
      name: `Nintendo`,
      id: 7,
      backgroundImage: `${nintendo}`,
      font: "defaultFont",
      fontColor: "red",
      boxColor: "white",
      boxBorderColor: "silver",
      boxTransparency: .9,
      description: `Nintendo Switch 2 Bundle\n\nValue: $800\n\n`,
    },
    TV: {
      name: `TV`,
      id: 8,
      backgroundImage: `${tv}`,
      font: "defaultFont",
      fontColor: "white",
      boxColor: "rgba(37, 18, 112)",
      boxBorderColor: "darkgrey",
      boxTransparency: .8,
      description: `85" TV with Soundbar\n\nValue: $1500\n\n`,
    },
    Apple: {
      name: `Apple`,
      id: 9,
      backgroundImage: `${apple}`,
      font: "defaultFont",
      fontColor: "black",
      boxColor: "rgba(45, 228, 218)",
      boxBorderColor: "white",
      boxTransparency: .9,
      description: `iPadAir 13" 256gb\nAirPods Pro 3\n\nValue: $1200\n\n`,
    },
    Travel: {
      name: `Travel`,
      id: 10,
      backgroundImage: `${travel}`,
      font: "defaultFont",
      fontColor: "black",
      boxColor: "khaki",
      boxBorderColor: "black",
      boxTransparency: 1,
      description: `Travel Voucher\n- No restrictions\n\nValue: $2500\n\n`,
    },
  } as RaffleConfigType;
};
