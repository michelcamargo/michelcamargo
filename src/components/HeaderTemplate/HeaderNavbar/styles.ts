import { ListItem, styled } from "@mui/material";
import Link from "next/link";

const Navbar = styled('nav')`

`;

const NavList = styled('ul')`
  list-style: none;
`;

const NavListItem = styled(ListItem)`
  color: ${({ theme }) => theme && theme.palette.primary.main};
`;

const NavListItemLink = styled(Link)`
  color: ${({ theme }) => theme && theme.palette.primary.main};
  text-decoration: none;
`;

export default {
  Navbar, NavList, NavListItem, NavListItemLink
};
