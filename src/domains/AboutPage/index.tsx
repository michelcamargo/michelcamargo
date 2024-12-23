import React, { useMemo } from "react";

import ContactForm from "@/components/CustomForms/Contact";
import LoadingFeedback from "@/components/LoadingFeedback";
import PersonalPresentation from "@/components/PersonalPresentation";
import SocialPresentation from "@/components/SocialPresentation";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';

const AboutPage: CustomNextPage = ({ data }) => {
	const sessions = useMemo(() => data?.sessions, [data]);
	
	const { social, about, form } = useMemo(() => {
		return {
			social: sessions?.get('social'),
			about: sessions?.get('about'),
			form: sessions?.get('subscription')
		};
	}, [sessions]);
	
	console.log({ social, about, form });
 
	if (!sessions) return <LoadingFeedback />;
 
	return (
		<Styled.PageWrapper>
			<Styled.PageContainer>
				<Styled.PageContent>
					{about && <Styled.SessionContainer>
						<PersonalPresentation serverContent={about} />
					</Styled.SessionContainer>}
					{social && <Styled.SessionContainer>
						 <SocialPresentation socialData={social} />
					</Styled.SessionContainer>}
					{form && <Styled.SessionContainer>
						<ContactForm data={form} />
					</Styled.SessionContainer>}
				</Styled.PageContent>
			</Styled.PageContainer>
		</Styled.PageWrapper>
	);
};

export default AboutPage;

