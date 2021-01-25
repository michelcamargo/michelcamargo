import React, { ReactNode } from 'react';

import { IntBtn1, IntBtn2 } from './styles';

interface ButtonProps {
  children?: ReactNode;
  color?: string;
  bgColor?: string;
  width?: string;
  to?: string;
}

export function IntButton1({children, color, bgColor, width, to}: ButtonProps){
  return (
    <IntBtn1 color={color} bgColor={bgColor} width={width} to={to}>
      {children}
    </IntBtn1>
  );
}

export function IntButton2({children, color, bgColor, width, to}: ButtonProps){
  return (
    <IntBtn2 color={color} bgColor={bgColor} width={width} to={to}>
      {children}
    </IntBtn2>
  );
}
