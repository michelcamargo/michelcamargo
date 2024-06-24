import React, {useCallback, useMemo, useState} from 'react';

import BriefPresentation from "@/components/BriefPresentation";
import DefaultViewHeading from "@/components/CommonViewHeading";
import ContactForm from "@/components/ContactForm";
import LoadingFeedback from "@/components/LoadingFeedback";
import PortfolioComponent from "@/components/Portfolio";
import CustomContent from "@/helpers/content";
import Hydration from "@/helpers/hydration";
import useDidMount from "@/hooks/useDidMount";
import { ViewMetadata, ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";
import WorkIcon from '@mui/icons-material/Work';

import Styled from "./styles";
import useLocaleContext from "@/hooks/useLocaleContext";

interface Props {
  serverViewData: ServerViewProps,
}

const PortfolioPage: CustomNextPage<Props> = ({ serverViewData }: Props) => {
  const [viewHead, setViewHead] = useState<Partial<ViewMetadata> | null>(null);
  
  const { sessions, portfolio, authorInfo } = useMemo(() => {
    const { sessions: _sessions } = Hydration.parseViewProps<CustomContent>(serverViewData);
    
    setViewHead({ title: 'Portfolio', description: 'Portfolio' })
    
    return {
      sessions: _sessions,
      portfolio: _sessions.find(item => item.key === 'portfolio')?.getChildren(),
      authorInfo: _sessions.find(item => item.key === 'bio'),
    };
  }, [serverViewData])
  
  if (!viewHead || !sessions) return <LoadingFeedback />;
  
  return (
    <Styled.PageWrapper>
      <Styled.SplitRow>
        <Styled.LeftContainer>
          { authorInfo && <BriefPresentation /> }
          <ContactForm
            title={viewHead.description}
            description={'Identifique-se e envie uma mensagem\nSerá um prazer conhecê-lo!'}
          />
        </Styled.LeftContainer>
        <Styled.GeneralContent>
          {viewHead?.title && <DefaultViewHeading title={viewHead.title} container Icon={WorkIcon} />}
          { portfolio ? <PortfolioComponent data={portfolio} /> : null}
        </Styled.GeneralContent>
      </Styled.SplitRow>
    </Styled.PageWrapper>
  );
};

export default PortfolioPage;
