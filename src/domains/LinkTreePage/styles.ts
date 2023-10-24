import { Box, Container, styled, Typography } from "@mui/material";
import Image from 'next/image';

const PageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Content = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const MainColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const LinkRow = styled(Box)`
  display: flex;
  flex-direction: row;
  background: #FFFFFF99;
  box-shadow: 0 0 2px 2px #00000011;
  border-radius: 4px;
  transition: .2s ease-in;
  justify-content: center;
  
  &:hover {
    box-shadow: 0 0 2px 2px #00000022;
    background: #FFFFFFEE;
  }
  
`;

const LinkContent = styled(Box)`
  display: flex;
  flex-direction: row;
  padding: 16px;
`;

const LinkIcon = styled(Image)`

`;

const LinkLabel = styled(Typography)`
  font-size: 18px;
`;

export default {
  PageWrapper, Content, MainColumn, LinkRow, LinkContent, LinkIcon, LinkLabel
};
