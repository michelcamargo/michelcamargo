import React from 'react';

import { Basecard } from './styles';

interface Props{
  children?: JSX.Element | JSX.Element[];
  color?: string;
}

export function Card({children, color}: Props){
  return (
    <Basecard backgroundColor={color}>
      {children}
    </Basecard>
    )
}
