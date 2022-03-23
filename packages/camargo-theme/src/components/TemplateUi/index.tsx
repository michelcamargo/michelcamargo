import React, { ReactNode } from "react";

import { Wrapper, Content } from "./styles";
import Header from "./Header";
import Footer from "./Footer";

type TemplateUiProps = {
    children?: ReactNode
}

type TemplateUiState = {

}

class TemplateUi extends React.Component<TemplateUiProps, TemplateUiState> {
    public render() {
        return (
            <Wrapper>
                <Header />
                <Content>
                    {this.props.children}
                </Content>
                <Footer />
            </Wrapper>
        )
    }
}

export default TemplateUi;