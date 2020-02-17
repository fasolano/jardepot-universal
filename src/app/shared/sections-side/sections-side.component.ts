import {Component, OnInit} from '@angular/core';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-sections-side',
    templateUrl: './sections-side.component.html',
    styleUrls: ['./sections-side.component.scss']
})
export class SectionsSideComponent implements OnInit {

    productTypes: Array<any> = [];
    brands: Array<any> = [];
    additional: Array<any> = [];

    constructor(public appService: AppService,) {
    }

    ngOnInit() {
        this.getBrands();
        this.getProductTypes();
        this.getAdditional();
    }

    public getBrands() {
        this.appService.getBrands().subscribe(data => {
            this.brands = data;
        });
    }

    public getAdditional() {
        this.appService.getAdditional().subscribe(data => {
            this.additional = data;
        });
    }

    public getProductTypes() {
        this.appService.getProductTypes().subscribe(data => {
            this.productTypes = data;
        });
    }

    public changeStringBrand($brand){
        return $brand.replace(/ /g, "-").toLowerCase();
    }

}
