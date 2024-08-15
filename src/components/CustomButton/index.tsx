import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import * as React from "react";

import AppLink from "@/components/AppLink";

import Styled, { StyledProps } from './styles';

interface Props extends StyledProps {
  children: ReactNode,
  type?: 'button' | 'submit' | 'reset',
  target?: HTMLAttributeAnchorTarget,
  anchor?: string,
  callback?: () => void,
  beforeIcon?: ReactNode,
  afterIcon?: ReactNode,
  bold?: boolean,
}

const CustomButton = ({
  children, type, anchor, target, isloading, isdisabled, callback, beforeIcon, afterIcon, bold
}: Props) => {
  
  const ButtonComponent = (
    <Styled.Btn
      type={type ?? 'button'}
      isloading={isloading}
      isdisabled={isdisabled}
      onClick={callback}
      startIcon={beforeIcon}
      endIcon={afterIcon}
      bold={bold}
    >
      {children}
    </Styled.Btn>
  );
  
  if (!anchor) return ButtonComponent;
  
  return (
    <AppLink href={anchor} target={target}>
      {ButtonComponent}
    </AppLink>
  );
};

export default CustomButton;
