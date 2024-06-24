import {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Ativa o modo de pré-visualização
  res.setPreviewData({});

  // Redireciona para a página inicial (ou qualquer outra página)
  res.writeHead(307, { Location: '/' });
  res.end();
}
