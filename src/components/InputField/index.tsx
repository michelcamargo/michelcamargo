import { CommonInputProps } from "@/lib/input-field";

import Styled from './styles';

interface Props extends CommonInputProps {
  minRows?: number,
  errors?: string,
}

const FieldText = ({
	name, type = 'text', label, fullWidth, errors, onChange, value,
	width, height, id, isDisabled, onBlur, placeholder,
}: Props) => {
  
	const TextInputComponent = (
		<Styled.FormFieldBox>
			<Styled.TextInput
				id={id}
				name={name}
				type={type}
				fullWidth={fullWidth}
				onChange={onChange}
				value={value}
				width={width}
				height={height}
				disabled={isDisabled ?? false}
				onBlur={onBlur}
				placeholder={placeholder}
				color={errors ? 'error' : 'primary'}
			/>
			{errors && <span className="input-feedback">{errors}</span>}
		</Styled.FormFieldBox>
	);
  
	if (!label) {
		return TextInputComponent;
	}
  
	return (
		<Styled.FormFieldBox>
			<Styled.FieldLabel>{label}</Styled.FieldLabel>
			{TextInputComponent}
		</Styled.FormFieldBox>
	);
};

const FieldTextArea = ({
	id, name, label, placeholder, isDisabled, maxLength, errors,
	height, width, fullWidth, onChange, onBlur, value, minRows,
}: Props) => {
  
	const TextAreaComponent = (
		<Styled.FormFieldBox>
			<Styled.TextArea
				name={name}
				id={id}
				placeholder={placeholder}
				height={height}
				width={width}
				fullWidth={fullWidth}
				onChange={onChange}
				disabled={isDisabled}
				onBlur={onBlur}
				value={value}
				minRows={minRows ?? 2}
				maxLength={maxLength ?? undefined}
				color={errors ? 'error' : 'primary'}
			/>
			{errors && <div id="feedback">{errors}</div>}
		</Styled.FormFieldBox>
	);
  
	if (!label) {
		return TextAreaComponent;
	}
  
	return (
		<Styled.FormFieldBox>
			<Styled.FieldLabel>{label}</Styled.FieldLabel>
			{TextAreaComponent}
		</Styled.FormFieldBox>
	);
};

const InputField = {
	FieldText, FieldTextArea,
};

export default InputField;
