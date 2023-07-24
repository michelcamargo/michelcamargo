import { createContext, ReactNode, useMemo, useState } from 'react';

interface Props {
  children: ReactNode,
}

const NavbarHeightContext = createContext({
  navbarHeight: 0,
  // setNavbarHeight: () => void,
});

export const NavbarHeightContextProvider = ({ children }: Props) => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  const value = useMemo(() => ({
    navbarHeight,
    setNavbarHeight,
  }), [navbarHeight]);

  return (
    <NavbarHeightContext.Provider value={value}>
      {children}
    </NavbarHeightContext.Provider>
  );
};

// export default NavbarHeightContext;
