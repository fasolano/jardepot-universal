import { Component, ChangeDetectionStrategy } from '@angular/core';
import {  } from '@fortawesome/free-solid-svg-icons';
import {Data, AppService} from './app.service';
import { Router, NavigationEnd } from '@angular/router';
import { Settings, AppSettings } from './app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = false;
  public settings: Settings;
  public cookieValue = 'UNKNOWN';
  constructor(public appSettings:AppSettings, public router: Router, private appService: AppService ){
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
      // this.appService.addCarrito($user, $token);
   // this.router.navigate(['']);  //redirect other pages to homepage on browser refresh
  }

  ngAfterViewInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          window.scrollTo(0,0);
      }
    })
  }
}
