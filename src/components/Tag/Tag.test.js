import React from "react";
import { render, screen } from "@testing-library/react";
import Tag from "./index";

describe("Tag", () => {
	const props = {
		text: "nestJs",
		stargazer: 3000,
	};

	const setup = () => render(<Tag { ...props } />);

	it("should render the text and the stargazer", () => {
		setup();
		expect(screen.getByText(props.text)).toHaveTextContent(props.text);
		expect(screen.getByText(props.stargazer)).toHaveTextContent(props.stargazer);
	});
});
