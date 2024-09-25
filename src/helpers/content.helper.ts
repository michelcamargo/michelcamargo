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
  	const { key, value, children, details, created_at, updated_at } = data;
  	this._key = key ?? '';
  	this._value = value ?? undefined;
  	this._children = children?.length ? children.map(item => new CustomContent(item)) : [];
  	this._details = details ?? '';
  	this._created_at = created_at ? new Date(created_at) : new Date();
  	this._updated_at = updated_at ? new Date(updated_at) : new Date();
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
  	if (!key || this._key === key) {
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

}
