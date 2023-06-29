import type { NextApiRequest, NextApiResponse } from 'next';
import { PageData } from "@/lib/page";
import staticHomeContent from '@/domains/HomePage/static-content';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PageData>
) {
  const queryString = req.query;
  
  if (req.method === 'GET') {
    console.log('queryString', queryString);
    
    res.status(200).json(staticHomeContent);
  }
  
}
