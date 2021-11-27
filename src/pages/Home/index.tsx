import React from 'react';

import MainResume from '../../components/Sections/MainResume';
import { FlexLayoutRow } from "../../components/UI/FlexLayout";

import StyledLink  from '../../components/UI/StyledLink';
import IconLinkedin from "../../styles/iconpack";
import ThemePalette from "../../components/UI/ThemePalette";

function Home(){
    return(
        <>
            <FlexLayoutRow background={"linear-gradient(98.17deg, #FFC700 17.02%, #FF7A00 95.22%)"}>
                <MainResume className="michelcamargo"/>
            </FlexLayoutRow>

            <FlexLayoutRow>
                <ThemePalette />
            </FlexLayoutRow>

            <FlexLayoutRow background={`${props => props.theme.colors.backgroundSecondary}`}>
                <StyledLink to={'https://www.linkedin.com/in/michelscamargo/'} background={"#0A66C2"} color={"#eaeaea"} icon={IconLinkedin} target={"_blank"}>
                    LinkedIn
                </StyledLink>
            </FlexLayoutRow>
        </>
    );
}

export default Home;