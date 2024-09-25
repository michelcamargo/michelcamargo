import React, { useMemo } from "react";

import BriefPresentation from "@/components/BriefPresentation";
import HeroComponent from "@/components/HeroComponent";
import LoadingFeedback from "@/components/LoadingFeedback";
import PortfolioComponent from "@/components/Portfolio";
import SocialPresentation from "@/components/SocialPresentation";
import { CustomNextPage } from "@/lib/layout";

import ContactForm from "../../components/CustomForms/Contact";
import Styled from './styles';

const HomePage: CustomNextPage = ({ data }) => {
	
	const sessions = useMemo(() => data?.sessions, [data]);
	// console.log({ sessions });
	
	const { bio, socialLinks, portfolio } = useMemo(() => {

		return {
			bio: sessions ? sessions.get('bio') : undefined,
			socialLinks: sessions ? sessions.get('social') : undefined,
			portfolio: sessions ? sessions.get('devstack') : undefined
		};
	}, [sessions]);
	
	if (!data) return <LoadingFeedback />;
 
	return (
		<Styled.PageWrapper top_spacing={0} row_gap={42}>
			<Styled.SessionContainer top_spacing={0} row_gap={16}>
				<HeroComponent data={bio} />
			</Styled.SessionContainer>
			<Styled.SessionContainer>
				<Styled.Intro>
					<BriefPresentation />
				</Styled.Intro>
			</Styled.SessionContainer>
			<Styled.SessionContainer>
				<SocialPresentation socialData={socialLinks} />
				<PortfolioComponent data={portfolio} />
			</Styled.SessionContainer>
			<Styled.SessionContainer>
				{/*<CareerSkills />*/}
			</Styled.SessionContainer>
			
			<Styled.SessionContainer>
				<ContactForm
					title={'Envie uma mensagem!'}
					description={'Será um prazer conhecê-lo!'}
				/>
			</Styled.SessionContainer>
		</Styled.PageWrapper>
	);
};

export default HomePage;
