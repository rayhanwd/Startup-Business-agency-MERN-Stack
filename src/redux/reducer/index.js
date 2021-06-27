import { combineReducers } from "@reduxjs/toolkit";
import { selectedReducer, serviceReducer } from "./PackageReducer";

const reducers = combineReducers({
    Allservices: serviceReducer,
    service: selectedReducer
})

export default reducers;