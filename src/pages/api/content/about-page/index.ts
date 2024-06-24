/* eslint-disable no-console */
// import staticAboutContent from '@/domains/AboutPage/static';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queryString = req.query;
  
  if (req.method === 'GET') {
    console.log('queryString', queryString);
  
    try {
      res.status(200).json([]);
      // res.status(200).json(staticAboutContent);
    } catch (error) {
      console.error('Error in server-side fetch:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
}
