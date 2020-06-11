import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule
} from '@angular/material';

import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    wheelPropagation: true,
    suppressScrollX: true
};

import {PipesModule} from '../theme/pipes/pipes.module';
import {ControlsComponent} from './controls/controls.component';
import {BrandsCarouselComponent} from './brands-carousel/brands-carousel.component';
import {ProductsCarouselComponent} from './products-carousel/products-carousel.component';
import {ProductDialogComponent} from './products-carousel/product-dialog/product-dialog.component';
import {BannersComponent} from '../theme/components/banners/banners.component';
import { TelephoneDialogComponent } from '../theme/components/menu/telephone-dialog/telephone-dialog.component';
import { SectionsPanelComponent } from './sections-panel/sections-panel.component';
import { TelephoneBarComponent } from './telephone-bar/telephone-bar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SectionsSideComponent } from './sections-side/sections-side.component';
import { DialogComponent } from './dialog/dialog.component';
import { JsonLdComponent } from './json-ld/json-ld.component';
import {PaypalButtonComponent} from './paypal-button/paypal-button.component';
import {ReactiveFormsModule} from '@angular/forms';
import { YoutubeModalComponent } from '../theme/components/youtube-modal/youtube-modal.component';
import {FooterComponent} from "../theme/components/footer/footer.component";
import { MercadoButtonComponent } from './mercado-button/mercado-button.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SwiperModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatStepperModule,
        PerfectScrollbarModule,
        PipesModule,
        FontAwesomeModule,
        ReactiveFormsModule
    ],
    exports: [
        RouterModule,
        SwiperModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        PerfectScrollbarModule,
        BrandsCarouselComponent,
        BannersComponent,
        SectionsPanelComponent,
        TelephoneDialogComponent,
        TelephoneBarComponent,
        DialogComponent,
        JsonLdComponent,
        SectionsSideComponent,
        ControlsComponent
    ],
    declarations: [
        BrandsCarouselComponent,
        TelephoneDialogComponent,
        BannersComponent,
        TelephoneBarComponent,
        SectionsPanelComponent,
        DialogComponent,
        JsonLdComponent,
        ControlsComponent,
        SectionsSideComponent
    ],
    entryComponents: [
        DialogComponent,
        TelephoneDialogComponent,
    ],
    providers: [
        {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}
    ]
})
export class SharedModule {
}
