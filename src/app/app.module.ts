import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpUtilProvider } from '../providers/http-util/http-util';
import { StorageUtilProvider } from '../providers/storage-util/storage-util';
import { CookieUtilProvider } from '../providers/cookie-util/cookie-util';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: "true",
      backButtonText: ""
    })
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
  ]
})
export class AppModule { }
