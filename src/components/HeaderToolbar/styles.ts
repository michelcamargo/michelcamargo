import { Container, styled } from "@mui/material";

export interface StyledProps {
	disabled?: boolean
}

const ToolbarWrapper = styled('div')<StyledProps>`
	display: flex;
	position: relative;
	z-index: 4;
`;

const ToolbarContainer = styled(Container)<StyledProps>`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export default {
  ToolbarWrapper, ToolbarContainer
};
