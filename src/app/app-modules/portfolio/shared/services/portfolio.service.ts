import { Injectable } from '@angular/core';
import { PortfolioModule } from '../../private/portfolio/portfolio.module';

@Injectable({
  providedIn: PortfolioModule
})
export class PortfolioService {

  constructor() { }
}
