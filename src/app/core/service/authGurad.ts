import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './loginService';

@Injectable({providedIn: 'root'})
export class AuthGaurdService implements CanActivate {

    constructor(private loginService: LoginService,private router:Router) { }

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            if(this.loginService.isUserLoggedIn())
             return true;
             else{
                this.router.navigate(['/dashboard']);
                return false;
             }
            
        
            
    }
}