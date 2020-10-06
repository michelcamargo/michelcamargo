import styled, { css } from 'styled-components';

import bgImage from '../../assets/manuel-sardo.jpg';

export const HomeWrapper = styled.div`

`;

export const Hero = styled.section`
  background: url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 90vh;

  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;

`;

Hero.Title = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 0;
`;

Hero.Subtitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 25px;
`;

export const Work = styled.section`
  background: #191919;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 100px 50px; */
`;

export const Resume = styled.section`

`;

Resume.Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 35px;
  color: #e3e7ee;

  text-align: center;
`;

Resume.Description = styled.p`
  max-width: 800px;
  margin-bottom: 35px;
  color: #e3e7ee;

  text-align: center;
`;

export const Separator = styled.hr`
  width: 200px;
  height: 2px;
  background-color: #e3e7ee;
  margin-bottom: 70px;

  border: none; /* Tira borda transparente */
`;

/* REDESENHAR O GRID PARA APRESENTAR SCREENSHOTS */

export const Grid = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  
`;

Grid.Item = styled.div`
  ${(props) => (props.img
    ? css`background: url(${props.img})`
    : css`background: ${props.color}`)
};
  /* margin: 5px; */
  height: 30vh;
  padding: 20px;
  border-radius: 4px;
  background-size: cover;
  background-clip: padding-box;
  position: center;
`;

// Grid.Item = styled.div`
//   ${(props) => (props.img
//     ? css`background: url(${props.img})`
//     : css`background: ${props.color}`)
// };
//   margin: 2px;
//   height: 350px;
//   padding: 20px;
//   border-radius: 4px;
//   background-size: cover;
//   background-clip: padding-box;
//   position: center;
// `;

Grid.LargeItem = styled(Grid.Item)`
  flex-basis: 30%;
`;

Grid.SmallItem = styled(Grid.Item)`
  flex-basis: 20%;
`;

export const Newsletter = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 50px;
`;

Newsletter.Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 35px;
  
  color: #191919;

  text-align: center;
`;

Newsletter.Description = styled.p`
  max-width: 800px;
  margin-bottom: 35px;
  color: #191919;

  text-align: center;
`;

Newsletter.Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  max-width: 800px;
`;

Newsletter.Input = styled.input`
  padding: 15px;
  border: 1px solid #05c9c9;
  border-radius: 4px;
  margin-right: 15px;
  flex: 1;
`;

// .newsletter input:focus, .newsletter input:active, .newsletter input:enabled{
//   border: 1px solid #05c9c9;
// `;

Newsletter.Button = styled.button`
  padding: 15px;
  background-color: #07f3f3;
  color: #191919;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;

  cursor: pointer;

  opacity: .9;
  transition-duration: 350ms;
`;

// .newsletter button:hover {
//   opacity: 1;
// }
