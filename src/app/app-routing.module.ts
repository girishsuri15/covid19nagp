import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { UserComponent } from './user/user.component';
import { NewsComponent } from './news/news.component';
import { PostnewsComponent } from './postnews/postnews.component';
import { AuthGaurdService } from './core/service/authGurad';
const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'precautions', component: PrecautionsComponent},
  {path: 'login', component: UserComponent},
  {path: 'news',  component: NewsComponent},
  {path: 'postnews', canActivate: [AuthGaurdService], component: PostnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
