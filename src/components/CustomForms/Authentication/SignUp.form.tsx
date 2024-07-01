import React from 'react';
import FormWrapper from '../../FormWrapper';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import {FormikHelpers} from "formik";

interface AuthFormValues {
  fullname: string,
  email: string,
  username: string,
  secret: string,
  secretAnsure: string
}

const initialValues = {
  fullname: '',
  email: '',
  username: '',
  secret: '',
  secretAnsure: '',
};

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required('Informe seu nome'),
  email: Yup.string().email().required('Informe um email válido'),
  username: Yup.string(),
  secret: Yup.string().required('A senha é necessária'),
  secretAnsure: Yup.string().required('Repita a senha acima informada'),
});

const fields: Array<{ name: keyof AuthFormValues; type: string; label: string; placeholder?: string }> = [
  { name: 'fullname', type: 'text', label: 'Nome', placeholder: 'Informe seu nome' },
  { name: 'email', type: 'email', label: 'Email', placeholder: 'Informe um email válido' },
  { name: 'username', type: 'text', label: 'Nome de usuário', placeholder: 'Informe um nome de usuário' },
  { name: 'secret', type: 'password', label: 'Senha', placeholder: 'Informe sua senha' },
  { name: 'secretAnsure', type: 'password', label: 'Repita a senha', placeholder: 'Informe a mesma senha' },
];

type Props = {
  submitHandler: (values: any) => void | undefined
}

const AuthSignUpForm = ({ submitHandler }: Props) => {
  const router = useRouter();

  const handleSubmit = async (values: AuthFormValues, formikHelpers: FormikHelpers<AuthFormValues>) => {
    router.push('/auth/redirect');
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

export default AuthSignUpForm;
