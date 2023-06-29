import { useEffect, useState } from 'react';

const useHasWindow = () => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    setHasWindow(typeof window !== 'undefined');
  }, []);

  return hasWindow;
};

export default useHasWindow;
