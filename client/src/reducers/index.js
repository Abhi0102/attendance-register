import { combineReducers } from "redux";
import auth from "./auth";
import attendance from "./attendance";

export default combineReducers({ auth, attendance });
