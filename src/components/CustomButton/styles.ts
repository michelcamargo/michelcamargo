import { Button, styled } from "@mui/material";

export interface StyledProps {
  isloading?: boolean,
  isdisabled?: boolean,
}

const Btn = styled(Button)<StyledProps>`

`;

export default {
  Btn,
};
