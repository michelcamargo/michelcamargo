import React, { useEffect } from 'react';

import CustomButton from "@/components/CustomButton";
import CustomInput from '@/components/CustomInput';
import LoadingFeedback from "@/components/LoadingFeedback";
import { splitName } from "@/helpers/customer";
import { CustomerProfile } from "@/lib/customer";
import CustomerService from "@/services/customer.service";
import { FormControl } from "@mui/material";
import { useFormik } from "formik";
import { useMutation, useQueryClient } from "react-query";
import * as yup from "yup";

import Styled from './styles';

interface Props {
  id?: number,
  callbackHandler?: (response?: CustomerProfile) => void,
  title?: string,
  description?: string,
}

const ContactForm = ({ id: inheritId, callbackHandler, title, description }: Props) => {
  
  // const queryClient = useQueryClient();
  
  const {
    isLoading: isSendingContact,
    isSuccess: isContactSent,
    mutate: contactMutate,
  } = useMutation(
    (formData: Partial<CustomerProfile>) => CustomerService.prospectCustomer(formData),
    {
      onSuccess: data => {
        if (data) {
          if (callbackHandler) {
            callbackHandler(data as CustomerProfile);
          }
        }
      },
    }
  );
  
  const validationSchema = () => {
    return yup.object({
      // active: yup.string().when([], {
      //   is: () => isSomething,
      //   then: schema => schema.required("Informe algo kkk"),
      //   otherwise: schema => schema.notRequired(),
      // }),
      name: yup.string().required("Informe o nome"),
      email: yup.string().required("Informe o email"),
      intention: yup.string().required("Qual o assunto?"),
      message: yup.string().notRequired(),
    });
  };
  
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      intention: '',
      message: '',
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      const { firstName, lastName } = splitName(values.name);
      
      const body = {
        personal: {
          firstName,
          lastName,
          fullName: values.name,
          email: values.email,
        },
        prospection: { intention: values.intention },
      } as Partial<CustomerProfile>;

      console.log('formik', body);

      await contactMutate(body);

      resetForm();
    },
  });
  
  if (isSendingContact) {
    return (
      <LoadingFeedback heading={'Enviando formulário'} minimal />
    );
  }
  
  if (isContactSent) {
    return (
      <p>
        Formulário enviado, obrigado por entrar em contato!
      </p>
    );
  }
  
  return (
    <Styled.Wrapper>
      <Styled.FormHead>
        <Styled.FormHeading>
          {title ? title : 'Entre em contato'}
        </Styled.FormHeading>
        { description &&
          <Styled.FormSubtitle>
            {description}
          </Styled.FormSubtitle>
        }
      </Styled.FormHead>
      <Styled.FormBody onSubmit={formik.handleSubmit}>
        <FormControl>
          <CustomInput.TextField
            id={'name'}
            name={'name'}
            label={'Nome'}
            value={formik.values.name}
            type={'text'}
            hasErrors={Boolean(formik.errors.name?.length)}
            onChange={formik.handleChange}
          />
          <CustomInput.TextField
            id={'email'}
            name={'email'}
            label={'Email'}
            value={formik.values.email}
            mode={'email'}
            hasErrors={Boolean(formik.touched.email && formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onChange={formik.handleChange}
          />
          <CustomInput.TextField
            id={'intention'}
            name={'intention'}
            label={'Assunto'}
            value={formik.values.intention}
            type={'text'}
            hasErrors={Boolean(formik.touched.intention && formik.errors.intention)}
            helperText={formik.touched.intention && formik.errors.intention}
            onChange={formik.handleChange}
          />
        </FormControl>
        <Styled.FormActionPanel>
          <CustomButton
            // startIcon={<ArrowBackIcon />}
            // variant="contained"
            // onClick={handleGoBackClick}
            // sx={{ mt: 3, ml: 1 }}
            // style={{ backgroundColor: "gray" }}
          >
            Voltar
          </CustomButton>
          <CustomButton
            // startIcon={product ? <EditIcon /> : <LibraryAddIcon />}
            // variant="contained"
            type="submit"
            // sx={{ mt: 3, ml: 1 }}
          >
            {'Enviar'}
          </CustomButton>
        </Styled.FormActionPanel>
      </Styled.FormBody>
    </Styled.Wrapper>
  );
};

export default ContactForm;
