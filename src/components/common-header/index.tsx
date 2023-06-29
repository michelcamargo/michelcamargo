import React from 'react';
import Styled from './styles';
import { HeaderData } from "@/lib/header";
import HeaderNavbar from '@/components/HeaderNavbar';

const DefaultHeader = ({navigationItems}: HeaderData) => {
  console.log('>>>>NAV ITEMS', navigationItems);
  
  return (
    <Styled.HeaderWrapper>
      <Styled.TopContainer>Chamada de atenção persistente no topo da página</Styled.TopContainer>
      <Styled.MidContainer>
        <Styled.LeftContainer>left</Styled.LeftContainer>
        <Styled.RightContainer>
          <HeaderNavbar navbarItems={navigationItems} />
        </Styled.RightContainer>
      </Styled.MidContainer>
      <Styled.BottomContainer></Styled.BottomContainer>
    </Styled.HeaderWrapper>
  );
};

export default DefaultHeader;
