/* eslint-disable no-console */
import type { NextApiRequest, NextApiResponse } from 'next';
import {handleRequestError} from "@/helpers/error";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queryString = req.query;
  
  if (req.method === 'GET') {
    console.log('queryString', queryString);
  
    try {
      // res.status(200).json(staticPortfolioContent);
      res.status(200).json([]);
    } catch (error) {
      handleRequestError(error);
      // console.error('Error in server-side fetch:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
}
