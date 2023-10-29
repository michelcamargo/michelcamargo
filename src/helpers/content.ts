import { CustomContentType } from "@/lib/content";

export default class CustomContent {
  
  /**
   * Chave/Índice de conteúdo
   */
  public key: string;
  
  /**
   * Conteúdo diretamente ligado à chave
   */
  private content: string | null;
  
  /**
   * Agrupamento interno
   */
  private children: Array<CustomContent>;
  
  /**
   * Construtor
   * @param data Conteúdo a definir na estrutura
   */
  constructor(data: CustomContentType) {
    const { key: inKey, content: inContent, children: inChildren } = data;
    
    this.key = inKey ?? '';
    this.content = inContent ?? null;
    this.children = (inChildren && Array.isArray(inChildren)) ? inChildren.map(item => new CustomContent(item)) : [];
  }
  
  /**
   * Retorna o próprio conteúdo ou busca pela chave em agrupamentos internos
   * @param keyName Chave/Índice de conteúdo
   * @param separator Separador de texto (caso array)
   * @param filterArray Remove ocorrências relacionadas
   */
  public getContent = (keyName?: string, separator = ' ', filterArray: Array<string> = []) => {
    let targetContent: string | null = null;
    
    const contentFormat = (content?: string | null) => {
      if (typeof content === 'string' && content?.length === 0) return content as string;
      if (content === null || content === undefined) return null;
      
      const filterExp = new RegExp(filterArray.join("|"), "g");
      
      return content.replace(filterExp, '').replace('  ', ' ');
    };
    
    if (!keyName || keyName.toLowerCase() === this.key.toLowerCase()) return contentFormat(this.content);

    let leveledChildren = this.children;

    while (!targetContent && Array.isArray(leveledChildren) && leveledChildren.length > 0) {
      const deepArray: Array<CustomContent> = [];
      let found = false;

      leveledChildren.forEach(childrenCustomContent => {
        if (Array.isArray(childrenCustomContent.children) && childrenCustomContent.children.length > 0) {
          deepArray.push(...childrenCustomContent.children);
        }
      
        if (!found && childrenCustomContent.key.toLowerCase() === keyName.toLowerCase()) {
          if (childrenCustomContent.content) {
            targetContent = childrenCustomContent.content;
            found = true;
          } else if (Array.isArray(childrenCustomContent.children) && childrenCustomContent.children.length > 0) {
            const childrenContentArray: Array<string> = [];
            childrenCustomContent.children.forEach(item => item.content && childrenContentArray.push(item.content));
          
            if (childrenContentArray.length > 0) {
              targetContent = childrenContentArray.join(separator);
              found = true;
            }
          }
        }
      });

      if (!found) {
        leveledChildren = deepArray;
      }
    }

    return contentFormat(targetContent);
  }
  
  /**
   * Limpa o conteúdo
   */
  public clearContent = () => {
    this.content = null;
  }
  
  /**
   * Limpa o agrupamento de conteúdo
   */
  public clearChildren = () => {
    this.children = [];
  }
  
  /**
   * Adiciona item ao agrupamento interno de conteúdo
   * @param child
   */
  public addChild = (child: CustomContent) => {
    if (!child) {
      return;
    }
  
    this.children.push(child);
  }
  
  /**
   * Remove um item do agrupamento interno de conteúdo
   * @param child
   */
  public removeChild = (child: CustomContent) => {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }
  
  /**
   * Retorna o conteúdo agrupado internamente
   */
  public getChildren = (): Array<CustomContent> => {
    return this.children;
  }
  
  /**
   * Busca um item no agrupamento interno
   * @param keyName
   */
  public getChild = (keyName: string): CustomContent | null => {
    if (!Array.isArray(this.children) || this.children.length === 0) {
      return null;
    }
    
    return this.children.find(item => item.key.toLowerCase() === keyName.toLowerCase()) ?? null;
  }

}
