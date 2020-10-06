/* eslint-disable max-len */
import React from 'react';

import PageDefault from '../../components/PageDefault';
import Buttons from '../../components/Buttons';
import Image from '../../components/Image';

import imgMesaPgto from '../../assets/work_ex/mesa_pagamento.jpg';
import imgMesaDetail from '../../assets/work_ex/mesa_detalhe.jpg';
import avatar from '../../assets/avatar.jpg';

import { Hero, Work, Resume, Separator, Grid, Newsletter } from './styles';

export default function Home() {
  const title = 'Michel Camargo';

  return (
    <PageDefault>

      <Hero>
        <Image src={avatar} alt="Avatar Michel" width="250px" radius="300px" />
        <Hero.Title>{title}</Hero.Title>
        <Hero.Subtitle>Student, Developer & UX/UI Enthusiast</Hero.Subtitle>
        <Buttons link="#">Saiba mais</Buttons>
      </Hero>

      <Work>
        <Resume>
          <Resume.Title>Meu trabalho</Resume.Title>
          <Resume.Description>
            Estudante de tecnologia em busca de desenvolvimento profissional, atuando na área de desenvolvimento de aplicações multiplataforma e interfaces Front-End, fortemente motivado pelo estudo e análise comportamental humano-computador, embasado por design de produto e interação humano-computador, a fim de absorver conhecimento e propor soluções claras e objetivas de forma síncrona e engajada junto à uma ou mais equipes.
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
        <Newsletter.Title>Fale comigo!</Newsletter.Title>
        <Newsletter.Description>Deixe seu endereço de e-mail e entrarei em contato</Newsletter.Description>
        <Separator />

        <Newsletter.Form>
          <Newsletter.Input type="text" name="user_email" placeholder="Email para contato" />
          <Newsletter.Button>Enviar</Newsletter.Button>
        </Newsletter.Form>

      </Newsletter>

    </PageDefault>
  );
}
