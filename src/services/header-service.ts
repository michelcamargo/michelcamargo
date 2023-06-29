import NextConfig from "@/configs/next.env";
import staticHeaderContent from '@/components/common-header/static-content';
import {HeaderData} from "@/lib/header";

export default async function fetchHeaderContent(page: string, language?: string): Promise<HeaderData> {
  const langQuery = language ? `&lang=${language}` : '';
  
  const response = await fetch(`${NextConfig.APP_URL}/api/content/header?ref=${page}${langQuery}`, {
    method: 'GET',
  });
  
  if (!response) {
    return staticHeaderContent;
  }
  
  return response.json();
}
