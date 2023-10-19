import React from 'react';

import PortfolioItem from "@/components/Portfolio/PortfolioItem";
import CustomContent from "@/helpers/custom-content";

import Styled from './styles';

interface Props {
	data?: Array<CustomContent>
}

const PortfolioComponent = ({ data }: Props) => {
  if (!data || !data?.length) {
    return <p>NO PORTFOLIO ITEMS</p>;
  }
	
  return (
    <Styled.PortfolioList>
      {data.map((item, index) => <PortfolioItem key={index} data={item} />)}
    </Styled.PortfolioList>
  );
};

export default PortfolioComponent;
