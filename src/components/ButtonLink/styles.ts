import { Button, styled } from "@mui/material";

interface Props {
  isLoading?: boolean,
  isDisabled?: boolean,
}

const Btn = styled(Button)<Props>`

`;

export default {
  Btn
};
