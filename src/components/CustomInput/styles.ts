import { styled, TextareaAutosize } from "@mui/material";

export interface StyledProps {
	outlined?: boolean
	height?: number,
	width?: number,
}

const TextArea = styled(TextareaAutosize)<StyledProps>`
	min-height: 52px;
	padding: 4px 8px;
	border-style: none;
	box-shadow: 0 0 2px 1px rgba(0,0,0, .1);
	border-radius: 4px;
	background: #FFFFFF77;
	transition: .2s ease-in;
	
	&:focus, &:focus-visible {
		box-shadow: 0 0 2px 1px rgba(0,0,0, .2);
		background: #FFFFFFFF;
		outline: none;
	}
`;

export default {
  TextArea,
};
