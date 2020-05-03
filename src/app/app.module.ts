import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { PostnewsComponent } from './postnews/postnews.component';
import { NewsComponent } from './news/news.component';
import { InMemoryLoginDataService } from './core/service/newsInit';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PrecautionsComponent,
    UserComponent,
    PostnewsComponent,
    NewsComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryLoginDataService, { dataEncapsulation: false,passThruUnknownUrl: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
