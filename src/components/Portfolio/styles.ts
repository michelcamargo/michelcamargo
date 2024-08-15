import { Box, styled } from "@mui/material";

interface StyledProps {
	isActive?: boolean,
}

const PortfolioList = styled(Box)<StyledProps>`
	width: 100%;
	display: flex;
	flex: 1;
	flex-direction: column;
	background: red;
`;

export default {
	PortfolioList,
};
