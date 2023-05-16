import { Component, OnInit  } from '@angular/core';
import {LocationsService} from '../services/locations.service';
import {Place} from '../model/place.model';
import {CameraOptions,Camera} from '@ionic-native/camera/ngx';
import {AlertController} from '@ionic/angular';


@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {
  public currentPlace: Place | undefined;

  constructor(private camera:Camera, private alertCtrl:AlertController,
              private locService:LocationsService) { }

  ngOnInit() {
    this.currentPlace=this.locService.currentLocation;
  }


    // public async onTakePicture() {
    //     const options1: CameraOptions = {
    //         quality: 50,
    //         destinationType: this.camera.DestinationType.DATA_URL,
    //         encodingType: this.camera.EncodingType.JPEG,
    //         mediaType: this.camera.MediaType.PICTURE,
    //         sourceType:this.camera.PictureSourceType.CAMERA,
    //         allowEdit:true
    //     };
    //     const options2: CameraOptions = {
    //         quality: 50,
    //         destinationType: this.camera.DestinationType.DATA_URL,
    //         encodingType: this.camera.EncodingType.JPEG,
    //         mediaType: this.camera.MediaType.PICTURE,
    //         sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
    //         allowEdit:true
    //     };

    //     let alert=await this.alertCtrl.create({
    //         header:'Confirmation',
    //         message:'Source?',
    //         buttons:[
    //             {
    //               text:'Camera',
    //                 handler:()=>{
    //                   this.getPicture(options1);
    //                 }
    //             },
    //             {
    //               text:'Library',
    //                 handler:()=>{
    //                     this.getPicture(options2);
    //                 }
    //             }
    //         ]
    //     });
    //     await alert.present();

    // }

  // new method :
  public async onTakePicture() {
    const options1: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: true,
    };
    const options2: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
    };

    let alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Source?',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this.getPicture(options1);
          },
        },
        {
          text: 'Library',
          handler: () => {
            this.getPicture(options2);
          },
        },
      ],
    });
    await alert.present();
  }

  // private getPicture(params: CameraOptions) {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: true })
  //     .then((stream) => {
  //       this.camera
  //         .getPicture(params)
  //         .then((data) => {
  //           if (data) {
  //             let base64Image = 'data:image/jpeg;base64,' + data;
  //             let timestamp = this.currentPlace?.timestamp || 0;
  //             this.locService.addPhoto(base64Image, timestamp);
  //           } else {
  //             // Handle the case when data is undefined
  //           }
  //         })
  //         .catch((error) => {
  //           // Handle any errors that occurred during the getPicture() call
  //         })
  //         .finally(() => {
  //           stream.getVideoTracks().forEach((track) => track.stop());
  //         });
  //     })
  //     .catch((error) => {
  //       console.log('Error accessing the camera:', error);
  //     });
  // }








    // private getPicture(params: CameraOptions) {
    //     this.camera.getPicture(params)
    //         .then(data=>{
    //             let base64Image = 'data:image/jpeg;base64,' + data;
    //             //this.currentPlace.photos.push(base64Image);
    //             this.locService.addPhoto(base64Image,this.currentPlace.timestamp);
    //         });
    // }

  private getPicture(params: CameraOptions) {
  this.camera.getPicture(params)
    .then(data => {
      if (data) {
        let base64Image = 'data:image/jpeg;base64,' + data;
        // this.currentPlace.photos.push(base64Image);
              let timestamp = this.currentPlace?.timestamp || 0; // Use a default value of 0 if timestamp is undefined

        this.locService.addPhoto(base64Image,timestamp);
      } else {
        // Handle the case when data is undefined
      }
    })
    .catch(error => {
      // Handle any errors that occurred during the getPicture() call
    });
}



///////////////// delete this after

  //   public captureImage(): void {
  //   const options: CaptureImageOptions = { limit: 1 };
  //   this.mediaCapture.captureImage(options)
  //     .then((data: MediaFile[] | CaptureError) => {
  //       if (Array.isArray(data)) {
  //       if (data.length > 0) {
  //         const imageData = data[0].fullPath;
  //         this.convertToSafeUrl(imageData);
  //       }
  //     } else {
  //       console.log('Error capturing image:', data);
  //     }
  //     })
  //     .catch((error: CaptureError) => {
  //       console.log('Error capturing image:', error);
  //     });
  // }

  // private convertToSafeUrl(imageData: string): void {
  //   this.file.readAsDataURL(this.file.tempDirectory, imageData)
  //     .then((url: string) => {
  //       this.capturedImage = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  //     })
  //     .catch((error: any) => {
  //       console.log('Error converting image to safe URL:', error);
  //     });
  // }
}
