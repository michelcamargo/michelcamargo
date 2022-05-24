import { Component, OnInit } from '@angular/core';
import {CustomContent} from "../../../../view-template/shared/types/content";
// import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  // providers: [ PortfolioService ]
})
export class GalleryComponent implements OnInit {

  public workGallery: Array<CustomContent> = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.workGallery);
  }

}
