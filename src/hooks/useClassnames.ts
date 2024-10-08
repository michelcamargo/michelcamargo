import { useMemo } from 'react';

import classNames from 'classnames';

const useClassNames = (classes: Array<string> = []) => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemo(() => classNames(classes), classes);
};

export default useClassNames;
