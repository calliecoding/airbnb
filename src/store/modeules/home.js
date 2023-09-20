//  RTK模式

import { getHomeGoodPriceData, getHomeHighscoreData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  async (payload, { dispatch }) => {
    const goodPrice = getHomeGoodPriceData();

    const highScore = getHomeHighscoreData();

    const arr = await Promise.all([goodPrice, highScore]);

    const res = {
      goodPrice: arr[0],
      highScore: arr[1],
    };

    return res;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
  },
  reducers: {
    changeGoodPriceAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighscoreAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload.goodPrice;
      state.highScoreInfo = payload.highScore;
    },
  },
});

export const { changeGoodPriceAction, changeHighscoreAction } =
  homeSlice.actions;
export default homeSlice.reducer;
