import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from "../shared/components/header/header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { HomeViewComponent } from '../shared/components/home-view/home-view.component';
import { AuthViewComponent } from '../shared/components/auth-view/auth-view.component';
import { NotFoundViewComponent } from "../shared/components/not-found-view/not-found-view.component";
import { WorkViewComponent } from "../shared/components/work-view/work-view.component";
import { AboutViewComponent } from "../shared/components/about-view/about-view.component";

import { TemplateService } from "../shared/services/template.service";
import { ContactComponent} from "../../customers/shared/components/contact/contact.component";
import { FormsModule } from "@angular/forms";
import { AuthenticationModule } from "../../authentication/private/authentication/authentication.module";
import { CustomerModule } from "../../customers/private/customer.module";
import { PortfolioModule } from "../../portfolio/private/portfolio/portfolio.module";
import { HeroModule } from "../../hero/private/hero.module";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeViewComponent,
    AuthViewComponent,
    NotFoundViewComponent,
    WorkViewComponent,
    AboutViewComponent,
    // misc components
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationModule,
    CustomerModule,
    PortfolioModule,
    HeroModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeViewComponent,
    AuthViewComponent,
    NotFoundViewComponent,
    WorkViewComponent,
    AboutViewComponent
  ],
  providers: [
    TemplateService
  ]
})
export class ViewTemplateModule { }
