import { styled } from "@mui/material";
import Link from "next/link";

export interface StyledProps {

}

const Wrapper = styled('div')<StyledProps>`
  display: flex;
  flex-direction: column;
`;

const List = styled('ul')<StyledProps>`
  list-style: none;
`;

const ListItem = styled('li')<StyledProps>`

`;

const ListItemLink = styled(Link)<StyledProps>`

`;

export default {
  Wrapper,
  List,
  ListItem,
  ListItemLink,
};
