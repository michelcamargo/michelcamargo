import { AuthHandshakeDto, AuthSignInDto, AuthSignUpDto } from "@/lib/auth";
import { FormFieldSet } from "@/lib/form";

export const authHandshakeFields: Array<FormFieldSet<AuthHandshakeDto>> = [
  {
		name: 'username',
	  type: 'text',
	  label: 'Usuário ou email',
	  placeholder: 'Informe um email ou nome de usuário',
	  initialValue: '',
  },
];

export const authSignInFields: Array<FormFieldSet<AuthSignInDto>> = [
  {
		name: 'username',
	  type: 'text',
	  label: 'Usuário ou email',
	  placeholder: 'Informe seu email ou usuário',
	  initialValue: '',
  },
  {
		name: 'secret',
	  type: 'password',
	  label: 'Senha',
	  placeholder: 'Informe sua senha',
	  initialValue: '',
  },
];

export const authSignUpFields: Array<FormFieldSet<AuthSignUpDto>> = [
  {
		name: 'fullname',
	  type: 'text',
	  label: 'Nome',
	  placeholder: 'Informe seu nome',
	  initialValue: '',
  },
  {
		name: 'email',
	  type: 'email',
	  label: 'Email',
	  placeholder: 'Informe um email válido',
	  initialValue: '',
  },
  {
		name: 'username',
	  type: 'text',
	  label: 'Nome de usuário',
	  placeholder: 'Informe um nome de usuário',
	  initialValue: '',
  },
  {
		name: 'secret',
	  type: 'password',
	  label: 'Senha',
	  placeholder: 'Informe sua senha',
	  initialValue: '',
  },
  {
		name: 'secretAnsure',
	  type: 'password',
	  label: 'Repita a senha',
	  placeholder: 'Informe a mesma senha',
	  initialValue: '',
  },
];
