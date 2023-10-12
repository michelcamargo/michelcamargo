import { CustomContentType } from "@/lib/custom-content";

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
  public getContent = (keyName?: string, separator = ' ', filterArray: Array<string> = []): string | null => {
    const filterExp = new RegExp(filterArray.join("|"), "g");
    
    if (!keyName || keyName.toLowerCase() === this.key.toLowerCase()) {
      return this.content ? this.content.replace(filterExp, '') : null;
    }
  
    let leveledChildren = this.children;
    let targetContent = null;
    
    while (!targetContent && Array.isArray(leveledChildren) && leveledChildren.length > 0) {
      const target = leveledChildren.find(item => {
        return item.key.toLowerCase() === keyName.toLowerCase();
      });
      
      if (!target) {
        const deepArray: Array<CustomContent> = [];
        leveledChildren.forEach(childrenCustomContent => {
          if (Array.isArray(childrenCustomContent.children) && childrenCustomContent.children.length > 0) {
            deepArray.concat(childrenCustomContent.children);
          }
        });
        
        leveledChildren = deepArray;
        
      } else if (target) {
        if (target.content) {
          targetContent = target.content;
        } else if (Array.isArray(target.children) && target.children.length > 0) {
          const childrenContentArray: Array<string> = [];
          target.children.forEach(item => item.content && childrenContentArray.push(item.content));
          
          if (childrenContentArray.length > 0) {
            targetContent = childrenContentArray.join(separator);
          } else {
            targetContent = null;
          }
        } else {
          targetContent = null;
        }
      }
    }
    
    // console.log('Buscando [', keyName, '] em [', this.key, '] | content >>', targetContent);
    
    if (targetContent && typeof targetContent === 'string') {
      return targetContent.replace(filterExp, '');
    }
    
    return targetContent ?? null;
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
