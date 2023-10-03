import { Button, styled } from "@mui/material";

export interface StyledProps {
  isLoading?: boolean,
  isDisabled?: boolean,
}

const Btn = styled(Button)<StyledProps>`

`;

export default {
  Btn,
};
