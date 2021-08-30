// import react, { useState } from 'react';
import { Content, Resume, Textbox, Picturebox, Skills } from './styles';
import { Paragraph } from '../../components/Typography/styles';

import { FlexLayoutRow } from "../../components/FlexLayout";

import { Card } from '../../components/Card';
import Image from '../../components/Image';
// import { IntButton2 } from '../../components/IntButton';
import { ExtButton2 } from '../../components/ExtButton';
// import Separator from '../../components/Separator';

import path_ProfilePicture from "../../assets/images/profile-pic.png";
import path_SkillJS from "../../assets/images/JS.png";
import path_SkillIHC from "../../assets/images/IHC.png";


function Home(){

    const containerWidth = 1130;

    return(
        <>
            <FlexLayoutRow isFullWidth={false} containerWidth={containerWidth}>
                <Resume>
                    <Picturebox>
                        <Image src={path_ProfilePicture} width="200px"></Image>
                    </Picturebox>
                    <Textbox>
                        <Textbox.MainTitle color="var(--text-base-primary)">Michel Camargo</Textbox.MainTitle>
                        <Textbox.Title color="var(--text-base-primary)">Estudante, desenvolvedor & UX-UI designer</Textbox.Title>
                        <Textbox.Subtitle color="var(--text-base-primary)">Vamo levantar esse site.</Textbox.Subtitle>
                    </Textbox>
                </Resume>

            </FlexLayoutRow>

            <FlexLayoutRow isFullWidth={false} containerWidth={containerWidth}>

                <ExtButton2 width='150px' to='https://www.linkedin.com/in/michelscamargo/' bgColor='var(--white)' color='var(--darkGreen)' target="_blank">LinkedIn</ExtButton2>

                <Skills>
                    <Card title="Web Development" textColor="var(--text-base-secondary)" bgColor="var(--background-primary)" srcImage={path_SkillJS} >
                        <Paragraph>
                            Implementação e suporte a aplicações multiplataforma utilizando JavaScript e React.js ao lado de Node.js, Java ou Python.
                            Além disso estudo a implementação de objetos e elementos tipados com TypeScript.
                        </Paragraph>
                    </Card>
                    <Card title="UI & UX Design" textColor="var(--text-base-secondary)" bgColor="var(--background-primary)" srcImage={path_SkillIHC} >
                        <Paragraph>
                            Manter uma experiência positiva ao usuário possibilita o mapeamento de pontos focais e a priorização de recursos, garantindo a alavancagem
                            natural do produto expandindo a ótica de solução e definição dos objetivos.
                        </Paragraph>
                    </Card>
                </Skills>
            </FlexLayoutRow>
        </>
    );
}

export default Home;