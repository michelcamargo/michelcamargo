import React from 'react';

import { authSignUpFields } from "@/components/CustomForms/Authentication/fields";
import { AuthSignUpDto } from "@/lib/auth";
import { authSignUpDtoSchema } from "@/schemas/auth.schema";
import { FormikHelpers } from "formik";
import { useRouter } from 'next/router';

import FormWrapper from '../../FormWrapper';

type Props = {
	// eslint-disable-next-line no-unused-vars
  submitHandler: (values: any) => void | undefined
}

// eslint-disable-next-line no-unused-vars
const AuthSignUpForm = ({ submitHandler }: Props) => {
	const router = useRouter();

	const initialValues = {
		fullname: '',
		email: '',
		username: '',
		secret: '',
		secretAnsure: '',
	};
	
	// eslint-disable-next-line no-unused-vars
	const handleSubmit = async (values: AuthSignUpDto, formikHelpers: FormikHelpers<AuthSignUpDto>) => {
		router.push('/auth/redirect');
	};

	return (
		<FormWrapper
			initialValues={initialValues}
			validationSchema={authSignUpDtoSchema}
			onSubmit={handleSubmit}
			fields={authSignUpFields}
		/>
	);
};

export default AuthSignUpForm;
