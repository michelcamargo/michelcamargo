import React, { MouseEvent } from 'react';

import CustomContent from "@/helpers/custom-content";
import Image from "next/image";

import Styled from './styles';

interface Props {
  socialData?: CustomContent
}

const SocialPresentation = ({ socialData }: Props) => {
  const socialItems = socialData ? socialData.getChildren() : [];
  
  if (!socialData) {
    return (
      <>
        {'NO SOCIAL'}
      </>
    );
  }
  
  return (
    <Styled.SocialList>
      {socialItems?.map((item, index) => {
        const label = item.getContent('label') as string;
        const href = item.getContent('link') as string;
        const icon = item.getContent('icon') as string;
        const target = item.getContent('target') as string;
  
        const logEvent = (event: MouseEvent<HTMLElement>) => {
          console.log('link social - event', event);
        };
        
        return (
          <Styled.SocialItem key={index}
            variant="body2"
            onClick={logEvent}
            href={href}
            target={target}
          >
            <Image
              alt={item.key}
              title={label}
              src={icon}
              width={26}
              height={26}
            />
            <Styled.SocialItemLabel>
              {label}
            </Styled.SocialItemLabel>
          </Styled.SocialItem>
        );
      })}
    </Styled.SocialList>
  );
};

export default SocialPresentation;
