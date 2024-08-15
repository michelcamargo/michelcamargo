import { Container, styled } from '@mui/material';

export interface StyledProps {
  minified?: boolean,
}

const HeaderWrapper = styled('header')<StyledProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeaderOverlayBlur = styled('div')<StyledProps>`
  opacity: .25;
  width: 100%;
  height: 100%;
  background: #FFF;
  backdrop-filter: blur(10px);
  position: absolute;
  z-index: 2;
`;

const HeaderContainer = styled(Container)<StyledProps>`
  z-index: 3;
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const TopContainer = styled('div')<StyledProps>`
  display: flex;
  flex-direction: row;
  z-index: 3;
  position: relative;
`;

const MidContainer = styled('div')<StyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BottomContainer = styled('div')<StyledProps>`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled('div')<StyledProps>`
  display: flex;
  flex-direction: row;
`;

const RightContainer = styled('div')<StyledProps>`
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
