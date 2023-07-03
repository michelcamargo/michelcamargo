import { Container, styled } from "@mui/material";

const PageLayout = styled('div')`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
`;

const BodyContainer = styled(Container)`

`;

const BodyContent = styled('main')`
  flex: 1;
`;

export default {
  PageLayout,
  BodyContainer,
  BodyContent,
};
