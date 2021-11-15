import React from 'react';

import { Template } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

type Props = {
    children?: JSX.Element | JSX.Element[],
};

const TemplatePage = ({ children }: Props) => {


  return (
    <Template>
        <Header />

        {children}

        <Footer />
    </Template>
  );
}

export default TemplatePage;
