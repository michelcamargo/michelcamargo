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

const FooterLeftSession = styled('div')`
  display: flex;
  flex-direction: row;
`;

const FooterRightSession = styled('div')`
  display: flex;
  flex-direction: row;
`;

const FooterBottomSession = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default {
  FooterWrapper,
  FooterContainer,
  FooterContent,
  FooterLeftSession,
  FooterRightSession,
  FooterBottomSession
};
