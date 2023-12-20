import { forwardRef } from 'react';

import BrandLogo from "@/components/BrandLogo";
import HeaderNavbar from '@/components/HeaderTemplate/HeaderNavbar';
import HeaderToolbar from "@/components/HeaderToolbar";
import { HeaderData } from "@/lib/datahooks";

import HeaderTopBanner from "../../HeaderTopBanner";
import Styled from './styles';

interface Props {
  dataHooks?: HeaderData,
  hideToolbar?: boolean,
}

const DefaultHeader = forwardRef<HTMLDivElement, Props>((
  { dataHooks,
    hideToolbar
  },
  ref
) => {
  
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
      {headerDisclaimer && <HeaderTopBanner data={headerDisclaimer} />}
      {!hideToolbar && <HeaderToolbar />}
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
      <Styled.HeaderOverlayBlur />
    </Styled.HeaderWrapper>
  );
});

export default DefaultHeader;
