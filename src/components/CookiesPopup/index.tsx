/* eslint-disable */
import React from 'react';

import AppConfig from '@/config/next.config';
import CookieConsent from 'react-cookie-consent';
// import { CookieConsentProps } from "react-cookie-consent/src/CookieConsent.props";

import AppLink from "../AppLink";
// import Styled, { acceptBtnStyle, contentStyle, generalStyle, refuseBtnStyle } from './styles';
import Styled from './styles';
import LoadingFeedback from "@/components/LoadingFeedback";

// const CookieConsentWrapper = (props: CookieConsentProps) => {
//   const cookies = new CookieConsent({ ...props });
//
//   return cookies;
// }

const CookiesPopup: React.FC = () => {
  if (!CookieConsent) {
    return <LoadingFeedback />
  }
  
  /* eslint-disable */
  // @ts-ignore
  return (
    <div>
      {/*<CookieConsentWrapper*/}
      {/*  flipButtons*/}
      {/*  buttonText="Fechar e continuar navegando"*/}
      {/*  style={generalStyle}*/}
      {/*  contentStyle={contentStyle}*/}
      {/*  buttonStyle={acceptBtnStyle}*/}
      {/*  declineButtonStyle={refuseBtnStyle}*/}
      {/*>*/}
        <Styled.DisclaimerContainer>
          <Styled.DisclaimerFragment>
            <Styled.DisclaimerText>
              {'Esse site utiliza alguns cookies para fins de acessibilidade e personalização de conteúdo. '}
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
      {/*</CookieConsentWrapper>*/}
    </div>
  );
  /* eslint-disable */
};
export default CookiesPopup;

