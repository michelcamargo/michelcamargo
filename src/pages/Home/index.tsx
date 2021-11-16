import React from 'react';

import MainResume from '../../components/Sections/MainResume';
import { FlexLayoutRow } from "../../components/FlexLayout";

import StyledLink  from '../../components/UI/StyledLink';
import IconLinkedin from "../../styles/iconpack";

function Home(){
    return(
        <>
            <FlexLayoutRow>
                <MainResume className="michelcamargo"/>
            </FlexLayoutRow>

            <FlexLayoutRow>
                <StyledLink to={'https://www.linkedin.com/in/michelscamargo/'} bgColor={"#0A66C2"} color={"#FFFFFF"} icon={IconLinkedin} target={"_blank"}>
                    LinkedIn
                </StyledLink>
            </FlexLayoutRow>
        </>
    );
}

export default Home;