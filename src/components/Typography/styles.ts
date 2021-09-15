import styled from 'styled-components';

interface Theme {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const H1 = styled.h1<Theme>`
  font-size: ${props => props.fontSize || '42px' };
  font-weight: ${props => props.fontWeight || '600'};
  
  color: ${props => props.color};
`;

export const H2 = styled.h2<Theme>`
  font-size: ${props => props.fontSize || '38px'};
  font-weight: ${props => props.fontWeight || '600'};
  
  color: ${props => props.color};
`;

export const H3 = styled.h3<Theme>`
  font-size: ${props => props.fontSize || '32px' };
  font-weight: ${props => props.fontWeight || '500'};

  color: ${props => props.color};
`;

export const H4 = styled.h4<Theme>`
  font-size: ${props => props.fontSize || '24px'};
  font-weight: ${props => props.fontWeight || '500'};

  color: ${props => props.color};
`;

export const Paragraph = styled.p<Theme>`
  font-size: ${props => props.fontSize || '16px'};
  font-weight: ${props => props.fontWeight || '300'};

  color: ${props => props.color};
`;
