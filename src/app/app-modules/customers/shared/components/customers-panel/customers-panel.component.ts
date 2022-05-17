import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../../services/customer.service";

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
    this.customerService.fetchCustomers().subscribe({
      next: (customers) => {
        this.customerList = customers;
      },
      error: (error) => {
        alert(error);
      },
      complete: () => {
        console.log('customers fetched');
      }
    });
  }
}
