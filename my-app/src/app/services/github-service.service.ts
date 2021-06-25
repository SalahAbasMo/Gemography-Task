import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataTypeDto } from '../Dto/GitHubDataDto';

@Injectable({
  providedIn: 'root',
})
export class GithubServiceService {
  // #region Constructors (1)

  constructor(private _http: HttpClient) {}

  // #endregion Constructors (1)

  // #region Public Methods (1)

  //*  [HttpGet]

  ListTrending(date: string, page: number) {
    //* Create new HttpParams
    let params = new HttpParams()
      .set('q', 'created:>' + date)
      .set('sort', 'stars')
      .set('order', 'desc')
      .set('page', page);

    //* Api Url
    const url = 'https://api.github.com/search/repositories';

    //* Sending Request

    return this._http.get<DataTypeDto>(url, { params: params });
  }

  // #endregion Public Methods (3)
}
