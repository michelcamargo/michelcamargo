import React from 'react';
import Styled from "./styles";
import {getContentArray, getCustomContentByKey} from "@/helpers/content-handler";
import LoadingFeedback from "@/components/LoadingFeedback";

const HeroComponent = ({ heroData }) => {
  const authorData = getCustomContentByKey('heading', heroData);
  const author = Array.isArray(authorData) ? getContentArray(authorData) : authorData;
  
  const descriptionData = getCustomContentByKey('subHeading', heroData);
  const description = Array.isArray(descriptionData) ? getContentArray(descriptionData) : descriptionData;
  
  return (
    <Styled.HeroContainer>
      { (author && Array.isArray(author)) ? (
        <Styled.HeroAuthor>
          <Styled.HeroAuthorFirstname>{author[0] + ' '}</Styled.HeroAuthorFirstname>
          <Styled.HeroAuthorMiddlename>{author[1] + ' '}</Styled.HeroAuthorMiddlename>
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
