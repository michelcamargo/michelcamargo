import React from 'react';

import { MainSection } from "./styles";
import FlexLayout from "../../components/FlexLayout";

class HomeView extends React.Component {

    public render() {
        return (
            <MainSection>
                <FlexLayout containerWidth={"1130px"}>
                    <p>Teste</p>
                </FlexLayout>
            </MainSection>
        )
    }
}

export default HomeView;