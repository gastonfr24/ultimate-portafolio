import {     
    GET_PRICES_SUCCESS,
    GET_PRICES_FAIL,
  } from "redux/actions/prices/types";


const initialState = {
    real_price: null,
    pred_price: null
}


export default function prices(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        

// Proyectos enlistados
        case GET_PRICES_SUCCESS:
            return {
                ...state,
                real_price: payload.real,
                pred_price: payload.predict
            }
        case GET_PRICES_FAIL:
            return {
                ...state,
                real_price: null,
                pred_price: null
            }
        default:
                return state
        }

}