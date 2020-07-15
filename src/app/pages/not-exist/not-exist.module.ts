import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {NotExistComponent} from './not-exist.component';
import {NgxJsonLdModule} from '@ngx-lite/json-ld';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


export const routes = [
    { path: '', component: NotExistComponent, pathMatch: 'full'  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        SharedModule,
        FontAwesomeModule,
        NgxJsonLdModule
    ],
    declarations: [
        NotExistComponent,
    ]
})

export class NotExistModule {
}
