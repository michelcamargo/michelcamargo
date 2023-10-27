import React from 'react';

import Styled from "@/components/ContactForm/styles";
import InputField from "@/components/InputField";
import { CustomerLead } from "@/lib/customer";
import { FormikProps } from "formik";

interface Props {
	formProps: FormikProps<CustomerLead>
}

const ProspectionPersonalStep = ({ formProps }: Props) => {
  return (
    <Styled.InputField key={'personal'}>
      <InputField.FieldText
        id="Nome"
        label="Nome"
        key="name"
        name="name"
        fullWidth
        value={formProps.values.name}
        onChange={formProps.handleChange}
        errors={formProps.errors.name}
      />
      <InputField.FieldText
        id="Email"
        label="Email"
        key="email"
        type="email"
        name="email"
        fullWidth
        value={formProps.values.email}
        onChange={formProps.handleChange}
        errors={formProps.errors.email}
      />
    </Styled.InputField>
  );
};

export default ProspectionPersonalStep;
