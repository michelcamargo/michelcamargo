import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";
import { Observable } from "rxjs";
import { CustomContent } from "../types/content";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class TemplateService {
  /**
   * Cabeçalho para requisições
   * @private
   */
  private readonly httpHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With, Origin, Content-Type, Accept",
  };

  /**
   * Angular HTTP Requests
   * @injected
   */
  private readonly httpClient: HttpClient;

  /**
   * URL do recurso
   */
  private readonly resourceUrl: string;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.resourceUrl = `${environment.resourceUrl}`;
  }

  /**
   * Busca agrupamento de links
   * @param groupName
   */
  public fetchContentGroup(groupName: string): Observable<Array<CustomContent>> {
    let url: string = `${this.resourceUrl}/content/group/${groupName}`;

    return this.httpClient.get<Array<CustomContent>>(url, {headers: this.httpHeaders})
  }

  /**
   * Busca links
   * @param title
   */
  public fetchContentByTitle(title: string): Observable<CustomContent> {
    let url: string = `${this.resourceUrl}/content/${title}`;

    return this.httpClient.get<CustomContent>(url, {headers: this.httpHeaders})
  }
}
