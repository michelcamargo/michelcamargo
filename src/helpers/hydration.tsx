import React from "react";

import PortfolioAccordionContent from "@/components/Portfolio/PortfolioAccordionContent";
import PortfolioAccordionHeading from "@/components/Portfolio/PortfolioAccordionHeading";
import CustomContent from "@/helpers/content";
import { NO_IMAGE_SRC } from "@/helpers/skeleton";
import { CustomAccordionItem } from "@/lib/accordion";
import { PortfolioCase, CustomImageProps, ImageDimensions, CustomContentType } from "@/lib/content";
import { ServerViewProps } from "@/lib/datahooks";

/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
const parseViewProps =  <T = CustomContentType>(viewProps: ServerViewProps<any>, generic?: boolean) => {
  const { metadata, content } = viewProps;
  
  return {
    viewTitle: metadata.title,
    viewSubtitle: viewProps.metadata.description ?? undefined,
    viewSessions: generic ? content.sessions as unknown as Array<T>
      : content.sessions?.map(session => new CustomContent(session as CustomContentType)),
  };
};

const portfolioToAccordion = (
  portfolio: CustomContent,
  coverImageDimensions: ImageDimensions,
  commonImageDimensions: ImageDimensions
) => {
  const rawCaseTitle = portfolio.getChild('case-title');
  const rawCaseDescription = portfolio.getChild('case-description');
  const rawCaseBrand = portfolio.getChild('case-brand');
  const rawCaseImages = portfolio.getChild('case-images');
  
  if (!rawCaseTitle || !rawCaseDescription || !rawCaseBrand) {
    return (
      <>ITEM INCOMPLETO</>
    );
  }
  
  const brandLogoContent = rawCaseBrand?.getChild('case-brand-logo')?.getContent();
  
  const brandLogoSrc = brandLogoContent ?? '';
  
  const caseBranding = {
    logo: brandLogoSrc.length > 0 ? brandLogoSrc : NO_IMAGE_SRC({ width: 24, height: 24 }),
    name: rawCaseBrand?.getChild('case-brand-name')?.getContent() ?? '',
    color: rawCaseBrand?.getChild('case-brand-color')?.getContent() ?? '',
  };
  
  const caseImages = rawCaseImages?.getChildren();
  
  const coverImages = caseImages?.filter(item => item.key === 'cover-img-src');
  const coverParsedImages = coverImages?.map(image => {
    const imageSrc = image.getContent() ?? '';
    
    return {
      src: imageSrc.length > 0 ? imageSrc : NO_IMAGE_SRC(coverImageDimensions),
      alt: 'cover-image',
      ...coverImageDimensions,
    } as CustomImageProps;
  });
  
  const commonImages = caseImages?.filter(item => item.key === 'common-img-src');
  const commonParsedImages = commonImages?.map(image => {
    const imageSrc = image.getContent() ?? '';
    
    return {
      src: imageSrc.length > 0 ? imageSrc : NO_IMAGE_SRC(commonImageDimensions),
      alt: 'case-image',
      ...commonImageDimensions,
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
    backgroundImage: caseItem.images.cover[0]?.src,
    heading: <PortfolioAccordionHeading data={caseItem} />,
    content: <PortfolioAccordionContent data={caseItem} />,
    highlighted: caseItem.highlighted,
  } as CustomAccordionItem;
};

export default {
  parseViewProps,
  portfolioToAccordion,
};
