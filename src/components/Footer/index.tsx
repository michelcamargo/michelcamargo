import React from 'react';

import { FooterWrapper, FooterContainer } from './styles';

interface FooterProps {
    sticky?: boolean;
}

const Footer: React.FC<FooterProps> = () => {


    return (
        <FooterWrapper>
            <FooterContainer>

            </FooterContainer>
        </FooterWrapper>
    );
}

export default Footer;