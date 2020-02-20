import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ProductZoomComponent } from './product/product-zoom/product-zoom.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxJsonLdModule} from '@ngx-lite/json-ld';

export const routes = [
  { path: 'ofertas', component: ProductsComponent, breadcrumb: ':ofertas;' },
  { path: 'busqueda/:search', component: ProductsComponent, breadcrumb: ':busqueda;' },
  { path: 'catalogo/:brand/:product', component: ProductComponent, breadcrumb: ':product' },
  { path: ':nivel1/:nivel2', component: ProductsComponent, breadcrumb: ':nivel1;:nivel2' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,
    FontAwesomeModule,
    NgxJsonLdModule
  ],
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductZoomComponent
  ],
  entryComponents:[
    ProductZoomComponent
  ]
})
export class ProductsModule {
}
