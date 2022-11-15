import { SELECTED_SUBJECT } from "../../redux/selectedSubject/selectedSubjectTypes";
import selectedSubjectReducer from "../../redux/selectedSubject/selectedSubjectReducer";

describe("Testing selected subject states", () => {
	it("should return default state", () => {
		const initialState = {
			subject: {},
		};
		const newState = selectedSubjectReducer(initialState, {});
		expect(newState).toEqual(initialState);
	});
	it("should return selected subject", () => {
		const initialState = {
			subject: {
				sub_code: "ENG",
				sub_name: "English",
				sub_about:
					"English is a West Germanic language of the Indo-European language family, with its earliest forms spoken by the inhabitants of early medieval England.",
			},
		};
		const newState = selectedSubjectReducer(initialState, {
			type: SELECTED_SUBJECT,
			payload: {
				sub_code: "ENG",
				sub_name: "English",
				sub_about:
					"English is a West Germanic language of the Indo-European language family, with its earliest forms spoken by the inhabitants of early medieval England.",
			},
		});
		expect(newState).toEqual(initialState);
	});
});
