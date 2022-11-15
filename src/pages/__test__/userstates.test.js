import {
	POST_USER_CRED_FAILURE,
	POST_USER_CRED_REQUEST,
	POST_USER_CRED_SUCCESS,
} from "../../redux/user/userTypes";
import userReducer from "../../redux/user/userReducer";

describe("User Reducer", () => {
	it("should return default state", () => {
		const newState = userReducer(
			{ loadingState: false, username: "", err: "" },
			{}
		);
		expect(newState).toEqual({ loadingState: false, username: "", err: "" });
	});
    it("should return object with loadingState changed on request", () => {
		const user = {
			loadingState: true,
			username: "",
			err: "",
		};
		const newState = userReducer(user, {
			type: POST_USER_CRED_REQUEST,
		});
		expect(newState).toEqual(user);
	});
	it("should return object with username on success", () => {
		const user = {
			loadingState: false,
			username: "John",
			err: "",
		};
		const newState = userReducer(user, {
			type: POST_USER_CRED_SUCCESS,
			payload: "John",
		});
		expect(newState).toEqual(user);
	});
    it("should return object with error on failure", () => {
		const user = {
			loadingState: false,
			username: "",
			err: "Error 500",
		};
		const newState = userReducer(user, {
			type: POST_USER_CRED_FAILURE,
			payload: "Error 500",
		});
		expect(newState).toEqual(user);
	});
});
