import React from 'react';

import CustomContent from "@/helpers/custom-content";

interface Props {
  data: CustomContent | null
}

const CareerOverall = ({ data }: Props) => {
  
  if (!data) {
    return (
      <div>
        <p>
          {'resumo da carreira'}
        </p>
      </div>
    );
  }
  
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

export default CareerOverall;
