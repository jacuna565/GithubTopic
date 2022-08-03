import PropTypes from "prop-types";
import { StyledPageContainer } from "./pageContainer.styles";

const PageContainer = (props) => {
	const { children } = props;
	return <StyledPageContainer className="page-container">{children}</StyledPageContainer>;
};

PageContainer.propTypes = {
  children: PropTypes.array.isRequired
}

export default PageContainer;
