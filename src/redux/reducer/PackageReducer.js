import { ActionTypes } from "../Constants/action-types";

const initialState = {
    services: []
};

export const serviceReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_SERVICE_PACKAGES:
            return { ...state, services: payload };
        default:
            return { state };
    }
}

export const selectedReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_SERVICE_PACKAGE:
            return { ...state, ...payload };
        default:
            return state;
    }
}