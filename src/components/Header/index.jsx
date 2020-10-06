import React from 'react';
import { Link } from 'react-router-dom';

import pngLogo from '../../assets/logo.png';

import { Head, List, Logo } from './styles';

function Header() {
  return (
    <Head>
      <Logo link="/" src={pngLogo} alt="Primeira Imagem" />
      <Head.Nav>

        <List.Item>
          <Link to="/">Home</Link>
        </List.Item>

        <List.Item>
          <Link to="/">Sobre</Link>
        </List.Item>

      </Head.Nav>
    </Head>
  );
}

export default Header;
