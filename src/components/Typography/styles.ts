import styled from 'styled-components';

interface TxtProps {
  color?: string;
  opacity?: string;
  transitionDuration?: string;
}

const defaultProps = {
  color: 'var(--white)'
};



export const MTitle = styled.h1<TxtProps>`

  font-size: 3.7rem;
  font-weight: 600;
  margin-bottom: 5px;
  
  color: ${props => props.color || defaultProps.color};
  opacity: ${props => props.opacity};
`;

export const Heading2 = styled.h2<TxtProps>`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 5px;
  
  color: ${props => props.color || defaultProps.color };
  opacity: ${props => props.opacity}
`;

Heading2.Inactive = styled(Heading2)<TxtProps>`
  
  &:hover{
    opacity: 1;
    transition-duration: ${props => props.transitionDuration};
  }
`;

export const Heading3 = styled.h3<TxtProps>`
  font-size: 1.5rem;
  margin-bottom: 5px;

  color: ${props => props.color || defaultProps.color};
  opacity: ${props => props.opacity};
`;

Heading3.Inactive = styled(Heading3)<TxtProps>`
  
  &:hover{
    opacity: 1;
    transition-duration: ${props => props.transitionDuration};
  }
`;

export const Heading4 = styled.h4<TxtProps>`
  font-size: 1.1rem;
  margin-bottom: 5px;

  color: ${props => props.color || defaultProps.color};
  opacity: ${props => props.opacity};
`;

Heading4.Inactive = styled(Heading4)<TxtProps>`
  
  &:hover{
    opacity: 1;
    transition-duration: ${props => props.transitionDuration};
  }
`;