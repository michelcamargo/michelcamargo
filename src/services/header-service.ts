import NextApi from "@/configs/next.env";
import staticHeaderContent from '@/components/common-header/static-content';

export default async function fetchHeaderContent(page: string, language?: string) {
  const langQuery = language ? `&lang=${language}` : '';
  
  const response = await fetch(`${NextApi.PUBLIC_BASE_URL}/api/content/header?ref=${page}${langQuery}`, {
    method: 'GET',
  });
  
  if (!response) {
    return staticHeaderContent;
  }
  
  return response.json();
}