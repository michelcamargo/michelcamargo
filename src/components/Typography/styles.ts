import styled from 'styled-components';

interface Theme {
  color?: string;
  opacity?: string;
  transitionDuration?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
}

const defaultProps = {
  color: 'var(--white)'
};



export const MTitle = styled.h1<Theme>`

  font-size: ${props => props.fontSize || '3.7rem' };
  font-weight: ${props => props.fontWeight || '600'};
  margin: ${props => props.margin};
  
  color: ${props => props.color || defaultProps.color};
  opacity: ${props => props.opacity};
`;

export const Heading2 = styled.h2<Theme>`
  font-size: ${props => props.fontSize || '2.2rem'};
  font-weight: ${props => props.fontWeight || '600'};
  margin: ${props => props.margin};
  
  color: ${props => props.color || defaultProps.color };
  opacity: ${props => props.opacity}
`;

Heading2.Inactive = styled(Heading2)<Theme>`
  
  &:hover{
    opacity: 1;
    transition-duration: ${props => props.transitionDuration};
  }
`;

export const Heading3 = styled.h3<Theme>`
  font-size: ${props => props.fontSize || '1.5rem' };
  font-weight: ${props => props.fontWeight || '500'};
  margin: ${props => props.margin};

  color: ${props => props.color || defaultProps.color};
  opacity: ${props => props.opacity};
`;

Heading3.Inactive = styled(Heading3)<Theme>`
  
  &:hover{
    opacity: 1;
    transition-duration: ${props => props.transitionDuration};
  }
`;

export const Heading4 = styled.h4<Theme>`
  font-size: ${props => props.fontSize || '1.1rem'};
  margin: ${props => props.margin};
  font-weight: ${props => props.fontWeight || '500'};

  color: ${props => props.color || defaultProps.color};
  opacity: ${props => props.opacity};
`;

Heading4.Inactive = styled(Heading4)<Theme>`
  
  &:hover{
    opacity: 1;
    transition-duration: ${props => props.transitionDuration};
  }
`;