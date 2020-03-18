import {Component, ViewEncapsulation, OnInit, Inject} from '@angular/core';

;
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';


@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {
    public title;
    public body;
    public config: SwiperConfigInterface = {};

    constructor(public dialogRef: MatDialogRef<DialogComponent>) {
    }


    ngOnInit() {
    }

    ngAfterViewInit() {
        this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        };
    }

    public close(): void {
        this.dialogRef.close();
    }

}
