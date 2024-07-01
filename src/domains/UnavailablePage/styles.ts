import {Container, styled, Typography} from "@mui/material";

export type StyledProps = {

}

const PageWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	height: max-content;
	margin: auto;
`;

const PageContainer = styled(Container)`
	display: block;
	height: fit-content;
`;

const PageContent = styled('div')`
	display: flex;
	flex-direction: column;
	position: relative;
	height: 100%;
`;

const Heading = styled('div')`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto;
	row-gap: 16px;
`;

const HeadingTitle = styled(Typography)`
	text-align: center;
	font-size: 48px;
	font-weight: 700;
`;

const HeadingDescription = styled(Typography)`
	text-align: center;
	font-size: 24px;
	font-weight: 300;
	white-space: break-spaces;
`;


export default {
	PageWrapper, PageContainer, PageContent, Heading, HeadingTitle, HeadingDescription
}
