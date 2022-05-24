import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { ViewTemplateModule } from "./app-modules/view-template/private/view-template.module";
import { CustomerModule } from "./app-modules/customers/private/customer.module";
import { PortfolioModule } from "./app-modules/portfolio/private/portfolio/portfolio.module";
import { AuthenticationModule } from "./app-modules/authentication/private/authentication/authentication.module";

import { AppComponent } from './app.component';
import {TemplateComponent} from "./app-modules/view-template/shared/components/template.component";

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ViewTemplateModule,
    // CustomerModule,
    // PortfolioModule,
    // AuthenticationModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "pt-BR"},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
