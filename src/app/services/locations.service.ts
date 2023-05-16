import { Injectable } from '@angular/core';
import {Place} from '../model/place.model';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class LocationsService {
    private locations:Array<Place>=[];
  currentLocation: Place | undefined;


  constructor(private storage: Storage) {
    this.locations.push({title:"A"});
    this.locations.push({title:"B"});
    this.locations.push({ title: "C" });
    this.storage.create();
  }

  async getLocations() {
    //const storedLocations = await this.storage.get('locations');
    //this.locations = storedLocations ? storedLocations : [];
    return this.locations;
  }

/*public getLocations(): Promise<Array<Place>> {
  return new Promise((resolve, reject) => {
    // Perform any necessary operations to retrieve locations
    // For example, you can use the Ionic Storage API

    // Assuming this.storage is an instance of Ionic Storage
    this.storage.get('locations')
      .then((locations: Array<Place>) => {
        // Resolve with the locations array
        resolve(locations);
      })
      .catch((error) => {
        // Reject with the error
        reject(error);
      });
  });
}*/



  public addLocation(place: Place) {
    this.locations.push(place);
    this.storage.set("locations", this.locations);

  }



  public updateLocations(locations: Place[]) {
    localStorage.setItem('locations', JSON.stringify(locations));
  }

  public loadLocations() {
    const storedLocations = localStorage.getItem('locations');
    if (storedLocations) {
      this.locations = JSON.parse(storedLocations);
    }
  }
    // addPhoto(base64Image: string, timestamp: number) {
    //     for (let i = 0; i < this.locations.length ; i++) {
    //       if (this.locations[i].timestamp === timestamp) {
    //           if (!this.locations[i].photos) {
    //             this.locations[i].photos = [];
    //           }
    //           this.locations[i].photos.push(base64Image);
    //           this.updateLocations(this.locations);
    //           break;
    //         }
    //     }
    // }

  addPhoto(base64Image: string, timestamp: number) {
  for (let i = 0; i < this.locations.length; i++) {
    if (this.locations[i]['timestamp'] === timestamp) {
      if (!this.locations[i]['photos']) {
        this.locations[i]['photos'] = [];
      }
            // @ts-ignore
     (this.locations[i] as Place).photos.push(base64Image);
      this.updateLocations(this.locations);
      break;
    }
  }
}

}
