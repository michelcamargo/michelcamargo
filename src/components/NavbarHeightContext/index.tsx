import { createContext, useMemo, useState } from 'react';

const NavbarHeightContext = createContext({
  navbarHeight: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setNavbarHeight: () => {},
});

export const NavbarHeightContextProvider = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  
  const value = useMemo(() => ({
    navbarHeight,
    setNavbarHeight,
  }), [navbarHeight]);
  
  return (
    <NavbarHeightContext.Provider value={value!}>
      {children}
    </NavbarHeightContext.Provider>
  );
};

export default NavbarHeightContext;
