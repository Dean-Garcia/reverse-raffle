import { FileData, RaffleEntriesType } from "../interfaces/types";

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
    console.log(`best dimensions are: ${closestSq - 1} x ${closestSq} `);
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
    boxTransparency: 1,
  };
};
