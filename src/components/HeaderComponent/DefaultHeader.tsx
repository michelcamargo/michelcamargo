import React from 'react';
import Styled from './styles';
import { HeaderData } from "@/lib/datahooks";
import HeaderNavbar from '@/components/HeaderNavbar';
import HeaderTopBanner from "./HeaderTopBanner";
import BrandLogo from "@/components/BrandLogo";

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
