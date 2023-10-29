import React from 'react';

import AppLink from "@/components/AppLink";

import Styled from './styles';

const FooterDisclaimer = () => {
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.DisclaimerText>
          {'Todas as informações estão sujeitas à Lei Geral de Proteção de Dados,'}
        </Styled.DisclaimerText>
        <Styled.DisclaimerText>
          {'Mais informações em nossos'}
          <AppLink href={'/terms'}>{' termos de política e privacidade'}</AppLink>{'.'}
        </Styled.DisclaimerText>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default FooterDisclaimer;
