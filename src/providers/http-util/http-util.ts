import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpUtilProvider {

  // base: string = "/project/";
  base: string = "http://liyu.upupgogogo.cn/project/";

  constructor(public http: HttpClient) {
  }

  doGet(url, callback?) {

    this.http.get(this.base + url).subscribe(res => {

      if (0 === res['status']) {

        if (callback) callback(res);

      } else {
        alert(res['msg']);
      }

    }, err => {
      console.log(err);
    });
  }

  doPost(url: string, param: object, callback?: Function, type?: string) {

    this.http.post(this.base + url, this.transformRequest(param), {
      headers: { "Content-Type": type || 'application/x-www-form-urlencoded' },
      // withCredentials :true
    }).subscribe(res => {

      if (0 === res['status']) {

        if (callback) callback(res);

      } else {
        alert(res['msg']);
      }

    }, err => {
      console.log(err);
    });

    // let httpParam = new HttpParams();
    // for (let i in param) {
    //   httpParam = httpParam.set(i, param[i]);
    // }


  }

  transformRequest(data) {

    let formData = '';
    for (let item in data) {
      formData +=
        encodeURIComponent(item) +
        "=" +
        encodeURIComponent(data[item]) +
        "&";
    }
    return formData.slice(0, formData.length - 1);

  };

}
