import React from 'react';

import { Resume, ImageElement } from './styles';
import Image from '../../Image';
// import path_ProfilePicture from "../../../assets/images/profile-pic.png";
import MainLogo from "../../../assets/images/michelcamargo.png";
// import MainLogo from "../../../assets/images/michelcamargo.svg";

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
            <ImageElement>
                <Image src={MainLogo} width="200px"/>
            </ImageElement>
            <Resume className={`ResumeContainer${blockClass}`}>
                <Resume.Title className={`resumeTitle${blockClass}`}>Michel Camargo</Resume.Title>
                <Resume.Subtitle className={`resumeSubtitle${blockClass}`}>Estudante, desenvolvedor & UX-UI designer</Resume.Subtitle>
                <Resume.Description className={`resumeDescription${blockClass}`}>Levantando esse site.</Resume.Description>
            </Resume>
        </>
    )
}

export default MainResume;
