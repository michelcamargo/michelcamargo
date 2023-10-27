import React from 'react';

import DefaultViewHeading from "@/components/CommonViewHeading";
import CustomButton from "@/components/CustomButton";
import { ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";
import HomeIcon from '@mui/icons-material/Home';

import Styled from './styles';

interface Props {
  serverViewData: ServerViewProps
}
const NotFoundPage: CustomNextPage<Props> = () => {
  return (
    <Styled.PageWrapper>
      <DefaultViewHeading title={'404 Página não encontrada'} />
      <CustomButton anchor={'/'} beforeIcon={<HomeIcon />}>
        Voltar ao ínicio
      </CustomButton>
    </Styled.PageWrapper>
  );
};

export default NotFoundPage;
