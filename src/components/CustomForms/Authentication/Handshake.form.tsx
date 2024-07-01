import React from 'react';
import FormWrapper from '../../FormWrapper';
import * as Yup from 'yup';
import {FormikHelpers} from "formik";
import AuthService from "@/services/auth.service";

interface AuthFormValues {
  username: string,
}

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username é requerido'),
});

const fields: Array<{ name: keyof AuthFormValues; type: string; label: string; placeholder?: string }> = [
  { name: 'username', type: 'text', label: 'Usuário ou email', placeholder: 'Informe um email ou nome de usuário' },
];

type Props = {
  submitHandler: (isSignIn: boolean, username: string) => void | undefined
}

const AuthHandshakeForm = ({ submitHandler }: Props) => {
  const initialValues = {
    username: '',
  };
  
  const handleSubmit = async (values: AuthFormValues, _helpers: FormikHelpers<AuthFormValues>) => {
    const isExistingUser = await AuthService.handshake(values.username);
    submitHandler(isExistingUser, values.username);
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

export default AuthHandshakeForm;
