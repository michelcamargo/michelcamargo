import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  /**
   * Entrada de usuário: Email
   */
  public inputEmail: string;

  /**
   * Entrada de usuário: Senha
   */
  public inputPassword: string;

  /**
   * Construtor
   */
  constructor() {
    this.inputEmail = '';
    this.inputPassword = '';
  }

  ngOnInit(): void {
  }

  /**
   * Método para autenticar o usuário
   */
  public actionLogin(): void {
    // this.validateAuthForm();

    // const authData: AuthData = {
    //   email: this.inputEmail,
    //   password: this.inputPassword
    // };


    // this.authenticationService.authenticate(authData);
  }
}
