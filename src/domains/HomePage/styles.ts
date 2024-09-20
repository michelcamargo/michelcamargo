import { Container, styled } from "@mui/material";

export type StyledProps = {
  top_spacing?: number,
  bottom_spacing?: number,
  row_gap?: number,
}

const ActionPanel = styled('div')`
  display: flex;
  flex-direction: row;
`;

const PageWrapper = styled(Container)<StyledProps>`
    display: flex;
    flex-direction: column;
    margin-top: ${({ top_spacing }) => top_spacing ? `${top_spacing}px` : undefined};
    margin-bottom: ${({ bottom_spacing }) => bottom_spacing ? `${bottom_spacing}px` : undefined};
    row-gap: ${({ row_gap }) => row_gap ? `${row_gap}px` : undefined};
`;

const SessionContainer = styled("div")<StyledProps>`
    display: flex;
    flex-direction: column;
    margin-top: ${({ top_spacing }) => top_spacing ? `${top_spacing}px` : undefined};
    margin-bottom: ${({ bottom_spacing }) => bottom_spacing ? `${bottom_spacing}px` : undefined};
    row-gap: ${({ row_gap }) => row_gap ? `${row_gap}px` : undefined};
  
`;

const Intro = styled("div")<StyledProps>`
    display: flex;
    flex-direction: row;
    margin: 32px 0;
    column-gap: 32px;
`;

export default {
	ActionPanel,
	PageWrapper,
	SessionContainer,
	Intro
};
