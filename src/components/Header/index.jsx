import React from 'react';
import { Link } from 'react-router-dom';

import pngLogo from '../../assets/logo.png';

import Linked from '../Linked';

import { Head, Logo } from './styles';

function Header() {
  return (
    <Head>
      <Link to="/">
        <Logo src={pngLogo} alt="Primeira Imagem" />
      </Link>

      <Linked to="/about">
        Sobre
      </Linked>
    </Head>
  );
}

export default Header;
