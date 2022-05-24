import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from "../../shared/components/gallery/gallery.component";
import { PortfolioService } from "../../shared/services/portfolio.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    GalleryComponent
  ],
  providers: [
    {
      provide: PortfolioService,
      useClass: PortfolioService,
      // useFactory: PortfolioServiceProviderFactory,
      deps: [HttpClient]
    }
  ]
})
export class PortfolioModule { }
