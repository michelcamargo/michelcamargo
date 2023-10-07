import React from 'react';

import DefaultViewHeading from "@/components/CommonViewHeading";
import CustomButton from "@/components/CustomButton";
import { ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';

interface Props {
  serverViewData: ServerViewProps
}
const NotFoundPage: CustomNextPage<Props> = ({ serverViewData }: Props) => {
  return (
    <Styled.PageWrapper>
      <DefaultViewHeading title={'404 Página não encontrada'} />
      {JSON.stringify(serverViewData)}
      <CustomButton anchor={'/'}>
        Voltar ao ínicio
      </CustomButton>
    </Styled.PageWrapper>
  );
};

export default NotFoundPage;
