import React from 'react';

import { toast } from 'react-toastify';
import { ToastOptions } from "react-toastify/dist/types";

import Styled from './styles';

interface ToastProps {
  title?: string,
  message?: string,
  description?: string,
  options?: ToastOptions,
}

const ErrorToast = ({ title, message, description, options }: ToastProps) => {
  const toastOptions = {
    ...options,
  };
  
  const bodyElement = (
    <Styled.ErrorWrapper>
      { title && (
        <Styled.ErrorHeader>
          <Styled.HeadingMessage>{title}</Styled.HeadingMessage>
        </Styled.ErrorHeader>
      )}
      { message && (
        <Styled.HeadingSubtitle>{message}</Styled.HeadingSubtitle>
      )}
      { description && (
        <Styled.BodyDescription>{description}</Styled.BodyDescription>
      )}
    </Styled.ErrorWrapper>
  );
  
  return toast.error(bodyElement, toastOptions);
};

const InfoToast = ({ title, message, description, options }: ToastProps) => {
  const toastOptions = {
    ...options,
  };
  
  const bodyElement = (
    <Styled.InfoWrapper>
      { title && (
        <Styled.InfoHeader>
          <Styled.HeadingMessage>{title}</Styled.HeadingMessage>
        </Styled.InfoHeader>
      )}
      { message && (
        <Styled.HeadingSubtitle>{message}</Styled.HeadingSubtitle>
      )}
      { description && (
        <Styled.BodyDescription>{description}</Styled.BodyDescription>
      )}
    </Styled.InfoWrapper>
  );
  
  return toast.info(bodyElement, toastOptions);
};

const SuccessToast = ({ title, message, description, options }: ToastProps) => {
  const toastOptions = {
    ...options,
  };
  
  const bodyElement = (
    <Styled.SuccessWrapper>
      { title && (
        <Styled.SuccessHeader>
          <Styled.HeadingMessage>{title}</Styled.HeadingMessage>
        </Styled.SuccessHeader>
      )}
      { message && (
        <Styled.HeadingSubtitle>{message}</Styled.HeadingSubtitle>
      )}
      { description && (
        <Styled.BodyDescription>{description}</Styled.BodyDescription>
      )}
    </Styled.SuccessWrapper>
  );
  
  return toast.success(bodyElement, toastOptions);
};

export default {
  Error: ErrorToast,
  Success: SuccessToast,
  Info: InfoToast,
};

