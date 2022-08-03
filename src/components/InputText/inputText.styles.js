import styled from "styled-components";
import { BORDER, TEXT } from "../../styles/palette";

export const StyledInput = styled.input`
  border-radius: 6px;
  background: none;
  border: 0;
  padding: 4px 8px;
  box-shadow: none;
  color: ${TEXT.white};
  border: 1px solid ${BORDER.gray};
`;
