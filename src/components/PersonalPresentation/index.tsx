import React from 'react';

import CareerOverall from "@/components/PersonalPresentation/CareerOverall";
import HobbiesPanel from "@/components/PersonalPresentation/HobbiesPanel";
import ProfileAvatar from "@/components/PersonalPresentation/ProfileAvatar";
import CustomContent from "@/helpers/custom-content";

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
      <ProfileAvatar width={220} />
      <HobbiesPanel />
      <CareerOverall data={careerData} />
    </Styled.Wrapper>
  );
};

export default PersonalPresentation;