import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./modeules/main"
import homeReducer from "./modeules/home";
import entireReducer from "./modeules/entire";
import detailReducer from "./modeules/detail";
const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer,
  },
});

export default store;
