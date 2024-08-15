import { useCallback, useState } from 'react';

/**
 * @param {() => Promise<T>} callback - Função assíncrona que retorna uma Promise
 * @param {Array<any>} inputs - Array opcional de dependências para gatilho de re-execução do callback.
 * @returns {Object} um objeto contendo o estado de `loading` e a função que faz sua chamada.
 */
const useAsync = <T>(
	// eslint-disable-next-line no-unused-vars
	callback: (...args: T[]) => Promise<T>,
	inputs: T[] = [],
): {
  loading: boolean,
	// eslint-disable-next-line no-unused-vars
  call: (...args: T[]) => Promise<T>,
} => {
	const [loading, setLoading] = useState(false);
 
	const call = useCallback(
		async (...args: T[]) => {
			try {
				setLoading(true);
				return await callback(...args);
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
