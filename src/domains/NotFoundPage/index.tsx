import React, {useMemo} from 'react';

import DefaultViewHeading from "@/components/CommonViewHeading";
import CustomButton from "@/components/CustomButton";
import { ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";
import HomeIcon from '@mui/icons-material/Home';

import Styled from './styles';
import Hydration from "@/helpers/hydration";
import CustomContent from "@/helpers/content";
import LoadingFeedback from "@/components/LoadingFeedback";

interface Props {
  serverViewData: ServerViewProps
}
const NotFoundPage: CustomNextPage<Props> = ({ serverViewData }) => {
  const { sessions, heading } = useMemo(() => {
    const { sessions: _sessions } = Hydration.parseViewProps<CustomContent>(serverViewData);
    return {
      sessions: _sessions,
      heading: _sessions.find(item => item.key === 'heading') ?? null,
    };
  }, [serverViewData])
  
  console.log('serverViewData', serverViewData)
  
  if (!sessions) return <LoadingFeedback />;
  
  return (
    <Styled.PageWrapper>
      <DefaultViewHeading title={'404 Página não encontrada'} />
      <div>{JSON.stringify(sessions)}</div>
      <CustomButton anchor={'/'} beforeIcon={<HomeIcon />}>
        Voltar ao ínicio
      </CustomButton>
    </Styled.PageWrapper>
  );
};

export default NotFoundPage;
