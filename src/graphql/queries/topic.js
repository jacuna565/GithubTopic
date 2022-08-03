import { gql } from "@apollo/client";

export const GET_TOPIC = gql`
	query getTopic($topic: String!) {
		search(query: $topic, type: REPOSITORY, first: 15) {
			repositoryCount
			nodes {
				... on Repository {
					id
					nameWithOwner
					stargazerCount
					url
					shortDescriptionHTML
					repositoryTopics(last: 15) {
						nodes {
							topic {
								id
								name
								stargazers {
									totalCount
								}
							}
						}
					}
				}
			}
		}
	}
`;
