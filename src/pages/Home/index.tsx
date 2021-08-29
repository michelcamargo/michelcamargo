// import react, { useState } from 'react';
import { FlexRow, Container, FlexRowContent, Content, Resume, Textbox, Picturebox, Skills } from './styles';
import { Paragraph } from '../../components/Typography/styles';

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
        // <Content isFullWidth={false}>
        //
        //     <Resume>
        //         <Picturebox>
        //             <Image src={path_ProfilePicture} width="200px"></Image>
        //         </Picturebox>
        //         <Textbox>
        //             <Textbox.MainTitle color="var(--white)">Michel Camargo</Textbox.MainTitle>
        //             <Textbox.Title color="var(--whiteInactive)">Estudante, desenvolvedor & UX-UI designer</Textbox.Title>
        //             {/* <H3 color="var(--white)">Desenvolvedor & designer adaptivo e meticuloso</H3> */}
        //             <Textbox.Subtitle color="var(--whiteInactive)">Meu principal objetivo é oferecer belos produtos com experiência agradável e intuitiva ao usuário.</Textbox.Subtitle>
        //         </Textbox>
        //
        //     </Resume>
        //
        //     {/* <Separator color="#000000" width="500px"/> */}
        //     {/* <IntButton2 width='150px' to='/contato' bgColor='var(--white)' color='var(--darkGreen)'>Contato</IntButton2> */}
        //     <ExtButton2 width='150px' to='https://www.linkedin.com/in/michelscamargo/' bgColor='var(--white)' color='var(--darkGreen)' target="_blank">LinkedIn</ExtButton2>
        //
        //
        //     <Skills>
        //         <Card title="Web Development" textColor="var(--white)" bgColor="var(--otherDark)" srcImage={path_SkillJS} >
        //             <Paragraph>
        //                 Implementação e suporte a aplicações multiplataforma utilizando JavaScript e React.js ao lado de Node.js, Java ou Python.
        //                 Além disso estudo a implementação de objetos e elementos tipados com TypeScript.
        //             </Paragraph>
        //         </Card>
        //
        //         <Card title="UI & UX Design" textColor="var(--white)" bgColor="var(--otherDark)" srcImage={path_SkillIHC} >
        //
        //             <Paragraph>
        //                 Manter uma experiência positiva ao usuário possibilita o mapeamento de pontos focais e a priorização de recursos, garantindo a alavancagem
        //                 natural do produto expandindo a ótica de solução e definição dos objetivos.
        //             </Paragraph>
        //         </Card>
        //     </Skills>
        //
        //
        // </Content>


        <FlexRow fullWidth={false} background={"#f1f1f1"}>
            <p>flexRow aqui</p>
            <Container containerWidth={containerWidth}>
                <p>container aqui</p>
                <FlexRowContent>
                    <p>flexRowContent aqui</p>
                </FlexRowContent>

            </Container>
        </FlexRow>

    );
}

export default Home;