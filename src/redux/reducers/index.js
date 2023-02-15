import { combineReducers } from "redux";
import alert from "./alert";
import portfolio from "./portfolio";
import prices from "./prices";


export default combineReducers({
alert,
portfolio,
prices,
})
