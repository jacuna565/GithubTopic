/* eslint-disable testing-library/no-node-access */
import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import InputText from "./index";

afterEach(cleanup);

describe("InputText", () => {
	function handleChange(evt) {
		expect(evt.target.value).toEqual("react");
		done();
	}

	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(
			<InputText
				onChange={handleChange}
				onKeyUp={handleChange}
				name="input-text"
			/>,
			div
		);
	});

	it("input text handles changes", (done) => {
		function handleChange(evt) {
			expect(evt.target.value).toEqual("react");
			done();
		}
		const setup = () =>
			render(
				<InputText
					onChange={handleChange}
					onKeyUp={handleChange}
					name="input-text"
				/>
			);
		setup();
		const node = screen.getByLabelText("input-text");
		fireEvent.change(node, { target: { value: "react" } });
	});
});
