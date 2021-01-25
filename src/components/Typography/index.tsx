import React from 'react';

import { MTitle, Heading2, Heading3, Heading4 } from './styles';

interface Props {
  children: string | string[];
  color?: string;
  tduration?: string;
  inactive?: boolean;
  opacity?: string;
}

export function MainTitle({ children, color, tduration, inactive, opacity }: Props){

  if(inactive){
    return(
      <MTitle color={color} transitionDuration={tduration} opacity={opacity}>
        {children}
      </MTitle>
    );
  }

  else{
    return(
      <MTitle color={color} >
        {children}
      </MTitle>
    );
  }
}

export function H2({ children, color, tduration, inactive, opacity }: Props){
  
  if(inactive){
    return(
      <Heading2 color={color} transitionDuration={tduration} opacity={opacity}>
        {children}
      </Heading2>
    );
  }

  else{
    return(
      <Heading2 color={color} >
        {children}
      </Heading2>
    );
  }

}

export function H3({ children, color, tduration, inactive, opacity }: Props){
  if(inactive){
    return(
      <Heading3 color={color} transitionDuration={tduration} opacity={opacity}>
        {children}
      </Heading3>
    );
  }

  else{
    return(
      <Heading3 color={color} >
        {children}
      </Heading3>
    );
  }
}

export function H4({ children, color, tduration, inactive, opacity }: Props){
  if(inactive){
    return(
      <Heading4 color={color} transitionDuration={tduration} opacity={opacity}>
        {children}
      </Heading4>
    );
  }

  else{
    return(
      <Heading4 color={color} >
        {children}
      </Heading4>
    );
  }
}