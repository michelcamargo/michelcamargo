import { useMemo } from 'react';

import classNames from 'classnames';

 const useClassNames = (classes: Array<string> = []) => {
  return useMemo(() => classNames(classes), classes);
}

export default useClassNames;