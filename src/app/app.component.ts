import { Component } from '@angular/core';
import { LoginService } from './core/service/loginService';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid';
  constructor(private loginService:LoginService,private router:Router) { }
  ngOnInit(): void {
    
   }
 public isLoggedIn(){
  return this.loginService.isUserLoggedIn();
  }
  public logout(){
    this.loginService.logOut();
    this.router.navigateByUrl("dashboard");

  }
}
