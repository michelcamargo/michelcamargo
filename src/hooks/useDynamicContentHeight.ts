/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import { useEffect, useRef } from 'react';

import { DEFAULT_HEIGHT_HEADER, DEFAULT_HEIGHT_FOOTER } from '@/components/layout';

// type RefType<T> = ((instance: T | null) => void) | React.MutableRefObject<T | null> | null;

const useDynamicContentHeight = () => {
	const headerRef = useRef<HTMLDivElement | null>(null);
	const footerRef = useRef<HTMLDivElement | null>(null);
	const contentRef = useRef<HTMLDivElement | null>(null);
  
	useEffect(() => {
		const updateContentHeight = () => {
			// if (!headerRef || !headerRef.current) {
			//   console.warn('NO HEADER REF');
			// }
			//
			// if (!footerRef || !footerRef.current) {
			//   console.log('no footer ref');
			// }
			//
			// if (!window || !window.innerHeight) {
			//   console.log('no window ref');
			// }
      
			const headerHeight = headerRef.current?.offsetHeight || DEFAULT_HEIGHT_HEADER;
			// console.log('headerHeight', headerHeight);
      
			const footerHeight = footerRef.current?.offsetHeight || DEFAULT_HEIGHT_FOOTER;
			// console.log('footerHeight', footerHeight);
      
			const contentHeight = window.innerHeight - (headerHeight + footerHeight);
      
			// console.log('contentHeight', contentHeight);
      
			if (contentRef.current) {
        contentRef.current!.style.minHeight = `${contentHeight}px`;
			}
		};
  
		updateContentHeight();
  
		const handleResize = () => {
			updateContentHeight();
		};
  
		window.addEventListener('resize', handleResize);
  
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
  
	return { headerRef, footerRef, contentRef };
};

export default useDynamicContentHeight;
