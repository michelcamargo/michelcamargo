import { forwardRef } from "react";

import Styled from './styles';

interface Props {
  minimal?: boolean
}

export const DefaultFooter = forwardRef<HTMLDivElement, Props>(({ minimal }, ref) => {
  return (
    <Styled.FooterWrapper ref={ref}>
      <Styled.FooterContainer>
        <Styled.FooterContent>
          <>{'footer -> ' + minimal}</>
        </Styled.FooterContent>
      </Styled.FooterContainer>
    </Styled.FooterWrapper>
  );
});
