import { forwardRef } from "react";

import FooterCopyright from "@/components/FooterTemplate/FooterCopyright";
import FooterMenu from "@/components/FooterTemplate/FooterMenu";
import FooterPartners from "@/components/FooterTemplate/FooterPartners";

import Styled from './styles';

interface Props {
  minimal?: boolean
}

export const DefaultFooter = forwardRef<HTMLDivElement, Props>(({ minimal }, ref) => {
  return (
    <Styled.FooterWrapper ref={ref}>
      <Styled.FooterContainer>
        <Styled.FooterContent>
          <Styled.FooterLeftSession>
            <FooterMenu />
          </Styled.FooterLeftSession>
          <Styled.FooterRightSession>
            <FooterPartners />
          </Styled.FooterRightSession>
          <Styled.FooterBottomSession>
            <FooterCopyright />
          </Styled.FooterBottomSession>
        </Styled.FooterContent>
      </Styled.FooterContainer>
    </Styled.FooterWrapper>
  );
});
