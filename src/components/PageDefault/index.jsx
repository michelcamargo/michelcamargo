import React from 'react';

import PageWrapper from './styles';
// import Menu from '../Menu';
import Header from '../Header';
import Footer from '../Footer';

// eslint-disable-next-line react/prop-types
function PageDefault({ children }) {
  return (
    <PageWrapper>
      <Header />
      {children}
      <Footer />
    </PageWrapper>
  );
}

export default PageDefault;
