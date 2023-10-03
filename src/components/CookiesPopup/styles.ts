import { styled } from "@mui/material";

interface StyledProps {
  bold?: boolean,
  italic?: boolean,
  fontSize?: string,
}

const DisclaimerContainer = styled('div')<StyledProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
`;

const DisclaimerText = styled('p')<StyledProps>`
  font-size: 12px;
`;

export default {
  DisclaimerText,
  DisclaimerContainer,
};
