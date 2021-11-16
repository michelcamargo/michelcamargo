import styled from 'styled-components';

interface ImgProps {
  width: string;
  radius?: string;
}

const Img = styled.img<ImgProps>`
  width: ${(props) => props.width};
  border-radius: ${(props) => props.radius};
`;

export default Img;
