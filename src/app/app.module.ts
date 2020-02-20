import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AgmCoreModule } from '@agm/core';

import { OverlayContainer, Overlay } from '@angular/cdk/overlay';
import { MAT_MENU_SCROLL_STRATEGY } from '@angular/material';
import { CustomOverlayContainer } from './theme/utils/custom-overlay-container';
import { menuScrollStrategy } from './theme/utils/scroll-strategy';

import { SharedModule } from './shared/shared.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MenuComponent } from './theme/components/menu/menu.component';
import { SidenavMenuComponent } from './theme/components/sidenav-menu/sidenav-menu.component';
import { BreadcrumbComponent } from './theme/components/breadcrumb/breadcrumb.component';

import { AppSettings } from './app.settings';
import { AppService } from './app.service';
import { CookieService } from 'ngx-cookie-service';
import { AppInterceptor } from './theme/utils/app-interceptor';
import { OptionsComponent } from './theme/components/options/options.component';
import { FooterComponent } from './theme/components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FontAwesomeModule,
        NgxSpinnerModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDssWcwnApG8gnZPPh9Eg_nJrxTKDAfrlY'
        }),
        SharedModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        NgxJsonLdModule
    ],
    declarations: [
        AppComponent,
        PagesComponent,
        NotFoundComponent,
        MenuComponent,
        SidenavMenuComponent,
        BreadcrumbComponent,
        OptionsComponent,
        FooterComponent
    ],
    providers: [
        AppSettings,
        AppService,
        CookieService,
        {provide: OverlayContainer, useClass: CustomOverlayContainer},
        {provide: MAT_MENU_SCROLL_STRATEGY, useFactory: menuScrollStrategy, deps: [Overlay]},
        {provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true}
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
