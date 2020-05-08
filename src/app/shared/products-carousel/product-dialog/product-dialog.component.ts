import {Component, ViewEncapsulation, OnInit, Inject, Injectable} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {Data, AppService} from '../../../app.service';
import {Product} from '../../../app.models';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
@Injectable({
  providedIn: 'root'
})
export class ProductDialogComponent implements OnInit {
  public config: SwiperConfigInterface = {};

  constructor(public appService: AppService,
              public dialogRef: MatDialogRef<ProductDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public product: Product) {
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

  public changeString($productType, $brand, $mpn){
    $brand = $brand.replace(/ /g, "-").toLowerCase();
    $mpn = $mpn.toLowerCase();
    $productType = $productType.replace(/ /g, "-").toLowerCase();
    return $productType + '-' + $brand + '-' + $mpn;
  }

  public changeStringBrand($brand){
    return $brand.replace(/ /g, "-");
  }
  public handleImgError(ev: any) {
    const source = ev.srcElement;
    const imgSrc = `assets/images/productos/generico2.jpg`;
    source.src = imgSrc;
  }
}
