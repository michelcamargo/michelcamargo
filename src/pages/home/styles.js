import styled, { css } from 'styled-components';

import bgImage from '../../assets/manuel-sardo.jpg';

// export const Wpp = styled.Whatsapp`
//   width: 60px;
// `;

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
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 100px 50px; */
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Resume = styled.section`

`;

Resume.Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 35px;
  color: #282828;

  text-align: center;
`;

Resume.Description = styled.p`
  max-width: 800px;
  margin-bottom: 35px;
  color: #282828;

  text-align: center;
`;

export const Separator = styled.hr`
  width: 200px;
  height: 2px;
  background-color: #282828;
  margin: 15px 0;

  border: none; /* Tira borda transparente */
`;

/* REDESENHAR O GRID PARA APRESENTAR SCREENSHOTS */

export const Grid = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  margin: 50px 0;
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
  background: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 25px;
`;

Newsletter.Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 35px;
  
  color: #f0f0f0;

  text-align: center;
`;

Newsletter.Description = styled.p`
  max-width: 800px;
  margin-bottom: 35px;
  color: #f0f0f0;

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
