import { Box, styled, Typography } from "@mui/material";

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: rbga(0,0,0, 0.1);
  padding: 16px;
  width: 620px !important;
`;

const FormHead = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const FormHeading = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
`;

const FormSubtitle = styled(Typography)`

`;

const FormBody = styled('form')`
  display: flex;
  flex-direction: column;
`;

const FormActionPanel = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export default {
  Wrapper, FormHead, FormHeading, FormSubtitle, FormBody,
  FormActionPanel,
};
