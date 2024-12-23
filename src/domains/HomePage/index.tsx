import React, { useMemo } from "react";

import CareerSkills from "@/components/CareerSkills";
import HeroComponent from "@/components/HeroComponent";
import LoadingFeedback from "@/components/LoadingFeedback";
import SocialPresentation from "@/components/SocialPresentation";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';

const HomePage: CustomNextPage = ({ data }) => {
	
	const sessions = useMemo(() => data?.sessions, [data]);
	
	const { bio, socialLinks, devstack } = useMemo(() => {
		return {
			bio: sessions?.get('bio'),
			socialLinks: sessions?.get('social'),
			devstack: sessions?.get('devstack'),
		};
	}, [sessions]);
	
	if (!data) return <LoadingFeedback />;
 
	return (
		<Styled.PageWrapper top_spacing={0} row_gap={42}>
			<Styled.SessionContainer top_spacing={0} row_gap={16}>
				<HeroComponent data={bio} />
			</Styled.SessionContainer>
			<Styled.SessionContainer>
				<SocialPresentation socialData={socialLinks} />
			</Styled.SessionContainer>
			<Styled.SessionContainer>
				<CareerSkills data={devstack} />
			</Styled.SessionContainer>
		</Styled.PageWrapper>
	);
};

export default HomePage;
