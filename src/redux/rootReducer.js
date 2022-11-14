import { combineReducers } from "redux";
import selectedSubjectReducer from "./selectedSubject/selectedSubjectReducer";
import subjectReducer from "./subjects/subjectReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
	subjects: subjectReducer,
	user: userReducer,
	selectedSubject: selectedSubjectReducer,
});
export default rootReducer;
