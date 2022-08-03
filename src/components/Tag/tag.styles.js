import styled from "styled-components";
import { BACKGROUND, TEXT } from "../../styles/palette";

export const StyledTag = styled.div`
	font-size: 10px;
	backgrond: ${BACKGROUND.lightBlue};
	padding: 10px 10px;
	background: #def;
	margin: 4px;
	border-radius: 20px;
	font-weight: 600;
	color: ${TEXT.blue};
	text-align: center;
  display: flex;
	&:hover, &:hover > div {
		background: #0969da;
		color: ${TEXT.white};
	}
`;

export const StyledTagStar = styled.div`
	color: ${TEXT.darkGray};
  margin-left: 12px;
`;
