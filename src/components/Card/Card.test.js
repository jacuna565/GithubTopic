import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./index";

describe("Card", () => {
	const mockHandler = jest.fn();
	const props = {
		item: {
			id: "id",
			url: "https://url.com",
			shortDescriptionHTML: "a description",
		},
		onClick: mockHandler,
		topicSelected: "",
	};
	const setup = () =>
		render(
			<Card
				item={props.item}
				onClick={props.onClick}
				topicSelected={props.topicSelected}
			/>
		);

	test("must have link", () => {
		setup();
		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("href", props.url);
	});

	it("should contains the description", () => {
		setup();
		expect(screen.getByText(props.item.shortDescriptionHTML)).toBeInTheDocument();
	});

	it("click on the button and handle ONCE", () => {
		setup();
		fireEvent.click(screen.getByText(props.item.shortDescriptionHTML));
		expect(mockHandler).toHaveBeenCalledTimes(1);
	});
});
