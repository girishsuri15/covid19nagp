import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { NewsDetailService } from '../core/service/news';
import {Inews } from '../core/model/Inews'
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from '@angular/router';


@Component({
  selector: 'app-postnews',
  templateUrl: './postnews.component.html',
  styleUrls: ['./postnews.component.css']
})
export class PostnewsComponent implements OnInit {
  msg:string;
  userInputError:boolean;
  newsData:Inews;
  constructor(private news:NewsDetailService,private router:Router ) { }

  ngOnInit(): void {
  }
  submit(data:NgForm){
    if(this.vaildateData(data)){
    this.newsData={'id':Math.floor(Math.random() * 100) + 1  ,'link':data.value.link,'title':data.value.title,'description':data.value.description}
    this.news.addNews(this.newsData).subscribe(
      res => {console.log(res); 
        this.router.navigate(['/news']);})
  }
  else{
    this.userInputError=true;
  }
}
  vaildateData(data):boolean{
    if( data.value.title.length>5 && data.value.description.length>10)
    return true;
    else
    return false;

  }
}
