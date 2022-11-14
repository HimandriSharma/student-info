import {
	POST_USER_CRED_FAILURE,
	POST_USER_CRED_REQUEST,
	POST_USER_CRED_SUCCESS,
} from "./userTypes";

const initialState = {
	loadingState: false,
	username: "",
	err: "",
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_USER_CRED_REQUEST:
			return { ...state, loadingState: true };
		case POST_USER_CRED_SUCCESS:
			return { loadingState: false, username: action.payload, err: "" };
		case POST_USER_CRED_FAILURE:
			return { loadingState: false, username: "", err: action.payload };
		default:
			return state;
	}
};

export default userReducer;
