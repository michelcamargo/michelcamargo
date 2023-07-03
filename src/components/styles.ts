import { Container, styled } from "@mui/material";

const PageLayout = styled('div')`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
`;

const BodyContainer = styled(Container)`

`;

const BodyContent = styled('main')`

`;

export default {
  PageLayout,
  BodyContainer,
  BodyContent,
};
