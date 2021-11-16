import React from 'react';

import MainResume from '../../components/Sections/MainResume';
import { FlexLayoutRow } from "../../components/FlexLayout";

import StyledLink  from '../../components/UI/StyledLink';

function Home(){
    return(
        <>
            <FlexLayoutRow>
                <MainResume className="michelcamargo"/>
            </FlexLayoutRow>

            <FlexLayoutRow>
                <StyledLink to={'https://www.linkedin.com/in/michelscamargo/'} color="#FFF" bgColor={"#0A66C2"} target={"_blank"}>
                    LinkedIn
                </StyledLink>
            </FlexLayoutRow>
        </>
    );
}

export default Home;