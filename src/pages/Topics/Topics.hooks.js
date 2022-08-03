import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_TOPIC } from "../../graphql/queries/topic";
import { useComplexState } from "../../hooks/helper.hook";

export const useTopicsHook = (internalHooksStates) => {
	const { isSubmitSearch, searchInput } = internalHooksStates;
	const [topicStates, setTopicStates] = useComplexState({
		topic: searchInput,
		topicSelected: ""
	})
	const { data, loading, error } = useQuery(GET_TOPIC, {
		variables: { topic: topicStates.topic },
	});
	const handleClick = (elementId) => {
		setTopicStates({
			topicSelected: elementId
		});
	};

	useEffect(() => {
		if(isSubmitSearch){
			setTopicStates({
				topic: searchInput
			});
		}
	// eslint-disable-next-line
	}, [isSubmitSearch])

	return {
		...topicStates,
		loading,
		error,
		repositoryCount: data?.search?.repositoryCount,
		topicList: data?.search?.nodes,
		handleClick,
	};
};
