import { Container, styled } from '@mui/material';

const HeaderWrapper = styled('header')`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #E9E9E9;
`;

const HeaderContainer = styled(Container)`

`;

const TopContainer = styled('div')`
  display: flex;
  flex-direction: row;
  background: blue;
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
  HeaderContainer,
  TopContainer,
  MidContainer,
  BottomContainer,
  LeftContainer,
  RightContainer,
};
