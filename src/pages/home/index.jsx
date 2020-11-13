/* eslint-disable max-len */
import React from 'react';

import PageDefault from '../../components/PageDefault';
import Image from '../../components/Image';

import imgMesaPgto from '../../assets/work_ex/mesa_pagamento.jpg';
import imgMesaDetail from '../../assets/work_ex/mesa_detalhe.jpg';
import imgEletro1 from '../../assets/work_ex/eletro_1.png';
import imgEletro2 from '../../assets/work_ex/eletro_2.png';


import avatar from '../../assets/avatar.jpg';

// import { ReactComponent as Instagram } from '../../assets/svg/ig.svg';
// import { ReactComponent as Facebook } from '../../assets/svg/fb.svg';
import { ReactComponent as Github } from '../../assets/svg/gh.svg';
import { ReactComponent as Linkedin } from '../../assets/svg/li.svg';
// import { ReactComponent as Whatsapp } from '../../assets/svg/wa.svg';

import { Hero, Work, Hotlinks, Resume, Separator, Grid, Newsletter } from './styles';

export default function Home() {
  const title = 'Michel Camargo';
  const subtitle = 'Developer, UX/UI enthusiast and student';

  return (
    <PageDefault>
      <Hero>
        <Image src={avatar} alt="Avatar Michel" width="150px" radius="100px" />
        <Hero.Title>{title}</Hero.Title>
        <Hero.Subtitle>{subtitle}</Hero.Subtitle>

        <Hotlinks>
          <a href="https://www.linkedin.com/in/michelscamargo" rel="LinkedIn de Michel Camargo">
            <Linkedin fill="white" style={{ width: '30px', margin: '0 10px' }} />
          </a>

          <a href="https://github.com/michelcamargo" rel="GitHub de Michel Camargo">
            <Github fill="white" style={{ width: '30px', margin: '0 10px' }} />
          </a>
        </Hotlinks>

      </Hero>

      <Work>
        <Resume>
          <Resume.Title>Sobre mim</Resume.Title>
          <Resume.Description>
            <p>Acadêmico de Tecnologia em Sistemas para Internet pela Universidade Tecnológica Federal do Paraná </p>
            <p>Desenvolvedor de aplicações Web com foco na experiência do usuário e facilitação do uso e aprendizado</p>
            <p>Aficionado por tecnologia e design de interação, além de entusiasta do audiovisual e apreciador de boas artes</p>
          </Resume.Description>
        </Resume>

        <Grid>
          <Grid.SmallItem img={imgMesaPgto} />
          <Grid.SmallItem img={imgMesaDetail} />
          <Grid.LargeItem img={imgEletro1} />
          <Grid.LargeItem img={imgEletro2} />
        </Grid>

      </Work>

      {/* <Newsletter>
        <Newsletter.Title><h4>seu e-mail</h4></Newsletter.Title>
        <Newsletter.Description><p>(ou diga qualquer coisa)</p></Newsletter.Description>

        <Newsletter.Form>
          <Newsletter.Input type="text" name="user_email" placeholder="Email para contato" />
          <Newsletter.Button>Enviar</Newsletter.Button>
        </Newsletter.Form>

      </Newsletter> */}

    </PageDefault>
  );
}
