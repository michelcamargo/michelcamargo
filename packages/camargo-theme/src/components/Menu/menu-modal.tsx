import { connect, useConnect } from "frontity";
import { Packages } from "../../../types";

import { MenuContent, MenuOverlay, MenuLink } from "./styles";

/**
 * Modal de menu mobile.
 *
 * @param props - Propriedades vindas do elemento pai.
 * @returns componente react.
 */
const MenuModal = ({ ...props }) => {
  const { state } = useConnect<Packages>();
  const { menu } = state.theme;
  const isThereLinks = menu?.length > 0;

  return (
    <div {...props}>
      {state.frontity.mode !== "amp" && <MenuOverlay />}
      <MenuContent as="nav">
        {isThereLinks &&
          menu.map((navItem) => (
            <MenuLink
              key={navItem[0]}
              link={navItem[1]}
              aria-current={state.router.link === navItem[1] ? "page" : undefined}
            >
              {navItem[0]}
            </MenuLink>
          ))}
      </MenuContent>
    </div>
  );
};

export default connect(MenuModal, { injectProps: false });
