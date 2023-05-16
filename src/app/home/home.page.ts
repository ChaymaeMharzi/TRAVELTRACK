import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contact={
    name:"CHAYMAE MHARZI",
      email:"chaymae.mharzi@ump.ac.ma",
      tel:"0799999999",
      logo:"assets/images/logo.png",
      location:"assets/images/loc.png"
  }

  constructor() {}

}
