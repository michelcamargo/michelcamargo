import { Link, List, ListItem, styled } from "@mui/material";

const ListWrapper = styled(List)``;

const CustomListItem = styled(ListItem)``;

const ListInnerItem = styled(Link)``;

export default {
	ListWrapper, ListItem: CustomListItem, ListInnerItem
};
