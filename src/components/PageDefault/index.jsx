import React from 'react';
import styled from 'styled-components';

import PageContent from './styles';
import Menu from '../Menu';
import Footer from '../Footer';

import bgImage from '../../assets/manuel-sardo.jpg';

const PageWrapper = styled.div`
  background: url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: cover; */
`;

// eslint-disable-next-line react/prop-types
function PageDefault({ children }) {
  return (
    <PageWrapper>
      <Menu />
      <PageContent>
        {children}
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default PageDefault;
