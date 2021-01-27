import React from 'react';

import { Btn1, Btn2 } from './styles';

interface Props{
  children: string;
  color?: string;
  bgColor?: string;
}

export function Button1({children, color, bgColor}: Props){
  
  return(
    <Btn1 color={color} bgColor={bgColor}>
      {children}
    </Btn1>
  );

}

export function Button2({children, color, bgColor}: Props){

  return(
    <Btn2 color={color} bgColor={bgColor}>
      {children}
    </Btn2>
  );

}

