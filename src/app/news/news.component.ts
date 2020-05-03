import { Component, OnInit } from '@angular/core';
import { NewsDetailService } from '../core/service/news';
import { Inews } from '../core/model/Inews';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 NewDetail: Inews [];
  constructor(private newsDetail:NewsDetailService) { }

  ngOnInit(): void {
    this.fetchNewsData();
  }
  fetchNewsData(){
    this.newsDetail.getNewsDetails().subscribe(
      res => { console.log(res)
        this.NewDetail=res;
        console.log(this.NewDetail)
      })

  }
}
