import { styled } from "@mui/material";

export interface StyledProps {
  teste?: boolean,
}

const Wrapper = styled('div')<StyledProps>`
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
`;

const Content = styled('p')<StyledProps>`
	font-size: 12px;
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
`;

export default {
  Wrapper,
  Content,
};
