import React from 'react';
import Foot from './styles';
import { ReactComponent as Instagram } from '../../assets/svg/ig.svg';
import { ReactComponent as Facebook } from '../../assets/svg/fb.svg';
import { ReactComponent as Whatsapp } from '../../assets/svg/wa.svg';

export default function Footer() {
  return (
    <Foot>
      <Foot.List>

        <Foot.Link href="https://www.facebook.com/camargomichels">
          <Instagram fill="#2ecdda" style={{ width: '20px' }} />
        </Foot.Link>

        <Foot.Link href="https://www.instagram.com/michelscamargo/">
          <Facebook fill="#2ecdda" style={{ width: '20px' }} />
        </Foot.Link>

        <Foot.Link href="https://api.whatsapp.com/send?phone=5544984470159">
          <Whatsapp fill="#2ecdda" style={{ width: '20px' }} />
        </Foot.Link>

      </Foot.List>

      <Foot.Description>
        Direitos reservados, Michel Camargo ©
      </Foot.Description>

    </Foot>
  );
}
