import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { ViewTemplateModule } from "./app-modules/view-template/private/view-template.module";
import { CustomerModule } from "./app-modules/customers/private/customer.module";
import { PortfolioModule } from "./app-modules/portfolio/private/portfolio/portfolio.module";
import { AuthenticationModule } from "./app-modules/authentication/private/authentication/authentication.module";

import { AppComponent } from './app.component';
import { NotFoundComponent } from './views/notfound/not-found.component';
import { AboutComponent } from './views/about/about.component';
import { WorkViewComponent } from './views/work/work-view.component';
import { AuthViewComponent } from './views/auth/auth-view.component';
import { HomeViewComponent } from "./views/home/home-view.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    AboutComponent,
    NotFoundComponent,
    WorkViewComponent,
    AuthViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewTemplateModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CustomerModule,
    PortfolioModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
