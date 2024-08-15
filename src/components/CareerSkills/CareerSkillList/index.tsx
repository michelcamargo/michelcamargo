import React from 'react';

import Styled, { StyledProps } from './styles';

type Props = {
	title?: string,
	items: Array<{ label: string, link?: string }>
}

const CareerSkillList = ({ title, items }: Props) => {
  return (
    <Styled.ListWrapper>
      <p>{title}</p>
      {items.map((item, index) => (
        <Styled.ListItem key={index}>
          { item.link ? (
            <Styled.ListInnerItem href={item.link}>
              {item.label}
            </Styled.ListInnerItem>
          ) : item.label}
        </Styled.ListItem>
      ))}
    </Styled.ListWrapper>
  );
};

export default CareerSkillList;
