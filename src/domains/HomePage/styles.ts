import { Container, styled } from "@mui/material";

export type StyledProps = {
  topSpacing?: number,
  bottomSpacing?: number,
  rowGap?: number,
}

const ActionPanel = styled('div')`
  display: flex;
  flex-direction: row;
`;

const PageWrapper = styled(Container)<StyledProps>`
    display: flex;
    flex-direction: column;
    margin-top: ${({ topSpacing }) => topSpacing ? `${topSpacing}px` : undefined};
    margin-bottom: ${({ bottomSpacing }) => bottomSpacing ? `${bottomSpacing}px` : undefined};
    row-gap: ${({ rowGap }) => rowGap ? `${rowGap}px` : undefined};
`;

const SessionContainer = styled("div")<StyledProps>`
    display: flex;
    flex-direction: column;
    margin-top: ${({ topSpacing }) => topSpacing ? `${topSpacing}px` : undefined};
    margin-bottom: ${({ bottomSpacing }) => bottomSpacing ? `${bottomSpacing}px` : undefined};
    row-gap: ${({ rowGap }) => rowGap ? `${rowGap}px` : undefined};
  
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
