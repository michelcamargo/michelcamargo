/* eslint-disable */
import React from 'react';

import AppConfig from '@/config/next.config';
import CookieConsent from 'react-cookie-consent';

import UnicodeBg from '../../assets/img/disclaimer/unicodebg.jpg';
import AppLink from "../AppLink";
import Styled from './styles';

const CookiesPopup = () => {
  const generalStyle = {
    display: 'block',
    right: 0,
    height: 'auto',
    backgroundColor: 'transparent',
    backgroundImage: `url(${UnicodeBg.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    color: '#FFFFFF',
    width: '512px',
    marginLeft: 'auto',
    padding: '16px',
  };
  
  const contentStyle = {
    display: 'block',
    padding: 0,
    height: 'auto',
    flex: 1,
  };
  const acceptBtnStyle = {
    borderRadius: '4px',
    background: 'none',
    color: 'white',
    fontWeight: 'bold',
    padding: 0,
    textDecoration: 'underline white'
  };
  const refuseBtnStyle = {
    background: 'black',
    borderRadius: '4px',
    fontWeight: 'bold',
  };
  
  /* eslint-disable */
  // @ts-ignore
  return (
    <CookieConsent
      flipButtons
      buttonText="Fechar e continuar navegando"
      style={generalStyle}
      contentStyle={contentStyle}
      buttonStyle={acceptBtnStyle}
      declineButtonStyle={refuseBtnStyle}
    >
      <Styled.DisclaimerContainer>
        <Styled.DisclaimerFragment>
          <Styled.DisclaimerText>
            {'Esse site utiliza alguns cookies para fins de acessibilidade e personalização de conteúdo.'}
            {'Com o seu consentimento, sua experiência de navegação será aprimorada de acordo com as configurações do seu navegador'}
            {'de acordo com as '}
            <AppLink color={'#FFFFFF'} underline={'static'} href={`${AppConfig.appUrl}/terms`}>{'Políticas de Privacidade'}</AppLink>
            {'.'}
          </Styled.DisclaimerText>
        </Styled.DisclaimerFragment>
        <br />
        <Styled.DisclaimerFragment>
          <Styled.DisclaimerText>
            {'Você pode desativar a personalização de experiência a qualquer momento nas configurações do navegador. ' +
              'note que essa ação pode comprometer sua navegação e o funcionamento do site.'}
          </Styled.DisclaimerText>
        </Styled.DisclaimerFragment>
      </Styled.DisclaimerContainer>
    </CookieConsent>
  );
  /* eslint-disable */
};

export default CookiesPopup;
