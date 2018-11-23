import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpUtilProvider } from '../../../providers/http-util/http-util';
import { CookieUtilProvider } from '../../../providers/cookie-util/cookie-util';

@IonicPage()
@Component({
  selector: 'page-provider-fnc',
  templateUrl: 'provider-fnc.html',
})
export class ProviderFncPage {

  userType
  offerId
  page = 1
  public hasMoreData = true
  fnc: string[] = []
  amount

  constructor(public cookie: CookieUtilProvider, public http: HttpUtilProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.userType = this.cookie.get('user')['userType'];
    this.offerId = this.navParams.get('offerId');
  }

  ionViewWillEnter() {
    this.page = 1;
    this.getFnc();
    this.getAmount();
  }

  getAmount(): void {
    this.http.doGet('boss/record/getrecordamount.do?offerId=' + this.offerId, res => {
      this.amount = res.data;
      this.amount.list.forEach(i => {
        let rec = i.recordDec.split("/").map(r => r.split("："));
        i.categoryName = rec[1][1];
        i.specifications = rec[2][1];
        i.unit = rec[3][1];
      });
    });
  }


  transformRecType(i) {
    switch (i) {
      case 0:
        return "材料开销费";
      case 1:
        return "机械完工费";
      case 2:
        return "人工完工费";
      case 3:
        return "其他费用";
      case 4:
        return "运输费用";
    }
  }

  transformState(i) {
    switch (i) {
      case 0:
        return "待项目经理审核";
      case 1:
        return "待财务审核员审核";
      case 2:
        return "完全过审";
      case 10:
        return "该记录被拒绝";
    }
  }

  getFnc(scroll?) {
    this.http.doGet(`boss/record/listbyofferid.do?offerId=${this.offerId}&pageSize=30&pageNum=${this.page}`, res => {
      if (this.page === 1) {
        this.fnc = res.data.list;
      } else {
        this.fnc = this.fnc.concat(res.data.list);
      }
      if (scroll) {
        scroll.complete();
        if (res.data.list.length < 30) {
          this.hasMoreData = false;
        }
      }
      this.page++;
    });
  }

  doLoadMore(scroll) {
    this.getFnc(scroll);
  }


  toFncDet(recordId) {
    this.navCtrl.push("FncDetPage", {
      recordId: recordId
    });
  }

}
