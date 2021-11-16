import React, { ReactNode } from 'react';

import { Basecard } from './styles';

import Image from '../Image';
interface CardProps{
  children?: ReactNode;
  srcImage?: string;
  title: string;
  background?: string;
  textColor?: string;
}

export function Card({children, srcImage, title, background, textColor }: CardProps){

  if(srcImage){
    return (
      <Basecard background={background}>
        <Image src={srcImage} width="100px" />
        
        <Basecard.Header color={textColor}>{title}</Basecard.Header>
        {/* <CardHeader style={{color: textColor}}>{title}</CardHeader> */}
        <Basecard.Content color={textColor}>{children}</Basecard.Content>
        {/* <CardContent style={{color: textColor}}>{children}</CardContent> */}

      </Basecard>
      )
  }

  else{
    return (
      <Basecard background={background}>
        <Basecard.Header color={textColor}>{title}</Basecard.Header>
        <Basecard.Content color={textColor}>{children}</Basecard.Content>

      </Basecard>
      )
  }
}
