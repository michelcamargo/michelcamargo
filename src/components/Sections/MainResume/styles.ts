import styled from 'styled-components';
import {H1, H2, Paragraph} from "../../Typography/styles";

interface Styles {
    fontSize: "1rem",
    color?: string
}

export const ImageElement = styled.div`
  /* padding-top: 3px; Ajuste de offset */
`;

export const Resume = styled.div`
  margin-left: 25px;
`;

Resume.Title = styled(H1)<Styles>`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
`;

Resume.Subtitle = styled(H2)<Styles>`
  padding: .5rem 0;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
`;

Resume.Description = styled(Paragraph)<Styles>`
  margin-top: 10px;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
`;

