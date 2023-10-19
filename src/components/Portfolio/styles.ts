import { Box, styled } from "@mui/material";

interface StyledProps {
	isActive?: boolean,
}

const PortfolioList = styled(Box)<StyledProps>`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 16px;
`;

export default {
  PortfolioList,
};
