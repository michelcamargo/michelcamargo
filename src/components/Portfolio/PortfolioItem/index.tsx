import React from 'react';

import CustomContent from "@/helpers/content";
import Image from 'next/image';

import PortfolioImageGroup from './PortfolioImageGroup';
import Styled from './styles';

interface Props {
	data: CustomContent
}

const PortfolioItem = ({ data }: Props) => {
  const rawCaseTitle = data.getChild('case-title');
  const rawCaseDescription = data.getChild('case-description');
  const rawCaseBrand = data.getChild('case-brand');
  const rawCaseImages = data.getChild('case-images');
  
  if (!rawCaseTitle || !rawCaseDescription || !rawCaseBrand) {
    return (
      <>ITEM INCOMPLETO</>
    );
  }
  
  const caseBranding = {
    logo: rawCaseBrand?.getChild('case-brand-logo')?.getContent(),
    name: rawCaseBrand?.getChild('case-brand-name')?.getContent(),
    color: rawCaseBrand?.getChild('case-brand-color')?.getContent(),
  };
  
  const caseImages = rawCaseImages?.getChildren();
  
  const portfolioCase = {
    title: rawCaseTitle?.getContent() ?? '',
    description: rawCaseDescription?.getContent() ?? '',
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
