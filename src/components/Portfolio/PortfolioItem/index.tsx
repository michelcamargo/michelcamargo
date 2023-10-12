import React from 'react';

import CustomContent from "@/helpers/custom-content";

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
  
  // console.log('PORTFOLIO CASE:', portfolioCase);
  
  return (
    <Styled.Wrapper>
      <Styled.CaseTitle>
        {portfolioCase.title}
      </Styled.CaseTitle>
      <Styled.CaseDescription>
        {portfolioCase.description}
      </Styled.CaseDescription>
      <Styled.CaseBrandName>
        {portfolioCase.branding.name}
      </Styled.CaseBrandName>
      <PortfolioImageGroup.Cover items={portfolioCase.images.cover} />
      <PortfolioImageGroup.Common items={portfolioCase.images.common} />
    </Styled.Wrapper>
  );
};

export default PortfolioItem;
