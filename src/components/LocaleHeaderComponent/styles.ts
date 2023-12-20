import { StyledProps } from "@/components/HeaderToolbar/styles";
import { FormControl, MenuItem, styled } from "@mui/material";
import Select from "@mui/material/Select";

const LocaleFormControl = styled(FormControl)<StyledProps>`

`;

const LocaleSelect = styled(Select)<StyledProps>`
	max-width: 250px;
	height: 24px;
	padding: 0;
	outline: 0;
	box-shadow: 0 0 0 0 rgba(0,0,0, 0);
	border-color: transparent;
	
	&:focus-visible {
		outline: none;
	}
`;

const LocaleOptionItem = styled(MenuItem)<StyledProps>`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const LocaleLangLabel = styled(MenuItem)<StyledProps>`
	font-size: 11px;
`;

const LocaleFlag = styled(MenuItem)<StyledProps>`
	position: absolute;
	background: red;
	width: 100%;
	height: 100%;
`;

export default {
  LocaleFormControl, LocaleSelect, LocaleOptionItem, LocaleLangLabel, LocaleFlag
};
