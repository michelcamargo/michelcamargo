import Toast from "@/components/Toast";
import APP_ERROR_MAPPINGS from "@/helpers/error/mappings";
import axios, { AxiosResponse } from "axios";
import { ToastOptions } from "react-toastify/dist/types";

/**
 * Mostra o componente de erro de acordo com parâmetros
 * @param errorCode {Number} Código de erro mapeado
 * @param customMessage Mensagem a sobrescrever herdada
 * @param toastOptions Opções do popup
 */
export const showErrorByCode = (errorCode: number, customMessage?: string, toastOptions?: ToastOptions) => {
  const appError = APP_ERROR_MAPPINGS.find(err => err.code === errorCode) || APP_ERROR_MAPPINGS[0];
  
  const {
    title, message, description, options: errorToastOptions,
  } = appError;
  
  const toastElementOptions = {
    ...errorToastOptions,
    ...toastOptions,
  };
  
  return (
    Toast.Error({
      title,
      message: customMessage || message,
      description,
      options: toastElementOptions,
    })
  );
};

/**
 * Trata erros padrão ou sem definição mapeada
 * @param response
 * @param defaultMessage
 * @returns {{'[FORM_ERROR]': string}|{'[FORM_ERROR]'}}
 */
const defaultErrorMessage = (response: AxiosResponse, defaultMessage?: string) => {
  const { status } = response;
  if ([412, 422].includes(status)) {
    showErrorByCode(0);
    
    return {
      // [FORM_ERROR]: 'Não foi possível concluir a operação, verifique os dados informados e tente novamente.',
    };
  }
  
  if (status === 403) {
    showErrorByCode(0);
    return {
      // [FORM_ERROR]: 'Operação não autorizada.',
    };
  }
  
  if (status === 404) {
    showErrorByCode(0);
    return {
      // [FORM_ERROR]: 'O recurso que você solicitou não está disponível.',
    };
  }
  
  showErrorByCode(0);
  return {
    // [FORM_ERROR]: defaultMessage,
  };
};

// const sendExceptionToSentry = (err, key) => {
//   Sentry.configureScope(scope => {
//     let extras = {};
//
//     if (_isObject(err.response)) {
//       extras = err.response;
//     }
//
//     scope.setTag('screen_key', key);
//     scope.setExtras(extras);
//     Sentry.captureException(err);
//   });
// }

/**
 * Trata o erro da requisição (ou código informado manual) e mostra o balão informativo de erro
 * @param {Error || number} error em requisição ou apenas o código de erro para mapeamento
 * @param customMessage mensagem de erro (sobrescreve a original mapeada)
 */
export const handleRequestError = (error: Error | number, customMessage?: string) => {
  let errorCode = 101; // Erro padrão a ser substituído no fluxo atual
  
  if (!error) return showErrorByCode(errorCode, customMessage);
  
  if (typeof error === 'object') {
    if (axios.isCancel(error)) {
      return {};
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.warn(error);
    }
    
    const {
      response, request,
    } = error;
    
    if (!response) {
      if (request) {
        return showErrorByCode(2, customMessage);
      }
      
      return showErrorByCode(3, customMessage);
    }
    
    console.log('\n RESPONSE \n', response);
    
    errorCode = 1001;
    
    const appError = APP_ERROR_MAPPINGS.find(err => err.code === errorCode) || APP_ERROR_MAPPINGS[0];
    
    if (!appError) {
      return defaultErrorMessage(response, customMessage);
    }
  }
  
  if (typeof error === 'number') {
    errorCode = error;
  }
  
  // eslint-disable-next-line no-console
  console.log('thread error ->', errorCode);
  
  return showErrorByCode(errorCode, customMessage);
};
