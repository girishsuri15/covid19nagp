import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  constructor() { }
  authenticateUser(username, password){
    if(username ==="admin@gmail.com" && password=="Admin@12345"){
      sessionStorage.setItem('authenticatedUser' , username);
      return true
    }
    else{
      return false
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logOut(){
    sessionStorage.removeItem('authenticatedUser');
  }
} 