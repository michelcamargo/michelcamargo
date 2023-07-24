import staticHomeContent from '@/domains/HomePage/static';
import { ServerViewProps } from "@/lib/datahooks";
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServerViewProps>
) {
  const queryString = req.query;
  
  if (req.method === 'GET') {
    console.log('queryString', queryString);
    
    const { body } = staticHomeContent;
    const { sessions } = body;
    
    console.log('sessions --', sessions);
    
    const pageContent: ServerViewProps = {
      ...staticHomeContent,
    };
    
    res.status(200).json(pageContent);
  }
  
}
