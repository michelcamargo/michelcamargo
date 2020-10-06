import React from 'react';
import { Link } from 'react-router-dom';

import pngLogo from '../../assets/logo.png';

import { Head, List, Logo } from './styles';

function Header() {
  return (
    <Head>
      <Logo link="/" src={pngLogo} alt="Primeira Imagem" />
      <Head.Nav>
        <List>
          <Link to="/">Home</Link>
          <Link to="/">Sobre</Link>
        </List>
      </Head.Nav>
    </Head>
  );
}

export default Header;
