import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from "../shared/component/auth/auth.component";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../shared/services/auth.service";


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthenticationModule { }
