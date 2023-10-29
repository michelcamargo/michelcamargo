import { Container, styled } from "@mui/material";

const FooterWrapper = styled('footer')`
  display: flex;
  flex-direction: column;
`;

const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const FooterContent = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const FooterSplitSessions = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FooterLeftSession = styled('div')`
  display: flex;
  flex-direction: column;
`;

const FooterRightSession = styled('div')`
  display: flex;
  flex-direction: column;
`;

const FooterBottomSession = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-top: 8px;
  flex: 1;
`;

export default {
  FooterWrapper,
  FooterContainer,
  FooterContent,
  FooterSplitSessions,
  FooterLeftSession,
  FooterRightSession,
  FooterBottomSession
};
