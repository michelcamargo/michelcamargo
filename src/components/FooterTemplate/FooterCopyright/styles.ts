import { Box, styled, Typography } from "@mui/material";

export interface StyledProps {
  teste?: boolean,
}

const Wrapper = styled(Box)<StyledProps>`
	display: flex;
	flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`;

const Content = styled(Box)<StyledProps>`
	font-size: 12px;
	display: flex;
	flex-direction: column;
	align-content: center;
  justify-content: flex-end;
`;

const CopyrightText = styled(Typography)<StyledProps>`
	font-size: 12px;
	display: inline-block;
	align-content: flex-end;
  justify-content: flex-end;
  text-align: end;
`;

export default {
  Wrapper,
  Content,
  CopyrightText,
};
