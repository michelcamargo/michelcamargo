import { Component, OnInit } from '@angular/core';
import { HeaderProps} from "../../types";
import headerData from "../../header.mock.json";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerContent: HeaderProps;

  constructor() {
    this.headerContent = JSON.parse(JSON.stringify(headerData));
  }

  ngOnInit(): void {
    // this.headerContent = headerData;
  }

}
