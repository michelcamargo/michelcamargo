import { Box, styled, Typography } from "@mui/material";

export interface StyledProps {
	active?: boolean,
	highlighted?: boolean,
	cover?: string,
}

const AccordionSummary = styled(Box)<StyledProps>`
	display: block;
	position: relative;
	width: 100%;
	padding: 12px 0;
`;

const HeadingTitle = styled(Typography)<StyledProps>`
	display: flex;
	flex-direction: column;
	font-size: 14px;
`;

const HeadingBrandName = styled(Typography)<StyledProps>`
	font-size: 14px;
	font-weight: bold;
`;

const BrandingRow = styled(Box)<StyledProps>`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const HeadingBrandLogoWrapper = styled(Box)<StyledProps>`
	display: flex;
	margin-right: 8px;
`;

const CommonImages = styled(Box)<StyledProps>`
	display: flex;
	flex: 1;
`;

const CoverImageContainer = styled(Box)<StyledProps>`
	display: flex;
	position: absolute;
	width: 100%;
	height: 100%;
	background: ${({ cover }) => cover ? `url(${cover}) center/100% no-repeat` : undefined };
`;

export default {
	CoverImageContainer, AccordionSummary, HeadingTitle, BrandingRow, HeadingBrandName,
	HeadingBrandLogoWrapper, CommonImages
};
