import { Injectable } from '@angular/core';
// import { PortfolioModule } from '../private/portfolio.module';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {CustomContent} from "../../../view-template/shared/types/content";
import {CareerExperience} from "../types/career";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
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
   * URL do recurso
   */
  private readonly resourceUrl: string;

  /**
   * Angular HTTP Requests
   * @injected
   */
  private readonly httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.resourceUrl = `${environment.resourceUrl}`;
  }

  /**
   * Busca agrupamento de itens
   */
  public fetchAllCareer(): Observable<Array<CareerExperience>> {
    let url: string = `${this.resourceUrl}/portfolio`;

    return this.httpClient.get<Array<CareerExperience>>(url, {headers: this.httpHeaders})
  }

}
