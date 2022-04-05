import { Component, OnInit } from '@angular/core';

/**
 * Cores do tema
 */
type Color = {
  name: string;
  hex: string;
};

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  public colors: Array<Color>;

  constructor() {

    // buscar cores do em /theme/colors.scss  e colocar no array
    this.colors = [
      { name: 'primary', hex: '#007bff' },
      { name: 'secondary', hex: '#6c757d' },
      { name: 'success', hex: '#28a745' },
      { name: 'danger', hex: '#dc3545' },
      { name: 'warning', hex: '#ffc107' },
      { name: 'info', hex: '#17a2b8' },
      { name: 'light', hex: '#f8f9fa' },
      { name: 'dark', hex: '#343a40' },
    ];

  }

  ngOnInit(): void {
  }

}
