import { useMemo } from "react";

import LoadingFeedback from "@/components/LoadingFeedback";
import PersonalPresentation from "@/components/PersonalPresentation";
import SocialPresentation from "@/components/SocialPresentation";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';

const AboutPage: CustomNextPage = ({ data }) => {
	const sessions = useMemo(() => data?.sessions, [data]);
	
	const { social, about } = useMemo(() => {
		return {
			bio: sessions?.get('bio'),
			social: sessions?.get('social'),
			about: sessions?.get('about')
		};
	}, [sessions]);
 
	if (!sessions) return <LoadingFeedback />;
 
	return (
		<Styled.PageWrapper>
			<Styled.PageContainer>
				<Styled.PageContent>
					{about && <PersonalPresentation serverContent={about} />}
					{social && <SocialPresentation socialData={social} />}
				</Styled.PageContent>
			</Styled.PageContainer>
		</Styled.PageWrapper>
	);
};

export default AboutPage;

