import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomersPanelComponent} from "../shared/components/customers-panel/customers-panel.component";
import {CustomerService} from "../shared/services/customer.service";



@NgModule({
  declarations: [
    CustomersPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomersPanelComponent
  ],
  providers: [
    CustomerService
  ]
})
export class CustomerModule { }
