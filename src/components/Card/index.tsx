import React from 'react';

import { Basecard, CardTitle, CardContent } from './styles';

import Image from '../../components/Image';
interface CardProps{
  children?: JSX.Element | JSX.Element[];
  title?: string | string[];
  color?: string;
  textColor?: string;
  marginTitle?: string;
  srcImage?: string;
}

export function Card({children, title, color, textColor, marginTitle, srcImage}: CardProps){
  
  // if(color){
  //   console.log(color);

  //   let bgColorHover: number = parseInt(color);
  //   console.log(bgColorHover);
  // }
  
  if(srcImage){
    return (
      <Basecard backgroundColor={color}>
        <Image src={srcImage} width="100px"></Image>
  
        <CardTitle textColor={textColor} margin={marginTitle}> {title || ' '} </CardTitle>
        <CardContent textColor={textColor}> {children} </CardContent>
        
      </Basecard>
      )
  }

  else{
    return (
      <Basecard backgroundColor={color}>
  
        <CardTitle textColor={textColor} margin={marginTitle}>{title || ' '}</CardTitle>
        <CardContent textColor={textColor}> {children} </CardContent>
      </Basecard>
      )
  }
}
