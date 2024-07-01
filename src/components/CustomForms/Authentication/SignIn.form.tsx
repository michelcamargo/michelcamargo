import React from 'react';
import FormWrapper from '../../FormWrapper';
import * as Yup from 'yup';
import { FormikHelpers } from "formik";
import { SignInUserDto } from "@/lib/auth";
import AuthService from "@/services/auth.service";

interface AuthFormValues extends SignInUserDto {}

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Informe seu usuário ou email'),
  secret: Yup.string().required('Informe sua senha'),
});

const fields: Array<{ name: keyof AuthFormValues; type: string; label: string; placeholder?: string }> = [
  { name: 'username', type: 'text', label: 'Usuário ou email', placeholder: 'Informe seu email ou usuário' },
  { name: 'secret', type: 'password', label: 'Senha', placeholder: 'Informe sua senha' },
];

type Props = {
  submitHandler: (values: any) => void | undefined,
  username: string,
}

const AuthSignInForm = ({ submitHandler, username }: Props) => {
  const initialValues = {
    username: username,
    secret: '',
  };

  const handleSubmit = async (values: AuthFormValues, formikHelpers: FormikHelpers<AuthFormValues>) => {
    const { access_token } = await AuthService.signIn(values);
    submitHandler(access_token);
  };

  return (
    <FormWrapper
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      fields={fields}
    />
  );
};

export default AuthSignInForm;
