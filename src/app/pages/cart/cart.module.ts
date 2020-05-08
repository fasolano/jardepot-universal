import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {CartComponent} from './cart.component';
import {ControlsComponent} from "../../shared/controls/controls.component";
import {PaypalButtonComponent} from "../../shared/paypal-button/paypal-button.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

export const routes = [
    {path: '', component: CartComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(routes),
        SharedModule,
    ],
    declarations: [
        CartComponent,
        PaypalButtonComponent
    ],
    entryComponents: [
        PaypalButtonComponent
    ]
})
export class CartModule {
}

