import React from "react";
import { ApolloProvider } from "@apollo/client";
import { render } from "@testing-library/react";
import { client } from "../../client";
import Header from "./Header.controller";

describe("Header", () => {
	test("should render", () => {
		render(<Header />);
	});
});
