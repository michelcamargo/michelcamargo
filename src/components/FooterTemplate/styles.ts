import { Container, styled } from "@mui/material";

const FooterWrapper = styled('footer')`
  background: gray;
`;

const FooterContainer = styled(Container)`
  background: #E6E6E6;
`;

const FooterContent = styled('div')`
  display: flex;
  flex-direction: row;
`;

export default {
  FooterWrapper,
  FooterContainer,
  FooterContent,
};
