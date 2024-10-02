import React from 'react';

import InputField from "@/components/InputField";
import { CustomerLead } from "@/lib/customer";
import { FormikProps } from "formik";

interface Props {
	formProps: FormikProps<CustomerLead>
}

const ProspectionIntroStep = ({ formProps }: Props) => {
	return (
		<InputField.FieldTextArea
			id="message"
			key="message"
			name="message"
			value={formProps.values.message}
			onBlur={formProps.handleBlur}
			errors={formProps.errors.message}
			height={80}
			full_width="true"
			onChange={formProps.handleChange}
		/>
	);
};

export default ProspectionIntroStep;
