import React, {ReactNode} from "react";

import { Wrapper, Content } from "./styles";
import Header from "./Header";
import Footer from "./Footer";

type TemplateUiProps = {
    children?: ReactNode | ReactNode[]
}

class TemplateUi extends React.Component<TemplateUiProps> {
    public render() {
        return (
            <Wrapper>
                <Header containerWidth={"1130px"} />
                <Content>
                    {this.props.children}
                </Content>
                <Footer />
            </Wrapper>
        )
    }
}

export default TemplateUi;