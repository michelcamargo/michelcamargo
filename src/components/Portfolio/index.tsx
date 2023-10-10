import React from 'react';

import PortfolioItem from "@/components/Portfolio/PortfolioItem";
import CustomContent from "@/helpers/custom-content";

interface Props {
	data: Array<CustomContent>
}

const PortfolioComponent = ({ data }: Props) => {
	
  if (!data || data?.length) {
    return <p>NO PORTFOLIO ITEMS</p>;
  }
	
  return (
    <div>
      {JSON.stringify(data)}
      {data.map((item, index) => <PortfolioItem key={index} data={item} />)}
    </div>
  );
};

export default PortfolioComponent;
