import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

import { MenuWrapper, LogoImage } from './styles';

export default function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage src={Logo} alt="Logo aplicação" />
      </Link>
    </MenuWrapper>
  );
}
