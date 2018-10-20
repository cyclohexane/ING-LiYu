import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToasterProvider } from '../toaster/toaster';

@Injectable()
export class HttpUtilProvider {

  base: string = "/project/";
  //base: string = "http://liyu.upupgogogo.cn/project/";

  constructor(public toaster: ToasterProvider, public http: HttpClient) {
  }

  doGet(url, callback?) {

    this.http.get(this.base + url).subscribe(res => {

      if (0 === res['status']) {
        if (callback) callback(res);
      } else {
        this.toaster.show(res['msg']);
      }
    }, err => {
      console.log(err);
      this.toaster.show('网络错误');
    });
  }

  doPost(url: string, param?, callback?: Function, type?: string) {

    this.http.post(this.base + url, param, {
      headers: { "Content-Type": type || 'application/x-www-form-urlencoded' },
      // withCredentials :true
    }).subscribe(res => {
      if (0 === res['status']) {
        if (callback) callback(res);
      } else {
        this.toaster.show(res['msg']);
      }
    }, err => {
      console.log(err);
      this.toaster.show('网络错误');
    });

    // let httpParam = new HttpParams();
    // for (let i in param) {
    //   httpParam = httpParam.set(i, param[i]);
    // }


  }

  toURL(origin) {

    let param = '';
    for (let item in origin) {
      if (origin[item]) {
        param +=
          encodeURIComponent(item) +
          "=" +
          encodeURIComponent(origin[item]) +
          "&";
      }
    }
    return param.slice(0, param.length - 1);

  };

  doUpload(url: string, param?, callback?: Function) {

    this.http.post(this.base + url, param).subscribe(res => {
      if (0 === res['status']) {
        if (callback) callback(res);
      } else {
        this.toaster.show(res['msg']);
      }
    }, err => {
      console.log(err);
      this.toaster.show('网络错误');
    });

  }


  toMultipart(origin) {
    let param = new FormData();
    for (let item in origin) {
      if (origin[item]) {
        param.append(item, origin[item]);
      }
    }
    return param;
  }

}
