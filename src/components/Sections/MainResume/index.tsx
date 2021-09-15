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
                <Resume.Title color="var(--color-text-dark-primary)" className={`resumeTitle${blockClass}`}>Michel Camargo</Resume.Title>
                <Resume.Subtitle color="var(--color-text-dark-primary)" className={`resumeSubtitle${blockClass}`}>Estudante, desenvolvedor & UX-UI designer</Resume.Subtitle>
                <Resume.Description color="var(--color-text-dark-secondary)" className={`resumeDescription${blockClass}`}>Vamo levantar esse site.</Resume.Description>
            </Resume>
        </>
    )
}

export default MainResume;
