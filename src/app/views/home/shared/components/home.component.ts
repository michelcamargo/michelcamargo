import { Component, OnInit } from '@angular/core';
import {UserRegisterService} from "../../../../app-modules/user-registry/shared/services/user-register.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private readonly userRegisterService: UserRegisterService;

  public users?: Array<any>;

  constructor(userRegisterService: UserRegisterService) {
    this.userRegisterService = userRegisterService;
  }

  ngOnInit(): void {
    console.log("[HomeComponent] Init")
  }

  /**
   * Busca todos os usuários
   */
  public getUsers() {
    this.userRegisterService.fetchAllUsers().subscribe(
      (users: Array<any>) => {
        console.log(users);
        this.users = users;
      },
      (error) => {
        console.log("[HomeComponent] Error: ", error);
      }
    );
  }

  /**
   * Decrementar quantidade do produto no minicart.
   * @param minicartItem
   */
  // public changeQuantity(event: any, minicartItem: MinicartItem) {
  //
  //   minicartItem.selectedQuantity = Number(event.target.value);
  //   console.log(event.target.value)
  //   this.minicartService.changeProductQuantity(minicartItem);
  //   this.minicartItems = this.minicartService.getMinicartItems();
  // }

}
