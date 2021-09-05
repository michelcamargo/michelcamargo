// import react, { useState } from 'react';
import { Content, Resume, Textbox, Picturebox, Skills } from './styles';
import { Paragraph } from '../../components/Typography/styles';
import { MainResume } from '../../components/Section/MainResume/styles';

import { FlexLayoutRow } from "../../components/FlexLayout";

import { Card } from '../../components/Card';

// import { IntButton2 } from '../../components/IntButton';
import { ExtButton2 } from '../../components/ExtButton';
// import Separator from '../../components/Separator';


import path_SkillJS from "../../assets/images/JS.png";
import path_SkillIHC from "../../assets/images/IHC.png";


function Home(){

    const containerWidth = 1130;

    return(
        <>
            <FlexLayoutRow isFullWidth={false} containerWidth={containerWidth}>
                <MainResume />
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