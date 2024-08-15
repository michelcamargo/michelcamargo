import React, { FC } from 'react';

import { PortfolioCase } from "@/lib/content";
import Image from "next/image";

import Styled from './styles';

interface Props {
	data: PortfolioCase,
}

const PortfolioAccordionHeading: FC<Props> = ({ data }: Props) => {
	const { title, branding, highlighted } = data;
  
	const brandingLogoElement = <Image src={branding.logo} alt={`logo-${branding.name}`} width={24} height={24} />;
	
	return (
		<Styled.AccordionSummary highlighted={highlighted}>
			{/*<Styled.CoverImageContainer cover={images.cover[0].src} />*/}
			<Styled.BrandingRow>
				<Styled.HeadingBrandLogoWrapper>{brandingLogoElement}</Styled.HeadingBrandLogoWrapper>
				<Styled.HeadingBrandName>{branding.name}</Styled.HeadingBrandName>
			</Styled.BrandingRow>
			<Styled.HeadingTitle>{title}</Styled.HeadingTitle>
		</Styled.AccordionSummary>
	);
};

export default PortfolioAccordionHeading;
