import React from 'react';

interface Props {
	code: string,
	message?: string,
}

import CustomButton from "@/components/CustomButton";

import Styled from './styles';

const ViewTemplateError = ({ message }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.TopRow>
        <Styled.DefaultMessage>
          Não foi possível carregar a página
        </Styled.DefaultMessage>
        { message &&
        <Styled.ErrorLabelMessage>
          {message}
        </Styled.ErrorLabelMessage>
        }
				
        <Styled.DisclaimerMessage>
          Por favor, tente mais tarde, ou retorne ao início
        </Styled.DisclaimerMessage>
      </Styled.TopRow>
      <Styled.BottomRow>
        <Styled.UserActionPanel>
          <CustomButton anchor={'/'}>
            Início
          </CustomButton>
        </Styled.UserActionPanel>
      </Styled.BottomRow>
    </Styled.Wrapper>
  );
};

export default ViewTemplateError;
