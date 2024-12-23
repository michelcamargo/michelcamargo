import { CustomContentType } from "@/lib/content";

export default class CustomContent {
  
  /**
   * Chave/Índice de conteúdo
   */
  private _key: string;
  
  /**
   * Conteúdo diretamente ligado à chave
   */
  private _value?: string;
  
  /**
   * Agrupamento interno
   */
  private _children?: Array<CustomContent>;
  
  /**
   * Detalhes adicionais
   */
  private _details: string;
  
  /**
   * Data de criação
   */
  private _created_at: Date;
  
  /**
   * Data de atualização
   */
  private _updated_at: Date;
  
  /**
   * Construtor
   * @param data Conteúdo a definir na estrutura
   */
  constructor(data: CustomContentType) {
  	this._key = data?.key ?? 'unknown';
  	this._value = data?.value ?? undefined;
  	this._children = data?.children?.length ? data?.children.map(item => CustomContent.create(item)) : [];
  	this._details = data?.details ?? '';
  	this._created_at = data?.created_at ? new Date(data?.created_at) : new Date();
  	this._updated_at = data?.updated_at ? new Date(data?.updated_at) : new Date();
  }
  
  /**
   * Getter para a chave
   */
  public get key(): string {
  	return this._key;
  }
  
  /**
   * Setter para a chave
   * @param key Nova chave
   */
  public set key(key: string) {
  	this._key = key;
  }
  
  /**
   * Getter para o valor
   */
  public get value(): string | undefined {
  	return this._value;
  }
  
  /**
   * Setter para o valor
   * @param value Novo valor
   */
  public set value(value: string | undefined) {
  	this._value = value;
  }
  
  /**
   * Getter para os filhos
   */
  public get children(): Array<CustomContent> | undefined {
  	return this._children;
  }
  
  /**
   * Setter para os filhos
   * @param children Novos filhos
   */
  public set children(children: Array<CustomContent> | undefined) {
  	this._children = children;
  }
  
  /**
   * Getter para os detalhes
   */
  public get details(): string {
  	return this._details;
  }
  
  /**
   * Setter para os detalhes
   * @param details Novos detalhes
   */
  public set details(details: string) {
  	this._details = details;
  }
  
  /**
   * Getter para a data de criação
   */
  public get createdAt(): Date {
  	return this._created_at;
  }
  
  /**
   * Setter para a data de criação
   * @param createdAt Nova data de criação
   */
  public set createdAt(createdAt: Date) {
  	this._created_at = createdAt;
  }
  
  /**
   * Getter para a data de atualização
   */
  public get updatedAt(): Date {
  	return this._updated_at;
  }
  
  /**
   * Setter para a data de atualização
   * @param updatedAt Nova data de atualização
   */
  public set updatedAt(updatedAt: Date) {
  	this._updated_at = updatedAt;
  }
  
  /**
   * Busca um CustomContent correspondente à chave fornecida, considerando a recursividade da propriedade children.
   * @param key A chave a ser buscada
   * @returns O CustomContent correspondente ou undefined
   */
  public get(key?: string): CustomContent | undefined {
  	if (!key) {
  		return this;
  	}

  	const keyFragments = key.split(' ');

  	// Função auxiliar para verificar se um key faz match com as partes
  	const matches = (contentKey: string, searchParts: string[]) => {
  		return searchParts.every(part => {
  			// Verifica se a parte atual é encontrada na chave
  			return contentKey.includes(part);
  		});
  	};

  	// Verificação na própria instância
  	if (matches(this._key, keyFragments)) {
  		return this;
  	}

  	if (this._children) {
  		for (const child of this._children) {
  			const result = child.get(key);
  			if (result) {
  				return result;
  			}
  		}
  	}

  	return undefined;
  }

  /**
   * Converte um objeto CustomContentType para CustomContent.
   * @returns O CustomContent correspondente ou undefined
   */
  public static create(customContentData: CustomContentType) {
  	return new CustomContent(customContentData);
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
  	/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  	const result: Record<string, any> = {};
    
  	this._key.replaceAll('-', '_');
  	this._key.replaceAll(' ', '_');
		
  	if (deep) {
  		result[this._key] = {
  			value: this._value,
  			children: this._children?.map(child => child.toObject(true)) || []
  		};
  	} else {
  		if (this._children && this._children.length > 0) {
  			for (const child of this._children) {
  				result[child.key] = child.value || '';
  			}
  		} else {
  			result[this._key] = this._value || '';
  		}
  	}
    
  	return result as T;
  }
  
  /**
   * Converte CustomContent ou CustomContentType em um objeto de formato específico
   * @param content Instância de CustomContent ou CustomContentType
   * @returns Objeto com chave, valor e filhos no formato definido
   */
  public static toCustomContentObject<T extends CustomContent | CustomContentType>(content: T): Record<string, unknown> {
  	const result: Record<string, unknown> = {
  		key: content instanceof CustomContent ? content.key : content.key,
  		value: content instanceof CustomContent ? content.value : content.value,
  		children: []
  	};

  	// Se o conteúdo possuir filhos, processa recursivamente
  	const children = content instanceof CustomContent ? content.children : content.children;
  	if (children && children.length > 0) {
  		result.children = children.map(child => CustomContent.toCustomContentObject(child));
  	}

  	return result;
  }

  /**
   * Verifica se um valor do tipo unknown é um objeto
   * @param value Valor a ser verificado
   * @returns true se for um objeto, false caso contrário
   */
  public static isObject(value: unknown): value is Record<string, unknown> {
  	return typeof value === 'object' && value !== null && !Array.isArray(value);
  }

}
