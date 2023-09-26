import { forwardRef } from 'react';

import BrandLogo from "@/components/BrandLogo";
import HeaderNavbar from '@/components/HeaderTemplate/HeaderNavbar';
import { HeaderData } from "@/lib/datahooks";

import HeaderTopBanner from "../../HeaderTopBanner";
import Styled from './styles';

interface Props {
  dataHooks?: HeaderData
}

const DefaultHeader = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { dataHooks } = props;
  
  if (!dataHooks) {
    return (
      <Styled.HeaderWrapper ref={ref}>
        <Styled.HeaderOverlayBlur />
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
      <Styled.HeaderOverlayBlur />
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
});

export default DefaultHeader;
