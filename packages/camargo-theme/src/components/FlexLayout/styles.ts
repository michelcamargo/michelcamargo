import { styled } from "frontity";
import { ReactNode } from "react";

type FlexProps = {
    containerWidth?: string,
    background?: string,
    children?: ReactNode | ReactNode[],
    className?: string
}

export const FlexRow = styled.div<FlexProps>`
  background: ${props => props.background}
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

export const FlexRowContainer = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: ${props => props.containerWidth};
`;

export const FlexRowContent = styled.div<FlexProps>`
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const FlexCol = styled.div<FlexProps>``;

export const FlexColContent = styled.div<FlexProps>``;
