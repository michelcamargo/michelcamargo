import { Box, lighten, styled, Typography } from "@mui/material";

interface StyledProps {
	is_active?: boolean,
	font_family?: string,
	background?: string,
}

const Wrapper = styled(Box)<StyledProps>`
	position: relative;
	width: fit-content;
	border-radius: 4px;
`;

const CardOverlay = styled(Box)<StyledProps>`
	position: absolute;
	width: 100%;
	height: 100%;
	transition: ease-in .3s;
	background: ${({ theme, background }) =>
    background ? lighten(background, -.7) : lighten(theme.palette.background.default, -.7)};
	opacity: .5;
	filter: blur(10px);
`;

const CardContent = styled(Box)<StyledProps>`
	position: relative;
	width: 100%;
	height: 100%;
	opacity: .9;
	padding: 16px 32px;
	transition: ease-in .3s;
	cursor: pointer;
	box-shadow: 0 0 4px 1px rgba(0,0,0, .1);
	
	&:hover {
		opacity: 1;
		background: ${({ theme, background }) => background ? background : theme.palette.background.default};
		box-shadow: 0 0 4px 1px rgba(0,0,0, .2);
	}
`;

const CaseTitle = styled(Typography)<StyledProps>`
	font-size: 20px;
	font-weight: bold;
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

const Branding = styled(Box)<StyledProps>`
	display: flex;
	flex-direction: row;
	column-gap: 16px;
`;

const CaseBrandName = styled(Typography)<StyledProps>`
	font-family: ${({ font_family }) => font_family ? font_family : 'inherit'};
	font-size: 16px;
`;

export default {
  Wrapper, CardOverlay, CardContent,
  CaseTitle, CaseDescription, CaseCoverImageGroup, CaseCommonImageGroup, Branding, CaseBrandName
};
