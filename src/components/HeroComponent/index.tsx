import React, { useMemo } from 'react';

import LoadingFeedback from "@/components/LoadingFeedback";
import CustomContent from "@/helpers/content.helper";
// import CustomContentHelper from "@/helpers/custom-content.helper";

import Styled from "./styles";
import { getValue } from "@mui/system";

interface Props {
  data?: CustomContent
}

const HeroComponent = ({ data }: Props) => {
	
	console.log({ heroData: data });
	
	const { author, heading, about } = useMemo(() => {
		if (!data) return { author: undefined, heading: undefined, about: undefined };

		return {
			author: data.get('author'),
			heading: data.get('heading'),
			about: data.get('about')
		};
	}, [data]);
	
	if (!data) return <LoadingFeedback minimal />;

	const [firstname, lastname] = [
	  author?.getValue('firstname'),
	  author?.getValue('lastname'),
	];

	const [subHeading, description] = [heading?.getValue('headline'), heading?.getValue('description')];

	return (
		<Styled.HeroContainer>
			<Styled.HeroAuthor>
				<Styled.HeroAuthorFirstname>{firstname}</Styled.HeroAuthorFirstname>
				<Styled.HeroAuthorLastname>{lastname}</Styled.HeroAuthorLastname>
			</Styled.HeroAuthor>
			<Styled.HeroSubHeading>
				<Styled.HeroSubHeadingText>{subHeading}</Styled.HeroSubHeadingText>
			</Styled.HeroSubHeading>
			<Styled.HeroDescription>
				<Styled.HeroDescriptionText>{description}</Styled.HeroDescriptionText>
			</Styled.HeroDescription>
		</Styled.HeroContainer>
	);
};

export default HeroComponent;
