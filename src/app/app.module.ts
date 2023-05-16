import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientModule } from '@angular/common/http';
import { MeteoService } from './services/meteo.service';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx'; // Import Geolocation
import { IonicStorageModule } from '@ionic/storage-angular';
import { Camera } from '@ionic-native/camera/ngx';
//import { NewLocationPage } from './new-location.page';
 // @ts-ignore
//import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],


  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,




],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, MeteoService, { provide: Storage, useFactory: provideStorage },Geolocation, Camera],
  bootstrap: [AppComponent],
})
export class AppModule { }

export function provideStorage() {
  return new Storage({
    name: '__mydb',
    driverOrder: ['indexeddb', 'sqlite', 'websql']
  });
}
