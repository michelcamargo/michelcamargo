import { Component, OnInit } from '@angular/core';
import {TemplateService} from "../../../../view-template/shared/services/template.service";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  /**
   * Indicador de carregamento
   */
  public isLoading: boolean;

  /**
   * Indicador de erros
   */
  public hasError: boolean;

  /**
   * Dados de apresentação
   */
  public presentation: {
    headtitle?: string,
    subtitle?: string,
    description?: string
  }

  constructor(private readonly templateService: TemplateService) {
    this.isLoading = false;
    this.hasError = false;
    this.presentation = {};
  }

  ngOnInit(): void {
    this.setHeroPresentation();
  }

  /**
   * Define links da apresentação principal
   * @private
   */
  private setHeroPresentation(): void {
    this.isLoading = true;

    this.templateService.fetchContentByTitle('hero-title').subscribe({
      next: (customContent) => {
        this.presentation.headtitle = customContent.text;
      },
      error: (error) => {
        console.log('[hero-title] error:', error);
        this.isLoading = false;
        this.hasError = true;
      },
      complete: () => {
        this.isLoading = false;
      }
    })

    this.templateService.fetchContentByTitle('hero-subtitle').subscribe({
      next: (customContent) => {
        this.presentation.subtitle = customContent.text;
      },
      error: (error) => {
        console.log('[hero-title] error:', error);
        this.isLoading = false;
        this.hasError = true;
      },
      complete: () => {
        this.isLoading = false;
      }
    })

    this.templateService.fetchContentByTitle('hero-description').subscribe({
      next: (customContent) => {
        this.presentation.description = customContent.text;
      },
      error: (error) => {
        console.log('[hero-title] error:', error);
        this.isLoading = false;
        this.hasError = true;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

}
