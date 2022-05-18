import { Component, OnInit } from '@angular/core';
import { SContent } from "../../types/content";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /**
   * Conteúdo do header
   */
  public headerContent: Array<SContent> = [];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.headerContent);
  }

}
