import { Box, Container, styled, Typography } from "@mui/material";

const PageWrapper = styled(Container)`

`;

const TermsList = styled('ul')`
	list-style: none;
	margin-top: 24px;
`;

const ListItem = styled('li')`
	margin-bottom: 16px;
`;

const ListItemContent = styled(Box)`

`;

const ListItemHeading = styled(Typography)`
	font-size: 18px;
	font-weight: bold;
`;

const ListItemDescription = styled(Typography)`
	color: black;
`;

export default { PageWrapper, TermsList, ListItem, ListItemContent, ListItemHeading, ListItemDescription };
