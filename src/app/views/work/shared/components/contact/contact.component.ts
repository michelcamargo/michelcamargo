import { Component, OnInit } from '@angular/core';
import { User } from "../../../../../types/user";
import { userModel } from "../../../../../models/user.model";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  /**
   * Informações do usuário (formulário)
   */
  public userFormData: User;

  /**
   * Serviço responsável pelo formulário de usuários
   * @private
   */
  private userService: UserService;

  constructor(userFormService: UserService) {
    this.userFormData = userModel(0);
    this.userService = userFormService;
  }

  ngOnInit(): void {
  }

  /**
   * Trata informações do formulário para envio
   */
  public submitFormHandler() {
    this.userService.submitForm(this.userFormData);
  }

  /**
   * Busca usuários
   */
  public getAllCustomers(): Array<User> {
    let userArray: Array<User> = [];

    this.userService.fetchAllUsers().subscribe({
      next: (users: Array<User>) => {
        userArray = users;
        console.log(userArray);
      },
      error: (error: any) => {
        console.log(error);
      }
    });

    return userArray
  }

  /**
   * Busca usuário por ID
   * @param id usuário a buscar
   */
  public getCustomerById(id: number): User | null {
    let matchedUser: User | null = null;

    this.userService.fetchUserById(id).subscribe(
      (user: User) => {
        console.log("get users:", user, "type:", typeof user);
        matchedUser = user;
      },
      (error) => {
        console.log(error);
      }
    );

    return matchedUser
  }
}
