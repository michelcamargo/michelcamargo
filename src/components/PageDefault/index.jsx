import React from 'react';

import { PageWrapper } from './styles';
import Menu from '../Menu';
import Footer from '../Footer';

// eslint-disable-next-line react/prop-types
function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <PageWrapper>
        {children}
      </PageWrapper>
      <Footer />
    </>
  );
}

export default PageDefault;
