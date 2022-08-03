import React from "react";
import { ApolloProvider } from "@apollo/client";
import { render } from "@testing-library/react";
import { client } from "../../client";
import Topics from "./Topics.controller";

describe("TopicsController", () => {
	test("should render", () => {
		render(
			<ApolloProvider client={client}>
				<Topics isSubmitSearch={false} searchInput={""} />
			</ApolloProvider>
		);
	});
});
