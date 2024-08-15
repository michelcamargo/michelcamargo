/* eslint-disable no-console */
import { handleRequestError } from "@/helpers/error";
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const queryString = req.query;
  
	if (req.method === 'GET') {
		console.log('GET HOME', queryString);
    
		try {
			res.status(200).json([]);
		} catch (error) {
			handleRequestError(error, 'FALHA AO BUSCAR EM SERVIDOR');
			res.status(500).json({ error: 'Internal Server Error' });
		}
	}
  
}
