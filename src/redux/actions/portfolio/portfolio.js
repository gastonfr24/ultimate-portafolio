import axios from "axios";
import { 
    GET_PORTFOLIO_SUCCESS,
    GET_PORTFOLIO_FAIL,
    GET_PORTFOLIO_LIST_SUCCESS,
    GET_PORTFOLIO_LIST_FAIL,
    
 } from "./types";

 import { REMOVE_ALERT, SET_ALERT } from "../alerts/types";

 // Icons
 import { FaBookOpen } from "react-icons/fa"

 export const get_portfolio_list = () => async dispatch =>{
    const config = {
        headers:{
            'Accept': 'application/json'
        }
    }

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio/list`, config)
        
        if(res.status === 200){
            dispatch({
                type: GET_PORTFOLIO_LIST_SUCCESS,
                payload : res.data
            })
        }else {
            dispatch({
                type: GET_PORTFOLIO_LIST_FAIL
            })
        }

    }catch(err){
        dispatch({
            type: GET_PORTFOLIO_LIST_FAIL
        })
    }
}


export const get_portfolio_list_page = (page) => async dispatch =>{
    const config = {
        headers:{
            'Accept': 'application/json'
        }
    }

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio/list?p=${page}`, config)
        
        if(res.status === 200){
            dispatch({
                type: GET_PORTFOLIO_LIST_SUCCESS,
                payload : res.data
            })
        }else {
            dispatch({
                type: GET_PORTFOLIO_LIST_FAIL
            })
        }

    }catch(err){
        dispatch({
            type: GET_PORTFOLIO_LIST_FAIL
        })
    }
}


export const get_portfolio = (slug) => async dispatch => {
    const config = {
        headers:{
            'Accept': 'application/json'
        }
    }   

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio/detail/${slug}`, config)
        
        if(res.status === 200){
            dispatch({
                type: GET_PORTFOLIO_SUCCESS,
                payload : res.data
            })
        }else {
            dispatch({
                type: GET_PORTFOLIO_FAIL,
                type: SET_ALERT,
                payload:{msg:'No se ha encontrado el post', alertType:'text-rose-500', icon:FaBookOpen},
            })
            setTimeout(()=> dispatch({type: REMOVE_ALERT}), 4000);
        }}catch(err){
            dispatch({
                type: GET_PORTFOLIO_FAIL,
                type: SET_ALERT,
                payload:{msg:'No se ha encontrado el post', alertType:'text-rose-500', icon:FaBookOpen},
            })
            setTimeout(()=> dispatch({type: REMOVE_ALERT}), 4000);
            
        }
}
