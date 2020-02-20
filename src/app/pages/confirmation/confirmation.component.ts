import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Data, AppService} from '../../app.service';
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

    constructor(private activatedRoute: ActivatedRoute, private appService: AppService, private spinner: NgxSpinnerService, private cookieService: CookieService) {}

    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            let temp: string;
            this.state = params['state'];
            temp = params['data'];
            this.framengData = temp.split('?');
            this.payment = this.framengData[0];
            this.data = this.framengData[1];
            this.activatedRoute.queryParams.subscribe(getParams => {
                this.data = getParams;
                if (JSON.stringify(this.data) == "{}"){
                }else{
                    setTimeout(() => { this.spinner.show(); }, 1000);
                    this.appService.sendConfirmationPayment(this.state, this.payment, JSON.stringify(this.data)).subscribe(response => {
                        if (this.cookieService.check('session')) {
                            this.cookieService.delete('session', '/');
                        }
                        this.done = true;
                        // @ts-ignore
                        this.state = response.data;
                        this.spinner.hide();
                    });
                }

            });
        });
    }

}
