import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SMS } from '@ionic-native/sms/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LocationPage } from '../app/location/location.page';
import { Connectivity } from '../app/services/connectivity.service';
import { GoogleMaps } from '../app/services/google-maps.service';
import { Network } from '@ionic-native/network/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HomePage } from "../app/home/home.page";
declare var google: any;


@NgModule({
  declarations: [AppComponent,
    HomePage,
  LocationPage],
  entryComponents: [
    HomePage,
    LocationPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, RouterModule,
    CommonModule,
    FormsModule,
    IonicModule,],
  providers: [
    StatusBar,
    SplashScreen,
    SMS,
    CallNumber,
    Geolocation,
    Network,
    GoogleMaps,
    Connectivity,
    LocationPage,
    NavController,
   { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
