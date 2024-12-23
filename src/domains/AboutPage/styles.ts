import { StyledProps } from "@/domains/HomePage/styles";
import { Container, styled } from "@mui/material";

const PageWrapper = styled('div')``;
const PageContainer = styled(Container)``;
const PageContent = styled('div')``;

const SessionContainer = styled("div")<StyledProps>`
    display: flex;
    flex-direction: column;
    margin-top: ${({ top_spacing }) => top_spacing ? `${top_spacing}px` : undefined};
    margin-bottom: ${({ bottom_spacing }) => bottom_spacing ? `${bottom_spacing}px` : undefined};
    row-gap: ${({ row_gap }) => row_gap ? `${row_gap}px` : undefined};
`;

export default {
	PageWrapper,
	PageContainer,
	PageContent,
	SessionContainer,
};
