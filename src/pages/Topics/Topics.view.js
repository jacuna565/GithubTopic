import PageContainer from "../../components/PageContainer";
import Card from "../../components/Card";
import {
	StyledContainer,
	StyledTitle,
	StyledTopicNameContainer,
	StyledHastag,
	StyledInfo,
} from "./topics.styles";

const TopicsView = (props) => {
	const {
		loading,
		topic,
		topicList,
		error,
		repositoryCount,
		topicSelected,
		handleClick,
	} = props;

	if (loading) return "Loading...";
	if (error) return <pre>{error.message}</pre>;

	return (
		<StyledContainer>
			<PageContainer>
				<StyledTitle className="title">Topics</StyledTitle>
				<StyledTopicNameContainer className="title">
					<StyledHastag>#</StyledHastag>
					<h1>{topic}</h1>
				</StyledTopicNameContainer>
				<StyledInfo>
					Here are {repositoryCount} public repositories matching this topic...
				</StyledInfo>
				<div>
					{topicList.map((item) => (
						<Card
							key={item?.id}
							item={item}
							onClick={handleClick}
							topicSelected={topicSelected}
						/>
					))}
				</div>
			</PageContainer>
		</StyledContainer>
	);
};

export default TopicsView;
