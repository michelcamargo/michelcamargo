import React from 'react';

import CareerOverview from "@/components/PersonalPresentation/CareerOverview";
import CustomContent from "@/helpers/content.helper";

import Styled from './styles';

interface Props {
  serverContent?: CustomContent
}

const PersonalPresentation = ({ serverContent }: Props) => {
 
	if (!serverContent) {
		return (
			<>
				{'NO PERSONAL PRESENTATION CONTENT'}
			</>
		);
	}
 
	const careerData = serverContent.get('career-overall');
 
	return (
		<Styled.Wrapper>
			<CareerOverview data={careerData} />
		</Styled.Wrapper>
	);
};

export default PersonalPresentation;
