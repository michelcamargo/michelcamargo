import { Box, Container, styled, Typography } from "@mui/material";
import Image from 'next/image';

const MainColumn = styled('div')`
  display: flex;
  flex-direction: column;
`;

const PageWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const LinkRow = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const LinkContent = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const LinkIcon = styled(Image)``;

const LinkLabel = styled(Typography)`
  font-size: 16px;
`;

export default {
  PageWrapper, MainColumn, LinkRow, LinkContent, LinkIcon, LinkLabel
};
