import { render, screen, act } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";

describe("Test Login Page", () => {
	test("login page with submit button", async () => {
		render(<App />);
		const buttonList = await screen.findAllByRole("button");
		expect(buttonList).toHaveLength(1);
	});
	test("username validation", async () => {
		render(<App />);
		const username = screen.getByPlaceholderText("John");
		expect(username).toHaveAttribute("type", "text");
	});
	test("password validation", async () => {
		render(<App />);
		const password = screen.getByPlaceholderText("Secret");
		expect(password).toHaveAttribute("type", "password");
	});
	test("should be able to submit the form", async() => {
		render(<App />);
		const submitBtn = screen.getByTestId("submit");
		const usernameInputNode = screen.getByPlaceholderText("John");
		const passwordInputNode = screen.getByPlaceholderText("Secret");

		userEvent.type(usernameInputNode, "jest testing");
		userEvent.type(passwordInputNode, "jest pass");
        await act( async () => await userEvent.click(submitBtn));
        
	});
});
