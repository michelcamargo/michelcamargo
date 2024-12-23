import React from 'react';

import { ISkill } from "@/lib/content";

import Styled from './styles';

type Props = {
	info: ISkill
}

const CareerSkillCard = ({ info }: Props) => {
	return (
		<Styled.SkillCard>
			<Styled.CardHead>
				<Styled.CardTitle>{info.title}</Styled.CardTitle>
			</Styled.CardHead>
			{info.stack.map((skill, index) => (
				<Styled.ListItem key={index}>
					{skill.label}
				</Styled.ListItem>
			)) ?? <></>}
		</Styled.SkillCard>
	);
};

export default CareerSkillCard;
