import React from 'react';

import BrandLogo from "@/components/BrandLogo";
import HeaderNavbar from '@/components/HeaderNavbar';
import { HeaderData } from "@/lib/datahooks";

import HeaderTopBanner from "./HeaderTopBanner";
import Styled from './styles';

interface Props {
  dataHooks?: HeaderData,
}

const DefaultHeader = ({ dataHooks }: Props) => {
  if (!dataHooks) {
    return (
      <Styled.HeaderWrapper>
        <Styled.HeaderContainer>
          <Styled.LeftContainer>
            <BrandLogo />
          </Styled.LeftContainer>
        </Styled.HeaderContainer>
      </Styled.HeaderWrapper>
    );
  }
  
  const { navigationItems, headerDisclaimer } = dataHooks;
  
  return (
    <Styled.HeaderWrapper>
      {headerDisclaimer && <HeaderTopBanner data={headerDisclaimer} />}
      <Styled.HeaderContainer>
        <Styled.MidContainer>
          <Styled.LeftContainer>
            <BrandLogo />
          </Styled.LeftContainer>
          <Styled.RightContainer>
            <HeaderNavbar navbarItems={navigationItems} />
          </Styled.RightContainer>
        </Styled.MidContainer>
      </Styled.HeaderContainer>
    </Styled.HeaderWrapper>
  );
};

export default DefaultHeader;
