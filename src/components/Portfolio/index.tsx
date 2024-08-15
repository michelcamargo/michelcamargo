import React from 'react';

import CustomAccordion from "@/components/CustomAccordion";
import PortfolioAccordionContent from "@/components/Portfolio/PortfolioAccordionContent";
import PortfolioAccordionHeading from "@/components/Portfolio/PortfolioAccordionHeading";
import CustomContent from "@/helpers/content.helper";
import hydration from "@/helpers/hydration";
import { CustomAccordionItem } from "@/lib/accordion";

interface Props {
	data?: Array<CustomContent>
}

const PortfolioComponent = ({ data }: Props) => {
	if (!data || !data?.length) {
		return <p>NO PORTFOLIO ITEMS</p>;
	}
  
	const accordionPortfolio = data.map(
		caseItem => hydration.portfolioToAccordion(
			caseItem,
			{ width: 240, height: 42 },
			{ width: 64, height: 42 }
		) as CustomAccordionItem
	);
	
	return (
		<>
			<CustomAccordion
				items={accordionPortfolio}
				summaryComponent={PortfolioAccordionHeading}
				contentComponent={PortfolioAccordionContent}
				noSpacing
			/>
		</>
	);
};

export default PortfolioComponent;
