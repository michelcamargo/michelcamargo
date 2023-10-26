import React, { FC, ReactNode } from 'react';

import { PortfolioCase } from "@/lib/content";

interface Props {
	data: PortfolioCase,
}

const PortfolioAccordionContent: FC<Props> = ({ data }: Props) => {
  const {
    title,
	  description,
	  images,
	  branding,
	  highlighted,
  } = data;
	
  return (
    <div>
      {JSON.stringify(title)}
      {JSON.stringify(description)}
      {JSON.stringify(branding)}
      {JSON.stringify(images)}
    </div>
  );
};

export default PortfolioAccordionContent;
