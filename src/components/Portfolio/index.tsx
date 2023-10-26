import React from 'react';

import CustomAccordion from "@/components/CustomAccordion";
import PortfolioAccordionContent from "@/components/Portfolio/PortfolioAccordionContent";
import PortfolioAccordionHeading from "@/components/Portfolio/PortfolioAccordionHeading";
import CustomContent from "@/helpers/custom-content";
import hydration from "@/helpers/hydration";
import { CustomAccordionItem } from "@/lib/accordion";

interface Props {
	data?: Array<CustomContent>
}

const PortfolioComponent = ({ data }: Props) => {
  if (!data || !data?.length) {
    return <p>NO PORTFOLIO ITEMS</p>;
  }
  
  const accordionPortfolio = data.map(caseItem => hydration.portfolioToAccordion(caseItem) as CustomAccordionItem);
	
  return (
    <>
      {/*<Styled.PortfolioList>*/}
      {/*  {data.map((item, index) => <PortfolioItem key={index} data={item} />)}*/}
      {/*</Styled.PortfolioList>*/}
      <CustomAccordion
        items={accordionPortfolio}
        summaryComponent={PortfolioAccordionHeading}
        contentComponent={PortfolioAccordionContent}
      />
    </>
  );
};

export default PortfolioComponent;
