import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from "../../shared/components/gallery/gallery.component";
import {PortfolioService} from "../../shared/services/portfolio.service";



@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GalleryComponent
  ],
  providers: [
    PortfolioService
  ]
})
export class PortfolioModule { }
