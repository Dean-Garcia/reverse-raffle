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
    boxColor: "rgb(0, 0, 0, 0.9)",
    boxBorderColor: "white",
    // boxTransparency: 0.9,
  };
};

export const getGridBoxStyleFromConfigs = (raffleConfig: RaffleConfigType) => {
  let style = {
    font: raffleConfig?.font ?? "defaultFont",
    color: raffleConfig?.fontColor ?? "white",
    border: `1px solid ${raffleConfig?.boxBorderColor}`,
    backgroundColor: raffleConfig?.boxColor ?? "rgb(0, 0, 0, 0.9)",
    opacity: raffleConfig?.boxTransparency ?? 0.9,
  };
  console.log("gbs", raffleConfig?.boxTransparency, style.opacity);

  return style;
};

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
      boxTransparency: undefined,
      description: `Home Depot Gift Card\nValue: $500\n\n`,
    },
    Soothe: {
      name: `Soothe`,
      id: 1,
      backgroundImage: `${soothe}`,
      font: "defaultFont",
      fontColor: "black",
      boxColor: "rgb(147, 248, 255, 0.9)",
      boxBorderColor: "white",
      boxTransparency: undefined,
      description: `Soothe Gift Card\nValue: $500\n\n`,
    },
    RRR: {
      name: `RRR`,
      id: 2,
      backgroundImage: `${RRR}`,
      font: "defaultFont",
      fontColor: "white",
      boxColor: "rgb(0, 0, 0, 0.9)",
      boxBorderColor: "white",
      boxTransparency: undefined,
      description: `Roemerman Ranch Retreat\nValue: PRICELESS\n\n`,
    },
    KitchenAid: {
      name: `Kitchen Aid`,
      id: 3,
      backgroundImage: `${kitchenAid}`,
      font: "defaultFont",
      fontColor: "white",
      boxColor: "rgb(0, 0, 0, 0.9)",
      boxBorderColor: "white",
      boxTransparency: undefined,
      description: `KitchenAid 5.5 Quart \nBowl-Lift Stand Mixer\n$500 Williams Sonoma Gift Card\n Value: $1000\n\n`,
    },
    "Kamado Joe": {
      name: `Kamado Joe`,
      id: 4,
      backgroundImage: `${kamadoJoe}`,
      font: "defaultFont",
      fontColor: "white",
      boxColor: "rgb(0, 0, 0, 0.9)",
      boxBorderColor: "white",
      boxTransparency: undefined,
      description: `Kamado Joe Classic Joe II\n(includes cover)\nValue: $1600\n\n`,
    },
    "Grand Prix": {
      name: `Grand Prix`,
      id: 5,
      backgroundImage: `${grandPrix}`,
      font: "defaultFont",
      fontColor: "white",
      boxColor: "rgb(0, 0, 0, 0.9)",
      boxBorderColor: "white",
      boxTransparency: undefined,
      description: `Indy Car Grand Prix Arlington\n2 Reserved Weekend Passes\nValue: $540\n\n`,
    },
    PS5: {
      name: `PS5`,
      id: 6,
      backgroundImage: `${PS5}`,
      font: "defaultFont",
      fontColor: "rgb(0, 111, 205)",
      boxColor: "white",
      boxBorderColor: "rgb(0, 111, 205)",
      boxTransparency: 0.9,
      description: `PS5 Bundle\nValue: $800\n\n`,
    },
    Nintendo: {
      name: `Nintendo`,
      id: 7,
      backgroundImage: `${nintendo}`,
      font: "defaultFont",
      fontColor: "white",
      boxColor: "rgb(0, 0, 0, 0.9)",
      boxBorderColor: "white",
      boxTransparency: undefined,
      description: `Nintendo Switch 2 Bundle\nValue: $800\n\n`,
    },
    TV: {
      name: `TV`,
      id: 8,
      backgroundImage: `${tv}`,
      font: "defaultFont",
      fontColor: "white",
      boxColor: "rgb(0, 0, 0, 0.9)",
      boxBorderColor: "white",
      boxTransparency: undefined,
      description: `85" TV with Soundbar\nValue: $1500\n\n`,
    },
    Apple: {
      name: `Apple`,
      id: 9,
      backgroundImage: `${apple}`,
      font: "defaultFont",
      fontColor: "white",
      boxColor: "rgb(0, 0, 0, 0.9)",
      boxBorderColor: "white",
      boxTransparency: undefined,
      description: `iPadAir 13" 256gb\nAirPods Pro 3\nValue: $1200\n\n`,
    },
    Travel: {
      name: `Travel`,
      id: 10,
      backgroundImage: `${travel}`,
      font: "defaultFont",
      fontColor: "white",
      boxColor: "rgb(0, 0, 0, 0.9)",
      boxBorderColor: "white",
      boxTransparency: undefined,
      description: `Travel Voucher - no restrictions\nValue: $2500\n\n`,
    },
  } as RaffleConfigType;
};
