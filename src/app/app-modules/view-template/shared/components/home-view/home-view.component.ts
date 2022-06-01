import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
  host: {
    class: 'view'
  }
})
export class HomeViewComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {}
}
