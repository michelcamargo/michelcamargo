import { Component, OnInit } from '@angular/core';
import type { Customer } from "src/app/app-modules/customers/shared/types/customer";
import { CustomerService } from "src/app/app-modules/customers/shared/services/customer.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  /**
   * Lista de possíveis clientes
   */
  public customerList: Array<Customer>;

  public customerFormData: Customer;

  constructor(private customerService: CustomerService) {
    this.customerList = [];

    this.customerFormData = {
      firstName: '',
      lastName: '',
      email: '',
    }
  }

  ngOnInit(): void {
  }

  /**
   * Trata informações do formulário para envio
   */
  public submitFormHandler() {
    this.customerService.submitCustomer(this.customerFormData);
  }

  // /**
  //  * Busca usuário por ID
  //  * @param id usuário a buscar
  //  */
  // public getCustomerById(id: number) {
  //   this.customerService.fetchCustomerById(id).subscribe({
  //     next: (customer) => {
  //       console.log("get users:", customer, "type:", typeof customer);
  //       customer && this.customerList.push(customer);
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     }
  //   });
  // }
  //
  // public getCustomerByAlias(alias: string) {
  //   this.customerService.fetchCustomerByAlias(alias).subscribe({
  //     next: (customer) => {
  //       console.log('[getCustomerByAlias]', customer);
  //       customer && this.customerList.push(<Customer>customer);
  //     },
  //     error: (error) => {
  //       console.log(console.log('[getCustomerByAlias]' ,error));
  //     }
  //   });
  // }

  // /**
  //  * Busca clientes
  //  */
  // public getAllCustomers() {
  //   this.customerService.fetchAllCustomers().subscribe({
  //     next: (customers) => {
  //       console.log('[FetchAllCustomers]', customers);
  //       // customers && (this.customerList = customers);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });
  // }

}
