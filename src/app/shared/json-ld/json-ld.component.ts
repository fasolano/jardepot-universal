import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {NO_ERRORS_SCHEMA} from '@angular/core';

@Component({
    selector: 'app-json-ld',
    templateUrl: './json-ld.component.html',
    styleUrls: ['./json-ld.component.scss']
})
export class JsonLdComponent implements OnInit {

    @Input('json') json: any;
    jsonLD: SafeHtml;

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.jsonLD = this.getSafeHTML(this.json);
    }

    getSafeHTML(value: {}) {
        // If value convert to JSON and escape / to prevent script tag in JSON
        const json = value
            ? JSON.stringify(value, null, 2).replace(/\//g, '\\/')
            : '';
        const html = `${json}`;
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

}
