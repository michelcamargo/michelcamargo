import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundViewComponent } from "./app-modules/view-template/shared/components/not-found-view/not-found-view.component";
import { AboutViewComponent } from "./app-modules/view-template/shared/components/about-view/about-view.component";
import { HomeViewComponent } from "./app-modules/view-template/shared/components/home-view/home-view.component";
import { WorkViewComponent } from "./app-modules/view-template/shared/components/work-view/work-view.component";
import { AuthViewComponent } from "./app-modules/view-template/shared/components/auth-view/auth-view.component";

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'about', component: AboutViewComponent },
  { path: 'work', component: WorkViewComponent },
  { path: 'login', component: AuthViewComponent },
  { path: '404', component: NotFoundViewComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
