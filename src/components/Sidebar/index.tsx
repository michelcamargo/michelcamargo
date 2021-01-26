import React from 'react';

import { Disclaimer } from './styles';

interface Props{
  visible: boolean;
}

function Sidebar({visible}: Props){
  if(visible){
    return (
      <Disclaimer>
        <Disclaimer.Title>Espaço em progresso</Disclaimer.Title>
  
        <Disclaimer.Content>
         Saudações! Meu nome é Michel e sou responsável por esse humilde domínio.<br />
          A interface atual é fruto da reformulação do meu portfolio digital utilizando o super-conjunto TypeScript e React com o objetivo de absorver boas práticas e novos padrões de desenvolvimento, portanto adianto minhas desculpas por sua vaga e pobre experiência.<br />
          Busco desenvolvê-la sempre que possível em paralelo à outros projetos de design e software, os quais pretendo agrupar também nesse cantinho.<br />
          Atravesso uma importante fase profissional junto a projetos de User Interface e desenvolvimento de aplicações PWA e web, estou ansioso para lhe mostrar mais.<br />
          Não deixe em entrar em contato, gosto de conversar sobre tecnologia, música e design, além de conhecer novas pessoas, culturas e processos. <br />
          Meus agradecimentos, espero vê-lo em breve, ainda há muito pela frente.<br />
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