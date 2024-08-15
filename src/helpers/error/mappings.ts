import { AppErrorInfo } from "@/lib/error";

const APP_ERROR_MAPPINGS: Array<AppErrorInfo> = [
	{
		code: 1001,
		title: 'Código Um',
		message: 'Esse é um erro de desenvolvimento',
		description: 'Deve ser utilizado para testes internos da aplicação',
		options: { autoClose: 10000 },
	},
	{
		code: 1002,
		title: 'Falha ao enviar formulário',
		message: 'Não foi possível enviar o formulário',
		options: { autoClose: 10000 },
	},
	{
		code: 1003,
		title: 'Falha na requisição',
		message: 'Esse é um erro de desenvolvimento',
		description: 'Deve ser utilizado para testes internos da aplicação',
		options: { autoClose: 10000 },
	}
];

export default APP_ERROR_MAPPINGS;
