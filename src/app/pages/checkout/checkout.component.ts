import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatStepper, MatTableDataSource} from '@angular/material';
import {AppService} from '../../app.service';
import {Product} from '../../app.models';
import {DialogComponent} from '../../shared/dialog/dialog.component';
import {CookieService} from 'ngx-cookie-service';
import {emailValidator} from '../../theme/utils/app-validators';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
    @ViewChild('horizontalStepper', {static: true}) horizontalStepper: MatStepper;
    @ViewChild('verticalStepper', {static: true}) verticalStepper: MatStepper;
    billingForm: FormGroup;
    billMandatoryForm: FormGroup;
    deliveryForm: FormGroup;
    paymentForm: FormGroup;
    countries = [];
    months = [];
    years = [];
    deliveryMethods = [];
    paymentMethods = [];
    grandTotal = 0;
    temp = 'a';
    showBilling = false;
    blockButtoms = false;
    dataSource: MatTableDataSource<any>;
    displayedColumns = ['producto', 'nombre', 'precio', 'cantidad', 'total'];
    textButtonOrder = 'Crear orden de compra';
    public window;


    constructor(public appService: AppService, public formBuilder: FormBuilder, public dialog: MatDialog, private cookieService: CookieService) {
    }

    ngOnInit() {

        this.window = (typeof window !== "undefined") ? window : null;

        if (this.window) {
            this.window.scrollTo(0, 0);
        }
        // this.dataSource = new MatTableDataSource(this.appService.Data.cartList);
        this.deliveryMethods = this.appService.getDeliveryMethods();
        this.paymentMethods = this.appService.getPaymentMethods();
        // formularios para la compra
        this.billingForm = this.formBuilder.group({
            firstName: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]{3,50}')])],
            lastName: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]{3,50}')])],
            email: [null, Validators.compose([Validators.required, emailValidator])],
            phone: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern('[0-9]*')])],
            state: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]{5,50}')])],
            city: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]{5,50}')])],
            suburb: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
            zip: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('[0-9]*')])],
            address: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
        });
        this.billMandatoryForm = this.formBuilder.group({
            socialReason: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]{5,100}')])],
            typePerson: ['', Validators.required],
            usoCFDI: ['', Validators.required],
            typePayment: ['', Validators.required],
            rfc: [null, Validators.compose([Validators.required, Validators.minLength(12), Validators.maxLength(13)])],
            email: [null, Validators.compose([Validators.required, emailValidator])],
            state: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]{5,50}')])],
            city: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]{5,50}')])],
            zip: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('[0-9]*')])],
            address: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
        });
        this.deliveryForm = this.formBuilder.group({
            deliveryMethod: ['', Validators.required]
        });
        /*this.paymentForm = this.formBuilder.group({
            paymentMethod: [this.paymentMethods[2], Validators.required]
        });*/
    }

    public calculateTotal() {
        let listProducts: Product[] = this.appService.Data.cartList.slice();
        if (this.deliveryForm.controls.deliveryMethod.value['min'] > this.appService.Data.totalPrice) {
            listProducts.push(this.getChargeDelivery());
            this.grandTotal = this.appService.Data.totalPrice + this.deliveryForm.controls.deliveryMethod.value['cost'];
        } else {
            this.grandTotal = this.appService.Data.totalPrice;
        }

        // this.Data.cartList.push(product);
        /*if(this.paymentForm.controls.paymentMethod.value['value'] != 'Transferencia'){
          listProducts.push(this.getChargePayment());
          this.openGenericDialog(this.paymentForm.controls.paymentMethod.value['value']);
          this.textButtonOrder = 'Pagar';
        }else{
          this.textButtonOrder = 'Crear orden de compra';
        }*/
        // this.grandTotal = this.paymentForm.controls.paymentMethod.value['cost'] * this.grandTotal;
        this.dataSource = new MatTableDataSource(listProducts);
    }

    public placeOrder() {
        this.horizontalStepper._steps.forEach(step => step.editable = false);
        this.verticalStepper._steps.forEach(step => step.editable = false);
        this.appService.Data.cartList.length = 0;
        this.appService.Data.totalPrice = 0;
        this.appService.Data.totalCartCount = 0;
        const data = {
            billing: JSON.stringify(this.billingForm.value),
            billMandatory: JSON.stringify(this.billMandatoryForm.value),
            delivery: JSON.stringify(this.deliveryForm.value),
            payment: JSON.stringify(this.paymentMethods[1]),
            needBilling: this.showBilling
        };
        this.appService.createOrder(data).subscribe(response => {
            this.blockButtoms = true;
            // @ts-ignore
            if (response.data == 'success') {
                if (this.cookieService.check('session')) {
                    this.appService.deleteCookie('session');
                }
                this.horizontalStepper.next();
                this.verticalStepper.next();
            } else {
                alert("Ocurrior un error, comunicate con los teléfonos para ofrecerte ayuda");
            }
        });
    }

    public openGenericDialog($payment) {
        const dialogRef = this.dialog.open(DialogComponent, {
            panelClass: 'generic-dialog',
            direction: 'ltr'
        });
        dialogRef.componentInstance.title = 'Consejo';
        dialogRef.componentInstance.body = 'Para tu seguridad el pedido será enviado a la dirección registrada en ' + $payment + ', por favor verifica que sea correcta.';
    }

    public getChargeDelivery(): Product {
        let imgs = [];
        imgs[0] = [];
        imgs[0]['small'] = 'assets/images/productos/--.png';
        imgs[0]['medium'] = 'assets/images/productos/--.png';
        imgs[0]['big'] = 'assets/images/productos/--.png';
        let productDelivery = new Product(-1,
            'Manejo de Mercancía Envío paquetería',
            imgs,
            0,
            this.deliveryForm.controls.deliveryMethod.value['cost'],
            0,
            '',
            10,
            10,
            true,
            '',
            '',
            '',
            '',
            '',
            '',
            0,
            1,
            ''
        );
        return productDelivery;
    }

    public getChargePayment(): Product {
        let imgs = [];
        imgs[0] = [];
        imgs[0]['small'] = 'assets/images/productos/--.png';
        imgs[0]['medium'] = 'assets/images/productos/--.png';
        imgs[0]['big'] = 'assets/images/productos/--.png';
        let productPayment = new Product(-1,
            'Cargo por forma de pago',
            imgs,
            0,
            ((this.paymentForm.controls.paymentMethod.value['cost'] - 1) * this.grandTotal),
            0,
            '',
            10,
            10,
            true,
            '',
            '',
            '',
            '',
            '',
            '',
            0,
            1,
            ''
        );
        return productPayment;
    }

    public handleImgError(ev: any) {
        const source = ev.srcElement;
        const imgSrc = `assets/images/productos/generico2.jpg`;
        source.src = imgSrc;
    }

}
