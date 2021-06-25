import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../services/github-service.service';
import { formatDate } from '@angular/common';
import { GitHubDataDto } from '../Dto/GitHubDataDto';

@Component({
  selector: 'app-github-trending',
  templateUrl: './github-trending.component.html',
  styleUrls: ['./github-trending.component.css'],
})
export class GithubTrendingComponent implements OnInit {
  constructor(private _Service: GithubServiceService) {}
  rows: GitHubDataDto[] = [];
  date: Date = new Date('2017-10-22');
  page: number = 1;
  newDate!: string;
  isFullListDisplayed: boolean = false;
  ngOnInit(): void {
    this.newDate = formatDate(this.date, 'yyyy-MM-dd', 'en');
    this.List();
  }

  List() {
    this._Service.ListTrending(this.newDate, this.page).subscribe((res) => {
      console.log(res);

      this.rows = res.items;
      this.rows.map((el) => {
        console.log(el.owner.login);
      });
    });
  }

  onScrollPagination(page: number) {
    this._Service.ListTrending(this.newDate, page).subscribe(
      (res) => {
        res.items.map((el) => {
          this.rows.push(el);
        });
      },
      (err) => {
        this.isFullListDisplayed = true;
      }
    );
  }

  onScroll() {
    console.log('scrolled!!');
    let page = this.page++;
    this.onScrollPagination(page);
  }
}
