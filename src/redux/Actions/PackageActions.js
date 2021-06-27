import { ActionTypes } from "../Constants/action-types";

export const setServices = (services)=>{
    return{
        type:ActionTypes.SET_SERVICE_PACKAGES,
        payload:services
    }
}

export const selectedServices = (service)=>{
    return{
        type:ActionTypes.SELECTED_SERVICE_PACKAGE,
        payload:service
    }
}