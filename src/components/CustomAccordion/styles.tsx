import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { styled } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";

export type StyledCustomAccordionProps = {
  no_spacing?: string,
  background?: string,
  content_divisor?: string,
  border?: string,
}

export type StyledAccordionProps = AccordionProps & StyledCustomAccordionProps;

export type StyledSummaryProps = AccordionSummaryProps & StyledCustomAccordionProps;

const AccordionItem = styled((props: StyledAccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme, no_spacing }) => ({
	border: `1px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&:before': {
		display: 'none',
	},
	'& .MuiAccordionSummary-content': {
		marginTop: no_spacing === 'true' ? 0 : undefined,
		marginBottom: no_spacing === 'true' ? 0 : undefined,
	},
	'& .MuiAccordionSummary-expandIconWrapper': {
		position: 'absolute',
		left: 0,
		padding: '0 8px',
	},
	// background: background ? background : 'inherit',
}));

const AccordionSummary = styled((props: StyledSummaryProps) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
		{...props}
	/>
))(({ theme, no_spacing, }) => ({
	// background: theme.palette.mode === 'dark'
	//   ? background ? background : 'inherit'
	//   : background ? background : 'inherit',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: no_spacing === 'true' ? 0 : theme.spacing( 1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)<StyledCustomAccordionProps>
(({ theme, no_spacing, content_divisor, background }) => ({
	padding: no_spacing === 'true' ? 0 : theme.spacing(2),
	borderTop: content_divisor ?? 'unset',
	background: background ? background : 'inherit',
}));

const LeftOffset = styled('div')`
  padding-left: 32px;
`;

export default {
	AccordionItem, AccordionSummary, AccordionDetails, LeftOffset
};
