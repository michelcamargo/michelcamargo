import React, { ReactNode } from 'react';

import { Content, FormLabel, Form, FieldGroup } from './styles';

import { Input } from '../../components/UI/Input';


interface Props{
  children?: ReactNode;
}

function Contato({children}: Props) {
  return(
    <Content>
        <Form>
          <FieldGroup flex="row">
            <FormLabel>Contato</FormLabel>
            <Input width="250px" type="text" name="nome" label="Seu nome" /><br />
            <Input type="text" name="email" label="Seu endereço de e-mail" /><br />
          </FieldGroup>

          <Input
            type={"textarea"}
            width={"100%"}
            height={"100%"}
            name="details"
            label="Escreva algo interessante: informações de contato, propostas de negócio ou sinta-se livre para dar sua opinião sobre o perfil" 
          />
          <br/>

          <FieldGroup flex="row">
            <Input type="radio" name="referee" value="linkedin" />LinkedIn<br/>
            <Input type="radio" name="referee" value="github" />GitHub<br/>
            <Input type="radio" name="referee" value="instagram" />Instagram<br/>
            <Input type="radio" name="referee" value="vaga" />Inscrição em vaga<br/>
            <Input type="radio" name="referee" value="other" />Outro
            <Input type="text" name="details_referee" label="Outra forma" /><br />
          </FieldGroup>
          <input type="submit" />
        </Form>
    </Content>
  );
}

export default Contato;
