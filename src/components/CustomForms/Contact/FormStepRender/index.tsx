import React from "react";

import ProspectionIntroStep from "@/components/CustomForms/Contact/FormStepRender/ProspectionIntroStep";
import ProspectionPersonalStep from "@/components/CustomForms/Contact/FormStepRender/ProspectionPersonalStep";
// import { CustomerLead } from "@/lib/customer";
// import { ContactFormStep } from "@/lib/form";
import { FormikProps } from "formik";

interface Props {
	// step: ContactFormStep,
	step: number,
	// formProps: FormikProps<CustomerLead>,
	formProps: FormikProps<any>,
}

const FormStepRender = ({ step, formProps }: Props) => {
	switch (step) {
		case 0:
			return <ProspectionIntroStep formProps={formProps} />;
      
		case 1:
			return <ProspectionPersonalStep formProps={formProps} />;
      
		default:
			return (<ProspectionIntroStep formProps={formProps} />);
	}
};

export default FormStepRender;
