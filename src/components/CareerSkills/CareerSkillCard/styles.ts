import { Card, Link, List, ListItem, styled, Typography } from "@mui/material";

const ListWrapper = styled(List)``;

const SkillCard = styled(Card)`
	padding: 16px;
`;

const CustomListItem = styled(ListItem)`
	padding: 0;
`;

const CardHead = styled('div')`
	margin-bottom: 8px;
`;

const CardTitle = styled(Typography)`
	text-transform: capitalize;
	font-size: 16px;
	font-weight: 600;
`;

const ListInnerItem = styled(Link)``;

export default {
	ListWrapper, ListItem: CustomListItem, ListInnerItem, SkillCard, CardHead, CardTitle
};
