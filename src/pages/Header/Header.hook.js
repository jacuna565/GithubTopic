import { useComplexState } from "../../hooks/helper.hook";

export const useHeaderHook = () => {
	const [headerStates, setHeaderStates] = useComplexState({
		searchInput: "react",
		isSubmitSearch: false,
	});
	const handleTypeSearch = (e) => {
		setHeaderStates({
			searchInput: e.target.value,
			isSubmitSearch: false,
		});
	};
	const handleClickSearch = () => {
		setHeaderStates({
			isSubmitSearch: true,
		});
	};

	const handleInputEnter = (e) => {
		if (e.key === "Enter" || e.keyCode === 13) {
			handleClickSearch();
		}
	};

	return {
		...headerStates,
		handleTypeSearch,
		handleInputEnter,
	};
};
