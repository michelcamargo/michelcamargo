import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { environment } from "../../../../../environments/environment";
import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";
import {User} from "../../../../types/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * Serviço para realizar chamadas HTTP do Angular.
   * @injected
   */
  private readonly httpClient: HttpClient;

  /**
   * Cabeçalho para requisições
   * @private
   */
  private readonly httpHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json"
  };

  constructor(httpClient: HttpClient) {
    // Injectables
    this.httpClient = httpClient;
  }

  /**
   * Envia formulário para o servidor
   * @param formData
   */
  public submitForm(formData: User): void {
    let url: string = `${environment.resourceUrl}/users`;

    const body = JSON.stringify(formData)
    console.log("body >", body);

    this.httpClient.post<User>(url, body, {headers: this.httpHeaders}).subscribe(
      data => {
        console.log("data >", data);
      },
      error => {
        console.log("error >", error);
      }
    )
  }

  /**
   * Busca todos os usuários cadastrados
   */
  public fetchAllUsers(): Observable<Array<User>> {
    let url: string = `${environment.resourceUrl}/users`;

    return this.httpClient.get<Array<User>>(url, {headers: this.httpHeaders});

    // console.log("response >", response.subscribe(data => {
    //   console.log("data >", data);
    // }));

    // return response.body;


    // return (this.httpClient.get<User[]>(url, {headers: this.httpHeaders})
    //   .pipe(map(response => {
    //     console.log("response >", response);
    //     return response;
    //   })));
  }

  /**
   * Busca usuário por ID
   */
  public fetchUserById(userId: number) {
    let url: string = `${environment.resourceUrl}/users/${userId}`;

    return this.httpClient.get<User>(url, {headers: this.httpHeaders});
  }

}
