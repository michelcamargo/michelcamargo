import { Box, styled } from "@mui/material";

const PageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  //max-width: 1030px;
  //margin: auto;
`;

const GeneralContent = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SplitRow = styled(Box)`
  display: flex;
  flex-direction: row;
  height: 100%;
  column-gap: ${({ theme }) => theme.spacing(5)};
  flex: 1;
`;

export default {
  PageWrapper,
  SplitRow,
  GeneralContent,
};
