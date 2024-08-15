import { Box, styled, Typography } from "@mui/material";

const ErrorWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const ErrorHeader = styled(Box)`

`;

const HeadingMessage = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
`;

const HeadingSubtitle = styled(Typography)`

`;

const BodyDescription = styled(Typography)`

`;

const SuccessWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const SuccessHeader = styled(Box)`

`;

const InfoWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const InfoHeader = styled(Box)`

`;

export default {
	HeadingMessage, HeadingSubtitle, BodyDescription,
	ErrorWrapper, ErrorHeader,
	SuccessWrapper, SuccessHeader,
	InfoWrapper, InfoHeader,
};
