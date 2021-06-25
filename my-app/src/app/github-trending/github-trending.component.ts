import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../services/github-service.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-github-trending',
  templateUrl: './github-trending.component.html',
  styleUrls: ['./github-trending.component.css'],
})
export class GithubTrendingComponent implements OnInit {
  constructor(private _Service: GithubServiceService) {}
  img: any;
  rows: any;
  date: Date = new Date('2017-10-22');
  page: number = 1;
  newDate!: string;
  ngOnInit(): void {
    this.newDate = formatDate(this.date, 'yyyy-MM-dd', 'en');
    this.List();
  }

  List() {
    this._Service.ListTrending(this.newDate, this.page).subscribe((res) => {
      console.log(res);
      this.img = res.items[0].owner.avatar_url;
      console.log(this.img);
      this.rows = res.items;
    });
  }
}
