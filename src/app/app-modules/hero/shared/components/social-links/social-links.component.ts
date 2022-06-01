import { Component, OnInit } from '@angular/core';
import { CustomContent } from "../../../../view-template/shared/types/content";
import { TemplateService } from "../../../../view-template/shared/services/template.service";

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

  /**
   * Largura dos ícones
   */
  public socialIconSize: string;

  constructor(
    private readonly templateService: TemplateService
  ) {
    this.isLoading = false;
    this.hasError = false;
    this.socialIconSize = '32';
  }

  ngOnInit(): void {
    this.setSocialLinks(this.socialIconSize);
  }

  /**
   * Define links do painel social
   * @private
   *
   */
  private setSocialLinks(width: string): void {
    this.socialIconSize = width;
    this.isLoading = true;
    this.templateService.fetchContentGroup('social_links').subscribe({
      next: (customContent) => {
        this.socialLinks = customContent;
      },
      error: (error) => {
        console.log('[setSocialLinks] error:', error);
        this.isLoading = false;
        this.hasError = true;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

}
