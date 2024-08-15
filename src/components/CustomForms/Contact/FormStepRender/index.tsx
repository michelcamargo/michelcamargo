import React from "react";

import ProspectionIntroStep from "@/components/CustomForms/Contact/FormStepRender/ProspectionIntroStep";
import ProspectionPersonalStep from "@/components/CustomForms/Contact/FormStepRender/ProspectionPersonalStep";
import { CustomerLead } from "@/lib/customer";
import { ContactFormStep } from "@/lib/form";
import { FormikProps } from "formik";

interface Props {
	step: ContactFormStep,
	formProps: FormikProps<CustomerLead>,
}

const FormStepRender = ({ step, formProps }: Props) => {
  switch (step) {
    case ContactFormStep.intro:
      return <ProspectionIntroStep formProps={formProps} />;
      
    case ContactFormStep.personal:
      return <ProspectionPersonalStep formProps={formProps} />;
      
    default:
      return (<ProspectionIntroStep formProps={formProps} />);
  }
};

export default FormStepRender;
