import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppService} from '../../app.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailValidator} from '../../theme/utils/app-validators';
import {MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';

@Component({
    selector: 'app-paypal-button',
    templateUrl: './paypal-button.component.html',
    styleUrls: ['./paypal-button.component.scss']
})
export class PaypalButtonComponent implements OnInit {

    @Output() output = new EventEmitter();
    _ref:any;
    clientForm: FormGroup;
    showButton: boolean = true;
    deliveryComission: boolean = true;

    constructor(private appService: AppService, public formBuilder: FormBuilder, public dialogRef: MatDialogRef<PaypalButtonComponent>,
                private router: Router) {
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


    public removeObject(){
        this._ref.destroy();
    }

    public close(): void {
        this.dialogRef.close();
    }

}
