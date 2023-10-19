import { styled, TextField } from "@mui/material";

export interface StyledProps {
	outlined?: boolean
	height?: number,
	width?: number,
}

const InputText = styled(TextField)<StyledProps>`

`;

export default {
  InputText,
};
