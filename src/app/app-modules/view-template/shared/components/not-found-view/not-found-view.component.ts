import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs";

@Component({
  selector: 'app-not-found-view',
  templateUrl: './not-found-view.component.html',
  styleUrls: ['./not-found-view.component.scss'],
  host: {
    class: 'view'
  }
})
export class NotFoundViewComponent implements OnInit {

  public path?: string;

  constructor(private readonly route: ActivatedRoute) {
    this.route.data.pipe(take(1))
      .subscribe((data) => {
        this.path = data['path'];
      });
  }

  ngOnInit(): void {
  }

}
