import {styled} from "@mui/material";
import Link from "next/link";

interface Props {
  bold?: boolean,
  italic?: boolean,
  fontSize?: string,
}

const DisclaimerText = styled('p')<Props>`

`;

const LearnMoreLink = styled(Link)<Props>`

`;

export default {
  DisclaimerText,
  LearnMoreLink,
};
