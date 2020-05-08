import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {CheckoutComponent} from './checkout.component';
import {MatStepperModule} from "@angular/material/stepper";

export const routes = [
    {path: '', component: CheckoutComponent, pathMatch: 'full'},
    {path: '/pay', component: CheckoutComponent, pathMatch: 'full'},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        SharedModule,
        FormsModule,
        MatStepperModule
    ],
    declarations: [
        CheckoutComponent,

    ]
})
export class CheckoutModule {
}
