import styled from 'styled-components';

interface Theme {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const H1 = styled.h1<Theme>`
  font-size: ${props => props.fontSize || '3.7rem' };
  font-weight: ${props => props.fontWeight || '600'};
  
  color: ${props => props.color};
`;

export const H2 = styled.h2<Theme>`
  font-size: ${props => props.fontSize || '2.2rem'};
  font-weight: ${props => props.fontWeight || '600'};
  
  color: ${props => props.color};
`;

export const H3 = styled.h3<Theme>`
  font-size: ${props => props.fontSize || '1.5rem' };
  font-weight: ${props => props.fontWeight || '500'};

  color: ${props => props.color};
`;

export const H4 = styled.h4<Theme>`
  font-size: ${props => props.fontSize || '1.1rem'};
  font-weight: ${props => props.fontWeight || '500'};

  color: ${props => props.color};
`;

export const Paragraph = styled.p<Theme>`
  font-size: ${props => props.fontSize || '1rem'};
  font-weight: ${props => props.fontWeight || '300'};

  color: ${props => props.color};
`;
