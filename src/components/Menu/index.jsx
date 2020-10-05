import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

import { MenuWrapper } from './styles';

export default function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <header>
          <Link to="/">
            <img src={Logo} alt="Primeira Imagem" />
          </Link>

          <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Sobre</Link></li>
          </nav>
        </header>
      </Link>
    </MenuWrapper>
  );
}
