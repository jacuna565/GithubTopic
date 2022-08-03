import styled from "styled-components";
import { BACKGROUND, BORDER, TEXT } from "../../styles/palette";

export const StyledContainer = styled.div`
	padding: 12px 0;
`;

export const StyledTitle = styled.span`
	font-size: 12px;
	font-weight: bold;
	padding: 10px 8px;
	border-bottom: 2px solid blue;
`;

export const StyledTopicNameContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 24px 0;
`;

export const StyledHastag = styled.div`
	background: ${BACKGROUND.lightBlue};
	border: 1px solid ${BORDER.lightBlue};
	border-radius: 4px;
	padding: 14px 18px;
	margin-right: 16px;
`;

export const StyledInfo = styled.h2`
	color: ${TEXT.darkGray};
	margin: 0;
`;
