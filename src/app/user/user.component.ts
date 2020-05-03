import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { LoginService } from '../core/service/loginService';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title:string;
  authType:string;
  isSubmittingProcess:boolean=false;
  userInputError:boolean=false;
  isUserExist:boolean=false;
  msg:string;

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
   this.title="Login"
  }
  submit(data:NgForm){
    this.userInputError=false;
    this.isSubmittingProcess=true;
    let isValidated:boolean=this.validation(data.value);
     if(isValidated)
     {
      this.isUserExist=false;
       if(this.loginService.authenticateUser(data.value.email,data.value.password)){
          
          this.router.navigateByUrl("dashboard");
          }
        }
    else
    {
        this.userInputError=true;
        this.msg="UserNotExist"
    }
    this.isSubmittingProcess=false;
  }


      validation(validData:any):boolean{
        let valid:boolean=false;

    if(validData.email.indexOf(".com")>-1 && (validData.password.length>8))
      {
         valid=true;
      }
   else
    {
      valid=false;
      this.userInputError=true;
        this.msg="INput value is incorrect"
    }
    return valid;
  }
}
