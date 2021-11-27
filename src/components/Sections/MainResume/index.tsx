import React from 'react';

import { Resume, ImageElement } from './styles';
const MainLogo = require("../../../assets/svg/logo/michelcamargo.svg") as string;

interface Props {
    className?: string;
    color?: string;
    width?: string;
    radius?: string;
}

function MainResume({className}: Props) {

    let blockClass = className ? `--${className}` : "";

    return (
        <>
            <ImageElement src={MainLogo} width={"200px"} />
            <Resume className={`ResumeContainer${blockClass}`}>
                <Resume.Title className={`resumeTitle${blockClass}`} color={"#101010"}>Michel Camargo</Resume.Title>
                <Resume.Subtitle className={`resumeSubtitle${blockClass}`} color={"#101010"}>Estudante, desenvolvedor & UX-UI</Resume.Subtitle>
                <Resume.Description className={`resumeDescription${blockClass}`} color={"#101010"}>Levantando esse site.</Resume.Description>
            </Resume>
        </>
    )
}

export default MainResume;
