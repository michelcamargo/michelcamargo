import { Box, styled } from "@mui/material";

interface StyledProps {
	isActive?: boolean,
}

const Wrapper = styled(Box)<StyledProps>`
	width: 100%;
`;

export default {
  Wrapper,
};
