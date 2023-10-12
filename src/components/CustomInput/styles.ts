import { styled, TextField } from "@mui/material";

export interface StyledProps {
	outlined?: boolean
}

const InputText = styled(TextField)<StyledProps>`

`;

export default {
  InputText,
};
