import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LocationDetailsPage } from './location-details.page';

const routes: Routes = [
  {
    path: '',
    component: LocationDetailsPage
  }
];

//  RouterModule.forChild(routes),
//       AgmCoreModule.forRoot({
//           apiKey: 'AIzaSyC8edYmdVQLbhHf3crT__tqBMXNfnELJXs'
//       }),
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),

  ],
  declarations: [LocationDetailsPage]
})
export class LocationDetailsPageModule {}
