import { useCallback, useMemo, useState } from "react";

import FormStepRender from "@/components/CustomForms/Contact/FormStepRender";
import FormStepper from "@/components/FormStepper";
import LoadingFeedback from "@/components/LoadingFeedback";
import SuccessFeedback from "@/components/SuccessFeedback";
import CustomContent from "@/helpers/content.helper";
import { showErrorByCode } from "@/helpers/error";
import { CustomerLead, CustomerProfile } from "@/lib/customer";
// import { ContactFormStep } from "@/lib/form";
import CustomerService from "@/services/customer.service";
import { Formik, FormikHelpers, FormikValues } from "formik";
import { useMutation } from "react-query";
import * as yup from "yup";

import Styled from './styles';

interface Props {
  id?: number,
	data: CustomContent,
	// eslint-disable-next-line no-unused-vars
  callbackHandler?: (response?: CustomerProfile) => void,
}

const ContactForm = ({ callbackHandler, data }: Props) => {
	// const queryClient = useQueryClient();
	// const [currentStep, setCurrentStep] = useState<ContactFormStep>(ContactFormStep.intro);
	
	const [ heading, description ] = data.getChildren('content').map(item => item.toObject());
 
	// const fields = useMemo(() => {
	// 	const content = data.getChildren('fields').map(item => item.toObject());
	//
	// 	return content;
	// }, [data]);
	
	const fields = useMemo(() => {
		const content = data.getChildren('fields').map(item => item.toObject() as { key: string });
		return content;
	}, [data]);
	
	const [currentStep, setCurrentStep] = useState<number>(0);
	
	const initialValues = () => {
	// const initialValues = (): CustomerLead => {
		const items = fields.reduce((acc, field: { key: string }) => {
			console.log({ acc, fields });
			
		  acc[field.key] = '';
		  return acc;
		}, {} as Record<string, string>);
		
		console.log({ items });
		
		return items;
	};
 
	const handleReset = () => {
		return {
			name: '',
			email: '',
			message: '',
		};
	};
 
	const {
		isLoading: isSendingContact,
		isSuccess: isContactSent,
		mutate: mutateProspection,
	} = useMutation(
		(formData: CustomerLead) => CustomerService.prospectCustomer(formData),
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
 
	const handleSubmit = (values: FormikValues, actions: FormikHelpers<any>)  => {
	// const handleSubmit = (values: FormikValues, actions: FormikHelpers<CustomerLead>)  => {
		if (!values) {
			showErrorByCode(2);
			return;
		}
  
		const prospectedCustomer = values as CustomerLead;
		mutateProspection(prospectedCustomer);
		actions.resetForm();
		return;
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
			message: yup.string().notRequired(),
		});
	};
 
	const formStepHandler = useCallback((step: number) => {
	  // console.log({ currentStep });
	  setCurrentStep(step);
	}, []);
 
	if (isSendingContact) return <LoadingFeedback heading={'Enviando formulário'} minimal />;
	if (isContactSent) return <SuccessFeedback label={'Obrigado pelo contato, nos vemos em breve!'} />;
 
	return (
		<Styled.Wrapper>
			<Styled.FormHead>
				<Styled.FormHeading>
					{heading ? heading.toString() : 'Entre em contato'}
				</Styled.FormHeading>
				{/*{ description &&*/}
				{/*<Styled.FormSubtitle>*/}
				{/*	{description}*/}
				{/*</Styled.FormSubtitle>*/}
				{/*}*/}
			</Styled.FormHead>
			{/*<Formik<CustomerLead>*/}
			<Formik
				initialValues={initialValues()}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
				onReset={handleReset}
			>
				{ props => (
					<form onSubmit={props.handleSubmit}>
						<Styled.FormBody>
							<FormStepper<number>
							  availableSteps={[0, 1]}
							  stepChanger={formStepHandler}
							  currentIndex={currentStep}
							>
							  <FormStepRender step={currentStep} formProps={props} />
							</FormStepper>
						</Styled.FormBody>
					</form>
				) }
			</Formik>
		</Styled.Wrapper>
	);
};

export default ContactForm;
