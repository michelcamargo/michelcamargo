import { forwardRef } from 'react';

import BrandLogo from "@/components/BrandLogo";
import { HeaderData } from "@/lib/datahooks";

import Styled from './styles';

interface Props {
  dataHooks?: HeaderData
}

const MinimalHeader = forwardRef<HTMLDivElement, Props>((props, ref) => {
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
  
  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderOverlayBlur />
      <Styled.HeaderContainer>
        <Styled.MidContainer>
          <Styled.LeftContainer>
            <BrandLogo />
          </Styled.LeftContainer>
          <Styled.RightContainer>
          
          </Styled.RightContainer>
        </Styled.MidContainer>
      </Styled.HeaderContainer>
    </Styled.HeaderWrapper>
  );
});

export default MinimalHeader;
