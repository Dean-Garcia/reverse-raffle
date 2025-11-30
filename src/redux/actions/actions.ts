import DefaultPayload from "../../interfaces/default-payload";
import {
  FileData,
  RaffleData,
  Options,
  StoreState,
} from "../../interfaces/types";

export const Actions = {
  UPDATE_ORIGINAL_FILE_DATA: "update-original-file-data",
  UPDATE_CURRENT_FILE_DATA: "update-current-file-data",
  UPDATE_RAFFLE_DATA: "update-raffle-data",
  UPDATE_RAFFLE_CONFIGS: "update-raffle-configs",
  UPDATE_CURRENT_RAFFLE: "update-current-raffle",
  UPDATE_ACTIVE_RAFFLE_DATA: "update-active-raffle-data",
  UPDATE_DRAWN_ENTRIES: "update-drawn-entries",
  UPDATE_STORE: "update-store",
  UPDATE_OPTIONS: "update-options",
  UPDATE_IS_RAFFLE_ACTIVE: "update-is-raffle-active",
  UPDATE_WINNERS: "update-winners",
};

export const updateOriginalFileData = (payload: FileData): DefaultPayload => ({
  type: Actions.UPDATE_ORIGINAL_FILE_DATA,
  payload: payload,
});

export const updateRaffleData = (payload: RaffleData): DefaultPayload => ({
  type: Actions.UPDATE_RAFFLE_DATA,
  payload: payload,
});

export const updateCurrentRaffle = (payload: string): DefaultPayload => ({
  type: Actions.UPDATE_CURRENT_RAFFLE,
  payload: payload,
});

export const updateActiveRaffleData = (payload: string[]): DefaultPayload => ({
  type: Actions.UPDATE_ACTIVE_RAFFLE_DATA,
  payload: payload,
});

export const updateRaffleConfigs = (payload: string[]): DefaultPayload => ({
  type: Actions.UPDATE_ACTIVE_RAFFLE_DATA,
  payload: payload,
});

export const updateDrawnEntries = (payload: string[]): DefaultPayload => ({
  type: Actions.UPDATE_DRAWN_ENTRIES,
  payload: payload,
});

export const updateIsRaffleActive = (payload: boolean): DefaultPayload => ({
  type: Actions.UPDATE_IS_RAFFLE_ACTIVE,
  payload: payload,
});

export const updateOptions = (payload: Partial<Options>): DefaultPayload => ({
  type: Actions.UPDATE_OPTIONS,
  payload: payload,
});

export const updateWinners = (
  payload: Partial<StoreState>
): DefaultPayload => ({
  type: Actions.UPDATE_WINNERS,
  payload: payload,
});

export const updateStore = (payload: Partial<StoreState>): DefaultPayload => ({
  type: Actions.UPDATE_STORE,
  payload: payload,
});
