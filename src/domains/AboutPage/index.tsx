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
			bio: sessions?.find(item => item.key === 'bio'),
			social: sessions?.find(item => item.key === 'social'),
			about: sessions?.find(item => item.key === 'about')
		};
	}, [sessions]);
 
	if (!sessions) return <LoadingFeedback />;
 
	return (
		<Styled.PageWrapper>
			<Styled.PageContainer>
				<Styled.PageContent>
					{about ? <PersonalPresentation serverContent={about} /> : undefined }
					{social ? <SocialPresentation socialData={social} /> : undefined}
				</Styled.PageContent>
			</Styled.PageContainer>
		</Styled.PageWrapper>
	);
};

export default AboutPage;

