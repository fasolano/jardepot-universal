import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterByIdPipe } from './filter-by-id.pipe';
import { FilterBrandsPipe } from './filter-brands.pipe';
import { BrandSearchPipe } from './brand-search.pipe';
import { FilterPricePipe } from './filter-price.pipe';
import { OrderByPipe } from './order-by.pipe';
import {sanitizeHtmlPipe} from './sanitizeHtml.pipe';
import {TruncatePipe} from './truncate.pipe';

@NgModule({
    imports: [ 
        CommonModule 
    ],
    declarations: [
        FilterByIdPipe,
        FilterBrandsPipe,
        BrandSearchPipe,
        FilterPricePipe,
        OrderByPipe,
        sanitizeHtmlPipe,
        TruncatePipe
    ],
    exports: [
        FilterByIdPipe,
        FilterBrandsPipe,
        BrandSearchPipe,
        FilterPricePipe,
        OrderByPipe,
        sanitizeHtmlPipe,
        TruncatePipe
    ]
})
export class PipesModule { }
