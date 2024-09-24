/* eslint-disable no-console */
import { LanguageType } from "@/lib/locale";
import ContentService from "@/services/content.service";
import { NextApiRequest, NextApiResponse } from "next";

import errorHandler from '../error';

const handler = async (req: NextApiRequest, res: NextApiResponse ) => {
	if (req.method === 'GET') {
		const { locale } = req.cookies;
		const dataHooks = await ContentService.getByKeys(['template/header', 'template/footer'], locale as LanguageType);
    
		res.status(200).json(dataHooks);
	}
  
	const data = { message: 'Dados obtidos com sucesso' };
	res.status(200).json(data);
};

export default errorHandler(handler);
