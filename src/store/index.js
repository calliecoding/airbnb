import { configureStore } from "@reduxjs/toolkit"; 
import homeReducer from "./modeules/home";
import entireReducer from './modeules/entire'

const store = configureStore({
    reducer:{
        home:homeReducer,
        entire:entireReducer,
    },

})


export default store