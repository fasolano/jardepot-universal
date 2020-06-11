import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../../app.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {emailValidator} from "../../theme/utils/app-validators";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
    selector: 'app-mercado-button',
    templateUrl: './mercado-button.component.html',
    styleUrls: ['./mercado-button.component.scss']
})
export class MercadoButtonComponent implements OnInit {
    @Output() output = new EventEmitter();
    _ref: any;
    clientForm: FormGroup = null;
    showButton: boolean = true;
    deliveryComission: boolean = true;
    terms = true;

    constructor(private appService: AppService, public formBuilder: FormBuilder, public dialogRef: MatDialogRef<MercadoButtonComponent>,
                private router: Router,
                public dialog: MatDialog,) {
    }

    ngOnInit() {
        this.deliveryComission = this.appService.Data.totalPrice < 3000;
        this.clientForm = this.formBuilder.group({
            firstName: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]{3,50}')])],
            lastName: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]{3,50}')])],
            email: [null, Validators.compose([Validators.required, emailValidator])],
            phone: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern('[0-9]*')])],
            state: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]{3,50}')])],
            city: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]{3,50}')])],
            zip: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[0-9]*')])],
            suburb: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]{3,50}')])],
            address: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
        });
        let total = 0;
        const router = this.router;
        const modal = this.dialogRef;
        const form = this.clientForm;
    }

    public showButtonMercado() {
        this.showButton = this.clientForm.invalid;
    }

    public chageTerms(event) {
        this.terms = !event.checked;
    }

    public removeObject() {
        this._ref.destroy();
    }

    public close(): void {
        this.dialogRef.close();
    }

    public generateLinkPayment() {
        const data = JSON.stringify(this.clientForm.value);
        this.appService.createMercadopagoLink(data).subscribe(data => {
            // @ts-ignore
            if (data.state == 'success') {
                // @ts-ignore
                const url = data.data;
                window.open(url, '_self');
            }else{
                alert("Ocurrior un error, comunicate con los teléfonos para ofrecerte ayuda");
            }
        });
    }

    public openDeliveryTermsDialog() {
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
