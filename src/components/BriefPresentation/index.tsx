import React from 'react';

import ProfileAvatar from "@/components/PersonalPresentation/ProfileAvatar";
import CustomContent from "@/helpers/content";

import Styled from './styles';

interface Props {
	authorInfo: CustomContent,
}

const BriefPresentation = ({ authorInfo }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.PresentationSummary>
        <ProfileAvatar height={128} />
        <Styled.PresentationColumn>
          <Styled.AuthorName>Michel Camargo</Styled.AuthorName>
          <Styled.AuthorTitle>Autor do site</Styled.AuthorTitle>
          <Styled.AuthorDescription>
            Techie envolvido em música, tecnologia, design, audiovisual e esportes
          </Styled.AuthorDescription>
        </Styled.PresentationColumn>
      </Styled.PresentationSummary>
      <Styled.PresentationColumn>
        <Styled.BriefDescription>
          {'Minha missão é aprimorar a experiência das pessoas em contato com a tecnologia do dia-a-dia'}
        </Styled.BriefDescription>
      </Styled.PresentationColumn>
    </Styled.Wrapper>
  );
};

export default BriefPresentation;
