import { Box, Container, styled, Typography } from "@mui/material";
import Image from 'next/image';

const MainColumn = styled('div')`
  display: flex;
  flex-direction: row;
`;

const PageWrapper = styled(Container)``;

const LinkRow = styled(Box)``;

const LinkContent = styled(Box)``;

const LinkIcon = styled(Image)``;

const LinkLabel = styled(Typography)``;

export default {
  PageWrapper, MainColumn, LinkRow, LinkContent, LinkIcon, LinkLabel
};
