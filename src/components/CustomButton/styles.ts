import { Button, styled } from "@mui/material";

export interface StyledProps {
  isloading?: boolean,
  isdisabled?: boolean,
  bold?: boolean,
}

const Btn = styled(Button)<StyledProps>`
  font-weight: ${({ bold }) => bold ? 'bold' : 'inherit'};
`;

export default {
	Btn,
};
