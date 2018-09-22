import { Injectable } from '@angular/core';

@Injectable()
export class StorageUtilProvider {

  constructor() {

  }

  set(key, value, local = true) {

    if (local) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
    //成功提示？

  }

  get(key, local = true) {

    if (local) {
      return JSON.parse(localStorage.getItem(key));//键名不存在时返回null，是不是要通知一下？
    } else {
      return JSON.parse(sessionStorage.getItem(key));
    }

  }

  remove(key, local = true) {

    if (local) {
      localStorage.removeItem(String(key));//这里如果键名不存在则什么也不会做但是最好根据getItem判断一下然后throw通知一下？
    } else {
      sessionStorage.removeItem(String(key));
    }

  }

  key(index, local = true) {

    if (local) {
      return JSON.parse(localStorage.key(index));
    } else {
      return JSON.parse(sessionStorage.key(index));
    }

  }

}
