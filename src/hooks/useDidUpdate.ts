import { useEffect } from 'react';

/**
 * @param {function} callback
 * @param {Array} inputs
 */
const useDidUpdate = (callback, inputs) => {
  useEffect(callback, inputs);
};

export default useDidUpdate;
