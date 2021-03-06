import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {DialogComponent} from '../../shared/dialog/dialog.component';
import {MatDialog} from '@angular/material';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


    public distributions = [];
    public banners = [];
    public bannersShow = false;
    public brands = [];
    public productTypes: Array<any>;
    public additional = [];
    public window;
    json;
    public text = "Los envíos gratuitos que ofrece JarDepot son a la cobertura terrestre normal de las paqueterías con las que tenemos convenio (ODM).<br>" +
        "NO aplica a zonas extendidas (En extra coberturas se le indicará la diferencia a pagar para su consideración).<br>" +
        "NO aplica con otras paqueterías<br>" +
        "El tiempo de entrega estimado y sujeto a existencias es de 2 a 6 días hábiles, (Mínimo/Máximo) contados a partir de las siguientes " +
        "24 hrs de que su depósito se ha verificado y de recibir su correo con los datos completos para facturar y enviar su producto.<br><br>";

    constructor(public appService: AppService,
                public dialog: MatDialog,
                private meta: Meta,
                public title: Title) {
    }

    ngOnInit() {
        this.window = (typeof window !== 'undefined') ? window : null;
        if (this.window) {
            //this.window.scrollTo(0, 0);
            if (this.window.innerWidth >= 960) {
                this.bannersShow = true;
            }
        }
        this.getDistributions();
        this.getBrands();
        this.getProductTypes();
        this.getAdditional();
        this.getMetas();
        this.json = {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Jardepot",
            "url": "http://jardepot.com",
            "address": "Av. Emiliano Zapata 129, Tlaltenango, 62170 Cuernavaca, Mor., México",
            "sameAs": [
                "https://www.facebook.com/Jardepot",
                "https://www.instagram.com/jardepotsade",
                "https://twitter.com/jardepot",
                "https://www.youtube.com/channel/UCym0cCHYeEDqs70RD7Zs2-g"
            ]
        };
    }
    public getMetas() {
        this.appService.getDescriptionNivel2('index', 'index').subscribe(data => {
            const res = JSON.parse(JSON.stringify(data));
            this.meta.updateTag({name: 'description', content: res.result.metadescription.substr(0,150)});
            this.meta.updateTag({name: 'keywords', content: res.result.keywords});
            this.title.setTitle(res.result.metatitle.substr(0,70));
        });
    }

    public getDistributions() {
        this.distributions = this.appService.getDistributions();
    }

    public getBrands() {
        this.appService.getBrands().subscribe(data => {
            this.brands = data;
        });
        this.brands.forEach(brand => {
            brand.selected = false;
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

    public openDeliveryTermsDialog(){
        const textBody = "Los envíos gratuitos que ofrece JarDepot son a la cobertura terrestre normal de las paqueterías con las que tenemos convenio (ODM).<br>" +
            "NO aplica a zonas extendidas (En extra coberturas se le indicará la diferencia a pagar para su consideración).<br>" +
            'Las compras deben ser mayor a $3,000.00 MXN<br>' +
            "NO aplica con otras paqueterías<br>" +
            "El tiempo de entrega estimado y sujeto a existencias es de 2 a 6 días hábiles, (Mínimo/Máximo) contados a partir de las siguientes " +
            "24 hrs de que su depósito se ha verificado y de recibir su correo con los datos completos para facturar y enviar su producto.<br><br>";
        const dialogRef = this.dialog.open(DialogComponent, {
            panelClass: 'generic-dialog',
            direction: 'ltr'
        });
        dialogRef.componentInstance.title = 'Condiciones de envíos Gratis:';
        dialogRef.componentInstance.body = textBody;
    }

}
