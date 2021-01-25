import styled from 'styled-components';

interface ImgProps {
  src: string;
  link?: string;
  alt?: string;
  width: string;
  radius?: string;
}

const Img = styled.img<ImgProps>`
  src: ${(props) => props.src};
  width: ${(props) => props.width};
  alt: ${(props) => props.alt};
  border-radius: ${(props) => props.radius};
`;

export default Img;
