import * as Yup from "yup";

export const authHandshakeDtoSchema = Yup.object().shape({
	username: Yup.string().required('Username é requerido'),
});

export const authSignInDtoSchema = Yup.object().shape({
	username: Yup.string().required('Informe seu usuário ou email'),
	secret: Yup.string().required('Informe sua senha'),
});

export const authSignUpDtoSchema = Yup.object().shape({
	fullname: Yup.string().required('Informe seu nome'),
	email: Yup.string().email().required('Informe um email válido'),
	username: Yup.string(),
	secret: Yup.string().required('A senha é necessária'),
	secretAnsure: Yup.string().required('Repita a senha acima informada'),
});
