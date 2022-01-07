import React from "react";

import {LandingScreen, PrincipalText} from "./styles";
import {FlexLayoutRow} from "../../UI/FlexLayout";

type LandingProps = {

}

const Landing: React.FC<LandingProps> = () => {
    return (
        <LandingScreen>
            <FlexLayoutRow>
                <PrincipalText>Web dev & UI/UX</PrincipalText>
            </FlexLayoutRow>
        </LandingScreen>

    );
}

export default Landing;