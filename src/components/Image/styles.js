import styled from 'styled-components';

const Img = styled.img`
  src: ${(props) => props.src};
  width: ${(props) => props.width};
  alt: ${(props) => props.alt};
  border-radius: ${(props) => props.radius};
`;

export default Img;
