/* eslint-disable no-console */
import ContentService from "@/services/content.service";
import { NextApiRequest, NextApiResponse } from "next";

import errorHandler from '../error';
// import cookie from "cookie";

const handler = async (req: NextApiRequest, res: NextApiResponse ) => {
  if (req.method === 'GET') {
    const { locale } = req.cookies;
    const dataHooks = await ContentService.fetchByKeys(['template/header', 'template/footer'], locale);
    
    console.log('dataHooks >>>>>', dataHooks);
    
    res.status(200).json(dataHooks);
  }
  
  const data = { message: 'Dados obtidos com sucesso' };
  res.status(200).json(data);
};

export default errorHandler(handler);
