// import react from 'react';
import { Content, Resume, Textbox, Picturebox, Skills } from './styles';

import { MainTitle, H2, H3, H4 } from '../../components/Typography';
import { Card } from '../../components/Card';
import Image from '../../components/Image';
import { IntButton2 } from '../../components/IntButton';
// import { ExtButton2 } from '../../components/ExtButton';
// import Separator from '../../components/Separator';

import path_ProfilePicture from "../../assets/images/profile-pic.png";
import path_SkillJS from "../../assets/images/JS.png";
import path_SkillIHC from "../../assets/images/IHC.png";

function Home(){
    return(
        <Content>

            <Resume>
                <Picturebox>
                    <Image src={path_ProfilePicture} width="200px"></Image>
                </Picturebox>
                <Textbox>
                    <MainTitle color="var(--white)">Michel Camargo</MainTitle>
                    <H2 color="var(--white)" inactive opacity=".8" margin="0 0 5px 0">Estudante, desenvolvedor & UX-UI designer</H2>
                    <H3 color="var(--white)" inactive opacity=".8">Desenvolvedor & designer adaptivo e meticuloso</H3>
                    <H3 color="var(--white)" inactive opacity=".8">Meu objetivo é apresentar belas soluções com foco na experiência do usuário.</H3>
                </Textbox>
                
            </Resume>
            
            {/* <Separator color="#000000" width="500px"/> */}
            <IntButton2 width='150px' to='/contato' bgColor='var(--white)' color='var(--darkGreen)'>Contato</IntButton2>
            {/* <ExtButton2 width='150px' to='http://uol.com.br/' bgColor='var(--darkGreen)' color='var(--white)'>Uol</ExtButton2> */}


            <Skills>
                <Card color="var(--otherDark)" title="Desenvolvimento de sistemas" srcImage={path_SkillJS} marginTitle="20px 0">
                    <H4>
                        Construção e suporte a aplicações e interfaces multiplataforma utilizando JavaScript e React.js ao lado de Node.js, Java ou Python.
                        Além disso, procuro estudar e implementar elementos tipados com TypeScript.
                    </H4>
                </Card>
                
                <Card color="var(--otherDark)" title="Design de Interação" srcImage={path_SkillIHC} marginTitle="20px 0">
                    <H4>
                        Fornecer uma experiência positiva ao usuário garante a alavancagem natural do produto e o mapeamento de pontos focais,
                        dispondo da ótica de usabilidade no desenvolvimento e definição  dos objetivos.            
                    </H4>
                </Card>
            </Skills>
            

        </Content>
    );
}

export default Home;