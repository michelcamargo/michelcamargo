import { Box, styled } from "@mui/material";

const PageLayout = styled(Box)`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  background: var(--background-light);
`;

const Body = styled('main')`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export default {
  PageLayout,
  Body,
};
