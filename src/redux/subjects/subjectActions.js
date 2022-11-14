import {
	FETCH_SUBJECTS_FAILURE,
	FETCH_SUBJECTS_SUCCESS,
	FETCH_SUBJECTS_REQUEST,
} from "./subjectTypes";
import axios from "axios";

export const fetchSubjectRequest = () => {
	return {
		type: FETCH_SUBJECTS_REQUEST,
	};
};

export const fetchSubjectSuccess = (subjects) => {
	return {
		type: FETCH_SUBJECTS_SUCCESS,
		payload: subjects,
	};
};
export const fetchSubjectFailure = (err) => {
	return {
		type: FETCH_SUBJECTS_FAILURE,
		payload: err,
	};
};
export const fetchSubjects = () => {
	return (dispatch) => {
		dispatch(fetchSubjectRequest);
		axios.get("http://localhost:3004/subjects")
			.then((res) => {
				const subjects = res.data;
				dispatch(fetchSubjectSuccess(subjects));
			})
			.catch((err) => {
				const msg = err.message;
				dispatch(fetchSubjectFailure(msg));
			});
	};
};
