import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/shared/components/home.component';
import { NotFoundComponent } from './views/notfound/not-found.component';
import { AboutComponent } from './views/about/about.component';
import { ViewTemplateModule } from "./app-modules/view-template/private/view-template.module";
import { HttpClientModule } from "@angular/common/http";
import { WorkViewComponent } from './views/work/work-view.component';
import { CustomerModule } from "./app-modules/customers/private/customer.module";
import { PortfolioModule } from "./app-modules/portfolio/private/portfolio/portfolio.module";
import {AuthenticationModule} from "./app-modules/authentication/private/authentication/authentication.module";
import { AuthViewComponent } from './views/auth/auth-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
