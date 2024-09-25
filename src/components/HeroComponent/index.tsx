import React from 'react';

import LoadingFeedback from "@/components/LoadingFeedback";
import CustomContent from "@/helpers/content.helper";
// import CustomContentHelper from "@/helpers/custom-content.helper";

import Styled from "./styles";

interface Props {
  data?: CustomContent
}

const HeroComponent = ({ data }: Props) => {
	// const { about, author, heading } = useMemo(() => {
	// 	if (!data) return { about: undefined, author: undefined, heading: undefined };
	//
	// 	return {
	// 		author: data.get('author'),
	// 		heading: data.get('heading'),
	// 		about: data.get('about')
	// 	};
	// }, [data]);
	
	if (!data) return <LoadingFeedback minimal />;

	// const [name, middlename, lastname] = [
	//   CustomContentHelper.parseToObject(author).firstName.split(' ') ?? [''],
	//   author.middlename.split(' ') ?? [''],
	//   author.lastname.split(' ') ?? ['']
	// ];

	// const [subHeading, description] = [heading.['subheading'], heading.general];

	return (
		<Styled.HeroContainer>
			<Styled.HeroAuthor>
				<Styled.HeroAuthorFirstname>{'Michel'}</Styled.HeroAuthorFirstname>
				{/*<Styled.HeroAuthorFirstname>{name}</Styled.HeroAuthorFirstname>*/}
				<Styled.HeroAuthorMiddlename>{'de Souza' + ' '}</Styled.HeroAuthorMiddlename>
				{/*<Styled.HeroAuthorMiddlename>{middlename + ' '}</Styled.HeroAuthorMiddlename>*/}
				<Styled.HeroAuthorLastname>{'Camargo'}</Styled.HeroAuthorLastname>
				{/*<Styled.HeroAuthorLastname>{lastname}</Styled.HeroAuthorLastname>*/}
			</Styled.HeroAuthor>
			<Styled.HeroSubHeading>
				<Styled.HeroSubHeadingText>{'Prazer em apresentar interfaces'}</Styled.HeroSubHeadingText>
				{/*<Styled.HeroSubHeadingText>{subHeading}</Styled.HeroSubHeadingText>*/}
			</Styled.HeroSubHeading>
			<Styled.HeroDescription>
				<Styled.HeroDescriptionText>
					{'Minha missão é aprimorar a experiência das pessoas em contato com a tecnologia do dia-a-dia'}
				</Styled.HeroDescriptionText>
				{/*<Styled.HeroDescriptionText>{description}</Styled.HeroDescriptionText>*/}
			</Styled.HeroDescription>
		</Styled.HeroContainer>
	);
};

export default HeroComponent;
