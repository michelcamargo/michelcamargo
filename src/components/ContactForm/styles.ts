import { Box, styled, Typography } from "@mui/material";

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormHead = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const FormHeader = styled(Box)`
  display: flex;
`;

const FormHeading = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
`;

const FormSubtitle = styled(Typography)`
  font-size: 14px;
  white-space: pre-wrap;
`;

const FormBody = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const FormActionPanel = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 8px;
`;

const InputField = styled(Box)`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const FormFieldBox = styled(Box)`
  min-height: 52px;
	padding: 4px 8px;
	border-style: none;
	box-shadow: 0 0 2px 1px rgba(0,0,0, .1);
	border-radius: 4px;
	background: #FFFFFF77;
	transition: .2s ease-in;
	
	&:focus, &:focus-visible {
		box-shadow: 0 0 2px 1px rgba(0,0,0, .2);
		background: #FFFFFFFF;
		outline: none;
	}
`;

export default {
  Wrapper, FormHead, FormHeading, FormSubtitle, FormBody, FormActionPanel,
  InputField, FormFieldBox, FormHeader,
};
