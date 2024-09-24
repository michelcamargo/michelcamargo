import React from 'react';

import LoadingFeedback from "@/components/LoadingFeedback";
import CustomContent from "@/helpers/content.helper";

import Styled from "./styles";

interface Props {
  data?: CustomContent
}

const HeroComponent = ({ data }: Props) => {
	if (!data) return <LoadingFeedback minimal />;
  
	// const [about, author, heading] = [
	// 	data.get('author'), data.get('heading'), data.get('about')
	// ];
	//
	// console.log(about);
	// console.log(author);
	// console.log(heading);

	// const [name, middlename, lastname] = [
	//   author.firstname.split(' ') ?? [''],
	//   author.middlename.split(' ') ?? [''],
	//   author.lastname.split(' ') ?? ['']
	// ];

	// const [subHeading, description] = [heading.['subheading'], heading.general];

	return (
		<Styled.HeroContainer>
			<Styled.HeroAuthor>
				{/*<Styled.HeroAuthorFirstname>{name}</Styled.HeroAuthorFirstname>*/}
				{/*<Styled.HeroAuthorMiddlename>{middlename + ' '}</Styled.HeroAuthorMiddlename>*/}
				{/*<Styled.HeroAuthorLastname>{lastname}</Styled.HeroAuthorLastname>*/}
			</Styled.HeroAuthor>
			<Styled.HeroSubHeading>
				{/*<Styled.HeroSubHeadingText>{subHeading}</Styled.HeroSubHeadingText>*/}
			</Styled.HeroSubHeading>
			<Styled.HeroDescription>
				{/*<Styled.HeroDescriptionText>{description}</Styled.HeroDescriptionText>*/}
			</Styled.HeroDescription>
		</Styled.HeroContainer>
	);
};

export default HeroComponent;
