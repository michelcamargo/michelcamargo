import { Component, OnInit } from '@angular/core';
import { CustomContent } from "../../types/content";
import {TemplateService} from "../../services/template.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /**
   * Conteúdo do header
   */
  public headerNavigation: Array<CustomContent> = [];

  /**
   * Botões do header
   */
  public headerButtons: Array<CustomContent> = [];

  constructor(private readonly templateService: TemplateService) {
  }

  ngOnInit(): void {
    this.setHeaderContent();
  }

  /**
   * Define conteúdo do header
   */
  public setHeaderContent() {
    this.templateService.fetchLinksByGroupName('header_nav').subscribe({
      next: (content) => {
        this.headerNavigation = content;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.templateService.fetchLinksByGroupName('header_buttons').subscribe({
      next: (content) => {
        this.headerButtons = content;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
