import { Injectable } from '@angular/core';
// import { PortfolioModule } from '../private/portfolio.module';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) {
    this.http = http;
  }
}
