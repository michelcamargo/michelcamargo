import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/shared/components/home.component';
import { NotFoundComponent } from './views/notfound/shared/components/not-found.component';
import { AboutComponent } from './views/about/about.component';
// import { HeaderComponent } from './app-modules/UIComponents/shared/components/header/header.component';
// import { FooterComponent } from './app-modules/UIComponents/shared/components/footer/footer.component';
import { ViewTemplateModule } from "./app-modules/view-template/shared/view-template.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
