import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateComponent } from "../shared/components/template.component";
import { HeaderComponent } from "../shared/components/header/header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { HomeViewComponent } from '../shared/components/home-view/home-view.component';
import { AuthViewComponent } from '../shared/components/auth-view/auth-view.component';
import { NotFoundViewComponent } from "../shared/components/not-found-view/not-found-view.component";
import { WorkViewComponent } from "../shared/components/work-view/work-view.component";
import { AboutViewComponent } from "../shared/components/about-view/about-view.component";

import { TemplateService } from "../shared/services/template.service";


@NgModule({
  declarations: [
    TemplateComponent,
    HeaderComponent,
    FooterComponent,
    HomeViewComponent,
    AuthViewComponent,
    NotFoundViewComponent,
    WorkViewComponent,
    AboutViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateComponent,
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
