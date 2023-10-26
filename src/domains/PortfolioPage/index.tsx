import React, { useCallback, useState } from 'react';

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

interface Props {
  serverViewData: ServerViewProps,
}

const PortfolioPage: CustomNextPage<Props> = ({ serverViewData }: Props) => {
  const [viewHead, setViewHead] = useState<Partial<ViewMetadata> | null>(null);
  const [viewSessions, setViewSessions] = useState<Array<CustomContent>>([]);
  
  const hydratePage = useCallback(() => {
    const { viewTitle, viewSubtitle, viewSessions: sessions } = Hydration.parseViewProps(serverViewData);
    
    setViewHead({ title: viewTitle, description: viewSubtitle });
    setViewSessions(sessions);
  }, [serverViewData]);
  
  useDidMount(() => {
    if (serverViewData) {
      hydratePage();
    }
  });
  
  if (!viewHead || !viewSessions) return <LoadingFeedback />;
  
  const portfolio = viewSessions.find(item => item.key === 'portfolio')?.getChildren();
  
  return (
    <Styled.PageWrapper>
      <Styled.SplitRow>
        <Styled.LeftContainer>
          <ContactForm
            title={viewHead.description}
            description={'Identifique-se e me mande uma mensagem, estarei feliz em responder'}
          />
        </Styled.LeftContainer>
        <Styled.GeneralContent>
          {viewHead?.title && <DefaultViewHeading title={viewHead.title} container Icon={WorkIcon} />}
          <PortfolioComponent data={portfolio} />
        </Styled.GeneralContent>
      </Styled.SplitRow>
    </Styled.PageWrapper>
  );
};

export default PortfolioPage;
