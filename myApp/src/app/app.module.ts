import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AlarmPage } from '../pages/alarm/alarm';
import { LightsPage } from '../pages/lights/lights';
import { HomePage } from '../pages/home/home';
import { SecurityPage } from '../pages/security/security';
import { UsersPage } from '../pages/users/users';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AlarmPage,
    LightsPage,
    HomePage,
    SecurityPage,
    UsersPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement:'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlarmPage,
    LightsPage,
    HomePage,
    SecurityPage,
    UsersPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
