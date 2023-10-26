import React from 'react';

import CareerOverview from "@/components/PersonalPresentation/CareerOverview";
import CustomContent from "@/helpers/content";

import Styled from './styles';

interface Props {
  serverContent?: CustomContent
}

const PersonalPresentation = ({ serverContent }: Props) => {
  
  if (!serverContent) {
    return (
      <>
        {'NO PERSONAL PRESENTATION CONTENT'}
      </>
    );
  }
  
  const careerData = serverContent.getChild('career-overall');
  
  return (
    <Styled.Wrapper>
      <CareerOverview data={careerData} />
    </Styled.Wrapper>
  );
};

export default PersonalPresentation;
