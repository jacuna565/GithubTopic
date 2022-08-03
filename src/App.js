import React from "react";
import Header from "./pages/Header/Header.controller";
import { useHeaderHook } from "./pages/Header/Header.hook";
import Topics from "./pages/Topics/Topics.controller";

function App() {
	const headerStates = useHeaderHook();
	return (
		<>
			<Header {...headerStates} />
			<Topics
				isSubmitSearch={headerStates.isSubmitSearch}
				searchInput={headerStates.searchInput}
			/>
		</>
	);
}

export default App;
