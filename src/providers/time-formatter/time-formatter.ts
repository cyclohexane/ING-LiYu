import { Injectable } from '@angular/core';

@Injectable()
export class TimeFormatterProvider {

  constructor() {

  }

  parseDay(timestamp) {
    return new Date(timestamp).toLocaleDateString();
  }

  parseSecond(timestamp) {
    let t = new Date(timestamp);
    let month = t.getMonth();
    let M = (month + 1 < 10 ? '0' : '') + (month + 1);//月份补零
    return `${t.getFullYear()}-${M}-${t.getDate()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
  }

  changetime(time, nows) {
    var arr = time.split("/");
    if (nows == "now") {
      arr[1] = (parseInt(arr[1]) + 1);
      if (arr[1] < 10) {
        arr[1] = "0" + arr[1];
        return arr[2] + "-" + arr[0] + "-" + arr[1];
      } else {
        return arr[2] + "-" + arr[0] + "-" + arr[1];
      }
    } else {
      return arr[2] + "-" + arr[0] + "-" + arr[1];
    }
  }

}
