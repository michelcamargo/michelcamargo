import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-view',
  templateUrl: './work-view.component.html',
  styleUrls: ['./work-view.component.scss'],
  host: {
    class: 'view'
  }
})
export class WorkViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
