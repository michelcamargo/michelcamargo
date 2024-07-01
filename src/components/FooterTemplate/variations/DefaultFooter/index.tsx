import { forwardRef } from "react";

import FooterCopyright from "@/components/FooterTemplate/FooterCopyright";
import FooterDisclaimer from "@/components/FooterTemplate/FooterDisclaimer";
// import FooterMenu from "@/components/FooterTemplate/FooterMenu";
// import FooterPartners from "@/components/FooterTemplate/FooterPartners";
// import { FooterData } from "@/lib/datahooks";

import Styled from './styles';
import CustomContent from "@/helpers/content";

interface Props {
  // dataHooks?: FooterData,
  dataHooks?: CustomContent,
  minimal?: boolean
  bypassServerContent?: boolean
}

export const DefaultFooter = forwardRef<HTMLDivElement, Props>((
  { dataHooks, bypassServerContent = false }, ref
) => {
  
  if (bypassServerContent) {
    return (
      <Styled.FooterWrapper ref={ref}>
        <Styled.FooterContainer>
          <Styled.FooterContent>
            <Styled.FooterSplitSessions>
              <Styled.FooterLeftSession>
                {/*<FooterMenu items={dataHooks?.menuItems} />*/}
              </Styled.FooterLeftSession>
              <Styled.FooterRightSession>
                {/*<FooterPartners partnerList={dataHooks?.partners} />*/}
              </Styled.FooterRightSession>
            </Styled.FooterSplitSessions>
          </Styled.FooterContent>
          <Styled.FooterBottomSession>
            <FooterDisclaimer />
            <FooterCopyright />
          </Styled.FooterBottomSession>
        </Styled.FooterContainer>
      </Styled.FooterWrapper>
    )
  }
  
  return (
    <Styled.FooterWrapper ref={ref}>
      <Styled.FooterContainer>
        <Styled.FooterContent>
          <Styled.FooterSplitSessions>
            <Styled.FooterLeftSession>
              {/*<FooterMenu items={dataHooks?.menuItems} />*/}
            </Styled.FooterLeftSession>
            <Styled.FooterRightSession>
              {/*<FooterPartners partnerList={dataHooks?.partners} />*/}
            </Styled.FooterRightSession>
          </Styled.FooterSplitSessions>
        </Styled.FooterContent>
        <Styled.FooterBottomSession>
          <FooterDisclaimer />
          <FooterCopyright />
        </Styled.FooterBottomSession>
      </Styled.FooterContainer>
    </Styled.FooterWrapper>
  );
});
