import type { NextApiRequest, NextApiResponse } from 'next';
import { HeaderData } from "@/lib/header";
import headerStaticContent from '@/components/common-header/static-content';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HeaderData>
) {
  const queryString = req.query;
  
  if (req.method === 'GET') {
    console.log('queryString', queryString);
    console.log('RETORNANDO HEADER STATIC CONTENT:', headerStaticContent);
  
    res.status(200).json(headerStaticContent);
  }
}
