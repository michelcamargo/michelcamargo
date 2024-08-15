import { ListItem, styled } from "@mui/material";
import Link from "next/link";

interface StyledProps {
  highlighted?: boolean,
}

const Navbar = styled('nav')<StyledProps>`
  display: flex;
`;

const NavList = styled('ul')<StyledProps>`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const NavListItem = styled(ListItem)<StyledProps>`
  width: fit-content;
  height: fit-content;
  color: ${({ theme }) => theme && theme.palette.primary.main};
`;

const NavListItemLink = styled(Link)<StyledProps>`
  color: ${({ theme }) => theme && theme.palette.primary.main};
  text-decoration: none;
`;

export default {
	Navbar, NavList, NavListItem, NavListItemLink
};
