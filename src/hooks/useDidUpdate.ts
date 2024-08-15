import { useEffect } from 'react';

/**
 * @param {function} callback
 * @param {Array} inputs
 */
/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
const useDidUpdate = (callback: () => void, inputs: any[]) => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(callback, inputs);
};

export default useDidUpdate;
