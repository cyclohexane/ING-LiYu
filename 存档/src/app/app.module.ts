import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//注意下面的引入
import { HttpClientModule } from '@angular/common/http';
import { HttpUtilProvider } from '../providers/http-util/http-util';
import { StorageUtilProvider } from '../providers/storage-util/storage-util';
import { CookieUtilProvider } from '../providers/cookie-util/cookie-util';
import { ToasterProvider } from '../providers/toaster/toaster';
import { TimeFormatterProvider } from '../providers/time-formatter/time-formatter';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: "true",
      backButtonText: ""
    }),
    HttpClientModule//注意引入！
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpUtilProvider,
    StorageUtilProvider,
    CookieUtilProvider,
    ToasterProvider,
    TimeFormatterProvider,
  ]
})
export class AppModule { }
