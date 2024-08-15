import { styled } from "@mui/material";

export type StyledProps = {
  callback?: () => void,
}

const Wrapper = styled('div')`

`;

const Content = styled('div')`

`;

const Heading = styled('h4')`

`;

const ListContainer = styled('div')`
	display: flex;
	flex-direction: row;
	column-gap: 32px;
`;

export default {
  Wrapper, Content, Heading, ListContainer
};
