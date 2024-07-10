import React from 'react';
import FormWrapper from '../../FormWrapper';
import { FormikHelpers } from "formik";
import AuthService from "@/services/auth.service";
import { authHandshakeDtoSchema } from "@/schemas/auth.schema";
import { authHandshakeFields } from "@/components/CustomForms/Authentication/fields";
import { AuthHandshakeDto } from "@/lib/auth";

type Props = {
  submitHandler: (isSignIn: boolean, username: string) => void | undefined
}

const AuthHandshakeForm = ({ submitHandler }: Props) => {
  const initialValues = {
    username: '',
  };
  
  const handleSubmit = async (values: AuthHandshakeDto, _helpers: FormikHelpers<AuthHandshakeDto>) => {
    const isExistingUser = await AuthService.handshake(values.username);
    submitHandler(isExistingUser, values.username);
  };

  return (
    <FormWrapper
      initialValues={initialValues}
      validationSchema={authHandshakeDtoSchema}
      onSubmit={handleSubmit}
      fields={authHandshakeFields}
    />
  );
};

export default AuthHandshakeForm;
