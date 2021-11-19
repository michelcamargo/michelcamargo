import React from 'react';

import {Disclaimer, SidebarCloseButton, SidebarHeader} from './styles';
import StyledLink from "../StyledLink";

interface Props{
  visible: boolean;
  setSidebarVisible(status: boolean): void;
}

function Sidebar ({visible, setSidebarVisible}: Props) {
  if(visible){
    return (
      <Disclaimer>
        {/*trazer de BD*/}
        <SidebarHeader>
          <Disclaimer.Title>Em progresso</Disclaimer.Title>
          <SidebarCloseButton onClick={() => (setSidebarVisible(!visible))}>X</SidebarCloseButton>
        </SidebarHeader>

        <Disclaimer.Content>
          A interface atual tem como intuito a aplicação das boas práticas de uso e padrões de projeto e desenvolvimento.<br />
          Sua composição toma forma utilizando React, TypeScript, Node.js e Express.<br />
          Gosto muito de design e sou 'do rock', arte e música podem ser minhas maiores fontes de inspiração.
          Obrigado por vir, tenho muito mais a dizer! <StyledLink to="#">clique aqui</StyledLink> e mande um olá :)
        </Disclaimer.Content>

      </Disclaimer>
    );
  }
  
  else {
    return (
      <div />
    );
  }
}

export default Sidebar;