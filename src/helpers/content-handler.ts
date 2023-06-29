import { CustomContent } from "@/lib/custom-content";

/**
 * Busca conteúdo de acordo com a chave
 * @param key
 * @param data
 */
const getCustomContentByKey = (key: string, data: Array<CustomContent>) => {
  if (!data) return null;
  
  if (Array.isArray(data)) {
    const target = data.find(item => item.key.toLowerCase() === key.toLowerCase());
    
    if (!target) return null;
    
    return target.content;
  }
  
  return data;
};

const getContentArray = (data: Array<CustomContent>) => {
  if (!data || !Array.isArray(data) || data.length === 0) return [];
  
  return data.map(item => item.content);
};

export {
  getCustomContentByKey,
  getContentArray,
};
