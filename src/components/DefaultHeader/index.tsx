import React from 'react';
import Styled from './styles';
import { HeaderData } from "@/lib/datahooks";
import HeaderNavbar from '@/components/HeaderNavbar';
import HeaderTopDisclaimer from "@/components/DefaultHeader/HeaderTopDisclaimer";
import BrandLogo from "@/components/BrandLogo";

interface Props {
  dataHooks?: HeaderData,
}

const DefaultHeader = ({ dataHooks }: Props) => {
  if (!dataHooks) {
    return (
      <Styled.HeaderWrapper>
        <Styled.LeftContainer>
          <BrandLogo />
        </Styled.LeftContainer>
      </Styled.HeaderWrapper>
    );
  }
  
  const { navigationItems, headerDisclaimer } = dataHooks;
  
  return (
    <Styled.HeaderWrapper>
      {headerDisclaimer && <HeaderTopDisclaimer data={headerDisclaimer} />}
      <Styled.MidContainer>
        <Styled.LeftContainer>
          <BrandLogo />
        </Styled.LeftContainer>
        <Styled.RightContainer>
          <HeaderNavbar navbarItems={navigationItems} />
        </Styled.RightContainer>
      </Styled.MidContainer>
      <Styled.BottomContainer></Styled.BottomContainer>
    </Styled.HeaderWrapper>
  );
};

export default DefaultHeader;
