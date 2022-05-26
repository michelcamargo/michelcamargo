import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { ViewTemplateModule } from "./app-modules/view-template/private/view-template.module";
import { HeroModule } from "./app-modules/hero/private/hero.module";
import { AppComponent } from './app.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ViewTemplateModule,
    HeroModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "pt-BR"},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
