import React, { HTMLAttributeAnchorTarget } from 'react';

import CustomButton from "@/components/CustomButton";
import CustomContent from "@/helpers/custom-content";
import Image from "next/image";

import Styled from './styles';

interface Props {
  socialData?: CustomContent
}

const SocialPresentation = ({ socialData }: Props) => {
  const socialItems = socialData ? socialData.getChildren() : [];
  
  if (!socialData) {
    console.log('socialData', socialData);
    
    return (
      <p>NO SOCIAL DATA</p>
    );
  }
  
  return (
    <Styled.SocialList>
      {socialItems?.map((item, index) => {
        const label = item.getContent('label') as string || '';
        const href = item.getContent('link') as string || '#';
        const icon = item.getContent('icon') as string || null;
        const target = item.getContent('target') as HTMLAttributeAnchorTarget || '_self';

        const logEvent = (socialItem: CustomContent) => {
          console.log('link social - event', socialItem);
        };

        return (
          <CustomButton key={index}
            callback={() => logEvent(item)}
            anchor={href}
            target={target}
          >
            { icon && <Image
              alt={item?.key}
              title={label}
              src={icon}
              width={26}
              height={26}
            />}
            <Styled.SocialItemLabel>
              {label}
            </Styled.SocialItemLabel>
          </CustomButton>
        );
      })}
    </Styled.SocialList>
  );
};

export default SocialPresentation;
