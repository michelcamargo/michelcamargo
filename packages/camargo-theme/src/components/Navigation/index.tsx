import { connect, useConnect } from "frontity";
import Link from "../TemplateUi/Link";
import { Packages } from "../../../types";

import { NavContainer, NavItem } from "./styles";

type NavLink = {
  name: string,
  link: string
}

/**
 * Componente de navegação, retorna links de navegação.
 *
 * @returns Tag `<nav>` com menu.
 */
const Nav = (): JSX.Element => {
  const { state } = useConnect<Packages>();

  return (
    <NavContainer>
      {state.theme.menu.map((navItem: NavLink) => {
        // Verifica se o link combina com rota atual.
        const data = state.source.get(state.router.link);
        const isCurrentPage = data.route === navItem[1];

        return (
          <NavItem key={navItem[0]}>
            {/* Se o link do menu combina com a página atual, adiciona atributo `aria-current` */}
            <Link link={navItem[1]} aria-current={isCurrentPage ? "page" : undefined}>
              {navItem[0]}
            </Link>
          </NavItem>
        );
      })}
    </NavContainer>
  );
};

export default connect(Nav);

