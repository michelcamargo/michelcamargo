import styled from 'styled-components';

interface Props{
  visible: boolean;
}

export const Disclaimer = styled.div<Props>`
  position: fixed;
  top: 5.4%;
  right: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;

  padding: 25px;

  height: 100%;
  width: 450px;

  background-color: rgba(0, 0, 0, 0.7);

  &:focus {
    outline: none;
  }

  /* div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  } */

`;

Disclaimer.Title = styled.h3<Props>`
  margin: 30px 0;
  text-align: center;
  color: #FFF;

  font-size: 1.4rem;
  font-weight: 600;
`;

Disclaimer.Content = styled.p<Props>`
  font-size: 1.15rem;
  font-weight: 300;

  color: #FFF;
`;