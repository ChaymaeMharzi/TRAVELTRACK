import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx'; // Import Geolocation
import { NewLocationPage } from './new-location.page';

const routes: Routes = [
  {
    path: '',
    component: NewLocationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewLocationPage],
  providers: [Geolocation]
})
export class NewLocationPageModule {}
