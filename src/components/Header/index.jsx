import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

import Head, { List } from './styles';

function Header() {
  return (
    <Head>
      <Head.Logo link="/" src={Logo} alt="Primeira Imagem" />

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
