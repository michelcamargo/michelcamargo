import LoadingFeedback from "@/components/LoadingFeedback";
import SuccessFeedback from "@/components/SuccessFeedback";
import { showErrorByCode } from "@/helpers/error";
import { CustomerProfile, CustomerLead } from "@/lib/customer";
// import { ContactFormStep } from "@/lib/form";
import CustomerService from "@/services/customer.service";
import { Formik, FormikHelpers, FormikValues } from "formik";
import { useMutation } from "react-query";
import * as yup from "yup";

import Styled from './styles';

interface Props {
  id?: number,
	// eslint-disable-next-line no-unused-vars
  callbackHandler?: (response?: CustomerProfile) => void,
  title?: string,
  description?: string,
}

const ContactForm = ({ callbackHandler, title, description }: Props) => {
 
	// const queryClient = useQueryClient();
	// const [currentStep, setCurrentStep] = useState<ContactFormStep>(ContactFormStep.intro);
 
	const initialValues: CustomerLead = {
		name: '',
		email: '',
		message: '',
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
 
	const handleSubmit = (values: FormikValues, actions: FormikHelpers<CustomerLead>)  => {
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
 
	// const formStepHandler = useCallback((step: ContactFormStep) => {
	//   console.log({ currentStep });
	//   setCurrentStep(step);
	// }, []);
 
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
			<Formik<CustomerLead>
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
				onReset={handleReset}
			>
				{ props => (
					<form onSubmit={props.handleSubmit}>
						<Styled.FormBody>
							{/*<FormStepper<ContactFormStep>*/}
							{/*  availableSteps={[ContactFormStep.intro, ContactFormStep.personal]}*/}
							{/*  currentStep={currentStep}*/}
							{/*  stepChanger={formStepHandler}*/}
							{/*>*/}
							{/*  <FormStepRender step={currentStep} formProps={props} />*/}
							{/*</FormStepper>*/}
						</Styled.FormBody>
					</form>
				) }
			</Formik>
		</Styled.Wrapper>
	);
};

export default ContactForm;
