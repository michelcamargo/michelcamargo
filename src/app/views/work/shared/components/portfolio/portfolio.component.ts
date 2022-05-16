import { Component, OnInit } from '@angular/core';
import {WorkItem} from "../../../../../types/work";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public workGallery?: Array<WorkItem>

  constructor() {}

  ngOnInit(): void {
  }

}
