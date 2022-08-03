import PropTypes from "prop-types";
import TopicsView from "./Topics.view";
import { useTopicsHook } from "./Topics.hooks";

const TopicsController = (props) => {
	const topicsStates = useTopicsHook(props);
	return <TopicsView {...topicsStates} />;
};

TopicsController.propTypes = {
	isSubmitSearch: PropTypes.bool.isRequired,
	searchInput: PropTypes.string.isRequired,
};

export default TopicsController;
