import PropTypes from "prop-types";
import { BACKGROUND } from "../../styles/palette";
import Tag from "../Tag";
import {
	StyledContainer,
	StyledContent,
	StyledTitleLink,
	StyledStargazer,
	StyledContainerTags,
} from "./card.styles";

const Card = (props) => {
	const { item, onClick, topicSelected } = props;
	const roundStargazer = (stargazerCount) => {
		if (stargazerCount < 1000) {
			return stargazerCount;
		} else {
			return `${Math.round(stargazerCount / 1000)}k`;
		}
	};

	const stargazer = roundStargazer(item?.stargazerCount || 0);
	return (
		<StyledContainer onClick={() => onClick(item?.id)}>
			<StyledContent background={BACKGROUND.gray}>
				<StyledTitleLink href={item?.url} target="_blank">
					{item?.nameWithOwner}
				</StyledTitleLink>
				<StyledStargazer>&#9734; Star {stargazer}</StyledStargazer>
			</StyledContent>
			<StyledContent
				dangerouslySetInnerHTML={{
					__html: item?.shortDescriptionHTML,
				}}
			/>
			{topicSelected === item?.id && (
				<StyledContainerTags>
					{item?.repositoryTopics.nodes?.map((element) => {
						const tag = element.topic;
						const stargazers = roundStargazer(tag.stargazers.totalCount);
						return (
							<Tag
								key={tag.id}
								text={tag.name}
								stargazer={`&#9734;${stargazers}`}
							/>
						);
					})}
				</StyledContainerTags>
			)}
		</StyledContainer>
	);
};

Card.propTypes = {
	item: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
	topicSelected: PropTypes.string,
};

Card.defaultProps = {
	topicSelected: "",
};

export default Card;
