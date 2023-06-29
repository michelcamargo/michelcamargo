import { useState, useCallback } from 'react';

const useAsync = (callback, inputs = []) => {
  const [loading, setLoading] = useState(false);

  const call = useCallback(
    async (...args) => {
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
