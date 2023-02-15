import axios from 'axios';
import{
    GET_PRICES_SUCCESS,
    GET_PRICES_FAIL, 
} from './types'

export const get_prices = () => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/prices/get-price/`, config);
        
        if (res.status === 200) {
            dispatch({
                type: GET_PRICES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PRICES_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_PRICES_FAIL
        });
    }
}