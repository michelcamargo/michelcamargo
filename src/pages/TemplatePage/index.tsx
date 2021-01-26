import React, { useState } from 'react';

import { Template, Headbar, Nav } from './styles';

import Image from "../../components/Image";
import Sidebar from "../../components/Sidebar";

// import path_Logo from "../../assets/images/logo.svg";
const path_Logo = require("../../assets/images/logo.svg") as string;

type Props = {
    children?: JSX.Element | JSX.Element[],
};

const TemplatePage = ({ children }: Props) => {

  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <Template>
      <Headbar>
        <Image src={path_Logo} width="60px" link="/" />
        {/* <Logo src={path_Logo} /> */}

        <Nav>
            <Nav.Item onClick={() => (setSidebarVisible(!sidebarVisible))}>
              Disclaimer
            </Nav.Item>
        </Nav>
        
      </Headbar>

      {/* Otimizar renderização */}

      <Sidebar visible={sidebarVisible} />

      {children}

    </Template>
  );
}

export default TemplatePage;