import PropTypes from "prop-types";
import { StyledTag, StyledTagStar} from "./tag.styles";

const Tag = (props) => {
	const { text, stargazer } = props;
	return (
		<StyledTag>
			{text}
			<StyledTagStar
				dangerouslySetInnerHTML={{
					__html: stargazer,
				}}
			/>
		</StyledTag>
	);
};

Tag.propTypes = {
	text: PropTypes.string.isRequired,
	stargazer: PropTypes.number.isRequired,
};

export default Tag;
