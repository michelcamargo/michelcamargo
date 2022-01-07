import styled from "styled-components";
import "../../../assets/img/landing/landing-main.jpg";

type LandingProps = {

}

export const LandingScreen = styled.div<LandingProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  //background: url(props => props.landingMain) no-repeat center/100%;
`;

export const PrincipalText = styled.h2<LandingProps>`
`;
