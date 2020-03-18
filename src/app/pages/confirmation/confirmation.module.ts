import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ConfirmationComponent } from './confirmation.component';

export const routes = [
    { path: ':state/:data', component: ConfirmationComponent, pathMatch: 'full' },
    { path: ':state/:data/:token', component: ConfirmationComponent, pathMatch: 'full' },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        SharedModule,
        FormsModule
    ],
    declarations: [
        ConfirmationComponent
    ]
})
export class ConfirmationModule { }
