import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../../services/template.service';
import { CustomContent } from "../../types/content";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footerContent: Array<Array<CustomContent>>;

  constructor(public readonly templateService: TemplateService) {
    this.footerContent = []
  }

  ngOnInit(): void {
    this.setFooterContent(2);
  }

  /**
   * Define itens do footer
   * @param columns
   */
  public setFooterContent(columns: number) {
    for(let i = 0; i < columns; i++) {
      this.templateService.fetchContentGroup(`footer_${i}`).subscribe({
        next: (content) => {
          this.footerContent.push(content);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

}
