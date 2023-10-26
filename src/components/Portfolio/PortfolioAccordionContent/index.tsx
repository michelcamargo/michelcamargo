import React, { FC } from 'react';

import { CustomImageProps } from "@/helpers/image";
import { PortfolioCase } from "@/lib/content";
import Image from "next/image";

import Styled from './styles';

interface Props {
	data: PortfolioCase,
}

const PortfolioAccordionContent: FC<Props> = ({ data }: Props) => {
  const { images } = data;
	
  const renderImages = (targetImages: Array<CustomImageProps>, altText: string) => targetImages.map(imageInfo => {
    if (!imageInfo) return undefined;
    
    return (
      <Image key={imageInfo?.alt} src={imageInfo?.src} alt={imageInfo?.alt ?? altText} />
    );
  });
	
  return (
    <Styled.ContentWrapper>
      <Styled.CoverImages>
        {renderImages(images.cover, 'Cover image')}
      </Styled.CoverImages>
      <Styled.CommonImages>
        {renderImages(images.common, 'Case image')}
      </Styled.CommonImages>
    </Styled.ContentWrapper>
  );
};

export default PortfolioAccordionContent;
