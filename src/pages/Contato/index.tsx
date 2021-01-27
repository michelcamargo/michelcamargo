import React, { ReactNode } from 'react';

import { Content, FormSection, FieldGroup } from './styles';

import { Button1, Button2 } from '../../components/Button';
import { InputText, InputTextArea, InputEmail } from '../../components/Input';


interface Props{
  children?: ReactNode;
}

function Contato({children}: Props) {
  return(
    <Content>
      <Button1 bgColor="var(--darkGreen)" color="var(--white)">Botão 1</Button1>
      <Button2 bgColor="var(--darkGreen)" color="var(--white)">Botão 2</Button2>


      <FormSection>
        <form>
          <FieldGroup flex="row">
            <legend>Contato</legend>
            <InputText name="nome" label="Seu nome" /><br />
            <InputEmail name="email" label="Seu endereço de e-mail" /><br />
            {/* Senha: <input type="password"><br> */}
            {/* <button type="button">Log In</button><br> */}
          </FieldGroup>

          <InputTextArea 
            name="details" 
            label="Escreva algo interessante: informações de contato, propostas de negócio ou sinta-se livre para dar sua opinião sobre o perfil" 
          />
          <br/>

          <FieldGroup flex="row">
          <input type="radio" name="referee" value="linkedin" />LinkedIn<br/>
          <input type="radio" name="referee" value="github" />GitHub<br/>
          <input type="radio" name="referee" value="instagram" />Instagram<br/>
          <input type="radio" name="referee" value="vaga" />Inscrição em vaga<br/>
          <input type="radio" name="referee" value="other" />Outro 
          <InputText name="details_referee" label="Outra forma" /><br />
          </FieldGroup>
          <input type="submit" />

        </form>
      </FormSection>
    </Content>
  );
}

export default Contato;
