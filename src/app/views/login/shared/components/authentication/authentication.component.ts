import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/types/auth';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  /**
   * Entrada de usuário: Email
   */
  public inputEmail: string;

  /**
   * Entrada de usuário: Senha
   */
  public inputPassword: string;

  /**
   * Serviço de autenticação
   * @private
   */
  private authenticationService: AuthenticationService;

  constructor(authenticationSevice: AuthenticationService) {
    this.authenticationService = authenticationSevice;
    this.inputEmail = '';
    this.inputPassword = '';
  }

  ngOnInit(): void {
  }

  /**
   * Método para autenticar o usuário
   */
  public actionLogin() {
    if(this.validateAuthForm()) {
      const authData: AuthData = {
        email: this.inputEmail,
        password: this.inputPassword
      };


      this.authenticationService.authenticate(authData);
    }
  }

  /**
   * Método para validar o formulário de autenticação
   * @private
   */
  private validateAuthForm() {
    try {
      if (!this.inputEmail || this.inputEmail === '') {
        throw new Error('Insira o email');
      }

      if (!this.inputPassword || this.inputPassword === '') {
        throw new Error('Insira a senha');
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

}
