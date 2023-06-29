import { useEffect } from 'react';

const usePreventNavigation = (message, when = true) => {
  useEffect(() => {
    if (!when) return undefined;
    const preventNavigation = event => {
      // eslint-disable-next-line no-param-reassign
      event.returnValue = message;
      return message;
    };
    window.addEventListener('beforeunload', preventNavigation);
    return () => {
      window.removeEventListener('beforeunload', preventNavigation);
    };
  }, [when, message]);
};

export default usePreventNavigation;
