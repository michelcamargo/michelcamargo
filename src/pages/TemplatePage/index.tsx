import React from 'react';

import { Template } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface TemplateProps {
    children?: JSX.Element | JSX.Element[];
    toggleTheme(): void;
};

const TemplatePage = ({ children, toggleTheme }: TemplateProps) => {


  return (
    <Template>
        <Header toggleTheme={toggleTheme} />

        {children}

        <Footer />
    </Template>
  );
}

export default TemplatePage;
