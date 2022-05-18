import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { HomeViewComponent } from "./views/home/home-view.component";
import { NotFoundComponent } from './views/notfound/not-found.component';
import { WorkViewComponent } from "./views/work/work-view.component";
import { AuthComponent } from "./app-modules/authentication/shared/component/auth/auth.component";

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkViewComponent },
  { path: 'login', component: AuthComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
