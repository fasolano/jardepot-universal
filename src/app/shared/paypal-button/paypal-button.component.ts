import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppService} from '../../app.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailValidator} from '../../theme/utils/app-validators';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {DialogComponent} from '../../shared/dialog/dialog.component';

@Component({
    selector: 'app-paypal-button',
    templateUrl: './paypal-button.component.html',
    styleUrls: ['./paypal-button.component.scss']
})
export class PaypalButtonComponent implements OnInit {

    @Output() output = new EventEmitter();
    _ref:any;
    clientForm: FormGroup = null;
    showButton: boolean = true;
    deliveryComission: boolean = true;
    terms = true;

    constructor(private appService: AppService, public formBuilder: FormBuilder, public dialogRef: MatDialogRef<PaypalButtonComponent>,
                private router: Router,
                public dialog: MatDialog,) {
    }

    ngOnInit() {
        this.deliveryComission = this.appService.Data.totalPrice < 3000;
        this.clientForm = this.formBuilder.group({
            firstName: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]{3,50}')])],
            lastName: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]{3,50}')])],
            email: [null, Validators.compose([Validators.required, emailValidator ])],
            phone: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern('[0-9]*')])]
        });
        let total = this.appService.Data.totalPrice;
        //se evalua si lleva comisión de envio
        total += this.deliveryComission? 300:0;
        //Se agrega la comisión de paypal
        total = total * 1.04;
        const router = this.router;
        const modal = this.dialogRef;
        const form = this.clientForm;
        let products = [];
        this.appService.Data.cartList.forEach(product=>{
            products.push(product.name);
        });
        total = Number((total).toFixed(2));
            // @ts-ignore
        paypal.Buttons({
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [
                        {
                            reference_id: "PAGOJD",
                            amount: {
                                value: total
                            }
                        }
                    ]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    const status = details.purchase_units[0].payments.captures[0].status;
                    const name = details.purchase_units[0].shipping.name.full_name;
                    const address = Object.values(details.purchase_units[0].shipping.address).toString();
                    const clientForm = JSON.stringify(form.value);
                    // const email = details.payer.email_address;
                    modal.close();
                    router.navigate(
                        ['/confirmation/button/PayPal', data.orderID],
                        {queryParams: {'name': name, 'status':status, 'address': address, 'client':clientForm}}
                    );
                    // Call your server to save the transaction
                    return true;
                });
            }
        }).render('#paypal-button-container');
    }

    public showButtonPaypal(){
        this.showButton = this.clientForm.invalid;
    }

    public chageTerms(event){
        this.terms = !event.checked;
    }

    public removeObject(){
        this._ref.destroy();
    }

    public close(): void {
        this.dialogRef.close();
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
