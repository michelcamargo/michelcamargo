import React from 'react';

import { Disclaimer } from './styles';
import StyledLink from "../UI/StyledLink";

interface Props{
  visible: boolean;
}

function Sidebar({visible}: Props){
  if(visible){
    return (
      <Disclaimer>
        {/*trazer de BD*/}

        <Disclaimer.Title>Espaço em progresso</Disclaimer.Title>
  
        <Disclaimer.Content>
          A interface atual tem como intuito a aplicação das boas práticas de uso e padrões de projeto e desenvolvimento<br />
          Sua composição toma forma utilizando React, TypeScript, Node.js e Express<br />
          Gosto muito de design e sou 'do rock', arte e música podem ser minhas maiores fontes de inspiração
          Obrigado por vir, tenho muito mais a dizer! basta <StyledLink to="#">clicar aqui</StyledLink> e mande um olá :)
        </Disclaimer.Content>

      </Disclaimer>
    );
  }
  
  else{
    return(
      <div />
    );
  }
}

export default Sidebar;