import { Component, OnInit } from '@angular/core';
import { CustomContent } from "../../../../view-template/shared/types/content";
import {TemplateService} from "../../../../view-template/shared/services/template.service";

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {
  /**
   * Lista de links
   */
  public socialLinks: Array<CustomContent> = [];

  /**
   * Indicador de erro
   */
  public hasError: boolean;

  /**
   * Indicador de carregamento
   */
  public isLoading: boolean;

  constructor(
    private readonly templateService: TemplateService
  ) {
    this.isLoading = false;
    this.hasError = false;
  }

  ngOnInit(): void {
    this.setSocialLinks();
  }

  /**
   * Define links do painel social
   * @private
   */
  private setSocialLinks(): void {
    this.isLoading = true;
    this.templateService.fetchContentGroup('social_links').subscribe({
      next: (customContent) => {
        this.socialLinks = customContent;
        console.log(this.socialLinks);
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
        this.hasError = true;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

}
