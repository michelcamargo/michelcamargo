import { CustomNavItem } from "@/lib/datahooks";

import Styled from './styles';

interface Props {
  navbarItems: Array<CustomNavItem>
}

const HeaderNavbar = ({ navbarItems }: Props) => {
  return (
    <Styled.Navbar>
      <Styled.NavList>
        {navbarItems.map((item, index) => (
          <Styled.NavListItem key={index}>
            <Styled.NavListItemLink href={item.href}>
              {item.label}
            </Styled.NavListItemLink>
          </Styled.NavListItem>
        ))}
      </Styled.NavList>
    </Styled.Navbar>
  );
};

export default HeaderNavbar;
