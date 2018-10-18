import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';


@IonicPage()
@Component({
  selector: 'page-search-psnl',
  templateUrl: 'search-psnl.html',
})
export class SearchPsnlPage {

  @ViewChild(Content) content: Content;

  public keywords = '';

  public list = [];

  public page = 1;

  public hasMoreData = true;  /*是否有超过一页的数据*/


  constructor(public http: HttpUtilProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  getSearchList(scroll) {

    if (!scroll) {//键入
      this.page = 1;
      this.hasMoreData = true;
      this.content.scrollToTop(0); /*回到顶部*/
    }

    this.http.doGet(`boss/user/getuserbyname.do?userName=${this.keywords}&pageSize=30&pageNum=${this.page}`, res => {
      if (this.page === 1) {
        this.list = res.data.list;
      } else {
        this.list = this.list.concat(res.data.list);
      }
      if (scroll) {
        scroll.complete();
        if (res.data.list.length < 30) {/*没有数据停止上拉更新*/
          this.hasMoreData = false;
        }
      }
      this.page++;
    });
  }

  doLoadMore(scroll) {
    this.getSearchList(scroll)
  }


  transformType(i) {
    switch (i) {
      case 0:
        return "总监";
      case 1:
        return "公司财务";
      case 2:
        return "项目经理";
      case 3:
        return "项目记录员";
    }
  }

  toPsnlDet(userId) {
    this.navCtrl.push("PsnlDetPage", {
      userId: userId
    });
  }
}
