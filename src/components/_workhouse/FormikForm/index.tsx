import React from 'react';

import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
// import * as Yup from 'yup';
 
 // Shape of form values
 interface FormValues {
   email: string;
   password: string;
 }
 
 interface OtherProps {
   message: string;
 }
 
const isValidEmail = (email: string) => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Use o método test() da regex para verificar se o e-mail corresponde ao padrão
  return pattern.test(email);
};

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code..
// InjectedFormikProps was artifact of when Formik only exported a HoC.
// It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Form>
      <h1>{message}</h1>
      <Field type="email" name="email" />
      {touched.email && errors.email && <div>{errors.email}</div>}
 
      <Field type="password" name="password" />
      {touched.password && errors.password && <div>{errors.password}</div>}
 
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};
 
 // The type of props MyForm receives
 interface MyFormProps {
   initialEmail?: string;
   message: string; // if this passed all the way through you might do this or make a union type
 }
 
// Wrap our form with the withFormik HoC
const CustomForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      email: props.initialEmail || '',
      password: '',
    };
  },
 
  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!isValidEmail(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },
 
  handleSubmit: values => {
    // do submitting things
    console.log('values', values);
  },
})(InnerForm);

export default CustomForm;
