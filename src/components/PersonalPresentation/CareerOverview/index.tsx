import React from 'react';

import ProfileAvatar from "@/components/PersonalPresentation/ProfileAvatar";
import CustomContent from "@/helpers/custom-content";
import Image from "next/image";

import Styled from './styles';

interface Props {
  data: CustomContent | null
}

const CareerOverview = ({ data }: Props) => {
  
  if (!data) {
    return (
      <Styled.Wrapper>
        <Styled.Session>
          <Styled.SplittedArticle>
            <Styled.LeftArticleContent>
              <ProfileAvatar width={180} />
            </Styled.LeftArticleContent>
            <Styled.RightArticleContent>
              <Styled.SessionHeading>
                Sobre o site
              </Styled.SessionHeading>
              <Styled.SessionTitle>
                Criado por Michel de Souza Camargo
              </Styled.SessionTitle>
              <Styled.CommonText>
                Entusiasta de interfaces digitais
              </Styled.CommonText>
              <Styled.HighlightedText>
                Mantido pela Vercel
              </Styled.HighlightedText>
              
            </Styled.RightArticleContent>
          </Styled.SplittedArticle>
          <Styled.SplittedArticle>
            <Styled.LeftArticleContent>
              <Styled.SessionTitle>
                Universidade Tecnológica Federal do Paraná
              </Styled.SessionTitle>
              <Styled.CommonText>
                {'Lorem ipsum dolor sit amet consectetur. ' +
              'Sit cursus venenatis turpis nulla pellentesque rhoncus tincidunt id elementum. ' +
              'Tristique feugiat at suspendisse turpis congue dolor. ' +
              'Amet eget non risus in mauris id fermentum nunc.'}
              </Styled.CommonText>
            </Styled.LeftArticleContent>
            <Styled.RightArticleContent>
              {'Lorem ipsum dolor sit amet consectetur. ' +
              'Sit cursus venenatis turpis nulla pellentesque rhoncus tincidunt id elementum.'}
            </Styled.RightArticleContent>
          </Styled.SplittedArticle>
          <Styled.SplittedArticle>
            <Styled.LeftArticleContent>
              {'Sit cursus venenatis turpis nulla pellentesque rhoncus tincidunt id elementum. ' +
              'Tristique feugiat at suspendisse turpis congue dolor. ' +
              'Amet eget non risus in mauris id fermentum nunc.'}
            </Styled.LeftArticleContent>
            <Styled.RightArticleContent>
              <Image src={''} alt={'sports-image'} />
            </Styled.RightArticleContent>
          </Styled.SplittedArticle>
        </Styled.Session>
      </Styled.Wrapper>
    );
  }
  
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

export default CareerOverview;
