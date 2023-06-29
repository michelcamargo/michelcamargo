import { useEffect } from 'react';

/**
 * @param {function} callback
 */
const useDidMount = callback => {
  useEffect(callback, []);
};

export default useDidMount;
