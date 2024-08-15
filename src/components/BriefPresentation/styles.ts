import { Box, styled, Typography } from "@mui/material";

const Wrapper = styled(Box)`
	display: flex;
	flex-direction: column;
`;

const PresentationColumn = styled(Box)`
	display: flex;
	flex-direction: column;
`;

const PresentationSummary = styled(Box)`
	display: flex;
	flex-direction: row;
	column-gap: 16px;
`;

const AuthorName = styled(Typography)`
	display: inline-flex;
	font-weight: bold;
`;

const AuthorTitle = styled(Typography)`
	display: inline-flex;
	font-size: 14px;
`;

const AuthorDescription = styled(Typography)`
	display: inline-flex;
	font-size: 12px;
`;

const BriefDescription = styled(Typography)`
	display: inline-flex;
	font-size: 14px;
	margin: 16px 0;
`;

export default {
  Wrapper, PresentationColumn, AuthorName, AuthorDescription, BriefDescription, PresentationSummary, AuthorTitle
};
