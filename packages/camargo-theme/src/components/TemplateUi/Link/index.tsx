import { connect, useConnect } from "frontity";
import Link from "@frontity/components/link";
import { Packages } from "../../../../types";
import { LinkProps } from "@frontity/components/link/types";

/**
 * Wrapper envolvendo o componente {@link Link}.
 *
 * @param children
 * @param props - Mesma parametrização que o componente {@link Link}.
 *
 * @example
 * ```js
 * <CustomLink link="/some-post">
 *   <div>Some Post</div>
 * </CustomLink>
 * ```
 *
 * @returns A {@link Link} component, which returns an HTML anchor element.
 */
const CustomLink = ({ children, ...props }: LinkProps): JSX.Element => {
  const { state, actions } = useConnect<Packages>();

  const onClick = () => {
    if (state.theme.isMobileMenuOpen) {
      actions.theme.closeMobileMenu();
    }
    // if(state.theme.counter) {
    //   actions.theme.increaseCounter();
    // }
  };

  return (
    <Link {...props} onClick={onClick}>
      {children}
    </Link>
  );
};

export default connect(CustomLink, { injectProps: false });
