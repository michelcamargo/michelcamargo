import {forwardRef, useMemo} from 'react';

import BrandLogo from "@/components/BrandLogo";
import HeaderNavbar from '@/components/HeaderTemplate/HeaderNavbar';
import HeaderToolbar from "@/components/HeaderToolbar";
import HeaderTopBanner from "../../HeaderTopBanner";
import Styled from './styles';
import { useRouter } from "next/router";
import CustomContent from "@/helpers/content.helper";
import {CustomBannerData} from "@/lib/content";

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
  
  const { navigation, persistentBanner } = useMemo(() => {
    const bannerInfo = dataHooks?.get('banner');
    
    bannerInfo && console.log('bannerInfo', bannerInfo);
    
    const banner: CustomBannerData | undefined = bannerInfo ? {
      heading: '',
      text: '',
      href: '',
      image: '',
      background: '',
    } : undefined;
    
    return {
      navigation: dataHooks?.getChildren('nav'),
      persistentBanner: banner,
    }
  }, [dataHooks]);
  
  const navigationItems = navigation?.map((item, index) => {
    const navItem = item.toObject<{ label: string, link: string }>();
    return {
      key: `${index}-${navItem.label}`,
      label: navItem.label,
      href: navItem.link,
    }
  }) ?? []
  
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
  
  return (
    <Styled.HeaderWrapper>
      {persistentBanner ? <HeaderTopBanner data={persistentBanner} /> : undefined}
      {!hideToolbar ? <HeaderToolbar locale={locale ?? defaultLocale} availableLocales={locales} /> : undefined}
      <Styled.HeaderContainer>
        <Styled.MidContainer>
          <Styled.LeftContainer>
            <BrandLogo link={'/'} />
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
