/* eslint-disable max-len */
import React from 'react';

import PageDefault from '../../components/PageDefault';
import Image from '../../components/Image';

import imgMesaPgto from '../../assets/work_ex/mesa_pagamento.jpg';
import imgMesaDetail from '../../assets/work_ex/mesa_detalhe.jpg';
import avatar from '../../assets/avatar.jpg';

// import { ReactComponent as Instagram } from '../../assets/svg/ig.svg';
// import { ReactComponent as Facebook } from '../../assets/svg/fb.svg';
import { ReactComponent as Github } from '../../assets/svg/gh.svg';
import { ReactComponent as Linkedin } from '../../assets/svg/li.svg';
// import { ReactComponent as Whatsapp } from '../../assets/svg/wa.svg';

import { Hero, Work, Hotlinks, Resume, Separator, Grid, Newsletter } from './styles';

export default function Home() {
  const title = 'Michel Camargo';
  const subtitle = 'Student, developer & UX/UI enthusiast';

  return (
    <PageDefault>
      <Hero>
        <Image src={avatar} alt="Avatar Michel" width="150px" radius="100px" />
        <Hero.Title>{title}</Hero.Title>
        <Hero.Subtitle>{subtitle}</Hero.Subtitle>

        <Hotlinks>
          <a href="https://www.linkedin.com/in/michelscamargo" target="_blank" rel="noreferrer"><Linkedin fill="white" style={{ width: '30px', margin: '0 10px' }} /></a>
          <a href="https://github.com/michelcamargo" target="_blank" rel="noreferrer"><Github fill="white" style={{ width: '30px', margin: '0 10px' }} /></a>
        </Hotlinks>

      </Hero>

      <Work>
        <Resume>
          <Resume.Title>Sobre mim</Resume.Title>
          <Resume.Description>
            <p>Estudante de tecnologia e desenvolvedor de aplicações Web e Mobile</p>
            <p>Motivado por design de interação humano-computador, fotografia e música</p>
            <p>Em busca de conhecimento e seus desafios</p>
          </Resume.Description>
        </Resume>

        <Separator />
        <Grid>
          <Grid.SmallItem img={imgMesaPgto} />
          <Grid.SmallItem img={imgMesaDetail} />
          <Grid.LargeItem color="yellow" />
          <Grid.LargeItem color="blue" />
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
