import { Injectable } from '@angular/core';
import { CustomerModule } from "../../private/customer.module";
import { Observable } from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: CustomerModule
})
export class CustomerService {
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
   * Serviço responsãvel pelas requisições HTTP.
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

  public fetchCustomers(): Observable<Array<Customer>> {
    let url: string = `${this.resourceUrl}/customers`;

    return this.httpClient.get<any>(url, {headers: this.httpHeaders}).pipe(
      map(res => {
        console.log('[fetchAllClients]', res);
        return res;
      })
    );
  }
}
