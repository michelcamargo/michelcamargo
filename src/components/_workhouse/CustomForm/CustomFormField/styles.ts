import { Box, styled } from "@mui/material";

interface StyledProps {
  width?: number,
  height?: number,
  fullWidth?: boolean,
}

const FormFieldBox = styled(Box)<StyledProps>`

`;

const FieldLabel = styled(Box)<StyledProps>`

`;

const TextInput = styled('input')<StyledProps>`
  width: ${({ width, fullWidth }) => {
    if (width) return `${width}px`; else if (fullWidth) return '100%';
    return 'inherit';
  }};
`;

const TextArea = styled('textarea')<StyledProps>`
  width: ${({ width, fullWidth }) => {
    if (width) return `${width}px`; else if (fullWidth) return '100%';
    return 'inherit';
  }};
  height: ${({ height }) => height ? `${height}px` : 'inherit'};
`;

export default {
  FormFieldBox, FieldLabel, TextInput, TextArea,
};
