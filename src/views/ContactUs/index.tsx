import React, { ReactNode } from 'react';

import {Content, FormLabel, Form, FieldGroup} from './styles';

import { Input } from '../../components/UI/Input';

interface ContactUsProps{
  children?: ReactNode;
}

const ContactUs: React.FC<ContactUsProps> = () => {
  return(
      <Content>
        <Form>
          <FormLabel>Contato</FormLabel>

          <FieldGroup flex="row">
            <Input width="250px" type="text" name="nome" label="" placeholder="Seu nome" />
            <Input width="100%" type="text" name="email" label="" placeholder="Seu endereço de e-mail" />
          </FieldGroup>

          <FieldGroup>
            <Input
                type="textarea"
                width="100%"
                height="100%"
                name="details"
                label="Escreva algo interessante: informações de contato, propostas de negócio ou sinta-se livre para dar sua opinião sobre o perfil"
            />
          </FieldGroup>

          <FieldGroup flex="row">
            <Input type="radio" name="LinkedIn" value="linkedin" />
            <Input type="radio" name="GitHub" value="github" />
            <Input type="radio" name="Instagram" value="instagram" />
            <Input type="radio" name="Inscrição em vaga" value="vaga" />
            <Input type="radio" name="Outro" value="other" />
            <Input type="text" name="details_referee" label="Outra forma" />
          </FieldGroup>
          <input type="submit" />
        </Form>
      </Content>
  );
}

export default ContactUs;
