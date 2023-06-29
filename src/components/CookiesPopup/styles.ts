import {styled} from "@mui/material";

interface Props {
  bold?: boolean,
  italic?: boolean,
  fontSize?: string,
}

const DisclaimerContainer = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
`;

const DisclaimerText = styled('p')<Props>`

`;

export default {
  DisclaimerText,
  DisclaimerContainer,
};
