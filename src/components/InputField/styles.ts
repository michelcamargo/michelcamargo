import { Box, Input, styled, TextareaAutosize } from "@mui/material";

interface StyledProps {
  width?: number,
  height?: number,
  full_width?: string,
}

const FormFieldBox = styled(Box)<StyledProps>`

`;

const FieldLabel = styled(Box)<StyledProps>`

`;

const TextInput = styled(Input)<StyledProps>`
  width: ${({ width, full_width }) => {
		if (width) return `${width}px`; else if (full_width === 'true') return '100%';
		return 'inherit';
	}};
`;

const TextArea = styled(TextareaAutosize)<StyledProps>`
  width: ${({ width, full_width }) => {
		if (width) return `${width}px`; else if (full_width === 'true') return '100%';
		return 'inherit';
	}};
  height: ${({ height }) => height ? `${height}px` : 'inherit'};
`;

export default {
	FormFieldBox, FieldLabel, TextInput, TextArea,
};
