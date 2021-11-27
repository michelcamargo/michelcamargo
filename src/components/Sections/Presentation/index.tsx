import React from 'react';

import { Resume, MainResume } from './styles';
import { ReactComponent as MainLogo } from "../../../assets/svg/logo/michelcamargo.svg";

interface PresentationProps {
    className?: string;
    color?: string;
    width?: string;
    radius?: string;
}

function Presentation ({className}: PresentationProps) {

    let blockClass = className ? `--${className}` : "";

    return (
        <MainResume>
            {/*<ImageElement src={MainLogo} width={"200px"} />*/}
            <MainLogo width={200} fill={"black"} height={"fit-content"}/>

            <Resume className={`ResumeContainer${blockClass}`}>
                <Resume.Title className={`resumeTitle${blockClass}`} color={"#101010"}>Michel Camargo</Resume.Title>
                <Resume.Subtitle className={`resumeSubtitle${blockClass}`} color={"#101010"}>Estudante, desenvolvedor & UX-UI</Resume.Subtitle>
                <Resume.Description className={`resumeDescription${blockClass}`} color={"#101010"}>Levantando esse site.</Resume.Description>
            </Resume>
        </MainResume>
    )
}

export default Presentation;
