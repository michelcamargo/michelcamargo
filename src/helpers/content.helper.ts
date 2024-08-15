interface CustomContentType {
  key: string;
  value?: string | undefined;
  children?: Array<CustomContentType>;
}

export default class CustomContent {
  
  /**
   * Chave/Índice de conteúdo
   */
  public readonly key: string;
  
  /**
   * Conteúdo diretamente ligado à chave
   */
  private readonly value: string | undefined;
  
  /**
   * Agrupamento interno
   */
  private readonly children?: Array<CustomContent>;
  
  /**
   * Construtor
   * @param data Conteúdo a definir na estrutura
   */
  constructor(data: CustomContentType) {
  	const { key, value, children } = data;
  	this.key = key ?? '';
  	this.value = value ?? undefined;
  	this.children = children?.length ? children.map(item => new CustomContent(item)) : [];
  }
	
  /**
   * Busca um CustomContent correspondente à chave fornecida, considerando a recursividade da propriedade children.
   * @param key A chave a ser buscada
   * @returns O CustomContent correspondente ou undefined
   */
  public get(key?: string): CustomContent | undefined {
  	if (!key || this.key === key) {
  		return this;
  	}

  	if (this.children) {
  		for (const child of this.children) {
  			const result = child.get(key);
  			if (result) {
  				return result;
  			}
  		}
  	}

  	return undefined;
  }

  /**
   * Busca o valor correspondente à chave fornecida
   * @param key A chave a ser buscada
   * @returns O valor correspondente ou undefined
   */
  public getValue(key?: string): string | undefined {
  	const content = this.get(key);
  	return content?.value;
  }

  /**
   * Busca os filhos correspondentes à chave fornecida
   * @param key A chave a ser buscada
   * @returns Os filhos correspondentes ou undefined
   */
  public getChildren(key?: string): Array<CustomContent> {
  	const content = this.get(key);
  	return content?.children ?? [];
  }
	
  /**
   * Converte a instância de CustomContent em um objeto
   * @param deep Indica a conversão de todos os itens internos recursivamente
   * @returns Objeto correspondente à estrutura de CustomContent
   */
  public toObject<T = object>(deep = false): T {
	  const result: any = {};
	
	  if (deep) {
	    result[this.key] = {
	      value: this.value,
	      children: this.children?.map(child => child.toObject(true)) || []
	    };
	  } else {
	    if (this.children && this.children.length > 0) {
	      for (const child of this.children) {
	        result[child.key] = child.value || '';
	      }
	    } else {
	      result[this.key] = this.value || '';
	    }
	  }
	
	  return result as T;
  }

}
