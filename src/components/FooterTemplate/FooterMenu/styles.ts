import { styled } from "@mui/material";
import Link from "next/link";

export interface StyledProps {
  blocked?: boolean,
}

const Wrapper = styled('div')<StyledProps>`
  display: flex;
  flex-direction: column;
`;

const List = styled('ul')<StyledProps>`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  row-gap: 4px;
`;

const ListItem = styled('li')<StyledProps>`
  font-size: 14px;
`;

const ListItemLink = styled(Link)<StyledProps>`

`;

export default {
	Wrapper,
	List,
	ListItem,
	ListItemLink,
};
