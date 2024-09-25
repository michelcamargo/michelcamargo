import React from 'react';

import { authSignInFields } from "@/components/CustomForms/Authentication/fields";
import { AuthSignInDto } from "@/lib/auth";
import { authSignInDtoSchema } from "@/schemas/auth.schema";
import AuthService from "@/services/auth.service";
import { FormikHelpers } from "formik";

import FormWrapper from '../../FormWrapper';

type Props = {
	// eslint-disable-next-line no-unused-vars
  submitHandler: (token: string) => void | undefined,
  username: string,
}

const AuthSignInForm = ({ submitHandler, username }: Props) => {
	const initialValues = {
		username: username,
		secret: '',
	};
  
	// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
	const handleSubmit = async (values: AuthSignInDto, _formikHelpers: FormikHelpers<AuthSignInDto>) => {
		const { auth } = await AuthService.signIn(values);
		submitHandler(auth.token);
	};

	return (
		<FormWrapper
			initialValues={initialValues}
			validationSchema={authSignInDtoSchema}
			onSubmit={handleSubmit}
			fields={authSignInFields}
		/>
	);
};

export default AuthSignInForm;
