import { Box, Container, styled } from "@mui/material";

const PageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const SplitRow = styled(Box)`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export default {
  PageWrapper,
  SplitRow,
};
