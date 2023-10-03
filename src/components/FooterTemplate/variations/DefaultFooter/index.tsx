import { forwardRef } from "react";

import FooterCopyright from "@/components/FooterTemplate/FooterCopyright";
import FooterMenu from "@/components/FooterTemplate/FooterMenu";
import FooterPartners from "@/components/FooterTemplate/FooterPartners";
import { FooterData } from "@/lib/datahooks";

import Styled from './styles';

interface Props {
  dataHooks?: FooterData,
  minimal?: boolean
}

export const DefaultFooter = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { dataHooks } = props;
  
  return (
    <Styled.FooterWrapper ref={ref}>
      <Styled.FooterContainer>
        <Styled.FooterContent>
          <Styled.FooterSplitSessions>
            <Styled.FooterLeftSession>
              <FooterMenu items={dataHooks?.menuItems} />
            </Styled.FooterLeftSession>
            <Styled.FooterRightSession>
              <FooterPartners partnerList={dataHooks?.partners} />
            </Styled.FooterRightSession>
          </Styled.FooterSplitSessions>
          <Styled.FooterBottomSession>
            <FooterCopyright />
          </Styled.FooterBottomSession>
        </Styled.FooterContent>
      </Styled.FooterContainer>
    </Styled.FooterWrapper>
  );
});
