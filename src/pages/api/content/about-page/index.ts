import staticAboutContent from '@/domains/AboutPage/static';
import { ServerViewProps } from "@/lib/datahooks";
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServerViewProps>
) {
  const queryString = req.query;
  
  if (req.method === 'GET') {
    console.log('queryString', queryString);
    
    const pageContent: ServerViewProps = {
      ...staticAboutContent,
    };
    
    res.status(200).json(pageContent);
  }
  
}
