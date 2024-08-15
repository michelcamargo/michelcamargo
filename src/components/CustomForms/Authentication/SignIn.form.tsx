import React from 'react';

import { authSignInFields } from "@/components/CustomForms/Authentication/fields";
import { AuthSignInDto } from "@/lib/auth";
import { authSignInDtoSchema } from "@/schemas/auth.schema";
import AuthService from "@/services/auth.service";
import { FormikHelpers } from "formik";

import FormWrapper from '../../FormWrapper';

type Props = {
  submitHandler: (values: any) => void | undefined,
  username: string,
}

const AuthSignInForm = ({ submitHandler, username }: Props) => {
  const initialValues = {
    username: username,
    secret: '',
  };

  const handleSubmit = async (values: AuthSignInDto, _formikHelpers: FormikHelpers<AuthSignInDto>) => {
    const { access_token } = await AuthService.signIn(values);
    submitHandler(access_token);
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
