import React from 'react';

import { Textbox, ImageElement } from './styles';
import Image from '../../Image';
import path_ProfilePicture from "../../../assets/images/profile-pic.png";


interface Props {
    color?: string;
    width?: string;
    radius?: string;
}

function MainResume({color, width, radius}: Props) {
    return (
        <>
            <ImageElement>
                <Image src={path_ProfilePicture} width="200px"></Image>
            </ImageElement>
            <Textbox>
                <Textbox.MainTitle color="var(--text-base-primary)">Michel Camargo</Textbox.MainTitle>
                <Textbox.Title color="var(--text-base-primary)">Estudante, desenvolvedor & UX-UI designer</Textbox.Title>
                <Textbox.Subtitle color="var(--text-base-primary)">Vamo levantar esse site.</Textbox.Subtitle>
            </Textbox>

        </>
    )
}

export default MainResume;
