import React from 'react';

import { MainSection } from "./styles";
import FlexLayout from "../../components/FlexLayout";

class HomeView extends React.Component {

    public render() {
        return (
            <MainSection>
                <FlexLayout containerWidth={"1130px"} className={"teste"}>
                    <h2>Michel Camargo</h2>
                    <h3>Student & UI Developer</h3>
                </FlexLayout>
            </MainSection>
        )
    }
}

export default HomeView;