import { SELECTED_SUBJECT } from "./selectedSubjectTypes";

const initialState = {
	subject: {},
};

const selectedSubjectReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECTED_SUBJECT:
			return {
				subject: action.payload,
			};
		default:
			return state;
	}
};
export default selectedSubjectReducer;
