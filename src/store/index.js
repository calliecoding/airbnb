import { configureStore } from "@reduxjs/toolkit"; 
import homeReducer from "./modeules/home";
import entireReducer from './modeules/entire'
import detailReducer from './modeules/detail'
const store = configureStore({
    reducer:{
        home:homeReducer,
        entire:entireReducer,
        detail:detailReducer
    },

})


export default store