import { Box, styled } from "@mui/material";

const PageLayout = styled(Box)`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  background-image: var(--background-light);
  //background-size: center/100%;
  background-size: cover;
  background-repeat: no-repeat;
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
