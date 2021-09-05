import styled from 'styled-components';
import {H1, H2, H3} from "../../Typography/styles";

interface ResumeProps {
    color?: string,
    width?: string;
    radius?: string;
}

interface Styles {
    fontSize: "1rem",
    color?: string
}

export const Resume = styled.div<ResumeProps>`
  margin: 9vh 0;
  /* padding: 8vh 0; */
  display: flex;
  align-content: center;
  vertical-align: middle;
`;

export const ImageElement = styled.div`
  /* padding-top: 3px; Ajuste de offset */
`;

export const Textbox = styled.div`
  margin-left: 25px;
  width: 550px;
  height: 200px;
`;

Textbox.MainTitle = styled(H1)<Styles>`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
`;

Textbox.Title = styled(H2)<Styles>`
  margin-top: 5px;
`;

Textbox.Subtitle = styled(H3)<Styles>`
  margin-top: 10px;
`;

export const Skills = styled.section`
  padding-top: 10vh; 
  display: flex;
  flex-direction: row;
`;