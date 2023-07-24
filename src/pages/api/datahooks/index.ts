import staticDatahooks from "@/pages/api/datahooks/static-datahooks";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      res.status(200).json(staticDatahooks);
    } catch (error) {
      console.error('Error in server-side fetch:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
