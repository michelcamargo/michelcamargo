import { Link, styled } from "@mui/material";

export interface StyledProps {
  isDisabled?: boolean,
}

const Anchor = styled(Link)<StyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default {
  Anchor
};