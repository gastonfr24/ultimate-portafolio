import { 
    GET_PORTFOLIO_SUCCESS,
    GET_PORTFOLIO_FAIL,
    GET_PORTFOLIO_LIST_SUCCESS,
    GET_PORTFOLIO_LIST_FAIL,
 } from "redux/actions/portfolio/types";

 const initialState = {
    post: null,
    portfolio_list: null,
    count: null,
    next: null,
    previous: null
}


export default function portfolio(state=initialState, action){
    const {type, payload} = action

    switch(type){

        // Lista de Posts
        case GET_PORTFOLIO_LIST_SUCCESS:
            return{
                ...state,
                portfolio_list: payload.results.posts,
                count: payload.count,
                next: payload.next,
                previous: payload.previous
            }
        case GET_PORTFOLIO_LIST_FAIL:
            return{
                ...state,
                portfolio_list: null,
                count: null,
                next: null,
                previous: null
            }          


        // Post Único
        case GET_PORTFOLIO_SUCCESS:
            return{
                ...state,
                post: payload.post
            }
        case GET_PORTFOLIO_FAIL:
            return{
                ...state,
                post: null
            }
        
        // Default
        default:
            return state
    }
}