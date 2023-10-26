import React, { FC } from 'react';

import { PortfolioCase } from "@/lib/content";
import Image from "next/image";

import Styled from './styles';

interface Props {
	data: PortfolioCase,
}

const PortfolioAccordionContent: FC<Props> = ({ data }: Props) => {
  const { images } = data;
	
  const commonImages = images.common.map(imageInfo => (
    <Image key={imageInfo.alt} src={imageInfo.src} alt={imageInfo.alt ?? 'Case image'} />
  ));
  const coverImages = images.cover.map(imageInfo => (
    <Image key={imageInfo.alt} src={imageInfo.src} alt={imageInfo.alt ?? 'Case image'} />
  ));
	
  return (
    <Styled.ContentWrapper>
      <Styled.CoverImages>
        {commonImages}
      </Styled.CoverImages>
      <Styled.CommonImages>
        {coverImages}
      </Styled.CommonImages>
    </Styled.ContentWrapper>
  );
};

export default PortfolioAccordionContent;
