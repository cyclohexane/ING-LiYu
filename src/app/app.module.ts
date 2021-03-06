import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

//注意下面的引入
import { HttpClientModule } from '@angular/common/http';
import { HttpUtilProvider } from '../providers/http-util/http-util';
import { StorageUtilProvider } from '../providers/storage-util/storage-util';
import { CookieUtilProvider } from '../providers/cookie-util/cookie-util';
import { ToasterProvider } from '../providers/toaster/toaster';
import { TimeFormatterProvider } from '../providers/time-formatter/time-formatter';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ""
    }),
    HttpClientModule//注意引入！
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
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
    FileTransfer,
    File,
    Camera,
    FileChooser,
    FileOpener,
    FilePath
  ]
})
export class AppModule { }
