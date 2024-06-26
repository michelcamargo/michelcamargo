/* eslint-disable no-console */
import staticDatahooks from "@/pages/api/datahooks/static-datahooks";
import { NextApiRequest, NextApiResponse } from "next";
import errorHandler from '../error';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // try {
    //   res.status(200).json(staticDatahooks);
    // } catch (error) {
    //   console.error('Error in server-side fetch:', error);
    //   res.status(500).json({ error: 'Internal Server Error' });
    // }
    
    res.status(200).json(staticDatahooks);
  }
  
  const data = { message: 'Dados obtidos com sucesso' };
  res.status(200).json(data);
};

export default errorHandler(handler);
