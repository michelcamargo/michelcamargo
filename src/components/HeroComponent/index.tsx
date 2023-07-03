import React from 'react';

import LoadingFeedback from "@/components/LoadingFeedback";
import { getContentArray, getCustomContentByKey } from "@/helpers/content-handler";
import { CustomContent } from "@/lib/custom-content";

import Styled from "./styles";

interface Props {
  heroData: Array<CustomContent>
}

const HeroComponent = ({ heroData }: Props) => {
  const authorData = getCustomContentByKey('heading', heroData);
  const author = Array.isArray(authorData) ? getContentArray(authorData) : authorData;
  
  const descriptionData = getCustomContentByKey('subHeading', heroData);
  const description = Array.isArray(descriptionData) ? getContentArray(descriptionData) : descriptionData;
  
  return (
    <Styled.HeroContainer>
      { (author && Array.isArray(author)) ? (
        <Styled.HeroAuthor>
          <Styled.HeroAuthorFirstname>{author[0] + ' '}</Styled.HeroAuthorFirstname>
          {/*<Styled.HeroAuthorMiddlename>{author[1] + ' '}</Styled.HeroAuthorMiddlename>*/}
          <Styled.HeroAuthorLastname>{author[2]}</Styled.HeroAuthorLastname>
        </Styled.HeroAuthor>
      ) : (
        <LoadingFeedback />
      )}
  
      { description ? (
        <Styled.HeroDescription>
          <Styled.HeroDescriptionText>{description}</Styled.HeroDescriptionText>
        </Styled.HeroDescription>
      ) : (
        <LoadingFeedback />
      )}
    </Styled.HeroContainer>
  );
};

export default HeroComponent;
