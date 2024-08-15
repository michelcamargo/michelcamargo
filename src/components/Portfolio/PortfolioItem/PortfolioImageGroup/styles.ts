import { Grid, styled } from "@mui/material";

const CommonGrid = styled(Grid)`

`;

const CoverGrid = styled(Grid)`

`;

const GridItem = styled(Grid)`
	display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme?.spacing(2)}
`;

export default {
	CommonGrid,
	CoverGrid,
	GridItem,
};
