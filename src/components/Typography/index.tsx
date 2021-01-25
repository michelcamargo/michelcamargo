import React from 'react';

import { MTitle, Heading2, Heading3, Heading4 } from './styles';

interface Props {
  children: string | string[];
  color?: string;
  tduration?: string;
  inactive?: boolean;
  opacity?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
}

export function MainTitle({ children, color, opacity, margin, fontSize, fontWeight }: Props){
  return(
    <MTitle color={color} opacity={opacity} margin={margin} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </MTitle>
  );
}

export function H2({ children, color, tduration, inactive, opacity, margin, fontSize, fontWeight }: Props){
  return(
    <Heading2 color={color} transitionDuration={tduration} opacity={opacity} margin={margin} inactive={inactive} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </Heading2>
  );
}

export function H3({ children, color, tduration, inactive, opacity, margin, fontSize, fontWeight }: Props){
  return(
    <Heading3 color={color} transitionDuration={tduration} opacity={opacity} margin={margin} inactive={inactive} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </Heading3>
  );
}

export function H4({ children, color, tduration, inactive, opacity, margin, fontSize, fontWeight }: Props){
  return(
    <Heading4 color={color} transitionDuration={tduration} opacity={opacity} margin={margin} inactive={inactive} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </Heading4>
  );
}