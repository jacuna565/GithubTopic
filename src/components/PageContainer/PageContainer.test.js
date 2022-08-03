import React from "react";
import { render, screen } from "@testing-library/react";
import PageContainer from "./index";

describe("PageContainer", () => {
	const setup = () =>
		render(
			<PageContainer>
				<div>Content</div>
			</PageContainer>
		);

	it("should render the children", () => {
		setup();
		expect(screen.getByText("Content")).toHaveTextContent("Content");
	});
});
