import React, { useMemo } from "react";

import { MinimalHeader } from "@/components/HeaderTemplate";
import LoadingFeedback from "@/components/LoadingFeedback";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';
import AuthenticationForm from "../../components/CustomForms/Authentication";

const AuthPage: CustomNextPage = ({ data }) => {
  const sessions = useMemo(() => data?.sessions, [data]);
  
  const { heading, form, buttons } = useMemo(() => {
    return {
      heading: sessions?.get?.('heading'),
      form: sessions?.get?.('form'),
      buttons: sessions?.get?.('buttons')
    }
  }, [data?.sessions]);
  
  if (!sessions) return <LoadingFeedback />;
  
  return (
    <Styled.PageWrapper>
      <MinimalHeader />
      <Styled.Content>
        <Styled.MainColumn>
          {/*<h1>{sessions[0].getContent('title')}</h1>*/}
          {/*<h2>{sessions[0].getContent('description')}</h2>*/}
          <AuthenticationForm />
        </Styled.MainColumn>
      </Styled.Content>
    </Styled.PageWrapper>
  );
};

export default AuthPage;
