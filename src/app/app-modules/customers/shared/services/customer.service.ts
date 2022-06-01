import { Injectable } from '@angular/core';
import { CustomerModule } from "../../private/customer.module";
import { Observable } from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Customer} from "../types/customer";

@Injectable({
  // providedIn: CustomerModule
  providedIn: 'root'
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

  /**
   * Buscar todos os clientes
   */
  public fetchAllCustomers(): Observable<Array<Customer>> {
    let url: string = `${this.resourceUrl}/customers`;

    return this.httpClient.get<Array<Customer>>(url, {headers: this.httpHeaders}).pipe(
      map(res => {
        // console.log('[fetchAllClients]', res);
        return res;
      })
    );
  }

  /**
   * Enviar formulário (cliente)
   */
  public submitCustomer(customer: Customer): Observable<any> {
    let url: string = `${this.resourceUrl}/customers`;
    const body = JSON.stringify(customer);

    console.log('submitting', body);

    return this.httpClient.post<Customer>(url, body,{headers: this.httpHeaders}).pipe(
      map(res => {
        // console.log('[fetchAllClients]', res);
        return res;
      })
    );
  }

  /**
   * Buscar cliente por ID
   */
  // public fetchCustomerById(id: number): Observable<Customer> {
  //   let url: string = `${this.resourceUrl}/customers/${id}`;
  //
  //   return this.httpClient.get<Customer>(url, {headers: this.httpHeaders})
  // }
  //
  /**
   * Buscar cliente por alias
   */
  // public fetchCustomerByAlias(alias: string): Observable<Customer> {
  //   let url: string = `${this.resourceUrl}/customers/u/${alias}`;
  //
  //   return this.httpClient.get<Customer>(url, {headers: this.httpHeaders})
  // }
}
