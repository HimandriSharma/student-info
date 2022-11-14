import {
	POST_USER_CRED_FAILURE,
	POST_USER_CRED_REQUEST,
	POST_USER_CRED_SUCCESS,
} from "./userTypes";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";


export const postUserCredRequest = () => {
	return {
		type: POST_USER_CRED_REQUEST,
	};
};

export const postUserCredSuccess = (user) => {
	return {
		type: POST_USER_CRED_SUCCESS,
		payload: user,
	};
};

export const postUserCredFailure = (msg) => {
	return {
		type: POST_USER_CRED_FAILURE,
		payload: msg,
	};
};

export const postUserCred = ({ username, password }) => {
	return (dispatch) => {
		dispatch(postUserCredRequest);
		axios
			.post("http://localhost:3004/users", {
				id: uuidv4(),
				username: username,
				password: password,
			})
			.then((res) => {
				let user = res.data.username;
				dispatch(postUserCredSuccess(user));
			})
			.catch((err) => {
				const msg = err.message;
				dispatch(postUserCredFailure(msg));
			});
	};
};
