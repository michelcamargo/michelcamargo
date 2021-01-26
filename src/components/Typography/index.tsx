import React from 'react';

import { Heading1, Heading2, Heading3, Heading4, Par } from './styles';

interface Props {
  children: string | string[];
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export function H1({ children, color, fontSize, fontWeight }: Props){
  return(
    <Heading1 style={{color: color, fontSize: fontSize, fontWeight: fontWeight}}>
      {children}
    </Heading1>
  );
}

export function H2({ children, color, fontSize, fontWeight }: Props){
  return(
    <Heading2 style={{color: color, fontSize: fontSize, fontWeight: fontWeight}}>
      {children}
    </Heading2>
  );
}

export function H3({ children, color, fontSize, fontWeight }: Props){
  return(
    <Heading3 style={{color: color, fontSize: fontSize, fontWeight: fontWeight}}>
      {children}
    </Heading3>
  );
}

export function H4({ children, color, fontSize, fontWeight }: Props){
  return(
    <Heading4 style={{color: color, fontSize: fontSize, fontWeight: fontWeight}}>
      {children}
    </Heading4>
  );
}

export function Paragraph({ children, color, fontSize, fontWeight }: Props){
  return(
    <Par style={{color: color, fontSize: fontSize, fontWeight: fontWeight}}>
      {children}
    </Par>
  );
}