import { Box, styled, Typography } from "@mui/material";

const FormSuccess = styled(Box)`
  display: flex;
`;

const FormSuccessContent = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 16px;
  margin: 0 auto;
`;

const FormSuccessText = styled(Typography)`
  width: 100%;
  text-align: center;
`;

export default {
  FormSuccess, FormSuccessContent, FormSuccessText
};
