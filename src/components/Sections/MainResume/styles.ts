import styled from 'styled-components';

interface ResumeProps {
    fontSize?: string;
    color?: string
}

export const ImageElement = styled.div`
  /* padding-top: 3px; Ajuste de offset */
`;

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.spacing.small};
`;

Resume.Title = styled.h2<ResumeProps>`
  color: ${props => props.color ? props.color : props.theme.colors.textPrimary};
  font-size: ${props => props.fontSize ? props.fontSize : props.theme.fontSize.largest};
  font-weight: 600;
`;

Resume.Subtitle = styled.h3<ResumeProps>`
  color: ${props => props.color ? props.color : props.theme.colors.textPrimary};
  font-size: ${props => props.fontSize ? props.fontSize : props.theme.fontSize.larger};
`;

Resume.Description = styled.p<ResumeProps>`
  color: ${props => props.color ? props.color : props.theme.colors.textPrimary};
  font-size: ${props => props.fontSize ? props.fontSize : props.theme.fontSize.medium};
`;

