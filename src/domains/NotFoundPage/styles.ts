import { Container, styled, Typography } from "@mui/material";

const PageWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const MainMessage = styled(Typography)`
  font-size: 42px;
`;

export default {
  PageWrapper,
  MainMessage,
};