import staticHomeContent from '@/domains/HomePage/static';
import { ServerViewProps } from "@/lib/datahooks";
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServerViewProps>
) {
  const queryString = req.query;
  
  if (req.method === 'GET') {
    console.log('GET CONTENT GERAL', queryString);
    
    res.status(200).json(staticHomeContent);
  }
  
}
