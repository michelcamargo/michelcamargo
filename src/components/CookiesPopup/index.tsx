/* eslint-disable */
import React from 'react';

import AppConfig from '@/configs/next.env';
import CookieConsent from 'react-cookie-consent';

import UnicodeBg from '../../assets/img/disclaimer/unicodebg.jpg';
import AppLink from "../AppLink";
import Styled from './styles';

const CookiesPopup = () => {
  const infoText = 'Nosso site usa alguns cookies e registra seu endereço IP para fins de acessibilidade, ' +
    'segurança e gerenciamento de seu acesso à rede de telecomunicações. ' +
    'Você pode desativar a coleta de dados e os cookies alterando as configurações do navegador, ' +
    'mas isso pode afetar o funcionamento deste site.';
  
  const secondDisclaimer = 'Com o seu consentimento, podemos utilizar cookies' +
    ' e seu endereço IP para coletar estatísticas individuais ' +
    'e fornecer a você ofertas e anúncios personalizados sujeitos à +Política de Privacidade+ e aos +Termos de Uso+.' +
    'Você pode ajustar ou retirar seu consentimento a qualquer momento nas configurações.';
  
  const generalStyle = {
    display: 'flex',
    'flex-direction': 'column',
    right: 0,
    backgroundColor: 'transparent',
    backgroundImage: `url(${UnicodeBg.src})`,
    backgroundSize: 'cover', // Define o tamanho da imagem de fundo
    backgroundRepeat: 'no-repeat', // Impede a repetição da imagem
    backgroundPosition: 'center center', // Centraliza a imagem de fundo
    color: '#FFFFFF',
    width: '640px',
    marginLeft: 'auto',
    
    padding: '0 38px',
  };
  
  const contentStyle = {
    display: 'flex'
  };
  const acceptBtnStyle = {
    borderRadius: '4px',
    padding: '8px 12px',
    background: 'unset',
    color: 'white',
    'font-weight': 'bold',
  };
  const refuseBtnStyle = {
    background: 'black',
    borderRadius: '4px',
    'font-weight': 'bold',
  };
  
  /* eslint-disable */
  return (
    <CookieConsent
      flipButtons
      enableDeclineButton
      declineButtonText={"Recusar [N]"}
      buttonText="Aceitar [Y]"
      style={generalStyle}
      contentStyle={contentStyle}
      buttonStyle={acceptBtnStyle}
      declineButtonStyle={refuseBtnStyle}
    >
      <Styled.DisclaimerContainer>
        <Styled.DisclaimerText>
          {infoText}
          <AppLink href={`${AppConfig.APP_URL}/privacy`}>
            Saiba mais
          </AppLink>
        </Styled.DisclaimerText>
        <Styled.DisclaimerText>{secondDisclaimer}</Styled.DisclaimerText>
      </Styled.DisclaimerContainer>
      
    </CookieConsent>
  );
  /* eslint-disable */
};

export default CookiesPopup;
