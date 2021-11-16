import React from 'react';

import { Resume, ImageElement } from './styles';
import {ReactComponent as MainLogo} from "../../../assets/svg/logo/michelcamargo.svg";

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

            <Resume className={`ResumeContainer${blockClass}`}>
                <Resume.Title className={`resumeTitle${blockClass}`}>Michel Camargo</Resume.Title>
                <Resume.Subtitle className={`resumeSubtitle${blockClass}`}>Estudante, desenvolvedor & UX-UI designer</Resume.Subtitle>
                <Resume.Description className={`resumeDescription${blockClass}`}>Levantando esse site.</Resume.Description>
            </Resume>
        </>
    )
}

export default MainResume;
