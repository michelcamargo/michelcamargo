import React, { ReactNode } from 'react';

import Styled from "@/components/_workhouse/CustomForm/CustomFormField/styles";
import { TextareaAutosize } from "@mui/material";
import { Formik, FormikHelpers, FormikValues } from 'formik';

interface CustomFormProps<T> {
	children?: ReactNode,
  initialValues: T,
  onSubmit: (values: T, actions: FormikHelpers<T>) => void,
  validationSchema: any,
}

interface FieldProps {
  name: string,
  type?: 'text' | 'number' | 'email',
  label?: string,
  icon?: ReactNode,
  id: string,
  placeholder?: string,
  isDisabled?: boolean,
  maxLength?: number,
  hasErrors?: false | Array<string>
}

const CustomForm = <T extends FormikValues,>({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: CustomFormProps<T>) => {
  
  const FieldTextArea = ({ id, name, label, placeholder, isDisabled, maxLength, hasErrors }: FieldProps) => {
    if (!label) {
      return <TextareaAutosize name={name} />;
    }
  
    return (
      <Styled.FormFieldBox>
        <Styled.FieldLabel>{label}</Styled.FieldLabel>
        <Styled.TextArea
          name={name}
          id={id}
          placeholder={placeholder}
          // onChange={onChange}
          disabled={isDisabled}
          // minRows={minRows ?? 2}
          // maxRows={maxRows ?? undefined}
          maxLength={maxLength ?? undefined}
          // InputProps={{ inputProps: { min: 0.1 } }}
          // error={hasErrors}
          // helperText={helperText}
          color={hasErrors ? 'error' : 'primary'}
        // fullWidth={fullWidth}
        // variant={outlined ? 'outlined' : 'standard'}
        // size={size ? size : 'small'}
        />
      </Styled.FormFieldBox>
    );
  };
  
  const FieldText = ({ name, type = 'text', label,  }: FieldProps) => {
    if (!label) {
      return <input name={name} type={type} />;
    }
  
    return (
      <Styled.FormFieldBox>
        <Styled.FieldLabel>{label}</Styled.FieldLabel>
        <Styled.TextInput name={name} type={type} />
      </Styled.FormFieldBox>
    );
  };
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onSubmit(values, actions);
      }}
    >
      {children}
    </Formik>
  );
};

export default CustomForm;
