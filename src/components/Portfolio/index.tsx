import React from 'react';

import CustomAccordion from "@/components/CustomAccordion";
import PortfolioAccordionContent from "@/components/Portfolio/PortfolioAccordionContent";
import PortfolioAccordionHeading from "@/components/Portfolio/PortfolioAccordionHeading";
import CustomContent from "@/helpers/content.helper";
import hydration from "@/helpers/hydration";
import { CustomAccordionItem } from "@/lib/accordion";

interface Props {
	data?: CustomContent
}

const PortfolioComponent = ({ data }: Props) => {
	if (!data) {
		return <></>;
	}
  
	const accordionPortfolio = data.getChildren().map(
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
				no_spacing="true"
			/>
		</>
	);
};

export default PortfolioComponent;
