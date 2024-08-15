import React from 'react';

import { authSignUpFields } from "@/components/CustomForms/Authentication/fields";
import { AuthSignUpDto } from "@/lib/auth";
import { authSignUpDtoSchema } from "@/schemas/auth.schema";
import { FormikHelpers } from "formik";
import { useRouter } from 'next/router';

import FormWrapper from '../../FormWrapper';

type Props = {
  submitHandler: (values: any) => void | undefined
}

const AuthSignUpForm = ({ submitHandler }: Props) => {
  const router = useRouter();

  const initialValues = {
    fullname: '',
    email: '',
    username: '',
    secret: '',
    secretAnsure: '',
  };
  
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
