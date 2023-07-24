import { useState, useCallback } from 'react';

/**
 * @param {() => Promise<T>} callback - Função assíncrona que retorna uma Promise
 * @param {Array<any>} inputs - Array opcional de dependências para gatilho de re-execução do callback.
 * @returns {Object} um objeto contendo o estado de `loading` e a função que faz sua chamada.
 */
const useAsync = <T>(
  callback: (...args: any[]) => Promise<T>,
  inputs: any[] = [],
): {
  loading: boolean,
  call: (...args: any[]) => Promise<T>,
} => {
  const [loading, setLoading] = useState(false);
  
  const call = useCallback(
    async (...args: any[]) => {
      try {
        setLoading(true);
        const response = await callback(...args);
        return response;
      } finally {
        setTimeout(() => {
          setLoading(false);
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    inputs,
  );
  
  return {
    loading,
    call,
  };
};

export default useAsync;
