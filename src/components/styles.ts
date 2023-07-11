import { Container, styled } from "@mui/material";

const PageLayout = styled('div')`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  background: var(--background-light);
`;

const BodyContainer = styled(Container)`
  flex: 1;
`;

const BodyContent = styled('main')`
  flex: 1;
`;

export default {
  PageLayout,
  BodyContainer,
  BodyContent,
};
