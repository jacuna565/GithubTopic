import { useState } from "react";

export const useComplexState = (initialState) => {
	const finalInitialState =
		typeof initialState === "object"
			? JSON.parse(JSON.stringify(initialState))
			: {};
	const [state, setStateInternal] = useState(finalInitialState);
	const setState = (newKeys) => {
		setStateInternal((state) => {
			return Object.assign({}, state, newKeys);
		});
	};
	return [state, setState];
};
