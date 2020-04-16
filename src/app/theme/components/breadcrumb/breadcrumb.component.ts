import { Component } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, UrlSegment, NavigationEnd } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { AppService } from '../../../app.service';
import { Settings, AppSettings } from '../../../app.settings';
import { SidenavMenuService } from '../../../theme/components/sidenav-menu/sidenav-menu.service';
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
    providers: [ SidenavMenuService ]
})
export class BreadcrumbComponent {

    public pageTitle:string;
    public previousUrl: string = "";
    public breadcrumbs: {
        name: string;
        url: string;
        level1: string;
        level2: string;
    }[] = [];
    window;
    public json;

    public settings: Settings;
    constructor(public appSettings:AppSettings,
                public router: Router,
                public appService: AppService,
                public activatedRoute: ActivatedRoute,
                public title:Title,
                public sidenavMenuService:SidenavMenuService){
        this.window = (typeof window !== "undefined") ? window : null;
        this.settings = this.appSettings.settings;
        /*this.json = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://jardepot.com"
            },{
                "@type": "ListItem",
                "position": 2,
                "name": "Science Fiction",
                "item": "https://example.com/books/sciencefiction"
            },{
                "@type": "ListItem",
                "position": 3,
                "name": "Award Winners"
            }]
        };*/
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.breadcrumbs = [];
                this.parseRoute(this.router.routerState.snapshot.root);
                this.previousUrl = event.url;
            }
        });
    }

    private parseRoute(node: ActivatedRouteSnapshot) {
        if (node.data['breadcrumb']) {
            if(node.routeConfig.path === "") {
                const params = JSON.stringify(node.firstChild.params);
                // @ts-ignore
                this.appService.defineBreadcrumb(params, this.previousUrl, node.firstChild.component.name).subscribe(data =>{
                    // @ts-ignore
                    this.breadcrumbs = data;
                });
                return;
            } else if (node.url.length) {
                this.setBreadcrumOthersPages(node);
                return;
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }

    public setBreadcrumOthersPages(node){
        let urlSegments: UrlSegment[] = [];
        node.pathFromRoot.forEach(routerState => {
            urlSegments = urlSegments.concat(routerState.url);
        });
        let url = urlSegments.map(urlSegment => {
            return urlSegment.path;
        }).join('/');

        if(node.params.name){
            this.breadcrumbs.push({
                name: node.params.name,
                url: '/' + url,
                level1: '',
                level2: ''
            })
        }else{
            this.breadcrumbs.push({
                name: node.data['breadcrumb'],
                url: '#!',
                level1: '',
                level2: ''
            })
        }
    }

    public closeSubMenus() {
        if(this.window.innerWidth < 960) {
            this.sidenavMenuService.closeAllSubMenus();
        }
    }

}
