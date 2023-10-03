import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

import AppLink from "@/components/AppLink";

import Styled, { StyledProps } from './styles';

interface Props extends StyledProps {
  children: ReactNode,
  target?: HTMLAttributeAnchorTarget,
  anchor?: string,
  callback?: () => void,
}

const CustomButton = ({ children, anchor, target, isLoading, isDisabled }: Props) => {
  if (!anchor) return (
    <Styled.Btn isLoading={isLoading} isDisabled={isDisabled}>
      {children}
    </Styled.Btn>
  );
  
  return (
    <AppLink href={anchor} target={target}>
      <Styled.Btn isLoading={isLoading} isDisabled={isDisabled}>
        { children }
      </Styled.Btn>
    </AppLink>
  );
};

export default CustomButton;
