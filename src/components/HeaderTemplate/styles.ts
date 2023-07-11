import { Container, styled } from '@mui/material';

const HeaderWrapper = styled('header')`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeaderOverlayBlur = styled('div')`
  opacity: .25;
  width: 100%;
  height: 100%;
  background: #FFF;
  backdrop-filter: blur(10px);
  position: absolute;
  z-index: 2;
`;

const HeaderContainer = styled(Container)`
  z-index: 3;
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const TopContainer = styled('div')`
  display: flex;
  flex-direction: row;
  z-index: 3;
  position: relative;
`;

const MidContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BottomContainer = styled('div')`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled('div')`
  display: flex;
  flex-direction: row;
`;

const RightContainer = styled('div')`
  display: flex;
  flex-direction: row;
`;

export default {
  HeaderWrapper,
  HeaderOverlayBlur,
  HeaderContainer,
  TopContainer,
  MidContainer,
  BottomContainer,
  LeftContainer,
  RightContainer,
};
