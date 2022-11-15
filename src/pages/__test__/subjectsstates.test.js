import {
	FETCH_SUBJECTS_FAILURE,
	FETCH_SUBJECTS_SUCCESS,
	FETCH_SUBJECTS_REQUEST,
} from "../../redux/subjects/subjectTypes";
import reducer from "../../redux/subjects/subjectReducer";

describe("Subjects Reducer", () => {
	it("should return default state", () => {
		const initialState = {
			loadingState: false,
			subjects: [],
			err: "",
		};
		const newState = reducer(initialState, {});
		expect(newState).toEqual(initialState);
	});
	it("should return change in loadingState", () => {
		const initialState = {
			loadingState: true,
			subjects: [],
			err: "",
		};
		const newState = reducer(initialState, {
			type: FETCH_SUBJECTS_REQUEST,
			payload: [],
		});
		expect(newState).toEqual(initialState);
	});
	it("should return subjects array on success", () => {
		const initialState = {
			loadingState: false,
			subjects: [
				{
					sub_code: "ENG",
					sub_name: "English",
					sub_about:
						"English is a West Germanic language of the Indo-European language family, with its earliest forms spoken by the inhabitants of early medieval England.",
				},
				{
					sub_code: "MATH",
					sub_name: "Mathermatics",
					sub_about:
						"Mathematics is the science and study of quality, structure, space, and change. Mathematicians seek out patterns, formulate new conjectures, and establish truth by rigorous deduction from appropriately chosen axioms and definitions.",
				},
				{
					sub_code: "SCI",
					sub_name: "Science",
					sub_about:
						"Science is the pursuit and application of knowledge and understanding of the natural and social world following a systematic methodology based on evidence.",
				},
				{
					sub_code: "SOC",
					sub_name: "Social Studies",
					sub_about:
						"A part of a school or college curriculum concerned with the study of social relationships and the functioning of society and usually made up of courses in history, government, economics, civics, sociology, geography, and anthropology.",
				},
				{
					id: 1,
					sub_code: "ENG",
					sub_name: "English",
					sub_about:
						"English is a West Germanic language of the Indo-European language family, with its earliest forms spoken by the inhabitants of early medieval England.",
				},
			],
			err: "",
		};
		const newState = reducer(initialState, {
			type: FETCH_SUBJECTS_SUCCESS,
			payload: initialState.subjects,
		});
		expect(newState).toEqual(initialState);
	});
    it("should return error", () => {
		const initialState = {
			loadingState: false,
			subjects: [],
			err: "Server Error 500",
		};
		const newState = reducer(initialState, {
			type: FETCH_SUBJECTS_FAILURE,
			payload: "Server Error 500",
		});
		expect(newState).toEqual(initialState);
	});
});
