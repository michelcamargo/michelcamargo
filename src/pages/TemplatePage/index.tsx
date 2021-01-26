import React from 'react';

import { Template, Headbar, Nav } from './styles';

import Image from "../../components/Image";

// import path_Logo from "../../assets/images/logo.svg";
const path_Logo = require("../../assets/images/logo.svg") as string;

type Props = {
    children?: JSX.Element | JSX.Element[],
};

const TemplatePage = ({ children }: Props) => {

  return (
    <Template>
      <Headbar>
        <Image src={path_Logo} width="60px" link="/" />
        {/* <Logo src={path_Logo} /> */}

        <Nav>
            <Nav.Item>Em construção</Nav.Item>
        </Nav>
        
      </Headbar>

      {children}

    </Template>
  );
}

export default TemplatePage;