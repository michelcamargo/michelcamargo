import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/shared/components/home.component';
import { NotFoundComponent } from './views/notfound/shared/components/not-found.component';
import { AboutComponent } from './views/about/about.component';
import { ViewTemplateModule } from "./app-modules/view-template/shared/view-template.module";
import { HttpClientModule } from "@angular/common/http";
import { ContactComponent } from './views/presentation/shared/components/contact.component';
import { PortfolioComponent } from './views/presentation/shared/components/portfolio/portfolio/portfolio.component';
import { AuthenticationComponent } from './views/login/shared/components/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ContactComponent,
    PortfolioComponent,
    AuthenticationComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ViewTemplateModule,
        NgbModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
