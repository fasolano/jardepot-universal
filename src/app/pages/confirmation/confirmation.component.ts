import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppService} from '../../app.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

    private sub: any;
    public state: string;
    public data: any;
    public payment: string;
    public framengData: string[];
    public done = false;
    public billingForPaypal = "";
    public window;

    constructor(private activatedRoute: ActivatedRoute, private appService: AppService, private spinner: NgxSpinnerService, private cookieService: CookieService) {}

    ngOnInit() {

        this.window = (typeof window !== "undefined") ? window : null;

        if (this.window) {
            this.window.scrollTo(0, 0);
        }
        this.sub = this.activatedRoute.params.subscribe(params => {
            let temp: string;
            this.state = params['state'];
            temp = params['data'];
            this.framengData = temp.split('?');
            this.payment = this.framengData[0];
            this.data = this.framengData[1];
            this.activatedRoute.queryParams.subscribe(getParams => {
                this.data = getParams;
                if (this.data != ""){
                    this.billingForPaypal = this.data.status.toLocaleLowerCase();
                    this.state = this.data.status.toLocaleLowerCase();
                    this.state = this.state == 'completed' ? 'success':this.state;
                    this.appService.sendConfirmationPayment(this.state, 'button', JSON.stringify(this.data), params['token']).subscribe(response => {
                        if (this.cookieService.check('session')) {
                            this.appService.deleteCookie('session');
                        }
                        this.done = true;
                        // @ts-ignore
                        this.state = response.data;
                        if(this.state == 'success'){
                            this.appService.Data.cartList = [];
                            this.appService.Data.totalPrice = 0;
                            this.appService.Data.totalCartCount = 0;
                        }
                        this.spinner.hide();
                    });
                }else if(JSON.stringify(this.data) == "{}"){
                    setTimeout(() => { this.spinner.show(); }, 1000);
                    if(this.payment == 'MercadoPago'){
                        this.appService.confirmMercadopago(JSON.stringify(this.data)).subscribe(responseMP =>{
                            // @ts-ignore
                            this.appService.sendConfirmationPayment(this.state, this.payment, JSON.stringify(this.data), responseMP.data).subscribe(response => {
                                if (this.cookieService.check('session')) {
                                    this.appService.deleteCookie('session');
                                }
                                this.done = true;
                                // @ts-ignore
                                this.state = response.data;
                                this.spinner.hide();
                            });
                        });
                    }else{
                        this.appService.sendConfirmationPayment(this.state, this.payment, JSON.stringify(this.data), "").subscribe(response => {
                            if (this.cookieService.check('session')) {
                                this.appService.deleteCookie('session');
                            }
                            this.done = true;
                            // @ts-ignore
                            this.state = response.data;
                            this.spinner.hide();
                        });
                    }
                }
            });
        });
    }

}
