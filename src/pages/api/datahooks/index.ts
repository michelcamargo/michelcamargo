import {NextApiRequest, NextApiResponse} from "next";
import staticDatahooks from "@/pages/api/datahooks/static-datahooks";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200).json(staticDatahooks);
  }
}
