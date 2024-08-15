import React from 'react';

// import CustomCarousel from "@/components/CustomCarousel";
// import { getCustomContentByKey } from "@/helpers/content-handler";
// import CustomContent from "@/helpers/content.helper";
// import { CustomContent } from "@/lib/custom-content";
// import Image from "next/image";
//
// import Styled from './styles';

// interface Props {
//   items: Array<CustomContent>
// }

const PortfolioCarousel = () => {
  
	// const portfolioData = new CustomContent('portfolio', 'CASOS DE TRABALHO', items);
  
	// console.log('portfolio data >>>', portfolioData.getContent());
  
	// const portfolioElements: Array<ReactElement> = items.map((portfolioCase, index) => {
	//
	//   const { content: caseContent } = portfolioCase;
	//
	//   if (!caseContent || !Array.isArray(caseContent)) {
	//     return;
	//   }
	//
	//   const caseImages = getCustomContentByKey('case-images', caseContent);
	//   const caseTitle = getCustomContentByKey('case-title', caseContent) ?? '';
	//   const caseDescription = getCustomContentByKey('case-description', caseContent) ?? '';
	//   const brandData = getCustomContentByKey('case-brand', caseContent);
	//
	//   let caseCover = null;
	//   let brandName = null;
	//   let brandLogo = null;
	//
	//   // const commonImages = [];
	//
	//   if (caseImages && Array.isArray(caseImages)) {
	//     caseCover = getCustomContentByKey('case-cover', caseContent);
	//   }
	//
	//   if (brandData && Array.isArray(brandData)) {
	//     brandName = getCustomContentByKey('case-brand-name', brandData);
	//     brandLogo = getCustomContentByKey('case-brand-logo', brandData);
	//   }
	//
	//   return (
	//     <Styled.PortfolioCaseWrapper key={index.toString(10)}>
	//       { caseCover && <Image src={caseCover} alt={'Capa do caso de trabalho'} width={65} height={120} /> }
	//       { brandLogo && <Image src={brandLogo} alt={'Logotipo do caso de trabalho'} width={65} height={65} /> }
	//       <Styled.PortfolioCaseContent>
	//         <Styled.CaseBrandName>{brandName}</Styled.CaseBrandName>
	//         <Styled.CaseTitle>{caseTitle}</Styled.CaseTitle>
	//         <Styled.CaseDescription>{caseDescription}</Styled.CaseDescription>
	//       </Styled.PortfolioCaseContent>
	//     </Styled.PortfolioCaseWrapper>
	//   );
	// });
  
	return (
		<div>
			{/*<CustomCarousel items={portfolioElements} />*/}
      
		</div>
	);
};

export default PortfolioCarousel;
