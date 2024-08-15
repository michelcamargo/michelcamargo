import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import * as Yup from 'yup';

type FormWrapperProps<T> = {
  initialValues: T;
  validationSchema: Yup.ObjectSchema<any>;
  onSubmit: (values: T, formikHelpers: any) => void;
  fields: Array<{ name: keyof T; type: string; label: string; placeholder?: string }>;
};

const FormWrapper = <T extends {}>({ initialValues, validationSchema, onSubmit, fields }: FormWrapperProps<T>) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps: FormikProps<T>) => (
        <Form>
          {fields.map(field => (
            <div key={String(field.name)}>
              <label htmlFor={String(field.name)}>{field.label}</label>
              <Field
                id={String(field.name)}
                name={String(field.name)}
                type={field.type}
                placeholder={field.placeholder}
              />
              <ErrorMessage name={String(field.name)} component="div" />
            </div>
          ))}
          <button type="submit" disabled={formikProps.isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormWrapper;
