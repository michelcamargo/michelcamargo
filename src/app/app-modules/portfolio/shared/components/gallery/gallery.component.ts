import { Component, OnInit } from '@angular/core';
// import {CustomContent} from "../../../../view-template/shared/types/content";
import {CareerExperience} from "../../types/career";
import {PortfolioService} from "../../services/portfolio.service";
// import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  // providers: [ PortfolioService ]
  host: {
    class: 'w-100'
  }
})
export class GalleryComponent implements OnInit {

  public career: Array<CareerExperience> = [];

  constructor(private readonly portfolioService: PortfolioService) {

  }

  ngOnInit(): void {
    this.portfolioService.fetchAllCareer().subscribe({
      next: (careerItems) => {
        this.career = careerItems;
        console.log(this.career);
      },
      error: (error) => {
        console.log("[fetchAllCareer] error", error)
      }
    })
  }

}
