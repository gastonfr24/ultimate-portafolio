import {
    SET_ALERT,
    REMOVE_ALERT} from './types'
import { CheckCircleIcon } from "@heroicons/react/20/solid"

export const setAlert = (msg, alertType, icon=CheckCircleIcon,  timeout= 4000 ) => dispatch =>{
    dispatch({
        type: SET_ALERT,
        payload:{msg, alertType, icon, timeout},

    })
    setTimeout(()=> dispatch({type: REMOVE_ALERT}), timeout);
}
    