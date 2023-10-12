import React, { ReactNode } from 'react';

import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";

import Styled, { StyledProps } from './styles';

interface Props extends StyledProps {
  title: string,
  subtitle?: string,
  Icon?: OverridableComponent<SvgIconTypeMap<object, "svg">> & { muiName: string; },
}

const DefaultViewHeading = ({ title, subtitle, container, Icon }: Props) => {
  
  const TitleTemplate = () => {
    if (!title) return <></>;
    
    return (
      <Styled.TopRow>
        { Icon && (
          <Icon />
        )}
        <Styled.HeadingText>
          {title}
        </Styled.HeadingText>
      </Styled.TopRow>
    );
  };
  
  const SubtitleTemplate = () => {
    if (!subtitle) return <></>;
    
    return (
      <Styled.BottomRow>
        <Styled.SubtitleText>
          {subtitle}
        </Styled.SubtitleText>
      </Styled.BottomRow>
    );
  };
  
  if (container) {
    return (
      <Styled.Wrapper>
        <Styled.Container>
          <Styled.Content>
            {TitleTemplate()}
            {SubtitleTemplate()}
          </Styled.Content>
        </Styled.Container>
      </Styled.Wrapper>
    );
  }
	
  return (
    <Styled.Wrapper>
      <Styled.Content>
        {TitleTemplate()}
        {SubtitleTemplate()}
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default DefaultViewHeading;
