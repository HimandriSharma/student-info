import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import Warning from "../warning";

describe("Test Warning Page", () => {
	test("header render with Login text in document", () => {
		render(<Warning />);
		const warningElement = screen.getByText(
			/This route either does not exist or you need to login first./i
		);
		expect(warningElement).toBeInTheDocument();
	});
});
