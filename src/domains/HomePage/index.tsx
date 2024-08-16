import React, { useMemo } from "react";

import BriefPresentation from "@/components/BriefPresentation";
// import CareerSkills from "@/components/CareerSkills";
import HeroComponent from "@/components/HeroComponent";
import LoadingFeedback from "@/components/LoadingFeedback";
import SocialPresentation from "@/components/SocialPresentation";
import { CustomNextPage } from "@/lib/layout";

import ContactForm from "../../components/CustomForms/Contact";
import Styled from './styles';
// import PortfolioComponent from "@/components/Portfolio";

const HomePage: CustomNextPage = ({ data }) => {
	const sessions = useMemo(() => data?.sessions, [data]);
	
	const { bio, socialLinks } = useMemo(() => {
		return {
			bio: sessions?.get?.('bio'),
			socialLinks: sessions?.get?.('social'),
			portfolio: sessions?.get?.('devstack')
		};
	}, [sessions]);
 
	console.log('SESSIONS >>', bio, socialLinks);
	
	if (!sessions) return <LoadingFeedback />;
 
	return (
		<Styled.PageWrapper topSpacing={0} rowGap={42}>
			<Styled.SessionContainer topSpacing={0} rowGap={16}>
				<HeroComponent data={bio} />
				<SocialPresentation socialData={socialLinks} />
			</Styled.SessionContainer>
			<Styled.SessionContainer>
				{/*<PortfolioComponent data={portfolio} />*/}
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
			<Styled.SessionContainer>
				<Styled.Intro>
					<BriefPresentation />
				</Styled.Intro>
			</Styled.SessionContainer>
		</Styled.PageWrapper>
	);
};

export default HomePage;
