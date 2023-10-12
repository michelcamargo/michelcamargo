import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

import AppLink from "@/components/AppLink";

import Styled, { StyledProps } from './styles';

interface Props extends StyledProps {
  children: ReactNode,
  type?: 'button' | 'submit' | 'reset',
  target?: HTMLAttributeAnchorTarget,
  anchor?: string,
  callback?: () => void,
}

const CustomButton = ({ children, type, anchor, target, isloading, isdisabled }: Props) => {
  if (!anchor) return (
    <Styled.Btn type={type ?? 'button'} isloading={isloading} isdisabled={isdisabled}>
      {children}
    </Styled.Btn>
  );
  
  return (
    <AppLink href={anchor} target={target}>
      <Styled.Btn type={type ?? 'button'} isloading={isloading} isdisabled={isdisabled}>
        { children }
      </Styled.Btn>
    </AppLink>
  );
};

export default CustomButton;
