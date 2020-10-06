/* eslint-disable max-len */
import React from 'react';

import PageDefault from '../../components/PageDefault';
// import Buttons from '../../components/Buttons';
import Image from '../../components/Image';

import imgMesaPgto from '../../assets/work_ex/mesa_pagamento.jpg';
import imgMesaDetail from '../../assets/work_ex/mesa_detalhe.jpg';
import avatar from '../../assets/avatar.jpg';

// import { ReactComponent as Instagram } from '../../assets/svg/ig.svg';
// import { ReactComponent as Facebook } from '../../assets/svg/fb.svg';
import { ReactComponent as Github } from '../../assets/svg/gh.svg';
import { ReactComponent as Linkedin } from '../../assets/svg/li.svg';
// import { ReactComponent as Whatsapp } from '../../assets/svg/wa.svg';

import { Hero, Work, Social, Resume, Separator, Grid, Newsletter } from './styles';

export default function Home() {
  const title = 'Michel Camargo';

  return (
    <PageDefault>

      <Hero>

        <Image src={avatar} alt="Avatar Michel" width="250px" radius="300px" />
        <Hero.Title>{title}</Hero.Title>
        <Hero.Subtitle>Student, developer & UX/UI enthusiast</Hero.Subtitle>

        <Social>
          <Linkedin fill="white" style={{ width: '30px', margin: '0 10px' }} />
          <Github fill="white" style={{ width: '30px', margin: '0 10px' }} />
        </Social>

        {/* <Buttons link="#">Saiba mais</Buttons> */}
      </Hero>

      <Work>
        <Resume>
          <Resume.Title>Sobre mim / About me</Resume.Title>
          <Resume.Description>
            <p>Estudante de tecnologia e desenvolvedor de aplicações</p>
            <p>Motivado por design de interação humano-computador, fotografia e música</p>
            <p>Em busca de conhecimento e seus desafios</p>
          </Resume.Description>
        </Resume>

        <Separator />
        <Grid>
          <Grid.SmallItem img={imgMesaPgto} />
          <Grid.LargeItem color="yellow" />
          <Grid.LargeItem img={imgMesaDetail} />
          <Grid.SmallItem color="blue" />
        </Grid>

        {/* <Buttons
          link="https://play.google.com/store/apps/details?id=br.com.myse.comandaApp"
        >
          Foodi Comanda
        </Buttons> */}

      </Work>

      <Newsletter>
        <Newsletter.Title>Por onde entro em contato?</Newsletter.Title>
        <Newsletter.Description>Deixe seu endereço de e-mail abaixo:</Newsletter.Description>

        <Newsletter.Form>
          <Newsletter.Input type="text" name="user_email" placeholder="Email para contato" />
          <Newsletter.Button>Enviar</Newsletter.Button>
        </Newsletter.Form>

        <Separator />

      </Newsletter>

    </PageDefault>
  );
}
