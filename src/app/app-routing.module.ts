import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from "./views/home/shared/components/home.component";
import { NotFoundComponent } from './views/notfound/shared/components/not-found.component';
import { PathResolverService } from "./app-modules/path-resolver/shared/services/path-resolver.service";
import { AuthenticationComponent } from "./views/login/shared/components/authentication/authentication.component";
import { WorkViewComponent } from "./views/work/shared/components/work-view.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkViewComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404',
    resolve: {
      path: PathResolverService
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
