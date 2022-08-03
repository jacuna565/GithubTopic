import styled from "styled-components";
import { BACKGROUND, BORDER, TEXT } from "../../styles/palette";

export const StyledContainer = styled.div`
	border: 1px solid ${BORDER.gray};
	border-radius: 6px;
	margin: 24px 0;
	cursor: pointer;
`;

export const StyledTitleLink = styled.a`
	text-decoration: none;
	cursor: pointer;
	color: ${TEXT.blue};
	font-weight: 600;
`;

export const StyledContent = styled.div`
	background: ${(props) => props.background || BACKGROUND.white};
	padding: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledStargazer = styled.div`
	background: ${BACKGROUND.white};
	font-size: 12px;
	padding: 4px 12px;
	border-radius: 4px;
`;

export const StyledContainerTags = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
	padding: 12px;
`;
