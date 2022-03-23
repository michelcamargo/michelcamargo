import { styled } from "frontity";
import { ReactNode } from "react";

type FlexProps = {
    containerWidth?: string,
    background?: string,
    children?: ReactNode | ReactNode[],
    className?: string
    topSpaced?: boolean,
    bottomSpaced?: boolean
}

export const FlexRow = styled.div<FlexProps>`
  background: ${({background}) => background };
  padding-top: ${({ topSpaced }) => topSpaced && '2rem'};
  padding-bottom: ${({ bottomSpaced }) => bottomSpaced && '2rem'};
`;

export const FlexRowContainer = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: ${({ containerWidth }) => containerWidth};
  background: ${({ background }) => background};
`;

export const FlexRowContent = styled.div<FlexProps>`
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const FlexCol = styled.div<FlexProps>``;

export const FlexColContent = styled.div<FlexProps>``;

export const FlexColItem = styled.div<FlexProps>``;
