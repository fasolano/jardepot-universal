import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatPaginator, MatSort, MatStepper, MatTableDataSource} from '@angular/material';
import {Data, AppService} from '../../app.service';
import {Product} from '../../app.models';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogComponent} from '../../shared/dialog/dialog.component';
import { CookieService } from 'ngx-cookie-service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Title} from '@angular/platform-browser';

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
  window;



  constructor(public appService: AppService, public formBuilder: FormBuilder, public dialog: MatDialog, private cookieService: CookieService) {
  }

  ngOnInit() {
    this.window = (typeof window !== "undefined") ? window : null;
    // this.dataSource = new MatTableDataSource(this.appService.Data.cartList);
    this.deliveryMethods = this.appService.getDeliveryMethods();
    this.paymentMethods = this.appService.getPaymentMethods();
    //formularios para la compra
    this.billingForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      suburb: ['', Validators.required],
      zip: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.billMandatoryForm = this.formBuilder.group({
      socialReason: ['', Validators.required],
      typePerson: ['', Validators.required],
      usoCFDI: ['', Validators.required],
      typePayment: ['', Validators.required],
      rfc: ['', Validators.required],
      email: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.deliveryForm = this.formBuilder.group({
      deliveryMethod: ['', Validators.required]
    });
    this.paymentForm = this.formBuilder.group({
      paymentMethod: ['', Validators.required]
    });
  }

  public calculateTotal(){
    let listProducts: Product[] =  this.appService.Data.cartList.slice();
    if (this.deliveryForm.controls.deliveryMethod.value['min'] > this.appService.Data.totalPrice){
      listProducts.push(this.getChargeDelivery());
      this.grandTotal = this.appService.Data.totalPrice + this.deliveryForm.controls.deliveryMethod.value['cost'];
    }else{
      this.grandTotal = this.appService.Data.totalPrice;
    }

    // this.Data.cartList.push(product);
    if(this.paymentForm.controls.paymentMethod.value['value'] != 'Transferencia'){
      listProducts.push(this.getChargePayment());
      this.openGenericDialog(this.paymentForm.controls.paymentMethod.value['value']);
      this.textButtonOrder = 'Pagar';
    }else{
      this.textButtonOrder = 'Crear orden de compra';
    }
    this.grandTotal = this.paymentForm.controls.paymentMethod.value['cost'] * this.grandTotal;
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
      payment: JSON.stringify(this.paymentForm.value),
      needBilling: this.showBilling
    };
    this.appService.createOrder(data).subscribe(data => {
      this.blockButtoms = true;
      // @ts-ignore
      if(data.data == 'success'){
        if (this.cookieService.check('session')) {
          this.cookieService.delete('session', '/');
        }
        this.horizontalStepper.next();
        this.verticalStepper.next();
      }else{
        // @ts-ignore
        let url = data.data;
        this.window.open(url, '_self');
      }
    });
  }

  public openGenericDialog($payment) {
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'generic-dialog',
      direction: 'ltr'
    });
    dialogRef.componentInstance.title = 'Consejo';
    dialogRef.componentInstance.body = 'Para tu seguridad el pedido será enviado a la dirección registrada en '+$payment+', por favor verifica que sea correcta.';
  }

  public getChargeDelivery(): Product{
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

  public getChargePayment(): Product{
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
