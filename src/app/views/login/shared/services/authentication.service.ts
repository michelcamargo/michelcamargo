import { Injectable } from '@angular/core';
import {User} from "../../../../types/user";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthData} from "../../../../types/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  /**
   * Cliente HTTP Angular
   * @private
   */
  private httpClient: HttpClient;

  /**
   * Cabeçalho para requisições
   * @private
   */
  private readonly httpHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json"
  };

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }


}
