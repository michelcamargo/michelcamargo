import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../../customers/shared/services/customer.service";
import {AuthService} from "../../services/auth.service";

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
  constructor(private authService: AuthService) {
    this.inputEmail = '';
    this.inputPassword = '';
  }

  ngOnInit(): void {
  }

  /**
   * Busca usuários
   */
  public getAllUsers() {
    this.authService.fetchAllUsers().subscribe({
      next: (users) => {
        console.log('[FetchAllCustomers]', users);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
