import { Component, OnInit } from '@angular/core';
import {Router, UrlTree} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public menus = [
      {title:"Home",url:"/menu/home",icon:'home'},
      {title:"Meteo",url:"/menu/meteo",icon:'snow'},
      {title:"Gallery",url:"/menu/gallery",icon:'images'},
      {title:"Locations",url:"/menu/locations",icon:'location'},
      {title:"Logout",url:"logout",icon:'log-out'},
    { title: "Exit", url: "Exit", icon: 'power' },

  ]

  constructor(private router:Router, private authService:AuthenticationService) { }

  ngOnInit() {
  }

    onMenuItem(m: { url: string | UrlTree; }) {
      if(m.url=='logout'){
        this.authService.logout();
        this.router.navigateByUrl("/login");
      }
      else if(m.url=='Exit'){
        (navigator as any).app?.exitApp();
      }
      else{
          this.router.navigateByUrl(m.url);
      }
    }
}



