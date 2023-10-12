import { Box, styled, Typography } from "@mui/material";

interface StyledProps {
	isActive?: boolean,
}

const Wrapper = styled(Box)<StyledProps>`
	border: 2px black solid;
`;

const CaseTitle = styled(Typography)<StyledProps>`
	font-size: 20px;
`;

const CaseDescription = styled(Typography)<StyledProps>`
	font-size: 14px;
`;

const CaseCommonImageGroup = styled(Box)<StyledProps>`
	display: flex;
`;

const CaseCoverImageGroup = styled(Box)<StyledProps>`
	display: flex;
`;

const CaseBrandName = styled(Typography)<StyledProps>`
	font-size: 16px;
`;

export default {
  Wrapper, CaseTitle, CaseDescription, CaseCoverImageGroup, CaseCommonImageGroup, CaseBrandName
};
