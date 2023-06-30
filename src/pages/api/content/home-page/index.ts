import staticHomeContent from '@/domains/HomePage/static-content';
import { PageData } from "@/lib/datahooks";
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PageData>
) {
  const queryString = req.query;
  
  if (req.method === 'GET') {
    console.log('queryString', queryString);
    console.log('RETORNANDO HOME STATIC CONTENT:', staticHomeContent);
    res.status(200).json(staticHomeContent);
  }
  
}
