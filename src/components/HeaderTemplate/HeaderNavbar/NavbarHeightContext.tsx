import { createContext, ReactNode, useMemo, useState } from 'react';

interface Props {
  children: ReactNode,
}

const NavbarHeightContext = createContext<number | null>(null);

export const NavbarHeightContextProvider = ({ children }: Props) => {
  const [navbarHeight, setNavbarHeight] = useState<number>(0);

  const navbarHeightContext = useMemo(() => ({
    navbarHeight,
    setNavbarHeight,
  }), [navbarHeight]);

  return (
    <NavbarHeightContext.Provider value={navbarHeightContext.navbarHeight}>
      {children}
    </NavbarHeightContext.Provider>
  );
};
