import React, { ReactNode } from 'react';

import { ExtBtn1, ExtBtn2 } from './styles';

interface ButtonProps {
  children?: ReactNode;
  color?: string;
  bgColor?: string;
  width?: string;
  to?: string;
}

export function ExtButton1({children, color, bgColor, width, to}: ButtonProps){
  return (
    <ExtBtn1 color={color} bgColor={bgColor} width={width} href={to}>
      {children}
    </ExtBtn1>
  );
}

export function ExtButton2({children, color, bgColor, width, to}: ButtonProps){
  return (
    <ExtBtn2 color={color} bgColor={bgColor} width={width} href={to}>
      {children}
    </ExtBtn2>
  );
}
