import React from 'react';
import Foot from './styles';
import { ReactComponent as Instagram } from '../../assets/svg/ig.svg';
import { ReactComponent as Facebook } from '../../assets/svg/fb.svg';
import { ReactComponent as Whatsapp } from '../../assets/svg/wa.svg';

export default function Footer() {
  return (
    <Foot>
      <Foot.List>
        <Foot.Link>
          <Instagram fill="#2ecdda" style={{ width: '20px' }} />
        </Foot.Link>

        <Foot.Link>
          <Facebook fill="#2ecdda" style={{ width: '20px' }} />
        </Foot.Link>

        <Foot.Link>
          <Whatsapp fill="#2ecdda" style={{ width: '20px' }} />
        </Foot.Link>

      </Foot.List>

      <Foot.Description>Todos os direitos reservados - Michel Camargo 2020</Foot.Description>
      
    </Foot>
  );
}
