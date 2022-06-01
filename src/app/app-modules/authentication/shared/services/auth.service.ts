import { Injectable } from '@angular/core';
import {AuthenticationModule} from "../../private/authentication/authentication.module";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../types/user";
import {AuthData} from "../types/auth";

@Injectable({
  // providedIn: AuthenticationModule
  providedIn: 'root'
})

export class AuthService {

  /**
   * Serviço responsãvel pelas requisições HTTP.
   * @injected
   */
  private readonly httpClient: HttpClient;

  /**
   * URL do recurso
   */
  private readonly resourceUrl: string;

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
   * Construtor
   * @param httpClient
   */
  constructor(httpClient: HttpClient) {
    // Injectables
    this.httpClient = httpClient;
    this.resourceUrl = `${environment.resourceUrl}`;
  }

  /**
   * Busca todos os produtos disponíveis
   */
  public fetchAllUsers(): Observable<Array<User>> {
    let url: string = `${this.resourceUrl}/users`;

    return this.httpClient.get<Array<User>>(url, {headers: this.httpHeaders})
  }

  /**
   * Busca produtos por Id do produto
   * @param userId
   */
  public fetchUserById(userId: number): Observable<User> {
    let url: string = `${this.resourceUrl}/users:${userId}`;

    return this.httpClient.get<User>(url, {headers: this.httpHeaders});
  }

  /**
   * Envia formulário para o servidor
   * @param authData
   */
  public authenticate(authData: AuthData): void {
    let url: string = `${environment.resourceUrl}/login`;

    const body = JSON.stringify(authData)
    // console.log("[auth] data:", body);

    this.httpClient.post<AuthData>(url, body, {headers: this.httpHeaders}).subscribe(
      {
        next: (authData: AuthData) => {
          // console.log("user >", authData);
        },
        error: (error: any) => {
          console.log("error >", error);
        }
      }
    )
  }
}
