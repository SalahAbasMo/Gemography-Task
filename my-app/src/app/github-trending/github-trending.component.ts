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
  // #region Constructors (1)

  constructor(private _Service: GithubServiceService) {}
  // #endregion Constructors (1)

  // #region properties (5)
  //* initialize some geral properties
  rows: GitHubDataDto[] = [];
  date: Date = new Date('2017-10-22');
  page: number = 1;
  count: number = 2;
  newDate!: string;
  isFullListDisplayed: boolean = false;

  // #endregion properties (5)

  ngOnInit(): void {
    //* setting Date and format it
    this.newDate = formatDate(this.date, 'yyyy-MM-dd', 'en');
    //* call list method

    this.List();
  }

  // #region Methods (3)

  //*list method
  List() {
    //*listening to api and subscribe to it to get data

    this._Service.ListTrending(this.newDate, this.page).subscribe((res) => {
      //*fetching data to my array

      this.rows = res.items;
    });
  }

  //*Scroll method with Request
  onScrollPagination(page: number) {
    //*listening to api and subscribe to it to get data in scrolling

    this._Service.ListTrending(this.newDate, page).subscribe(
      (res) => {
        res.items.map((el) => {
          //*pushing my new elemnts  to my array we fetched with data before

          this.rows.push(el);
        });
      },
      (err) => {
        //*handlling error to stop sending new reques on scrolling

        this.isFullListDisplayed = true;
      }
    );
  }

  //*OnScroll ngx infiniteScroll
  onScroll() {
    //*counter increasing pages while scrolling

    let page = this.count++;
    //*calling onScrolling method to send request

    this.onScrollPagination(page);
  }
  // #endregion Methods (3)
}
