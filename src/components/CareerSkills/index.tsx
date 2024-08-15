import Styled, { StyledProps } from './styles';
import CareerSkillList from "@/components/CareerSkills/CareerSkillList";

interface Props extends StyledProps {

}

const HARD_SKILLS_MOCK = [
  {
    key: 0,
    label: 'A',
  },
  {
    key: 1,
    label: 'B',
  },
  {
    key: 2,
    label: 'C',
  },
  {
    key: 3,
    label: 'D',
  }
];

const SOFT_SKILLS_MOCK = [
  {
    key: 0,
    label: 'E',
  },
  {
    key: 1,
    label: 'F',
  },
  {
    key: 2,
    label: 'G',
  },
  {
    key: 3,
    label: 'H',
  }
]

const CareerSkills = ({ }: Props) => {
	
  return (
    <Styled.Wrapper>
      <Styled.Content>
	      <Styled.Heading>Habilidades</Styled.Heading>
        <Styled.ListContainer>
          <CareerSkillList title={'HardSkills'} items={HARD_SKILLS_MOCK} />
          <CareerSkillList title={'SoftSkills'} items={SOFT_SKILLS_MOCK} />
        </Styled.ListContainer>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default CareerSkills;
