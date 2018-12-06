import { combineReducers } from "redux";
import isFormValidate from "./isFormValidate";
import personInfo from "./personInfo";
export default combineReducers({
	isFormValidate,
	personInfo
});
