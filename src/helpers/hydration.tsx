import React from "react";

import PortfolioAccordionContent from "@/components/Portfolio/PortfolioAccordionContent";
import PortfolioAccordionHeading from "@/components/Portfolio/PortfolioAccordionHeading";
import CustomContent from "@/helpers/content";
import { CustomImageProps } from "@/helpers/image";
import { CustomAccordionItem } from "@/lib/accordion";
import { PortfolioCase } from "@/lib/content";
import { ServerViewProps } from "@/lib/datahooks";

const parseViewProps = (viewProps: ServerViewProps) => {
  const { metadata, content } = viewProps;
  
  // if (!body || !Array.isArray(body.sessions)) {
  //   return viewProps as unknown as ViewData;
  // }
  
  return {
    viewTitle: metadata.title,
    viewSubtitle: viewProps.metadata.description ?? undefined,
    viewSessions: content.sessions?.map(session => new CustomContent(session)),
  };
};

const portfolioToAccordion = (portfolio: CustomContent) => {
  const rawCaseTitle = portfolio.getChild('case-title');
  const rawCaseDescription = portfolio.getChild('case-description');
  const rawCaseBrand = portfolio.getChild('case-brand');
  const rawCaseImages = portfolio.getChild('case-images');
  
  if (!rawCaseTitle || !rawCaseDescription || !rawCaseBrand) {
    return (
      <>ITEM INCOMPLETO</>
    );
  }
  
  const caseBranding = {
    logo: rawCaseBrand?.getChild('case-brand-logo')?.getContent() ?? '',
    name: rawCaseBrand?.getChild('case-brand-name')?.getContent() ?? '',
    color: rawCaseBrand?.getChild('case-brand-color')?.getContent() ?? '',
  };
  
  const caseImages = rawCaseImages?.getChildren();
  
  const coverImages = caseImages?.filter(item => item.key === 'cover-img-src');
  const coverParsedImages = coverImages?.map(image => {
    return {
      src: image.getContent() ?? '',
      alt: 'cover-image'
    } as CustomImageProps;
  });
  
  const commonImages = caseImages?.filter(item => item.key === 'common-img-src');
  const commonParsedImages = commonImages?.map(image => {
    return {
      src: image.getContent() ?? '',
      alt: 'case-image'
    } as CustomImageProps;
  });
  
  const caseItem: PortfolioCase = {
    title: rawCaseTitle?.getContent() ?? '',
    description: rawCaseDescription?.getContent() ?? '',
    images: {
      cover: coverParsedImages ?? [],
      common: commonParsedImages ?? [],
    },
    branding: caseBranding,
    highlighted: false,
  };
  
  return {
    name: caseItem.title,
    heading: <PortfolioAccordionHeading data={caseItem} />,
    content: <PortfolioAccordionContent data={caseItem} />,
    highlighted: caseItem.highlighted,
  } as CustomAccordionItem;
};

export default {
  parseViewProps,
  portfolioToAccordion,
};
