import React from 'react';

import { MainSection } from "./styles";
import FlexLayout from "../../components/FlexLayout";
import Schema from "../../styles/schema";

type HomeViewProps = {}

type HomeViewState = {
    schema: Schema
}

class HomeView extends React.Component<HomeViewProps, HomeViewState> {

    public render() {
        return (
            <MainSection>
                <FlexLayout containerWidth={this.state.schema.containerWidth} className={"teste"}>
                    <h2>Michel Camargo</h2>
                    <h3>Student & UI Developer</h3>
                    <p>I design and develop experiences that make people's lives <strong>simpler</strong></p>
                </FlexLayout>
            </MainSection>
        )
    }
}

export default HomeView;