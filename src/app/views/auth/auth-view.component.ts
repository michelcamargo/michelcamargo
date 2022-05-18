import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/types/auth';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.scss']
})
export class AuthViewComponent implements OnInit {
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
