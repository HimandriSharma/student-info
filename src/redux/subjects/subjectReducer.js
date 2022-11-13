import {
	FETCH_SUBJECTS_FAILURE,
	FETCH_SUBJECTS_REQUEST,
	FETCH_SUBJECTS_SUCCESS,
} from "./subjectTypes";

const initialState = {
	loadingState: false,
	subjects: [],
	err: "",
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SUBJECTS_REQUEST:
			return { ...state, loadingState: true };
		case FETCH_SUBJECTS_SUCCESS:
			return { loadingState: false, subjects: action.payload, err: "" };
		case FETCH_SUBJECTS_FAILURE:
			return { loadingState: false, subjects: [], err: action.payload };
		default:
			return state;
	}
};

export default reducer
