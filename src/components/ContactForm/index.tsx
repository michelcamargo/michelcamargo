import React, { useCallback, useState } from 'react';

import CustomForm from "@/components/_workhouse/CustomForm";
import CustomButton from "@/components/CustomButton";
import LoadingFeedback from "@/components/LoadingFeedback";
import SuccessFeedback from "@/components/SuccessFeedback";
import { CustomerProfile, ProspectCustomer, ProspectIntention } from "@/lib/customer";
import CustomerService from "@/services/customer.service";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FormControl } from "@mui/material";
import { FormikHelpers } from "formik";
import { useMutation } from "react-query";
import * as yup from "yup";

import { FieldText, FieldTextArea } from "../_workhouse/CustomForm/CustomFormField";
import Styled from './styles';

export enum ContactFormStep {
  // eslint-disable-next-line no-unused-vars
  general = 0,
  // eslint-disable-next-line no-unused-vars
  personal = 1,
}
interface FormStepProps {
  changeHandler: (targetStep: ContactFormStep) => void,
}

interface Props {
  id?: number,
  callbackHandler?: (response?: CustomerProfile) => void,
  title?: string,
  description?: string,
}

const ContactForm = ({ id: inheritId, callbackHandler, title, description }: Props) => {
  
  // const queryClient = useQueryClient();
  const [stepper, setStepper] = useState({ step: ContactFormStep.general, ready: false });
  
  const initialValues: ProspectCustomer = {
    personal: {
      fullName: '',
      email: '',
    },
    prospection: {
      intention: ProspectIntention.explore
    }
  };
  
  const {
    isLoading: isSendingContact,
    isSuccess: isContactSent,
    mutate: mutateProspection,
  } = useMutation(
    (formData: ProspectCustomer) => CustomerService.prospectCustomer(formData),
    {
      onSuccess: data => {
        if (data) {
          if (callbackHandler) {
            callbackHandler(data as CustomerProfile);
          }
        }
      },
    }
  );
  
  const handleSubmit = (values: ProspectCustomer, actions: FormikHelpers<ProspectCustomer>)  => {
    if (!values) console.log('failed to mutate');
    
    console.log('formData', values, 'typeof', typeof values);
    
    mutateProspection(values);
  };
  
  const validationSchema = () => {
    return yup.object({
      // active: yup.string().when([], {
      //   is: () => isSomething,
      //   then: schema => schema.required("Informe algo kkk"),
      //   otherwise: schema => schema.notRequired(),
      // }),
      name: yup.string().required("Informe o nome"),
      email: yup.string().required("Informe o email"),
      intention: yup.string().required("Qual o assunto?"),
      message: yup.string().notRequired(),
    });
  };
  
  const formStepHandler = useCallback((targetStep: ContactFormStep) => {
    setStepper({
      ...stepper,
      step: targetStep,
    });
  }, [stepper]);
  
  const StepFormRender = ({ changeHandler }: FormStepProps) => {
    const formStepElements = [
      (<FieldTextArea id="intention" key="intention" name="intention" height={80} fullWidth />),
      (
        <Styled.InputField key={'personal'}>
          <FieldText id="Nome" label="Nome" key="name" name="name" fullWidth />
          <FieldText id="Email" label="Email" key="email" type="email" name="email" fullWidth />
        </Styled.InputField>
      )
    ];
    
    return (
      <Styled.FormBody>
        <FormControl>
          {formStepElements[stepper.step]}
        </FormControl>
        <Styled.FormActionPanel>
          { stepper.step === ContactFormStep.general
            ? (
              <CustomButton
                afterIcon={<ArrowForwardIosIcon />}
                callback={() => changeHandler(ContactFormStep.personal)}
                bold
              >
                {'Continuar'}
              </CustomButton>
            ) : (
              <>
                <CustomButton
                  callback={() => changeHandler(ContactFormStep.general)}
                  beforeIcon={<ArrowBackIosIcon />}
                >
                  Voltar
                </CustomButton>
                <CustomButton
                  type="submit"
                  bold
                >
                  {'Enviar'}
                </CustomButton>
              </>
            )
          }
        </Styled.FormActionPanel>
      </Styled.FormBody>
    );
  };
  
  if (isSendingContact) return <LoadingFeedback heading={'Enviando formulário'} minimal />;
  if (isContactSent) return <SuccessFeedback label={'Obrigado pelo contato, nos vemos em breve!'} />;
  
  return (
    <Styled.Wrapper>
      <Styled.FormHead>
        <Styled.FormHeading>
          {title ? title : 'Entre em contato'}
        </Styled.FormHeading>
        { description &&
          <Styled.FormSubtitle>
            {description}
          </Styled.FormSubtitle>
        }
      </Styled.FormHead>
      <CustomForm<ProspectCustomer>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <StepFormRender {...stepper} changeHandler={step => formStepHandler(step)} />
      </CustomForm>
    </Styled.Wrapper>
  );
};

export default ContactForm;
