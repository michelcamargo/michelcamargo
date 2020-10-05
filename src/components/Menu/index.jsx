import React from 'react';
import { Link } from 'react-router-dom';

// import Logo from '../../assets/logo.png';

import { MenuWrapper } from './styles';

export default function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        {/* <LogoImage src={Logo} alt="Logo aplicação" /> */}
        <h1>Michel Camargo</h1>
        <h2>Developer & UX-UI enthusiast</h2>
      </Link>
    </MenuWrapper>
  );
}
