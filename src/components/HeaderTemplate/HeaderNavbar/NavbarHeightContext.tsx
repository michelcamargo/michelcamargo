import { createContext, ReactNode, useMemo, useState } from 'react';

interface Props {
  children: ReactNode,
}

const NavbarHeightContext = createContext({
  navbarHeight: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setNavbarHeight: () => {},
});

export const NavbarHeightContextProvider = ({ children }: Props) => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  
  const value = useMemo(() => ({
    navbarHeight,
    setNavbarHeight,
  }), [navbarHeight]);
  
  return (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    <NavbarHeightContext.Provider value={value!}>
      {children}
    </NavbarHeightContext.Provider>
  );
};

export default NavbarHeightContext;
