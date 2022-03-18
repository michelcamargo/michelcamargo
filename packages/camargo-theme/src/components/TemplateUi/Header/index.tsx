import React from 'react';

import { Wrapper, Container, Content } from "./styles";
import Nav from "../../Navigation";

type HeaderProps = {
    containerWidth?: string
}

class Header extends React.Component<HeaderProps> {
    public render() {
        return(
            <Wrapper background={"#2840de"}>
                { this.props.containerWidth ?
                    <Container containerWidth={this.props.containerWidth}>
                        <Content>
                            <img className={""} src={"./assets/svg/logo-mono.svg"} alt={"Logo Principal"} />
                            <Nav />
                        </Content>
                    </Container> :
                    <Content>
                        <img className={""} src={"./assets/svg/logo-mono.svg"} alt={"Logo Principal"} />
                        <Nav />
                    </Content>
                }
            </Wrapper>
        )
    }
}

export default Header;