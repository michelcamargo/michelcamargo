import { Button, styled } from "@mui/material";

export interface StyledProps {
  isloading?: boolean,
  isdisabled?: boolean,
  bold?: string,
}

const Btn = styled(Button)<StyledProps>`
  font-weight: ${({ bold }) => bold === 'true' ? 'bold' : 'inherit'};
`;

export default {
	Btn,
};
