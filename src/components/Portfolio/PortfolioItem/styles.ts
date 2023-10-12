import { Box, styled, Typography } from "@mui/material";

interface StyledProps {
	isActive?: boolean,
}

const Wrapper = styled(Box)<StyledProps>`
	border: 2px black solid;
`;

const CaseTitle = styled(Typography)<StyledProps>`
`;

const CaseDescription = styled(Typography)<StyledProps>`
`;

const CaseImageGroup = styled(Box)<StyledProps>`
`;

const CaseBrandName = styled(Typography)<StyledProps>`
`;

export default {
  Wrapper, CaseTitle, CaseDescription, CaseImageGroup, CaseBrandName
};
