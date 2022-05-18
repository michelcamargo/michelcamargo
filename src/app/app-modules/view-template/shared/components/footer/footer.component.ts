import { Component, OnInit } from '@angular/core';
import { Asset, SContent } from "../../types";

type FooterMenu = [
  {
    heading: string,
    items: Array<SContent>
  }
]

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footerContent: Array<FooterMenu>;

  constructor() {
    this.footerContent = [];
  }

  ngOnInit(): void {

  }

}
