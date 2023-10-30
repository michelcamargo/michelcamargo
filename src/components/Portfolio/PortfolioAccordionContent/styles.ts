import { Box, styled } from "@mui/material";

export interface StyledProps {
	active?: boolean,
}

const ContentWrapper = styled(Box)<StyledProps>`
	display: flex;
	flex-direction: column;
`;

const CoverImages = styled(Box)<StyledProps>``;

const CommonImages = styled(Box)<StyledProps>`
	display: flex;
	flex: 1;
`;
export default {
  ContentWrapper, CoverImages, CommonImages
};
