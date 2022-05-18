import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomersPanelComponent} from "../shared/components/customers-panel/customers-panel.component";



@NgModule({
  declarations: [
    CustomersPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomersPanelComponent
  ]
})
export class CustomerModule { }
