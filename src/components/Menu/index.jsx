import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import Logo from '../../assets/logo.png';

import { MenuWrapper, HeadTitle } from './styles';

export default function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        {/* <LogoImage src={Logo} alt="Logo aplicação" /> */}
        <HeadTitle>
          Michel Camargo
        </HeadTitle>

        <HeadTitle.Description>
          Developer & UX-UI enthusiast
        </HeadTitle.Description>
      </Link>
    </MenuWrapper>
  );
}
