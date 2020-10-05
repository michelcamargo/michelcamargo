import React from 'react';
import Foot from './styles';

export default function Footer() {
  return (
    <Foot>
      <Foot.List>
        <Foot.ListItem>
          <Foot.Link href="#"><i className="fab fa-facebook" /></Foot.Link>
        </Foot.ListItem>

        <Foot.ListItem>
          <Foot.Link href=""><i className="fab fa-pinterest" /></Foot.Link>
        </Foot.ListItem>

        <Foot.ListItem>
          <Foot.Link href="#"><i className="fab fa-instagram" /></Foot.Link>
        </Foot.ListItem>

        <Foot.ListItem>
          <Foot.Link href="#"><i className="fab fa-twitter" /></Foot.Link>
        </Foot.ListItem>
      </Foot.List>

      <Foot.Description>Todos os direitos reservados - Michel Camargo 2020</Foot.Description>
    </Foot>
  );
}
