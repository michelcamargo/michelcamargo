import { Box, styled, Typography } from "@mui/material";

export interface StyledProps {
  teste?: boolean,
}

const Wrapper = styled(Box)<StyledProps>`
	display: flex;
	flex-direction: row;
  flex: 1.4;
`;

const Content = styled(Box)<StyledProps>`
	display: flex;
	flex-direction: column;
  column-gap: 4px;
`;

const DisclaimerText = styled(Typography)<StyledProps>`
	font-size: 12px;
	display: inline-block;
	flex-direction: row;
  align-content: flex-end;
`;

export default {
  Wrapper,
  Content,
  DisclaimerText,
};
