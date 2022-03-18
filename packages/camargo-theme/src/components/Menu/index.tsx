import { connect, useConnect, Global, Head } from "frontity";
import { CloseIcon, HamburgerIcon } from "./menu-icon";
import MenuModal from "./menu-modal";
import { Packages } from "../../../types";

import { MenuToggle, } from "./styles";

/**
 * Menu mobile, mostra links para categorias e páginas.
 * Componente responsável pela lógica de renderização do
 * {@link MenuModal}.
 *
 * @returns um componente.
 */
function MobileMenu() {
  const { state, actions } = useConnect<Packages>();
  const { menu, isMobileMenuOpen } = state.theme;
  if (menu?.length === 0) return null;

  return state.frontity.mode === "amp" ? (
    <>
      <Head>
        <script
          async={undefined}
          custom-element="amp-bind"
          src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"
        ></script>
      </Head>

      <MenuToggle>
        <HamburgerIcon
          color="white"
          size="24px"
          role="button"
          tabindex="0"
          data-amp-bind-hidden="isMenuOpen"
          on="tap:AMP.setState({ isMenuOpen: true })"
        />
        <CloseIcon
          color="white"
          size="20px"
          role="button"
          tabindex="0"
          data-amp-bind-hidden="!isMenuOpen"
          on="tap:AMP.setState({ isMenuOpen: false })"
          hidden
        />
      </MenuToggle>
      <MenuModal data-amp-bind-hidden="!isMenuOpen" hidden />
    </>
  ) : (
    <>
      <MenuToggle onClick={actions.theme.toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <>
            {/* Add some style to the body when menu is open,
            to prevent body scroll */}
            <Global styles={{ body: { overflowY: "hidden" } }} />
            <CloseIcon color="white" size="20px" />
          </>
        ) : (
          <HamburgerIcon color="white" size="24px" />
        )}
      </MenuToggle>
      {isMobileMenuOpen && <MenuModal />}
    </>
  );
}

export default connect(MobileMenu);
