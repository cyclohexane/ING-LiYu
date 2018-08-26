import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpUtilProvider {

  base: string = "http://193.112.26.167:8080/project/";

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
