import { connect, useConnect } from "frontity";
import Link from "../TemplateUi/Link";
import { Packages } from "../../../types";

import { NavContainer, NavItem } from "./styles";

/**
 * Componente de navegação, retorna links de navegação.
 *
 * @returns Tag `<nav>` com menu.
 */
const Nav = (): JSX.Element => {
  const { state } = useConnect<Packages>();

  return (
    <NavContainer>
      {state.theme.menu.map(([name, link]) => {
        // Check if the link matched the current page url.
        const data = state.source.get(state.router.link);
        const isCurrentPage = data.route === link;

        return (
          <NavItem key={name}>
            {/* If link url is the current page, add `aria-current` for a11y */}
            <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
              {name}
            </Link>
          </NavItem>
        );
      })}
    </NavContainer>
  );
};

export default connect(Nav);

