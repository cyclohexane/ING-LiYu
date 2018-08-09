import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpUtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpUtilProvider {

  base: string = "xxx";

  constructor(public http: HttpClient) {
  }

  getData(url, callback) {

    this.http.get(this.base + url).subscribe(res => {

      callback(res);

    }, err => {
      console.log(err);
    });
  }

  postData(url, param, callback) {

    this.http.post(this.base + url, {}, {
      params: new HttpParams().set(param[0], param[1])
    }).subscribe(res => {

      callback(res);

    }, err => {
      console.log(err);
    });
  }

}
