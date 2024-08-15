/* eslint-disable no-console */
// import staticHomeContent from '@/domains/HomePage/static';
import { handleRequestError } from "@/helpers/error";
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
			// res.status(200).json(staticHomeContent);
		} catch (error) {
			handleRequestError(error);
			// console.error('Error in server-side fetch:', error);
			res.status(500).json({ error: 'Internal Server Error' });
		}
	}
  
}
