import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.scss'],
  host: {
    class: 'view'
  }
})
export class AuthViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
