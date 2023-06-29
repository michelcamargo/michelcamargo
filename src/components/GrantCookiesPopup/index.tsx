import React from 'react';

import CookieConsent from 'react-cookie-consent';

import NextConfig from '@/configs/next.env';

import Styled from './styles';
import Link from "next/link";

const Cookies = () => {
  
  const infoText = 'Ao navegar no site, você concorda em utilizar cookies para obter uma melhor experiência no site, ' +
    'além de colaborar com a análise e personalização do conteúdo apresentado.';
  
  return (
    <CookieConsent
      flipButtons
      enableDeclineButton
      declineButtonText="Recusar"
      buttonText="Aceitar cookies"
    >
      <Styled.DisclaimerText>{infoText}</Styled.DisclaimerText>
      <Link
        target="_blank"
        href={`${NextConfig.APP_URL}/privacy`}
      >
        Saiba mais
      </Link>
    </CookieConsent>
  );
};

export default Cookies;
