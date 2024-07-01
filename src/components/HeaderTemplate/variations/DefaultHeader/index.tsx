import { forwardRef } from 'react';

import BrandLogo from "@/components/BrandLogo";
import HeaderNavbar from '@/components/HeaderTemplate/HeaderNavbar';
import HeaderToolbar from "@/components/HeaderToolbar";
// import { HeaderData } from "@/lib/datahooks";

// import HeaderTopBanner from "../../HeaderTopBanner";
import Styled from './styles';
import {useRouter} from "next/router";
import CustomContent from "@/helpers/content";
// import {CustomContentType} from "@/lib/content";
// import CustomContent from "@/helpers/content";

interface Props {
  dataHooks?: CustomContent,
  hideToolbar?: boolean,
  bypassServerContent?: boolean
}

const DefaultHeader = forwardRef<HTMLDivElement, Props>((
  { dataHooks, hideToolbar = false, bypassServerContent = false},
  ref
) => {
  const router = useRouter();
  const { locale, defaultLocale = 'ptBR', locales = [] } = router;
  
  if (bypassServerContent) {
    return (
      <Styled.HeaderWrapper ref={ref}>
        <Styled.HeaderOverlayBlur />
        <Styled.HeaderContainer>
          <Styled.LeftContainer>
            {/*<BrandLogo />*/}
          </Styled.LeftContainer>
        </Styled.HeaderContainer>
      </Styled.HeaderWrapper>
    );
  }
  
  if (!dataHooks) {
    return (
      <Styled.HeaderWrapper ref={ref}>
        <Styled.HeaderOverlayBlur />
        <Styled.HeaderContainer>
          <Styled.LeftContainer>
            <BrandLogo link={'/'} />
          </Styled.LeftContainer>
        </Styled.HeaderContainer>
      </Styled.HeaderWrapper>
    );
  }
  
  const navigation: any[] = dataHooks.getChild('nav')?.getChildrenAsObjectArray() ?? [];
  const navigationItems = navigation.map((item, index) => {
    const key = Object.keys(item)[0];
    
    return {
      key,
      label: item[key].label.label,
      href: item[key].link.link,
    }
  })
  
  console.log('NAV >>>', navigationItems)
  
  // const { navigationItems, headerDisclaimer } = dataHooks;
  
  
  
  return (
    <Styled.HeaderWrapper>
      {/*{headerDisclaimer && <HeaderTopBanner data={headerDisclaimer} />}*/}
      {!hideToolbar && <HeaderToolbar locale={locale ?? defaultLocale} availableLocales={locales} />}
      <Styled.HeaderContainer>
        <Styled.MidContainer>
          <Styled.LeftContainer>
            <BrandLogo link={'/'} />
          </Styled.LeftContainer>
          <Styled.RightContainer>
            { navigation ? <HeaderNavbar navbarItems={navigationItems} /> : undefined }
          </Styled.RightContainer>
        </Styled.MidContainer>
      </Styled.HeaderContainer>
      <Styled.HeaderOverlayBlur />
    </Styled.HeaderWrapper>
  );
});

export default DefaultHeader;
