import React from "react";

import { ContactFormStep } from "@/components/ContactForm";
import ProspectionIntroStep from "@/components/ContactForm/FormStepRender/ProspectionIntroStep";
import ProspectionPersonalStep from "@/components/ContactForm/FormStepRender/ProspectionPersonalStep";
import { CustomerLead } from "@/lib/customer";
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
