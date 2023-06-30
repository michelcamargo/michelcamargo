import {NextApiRequest, NextApiResponse} from "next";
import staticDatahooks from "@/pages/api/datahooks/static-datahooks";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('request aqui@@@@@@@@@@!!!!!!!!', req);
  
  if (req.method === 'GET') {
    
    res.status(200).json(staticDatahooks);
  }
}
