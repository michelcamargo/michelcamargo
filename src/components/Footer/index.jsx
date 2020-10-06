import React from 'react';
import Foot from './styles';
import { ReactComponent as Instagram } from '../../assets/svg/ig.svg';

export default function Footer() {
  return (
    <Foot>
      <Foot.List>
        <Instagram fill="white" />
      </Foot.List>

      <Foot.Description>Todos os direitos reservados - Michel Camargo 2020</Foot.Description>
    </Foot>
  );
}
