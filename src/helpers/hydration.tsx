import React, { cloneElement, ReactElement } from "react";

import PortfolioAccordionContent from "@/components/Portfolio/PortfolioAccordionContent";
import PortfolioAccordionHeading from "@/components/Portfolio/PortfolioAccordionHeading";
import CustomContent from "@/helpers/content.helper";
import CustomContentHelper from "@/helpers/custom-content.helper";
import { NO_IMAGE_SRC } from "@/helpers/skeleton";
import { CustomAccordionItem } from "@/lib/accordion";
import { PortfolioCase, CustomImageProps, ImageDimensions } from "@/lib/content";
import { CommonPageProps, ServerViewProps } from "@/lib/datahooks";
import merge from "lodash.merge";

const parseViewProps = (viewProps: ServerViewProps) => {
	const { meta, content } = viewProps;
 
	let sessions: Array<CustomContent> = [];
	
	if (content && content.sessions && content?.sessions?.children?.length) {
		const items = content.sessions.children;
		sessions = items.map(item => CustomContentHelper.parseContent(item));
	}
	
	return {
		title: meta.title,
		subtitle: meta.description ?? undefined,
		sessions,
	};
};

const getHydratedPageElement = (element: ReactElement, hydratedProps?: CommonPageProps) => {
	if (!hydratedProps) return element;
 
	const mergedProps = merge({}, element.props, hydratedProps);
	if (hydratedProps?.data) {
		mergedProps.data.sessions = hydratedProps.data.sessions ? hydratedProps.data.sessions : [];
	}

	return cloneElement(element, mergedProps);
};

const portfolioToAccordion = (
	portfolio: CustomContent,
	coverImageDimensions: ImageDimensions,
	commonImageDimensions: ImageDimensions
) => {
	const rawCaseTitle = portfolio.get('case-title');
	const rawCaseDescription = portfolio.get('case-description');
	const rawCaseBrand = portfolio.get('case-brand');
	const rawCaseImages = portfolio.get('case-images');
 
	if (!rawCaseTitle || !rawCaseDescription || !rawCaseBrand) {
		return (
			<>ITEM INCOMPLETO</>
		);
	}
 
	const brandLogoContent = rawCaseBrand?.get('case-brand-logo')?.getValue();
 
	const brandLogoSrc = brandLogoContent ?? '';
 
	const caseBranding = {
		logo: brandLogoSrc.length > 0 ? brandLogoSrc : NO_IMAGE_SRC({ width: 24, height: 24 }),
		name: rawCaseBrand?.get('case-brand-name')?.getValue() ?? '',
		color: rawCaseBrand?.get('case-brand-color')?.getValue() ?? '',
	};
 
	const caseImages = rawCaseImages?.getChildren();
 
	const coverImages = caseImages?.filter(item => item.key === 'cover-img-src');
	const coverParsedImages = coverImages?.map(image => {
		const imageSrc = image.getValue() ?? '';
  
		return {
			src: imageSrc.length > 0 ? imageSrc : NO_IMAGE_SRC(coverImageDimensions),
			alt: 'cover-image',
			...coverImageDimensions,
		} as CustomImageProps;
	});
 
	const commonImages = caseImages?.filter(item => item.key === 'common-img-src');
	const commonParsedImages = commonImages?.map(image => {
		const imageSrc = image.getValue() ?? '';
  
		return {
			src: imageSrc.length > 0 ? imageSrc : NO_IMAGE_SRC(commonImageDimensions),
			alt: 'case-image',
			...commonImageDimensions,
		} as CustomImageProps;
	});
 
	const caseItem: PortfolioCase = {
		title: rawCaseTitle?.getValue() ?? '',
		description: rawCaseDescription?.getValue() ?? '',
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
	getHydratedPageElement,
};
