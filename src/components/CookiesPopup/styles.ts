import { Box, styled, Typography } from "@mui/material";

interface StyledProps {
  bold?: boolean,
  italic?: boolean,
  fontSize?: string,
}

const DisclaimerContainer = styled(Box)<StyledProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
`;

const DisclaimerFragment = styled(Box)<StyledProps>`
  position: relative;
  display: flex;
  flex-direction: row;
`;

const DisclaimerText = styled(Typography)<StyledProps>`
  font-size: 12px;
  width: fit-content;
`;

export default {
  DisclaimerText,
  DisclaimerContainer,
  DisclaimerFragment
};
