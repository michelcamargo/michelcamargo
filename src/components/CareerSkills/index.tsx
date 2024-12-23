import { useMemo } from "react";

import CareerSkillCard from "@/components/CareerSkills/CareerSkillCard";
import LoadingFeedback from "@/components/LoadingFeedback";
import CustomContent from "@/helpers/content.helper";
import { ISkill, ISkillData } from "@/lib/content";

import Styled from './styles';

interface Props {
	summary?: string[]
	data?: CustomContent
}

const CareerSkills = ({ summary = ['frontend', 'backend', 'infrastructure'], data }: Props) => {
	
	const skills: ISkill[] = useMemo(() => {
		return summary?.map((key, _index) => {
			const info: CustomContent[] = data?.getChildren(key) ?? [];
			
			return { title: key, description: '', stack: info.map(item => item?.toObject<ISkillData>() ?? []) };
		});
		
	}, [data, summary]);
	
	if (!data) return <LoadingFeedback />;
	
	return (
		<Styled.Wrapper>
			<Styled.Content>
				<Styled.Heading>Habilidades</Styled.Heading>
				<Styled.ListContainer>
					{skills.map((skill, index) => (
						<CareerSkillCard key={index} info={skill} />
					))}
				</Styled.ListContainer>
			</Styled.Content>
		</Styled.Wrapper>
	);
};

export default CareerSkills;
