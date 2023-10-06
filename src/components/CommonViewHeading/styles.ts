import { Box, styled, Container as BaseContainer, Typography } from "@mui/material";

export interface StyledProps {
	container?: boolean,
}

const Wrapper = styled(Box)`

`;

const Container = styled(BaseContainer)`

`;

const Content = styled(Box)`

`;

const TopRow = styled(Box)`
  display: flex;
  flex-direction: row;
  column-gap: ${({ theme }) => theme?.spacing(2)};
`;

const HeadingText = styled(Typography)`
  font-size: 28px;
  font-weight: bold;
`;

const BottomRow = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const SubtitleText = styled(Typography)`

`;

export default {
  Wrapper,
  Container,
  Content,
  TopRow,
  BottomRow,
  HeadingText,
  SubtitleText,
};
