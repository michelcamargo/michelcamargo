import React from 'react';
import styled from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

const PageWrapper = styled.div`
  background: #383838;
  color: #ffffff;
  text-align: center;
`;

function PageDefault ({children}) {
    return(
        <PageWrapper>
            <Menu />
            {children}
            <Footer />
        </PageWrapper>
    )
}

export default PageDefault;