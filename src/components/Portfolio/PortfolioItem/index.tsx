import React from 'react';

import CustomContent from "@/helpers/content.helper";
import Image from 'next/image';

import PortfolioImageGroup from './PortfolioImageGroup';
import Styled from './styles';

interface Props {
	data: CustomContent
}

const PortfolioItem = ({ data }: Props) => {
	const rawCaseTitle = data.get('case-title');
	const rawCaseDescription = data.get('case-description');
	const rawCaseBrand = data.get('case-brand');
	const rawCaseImages = data.get('case-images');
 
	if (!rawCaseTitle || !rawCaseDescription || !rawCaseBrand) {
		return (
			<>ITEM INCOMPLETO</>
		);
	}
 
	const caseBranding = {
		logo: rawCaseBrand?.get('case-brand-logo')?.getValue(),
		name: rawCaseBrand?.get('case-brand-name')?.getValue(),
		color: rawCaseBrand?.get('case-brand-color')?.getValue(),
	};
 
	const caseImages = rawCaseImages?.getChildren();
 
	const portfolioCase = {
		title: rawCaseTitle?.getValue() ?? '',
		description: rawCaseDescription?.getValue() ?? '',
		images: {
			cover: caseImages?.filter(item => item.key === 'cover-img-src') ?? [],
			common: caseImages?.filter(item => item.key === 'common-img-src') ?? [],
		},
		branding: caseBranding,
	};
 
	return (
		<Styled.Wrapper>
			<Styled.CardOverlay background={portfolioCase.branding.color ?? '#FFFFFF79'} />
			<Styled.CardContent background={portfolioCase.branding.color ?? '#FFFFFF79'}>
				<Styled.PortfolioHead>
					<Styled.Branding>
						{ portfolioCase.branding.logo
							// eslint-disable-next-line max-len
							? <Image src={portfolioCase.branding.logo ?? ''} alt={`Logotipo ${portfolioCase.branding.name}`} />
							: <Styled.CaseBrandName>{portfolioCase.branding.name}</Styled.CaseBrandName>
						}
					</Styled.Branding>
					<Styled.PortfolioHeading>
						<Styled.CaseTitle>
							{portfolioCase.title}
						</Styled.CaseTitle>
						<Styled.CaseDescription>
							{portfolioCase.description}
						</Styled.CaseDescription>
					</Styled.PortfolioHeading>
				</Styled.PortfolioHead>
				<Styled.PortfolioContent>
					<PortfolioImageGroup.Cover items={portfolioCase.images.cover} />
					<PortfolioImageGroup.Common items={portfolioCase.images.common} />
				</Styled.PortfolioContent>
			</Styled.CardContent>
		</Styled.Wrapper>
	);
};

export default PortfolioItem;
