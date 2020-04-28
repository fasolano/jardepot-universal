import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-sections-panel',
    templateUrl: './sections-panel.component.html',
    styleUrls: ['./sections-panel.component.scss']
})
export class SectionsPanelComponent implements OnInit {

    @Input('productTypes') productsType: Array<any> = [];
    @Input('brands') brands: Array<any> = [];
    @Input('additional') additional: Array<any> = [];


    constructor() {
    }

    ngOnInit() {
    }

    public removeAccents(str){
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    public changeString($strign) {
        return this.removeAccents($strign.replace(/ /g, '-').toLowerCase());
    }
}
