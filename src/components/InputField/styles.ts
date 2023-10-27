import { Box, Input, styled, TextareaAutosize } from "@mui/material";

interface StyledProps {
  width?: number,
  height?: number,
  fullWidth?: boolean,
}

const FormFieldBox = styled(Box)<StyledProps>`

`;

const FieldLabel = styled(Box)<StyledProps>`

`;

const TextInput = styled(Input)<StyledProps>`
  width: ${({ width, fullWidth }) => {
    if (width) return `${width}px`; else if (fullWidth) return '100%';
    return 'inherit';
  }};
`;

const TextArea = styled(TextareaAutosize)<StyledProps>`
  width: ${({ width, fullWidth }) => {
    if (width) return `${width}px`; else if (fullWidth) return '100%';
    return 'inherit';
  }};
  height: ${({ height }) => height ? `${height}px` : 'inherit'};
`;

export default {
  FormFieldBox, FieldLabel, TextInput, TextArea,
};
