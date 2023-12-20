import React from 'react';

import LoadingFeedback from "@/components/LoadingFeedback";
import CustomContent from "@/helpers/content";

import Styled from "./styles";

interface Props {
  data?: CustomContent,
}

const HeroComponent = ({ data }: Props) => {
  if (!data) return <LoadingFeedback minimal />;
  
  const author = data.getContent('heading', ' ', ['de Souza']);
  const subHeading = data.getContent('subHeading');
  const description = data.getContent('description');
  
  const authorName = author?.split(' ') ?? [''];
  
  return (
    <Styled.HeroContainer>
      <Styled.HeroAuthor>
        <Styled.HeroAuthorFirstname>{authorName[0]}</Styled.HeroAuthorFirstname>
        {/*<Styled.HeroAuthorMiddlename>{author.midName + ' '}</Styled.HeroAuthorMiddlename>*/}
        <Styled.HeroAuthorLastname>{authorName[1]}</Styled.HeroAuthorLastname>
      </Styled.HeroAuthor>
      <Styled.HeroSubHeading>
        <Styled.HeroSubHeadingText>{subHeading}</Styled.HeroSubHeadingText>
      </Styled.HeroSubHeading>
      <Styled.HeroDescription>
        <Styled.HeroDescriptionText>{description}</Styled.HeroDescriptionText>
      </Styled.HeroDescription>
    </Styled.HeroContainer>
  );
};

export default HeroComponent;
