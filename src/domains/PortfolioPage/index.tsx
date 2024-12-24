import React, { useMemo } from 'react';

import BriefPresentation from "@/components/BriefPresentation";
import DefaultViewHeading from "@/components/CommonViewHeading";
import LoadingFeedback from "@/components/LoadingFeedback";
import PortfolioComponent from "@/components/Portfolio";
import { CustomNextPage } from "@/lib/layout";
import WorkIcon from '@mui/icons-material/Work';

// import ContactForm from "../../components/CustomForms/Contact";
import Styled from "./styles";

const PortfolioPage: CustomNextPage = ({ data, meta }) => {
	const sessions = useMemo(() => data?.sessions, [data]);
 
	const { portfolio, authorInfo } = useMemo(() => {
		return {
			portfolio: sessions?.get('portfolio'),
			authorInfo: sessions?.get('bio'),
		};
	}, [sessions]);
 
	if (!sessions) return <LoadingFeedback />;
 
	return (
		<Styled.PageWrapper>
			<Styled.SplitRow>
				<Styled.LeftContainer>
					{ authorInfo && <BriefPresentation /> }
					{/*<ContactForm*/}
					{/*	title={'Formulário'}*/}
					{/*	description={'Identifique-se e envie uma mensagem\nSerá um prazer conhecê-lo!'}*/}
					{/*	data={}*/}
					{/*/>*/}
				</Styled.LeftContainer>
				<Styled.GeneralContent>
					<DefaultViewHeading title={meta.title} container Icon={WorkIcon} />
					{ portfolio ? <PortfolioComponent data={portfolio} /> : null}
				</Styled.GeneralContent>
			</Styled.SplitRow>
		</Styled.PageWrapper>
	);
};

export default PortfolioPage;
