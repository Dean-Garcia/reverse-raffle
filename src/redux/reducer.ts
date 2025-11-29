import { StoreState } from "../interfaces/types";
import { Actions } from "./actions/actions";

const defaultState: StoreState = {
  originalFileData: [],
  currentFileData: [],
  raffleData: {},
  currentRaffle: "No Raffle Selected",
  raffleNameList: [],
  activeRaffleData: [],
  drawnEntries: [],
  isRaffleActive: false,
  winners: {},
  options: {
    isShuffleEnabled: true,
    isLandscape: true,
  },
};

export const reducer = (state = defaultState, action: any) => {
  let payload = action.payload;
  switch (action.type) {
    case Actions.UPDATE_ORIGINAL_FILE_DATA:
      return { ...state, originalFileData: [...payload] };
    case Actions.UPDATE_CURRENT_FILE_DATA:
      return { ...state, currentFileData: [...payload] };
    case Actions.UPDATE_ACTIVE_RAFFLE_DATA:
      return { ...state, activeRaffleData: [...payload] };
    case Actions.UPDATE_RAFFLE_DATA:
      return { ...state, raffleData: { ...payload } };
    case Actions.UPDATE_CURRENT_RAFFLE:
      const newActiveRaffleData = [...state.raffleData[payload]];
      return {
        ...state,
        currentRaffle: payload,
        activeRaffleData: newActiveRaffleData,
      };
    case Actions.UPDATE_DRAWN_ENTRIES:
      return { ...state, drawnEntries: [...payload] };
    case Actions.UPDATE_IS_RAFFLE_ACTIVE:
      return { ...state, isRaffleActive: payload };
    case Actions.UPDATE_OPTIONS:
      return { ...state, options: { ...state.options, ...payload } };
    case Actions.UPDATE_WINNERS:
      return { ...state, winners: { ...state.winners, ...payload } };
    case Actions.UPDATE_STORE:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export const selectOriginalFileData = (state: StoreState) =>
  state.originalFileData;
export const selectCurrentFileData = (state: StoreState) =>
  state.currentFileData;
export const selectRaffleData = (state: StoreState) => state.raffleData;
export const selectRaffleNameList = (state: StoreState) => state.raffleNameList;
export const selectCurrentRaffle = (state: StoreState) => state.currentRaffle;
export const selectActiveRaffleData = (state: StoreState) =>
  state.activeRaffleData;
export const selectDrawnEntries = (state: StoreState) => state.drawnEntries;
export const selectIsRaffleActive = (state: StoreState) => state.isRaffleActive;
export const selectOptions = (state: StoreState) => state.options;
export const selectWinners = (state: StoreState) => state.winners;
export const selectStoreState = (state: StoreState) => state;
