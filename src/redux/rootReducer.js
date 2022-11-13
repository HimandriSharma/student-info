import { combineReducers } from "redux";
import { subjectReducer } from "./subjects/subjectReducer";

const rootReducer = combineReducers({
	subjects: subjectReducer,
});
export default rootReducer;
