import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import {AgmCoreModule} from '@agm/core';

import {OverlayContainer, Overlay} from '@angular/cdk/overlay';
import {MAT_MENU_SCROLL_STRATEGY} from '@angular/material';
import {CustomOverlayContainer} from './theme/utils/custom-overlay-container';
import {menuScrollStrategy} from './theme/utils/scroll-strategy';

import {SharedModule} from './shared/shared.module';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {PagesComponent} from './pages/pages.component';
import {TopMenuComponent} from './theme/components/top-menu/top-menu.component';
import {MenuComponent} from './theme/components/menu/menu.component';
import {SidenavMenuComponent} from './theme/components/sidenav-menu/sidenav-menu.component';
import {BreadcrumbComponent} from './theme/components/breadcrumb/breadcrumb.component';

import {AppSettings} from './app.settings';
import {AppService} from './app.service';
import {AppInterceptor} from './theme/utils/app-interceptor';
import {FooterComponent} from './theme/components/footer/footer.component';
import { CookieService } from 'ngx-cookie-service';
import {RouterModule} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import {ControlsComponent} from "./shared/controls/controls.component";
import {SectionsSideComponent} from "./shared/sections-side/sections-side.component";

@NgModule({
    imports: [
        BrowserModule.withServerTransition({appId: 'my-app'}),
        BrowserAnimationsModule,
        HttpClientModule,
        NgxSpinnerModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDLf9Ywk47zipEtorDewwMmB3JtuXdzYL4'
        }),
        SharedModule,
        routing,
        RouterModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        NgxJsonLdModule
    ],
    declarations: [
        AppComponent,
        PagesComponent,
        TopMenuComponent,
        MenuComponent,
        SidenavMenuComponent,
        BreadcrumbComponent,
        FooterComponent,
    ],
    providers: [
        AppSettings,
        AppService,
        CookieService,
        {provide: OverlayContainer, useClass: CustomOverlayContainer},
        {provide: MAT_MENU_SCROLL_STRATEGY, useFactory: menuScrollStrategy, deps: [Overlay]},
        {provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
