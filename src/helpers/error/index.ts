import Toast from "@/components/Toast";
import axios, { AxiosError, AxiosResponse } from "axios";
import { ToastOptions } from "react-toastify/dist/types";
import {GetServerSidePropsContext, GetStaticPropsContext} from "next";
import APP_ERROR_MAPPINGS from "@/helpers/error/mappings";

/**
 * Mostra um toast de erro baseado no código de erro mapeado.
 * @param errorCode Código de erro mapeado.
 * @param customMessage Mensagem personalizada para substituir a padrão.
 * @param toastOptions Opções adicionais para o toast.
 */
export const showErrorByCode = (
  errorCode: number,
  customMessage?: string,
  toastOptions?: ToastOptions
) => {
  const appError =
    APP_ERROR_MAPPINGS.find((err) => err.code === errorCode) || APP_ERROR_MAPPINGS[0];

  const { title, message, description, options: errorToastOptions } = appError;

  const toastElementOptions = {
    ...errorToastOptions,
    ...toastOptions,
  };

  return Toast.Error({
    title,
    message: customMessage || message,
    description,
    options: toastElementOptions,
  });
};

/**
 * Trata erros padrão ou sem definição mapeada.
 * @param response Resposta da requisição que gerou o erro.
 * @returns Mensagem de erro apropriada com base no status da resposta.
 */
const defaultErrorMessage = (response: AxiosResponse) => {
  const { status } = response;

  if ([412, 422].includes(status)) {
    return showErrorByCode(0); // Mapear para o código de erro desejado
  }

  if (status === 403) {
    return showErrorByCode(0); // Mapear para o código de erro desejado
  }

  if (status === 404) {
    return showErrorByCode(0); // Mapear para o código de erro desejado
  }

  return showErrorByCode(0); // Mapear para o código de erro desejado
};

/**
 * Trata o erro da requisição ou um código de erro manualmente fornecido,
 * mostrando um toast informativo de erro.
 * @param error Erro ou código de erro a ser tratado.
 * @param customMessage Mensagem de erro personalizada para substituir a padrão.
 */
export const handleRequestError = (error: unknown, customMessage?: string) => {
  let errorCode = 101; // Código de erro padrão

  if (!error) return showErrorByCode(errorCode, customMessage);

  if (typeof error === "number") {
    errorCode = error;
    return showErrorByCode(errorCode, customMessage);
  }

  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    const { response, request } = axiosError;

    if (!response) {
      if (request) {
        return showErrorByCode(2, customMessage); // Erro de requisição não concluída
      }

      return showErrorByCode(3, customMessage); // Erro de configuração de requisição
    }

    errorCode = 1001; // Código de erro específico para erros de resposta

    return defaultErrorMessage(response); // Tratamento de erro padrão
  }

  console.log("thread error ->", errorCode); // Log do código de erro

  return showErrorByCode(errorCode, customMessage); // Mostrar o toast com base no código de erro
};

/**
 * Trata erros de requisição específicos durante server-side rendering.
 * @param error Erro capturado durante a execução de `getServerSideProps`.
 * @param context Contexto de `GetServerSidePropsContext`.
 */
export const handleServerRequestError = (
  error: unknown,
  context: GetServerSidePropsContext | GetStaticPropsContext,
) => {
  if (axios.isAxiosError(error)) {
    handleRequestError(error);
  } else {
    console.error("Erro durante server-side rendering:", error)
    // lidar com outros tipos de erros
  }
  
  return {
    props: {},
  };
};
