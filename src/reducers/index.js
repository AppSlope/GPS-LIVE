import { combineReducers } from "redux";
import { HomeReducer as Home } from "../components/Home/modules/homeReducer";

const rootReducer = () => {
  return combineReducers({ Home });
};

export default rootReducer;
