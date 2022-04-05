import { Component, OnInit } from '@angular/core';
import footerData from "../../footer.mock.json";
import { FooterMenu } from "../../types";

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
    footerData.forEach((item, key) => {
      this.footerContent.push(JSON.parse(JSON.stringify(item)));
    });
  }

}
