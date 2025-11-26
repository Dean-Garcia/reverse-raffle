import { RaffleEntriesType } from "../interfaces/types";

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

export const organizeFileData = (fileData: any, raffleList: string[]) => {
  if (!raffleList) return {};
  let raffleEntries: RaffleEntriesType = {};
  raffleList.map((raffle, index) => {
    if (!fileData) return;
    let raffleEntryArray = [];
    let fileLength = fileData?.length ?? 0;

    for (let rowIndex = 0; rowIndex < fileLength; rowIndex++) {
      let name = fileData[rowIndex][0];
      let numEntries = fileData[rowIndex][index + 1];
      for (let entry = 0; entry < numEntries; entry++) {
        raffleEntryArray.push(`${name}-${entry}`);
      }
    }

    raffleEntries[raffle as string] = raffleEntryArray;
  });
  console.log("entries", raffleEntries);
  return raffleEntries;
};

export const getFileArrayIndexWithName = (name: string, fileData: any) => {
  let arrLength = fileData.length;

  for (let i = 0; i < arrLength; i++) {
    if (fileData[i][0].includes(name)) return i;
  }
  return -1;
};
