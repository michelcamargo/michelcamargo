import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../../services/customer.service";
import { Customer } from "../../types/customer";

@Component({
  selector: 'app-customers-panel',
  templateUrl: './customers-panel.component.html',
  styleUrls: ['./customers-panel.component.scss']
})
export class CustomersPanelComponent implements OnInit {

  public customerList: Array<Customer> = [];

  public customerService: CustomerService;

  constructor(customerService: CustomerService) {
    this.customerService = customerService;

  }


  ngOnInit(): void {
    this.setCustomerList();
  }

  public setCustomerList(): void {
    this.customerService.fetchAllCustomers().subscribe({
      next: (customers) => {
        this.customerList = customers;
      },
      error: (error) => {
        alert(error);
      },
      complete: () => {
        // console.log('customers fetched');
      }
    });
  }
}
