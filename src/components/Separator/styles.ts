import styled from 'styled-components';

interface SeparatorProps {
  color?: string,
  width?: string;
  radius?: string;
}

const SepBar = styled.hr<SeparatorProps>`
  color: ${(props) => props.src};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.radius};
`;

export default SepBar;
