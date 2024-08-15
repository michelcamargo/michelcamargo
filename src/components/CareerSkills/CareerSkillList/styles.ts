import { Link, List, ListItem, styled } from "@mui/material";

export type StyledProps = {

}

const ListWrapper = styled(List)``;

const CustomListItem = styled(ListItem)``;

const ListInnerItem = styled(Link)``;

export default {
  ListWrapper, ListItem: CustomListItem, ListInnerItem
};
