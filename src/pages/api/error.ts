import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line no-unused-vars
type NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

const errorHandler = (handler: NextApiHandler): NextApiHandler => async (req, res) => {
	try {
		await handler(req, res);
	} catch (error) {
		console.warn('Falha ao solicitar:', error);
		
		// Genérico
		res.status(500).json({ error: 'Erro interno do servidor' });
	}
};

export default errorHandler;
