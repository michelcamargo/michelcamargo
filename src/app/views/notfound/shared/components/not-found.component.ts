import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  private path: string | undefined;

  constructor(private route: ActivatedRoute) { }
  // constructor() { }

  ngOnInit(): void {
    console.log("[NotFoundComponent] Init");
    this.route.data.pipe(take(1))
      .subscribe((data) => {
        this.path = data['path'];
      });
  }

}
