import { Component, OnInit } from '@angular/core';
import {SContent} from "../../../../view-template/shared/types";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public workGallery: Array<SContent> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
