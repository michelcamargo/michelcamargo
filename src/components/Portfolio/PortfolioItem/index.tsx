import React from 'react';

import CustomContent from "@/helpers/custom-content";

interface Props {
	data: CustomContent
}

const PortfolioItem = ({ data }: Props) => {
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

export default PortfolioItem;
