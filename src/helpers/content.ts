import { CustomContentType } from "@/lib/content";

export default class CustomContent {
  
  /**
   * Chave/Índice de conteúdo
   */
  public key: string;
  
  /**
   * Conteúdo diretamente ligado à chave
   */
  private value: string | null;
  
  /**
   * Agrupamento interno
   */
  private children?: Array<CustomContent>;
  
  /**
   * Construtor
   * @param data Conteúdo a definir na estrutura
   */
  constructor(data: CustomContentType) {
    const { key, value, children } = data;
    
    this.key = key ?? '';
    this.value = value ?? null;
    this.children = children?.length ? children.map(item => new CustomContent(item)) : []
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
    
    if (!keyName || keyName.toLowerCase() === this.key.toLowerCase()) return contentFormat(this.value);

    let leveledChildren = this.children;

    while (!targetContent && Array.isArray(leveledChildren) && leveledChildren.length > 0) {
      const deepArray: Array<CustomContent> = [];
      let found = false;

      leveledChildren.forEach(childrenCustomContent => {
        if (Array.isArray(childrenCustomContent.children) && childrenCustomContent.children.length > 0) {
          deepArray.push(...childrenCustomContent.children);
        }
      
        if (!found && childrenCustomContent.key.toLowerCase() === keyName.toLowerCase()) {
          if (childrenCustomContent.value) {
            targetContent = childrenCustomContent.value;
            found = true;
          } else if (Array.isArray(childrenCustomContent.children) && childrenCustomContent.children.length > 0) {
            const childrenContentArray: Array<string> = [];
            childrenCustomContent.children.forEach(item => item.value && childrenContentArray.push(item.value));
          
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
    this.value = null;
  }
  
  /**
   * Limpa o agrupamento de conteúdo
   */
  public clearChildren = (setUndefined: boolean = false) => {
    setUndefined ? this.children = undefined : this.children = [];
  }
  
  /**
   * Adiciona item ao agrupamento interno de conteúdo
   * @param child
   */
  public addChild = (child: CustomContent) => {
    if (!child) return false;
  
    !this.children ? this.children = [child] : this.children.push(child);
    return true;
  }
  
  /**
   * Remove um item do agrupamento interno de conteúdo
   * @param child
   */
  public removeChild = (child: CustomContent) => {
    if (!this.children || !this.children.length) return false;
    
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
      return true;
    }
  }
  
  /**
   * Retorna o conteúdo agrupado internamente
   */
  public getChildren = (): Array<CustomContent> | null => {
    return this.children ?? null;
  }
  
  /**
   * Retorna o conteúdo agrupado internamente
   */
  public getChildrenAsObjectArray = (skipRoot: boolean = false): Array<object> | null => {
    return (this.children && this.children.length) ? this.children.map(item => item.toObject(skipRoot)) : null
  }
  
  /**
   * Busca um item no agrupamento interno
   * @param keyName
   * @param asObject
   */
  public getChild = (keyName?: string, asObject: boolean = false): CustomContent | null => {
    if (!Array.isArray(this.children) || this.children.length === 0) return null;
    if (!keyName) return this.children[0];
    
    return this.children.find(item => item.key.toLowerCase() === keyName.toLowerCase()) ?? null;
  }
  
  /**
   * Retorna um objeto representando os itens internos
   * @param keyName
   */
  public getChildAsObject = (keyName?: string): object | null => {
    if (!Array.isArray(this.children) || this.children.length === 0) return null;
    if (!keyName) return this.children[0].toObject();
    
    const target = this.children.find(item => item.key.toLowerCase() === keyName.toLowerCase());
    
    return target ? target.toObject(true) : null;
  }
  
  public toObject(skipRoot: boolean = false): object {
    let result: any = {};
  
    if (this.children && this.children.length > 0) {
      for (let child of this.children) {
        Object.assign(result, child.toObject(false));
      }
    } else {
      result[this.key] = this.value || '';
    }
  
    if (skipRoot) {
      return result;
    }
  
    return { [this.key]: result };
  }

}
