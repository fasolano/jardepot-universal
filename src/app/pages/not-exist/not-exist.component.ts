import {Component, OnInit, ViewChild, HostListener, Input, Injectable, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {AppService} from '../../app.service';
import {Settings, AppSettings} from 'src/app/app.settings';

@Component({
    selector: 'app-not-exist',
    templateUrl: './not-exist.component.html',
    styleUrls: ['./not-exist.component.scss']
})

@Injectable({
    providedIn: 'root'
})

export class NotExistComponent implements OnInit {

    public sidenavOpen = true;
    formSearch: FormGroup;
    public faWhatsapp = faWhatsapp;
    public searchSend: boolean = false;
    public form: FormGroup;
    public textSearch: string = '';
    public settings: Settings;
    window;

    constructor(public appSettings: AppSettings,
                public router: Router,
                public formBuilder: FormBuilder,
                public appService: AppService,
                private activatedRoute: ActivatedRoute) {
        this.settings = this.appSettings.settings;
    }


    ngOnInit() {
        this.form = this.formBuilder.group({
            comentario: [null,  Validators.compose([Validators.minLength(4)])],
            nombre: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
            telefono: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern('[0-9]*')])]
        });

        this.window = (typeof window !== "undefined") ? window : null;
        if(this.window){
            if (this.window.innerWidth < 1280) {
                this.sidenavOpen = false;
            }

            if (this.window.innerWidth < 1280) {
                this.sidenavOpen = false;
            }
        }
    }

    public onSubmitTeLlamamos(values: Object): void {
        if (this.form.valid) {
            this.appService.enviarBusqueda(values, this.textSearch).subscribe(data => {
                const res = JSON.parse(JSON.stringify(data));
                this.searchSend = res.resultado;
            });
            this.form.reset();
        } else {
            this.searchSend = false;
        }
    }
}
