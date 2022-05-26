import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from "../shared/components/presentation/presentation.component";
import { SocialLinksComponent } from '../shared/components/social-links/social-links.component';



@NgModule({
  declarations: [
    PresentationComponent,
    SocialLinksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PresentationComponent,
    SocialLinksComponent
  ]
})
export class HeroModule { }
