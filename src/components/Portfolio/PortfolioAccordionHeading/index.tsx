import React, { FC } from 'react';

import { PortfolioCase } from "@/lib/content";

interface Props {
	data: PortfolioCase,
}

const PortfolioAccordionHeading: FC<Props> = ({ data }: Props) => {
  const {
    title,
	  description,
	  images,
	  branding,
	  highlighted
  } = data;
	
  return (
    <div>
      <h6>{branding.name}</h6>
      <p>{title}</p>
    </div>
  );
};

export default PortfolioAccordionHeading;
