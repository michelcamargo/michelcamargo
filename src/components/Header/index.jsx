import React from 'react';
import { Link } from 'react-router-dom';

import pngLogo from '../../assets/logo.png';
import Linked from '../Linked';

import { Head, Logo, Nav } from './styles';

function Header() {
  return (
    <Head>
      <Link to="/">
        <Logo src={pngLogo} alt="Primeira Imagem" />
      </Link>

      <Nav>
        <Nav.Item>
          <Linked to="/counter">Counter</Linked>
        </Nav.Item>

        <Nav.Item>
          <Linked to="/about">About</Linked>
        </Nav.Item>
      </Nav>
    </Head>
  );
}

export default Header;
