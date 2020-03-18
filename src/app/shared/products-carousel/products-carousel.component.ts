import {Component, OnInit, Input, Injectable, ChangeDetectorRef, ViewChild, ChangeDetectionStrategy, ElementRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DecimalPipe} from '@angular/common';
import {SwiperConfigInterface, SwiperDirective, SwiperComponent } from 'ngx-swiper-wrapper';
import {MatDialog} from '@angular/material';
import {ProductDialogComponent} from './product-dialog/product-dialog.component';
import {Data, AppService} from '../../app.service';
import {Product} from '../../app.models';
import {Settings, AppSettings} from 'src/app/app.settings';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

@Injectable({
  providedIn: 'root'
})

export class ProductsCarouselComponent implements OnInit {

  @Input('products') products: Array<Product> = [];

  @ViewChild(SwiperDirective, {static: true}) directiveRef2: SwiperDirective;
  // @ViewChild('swiperEl', {static: true}) directiveRef2: SwiperDirective;
  public config: SwiperConfigInterface = {};
  public settings: Settings;
  private sub: any;

  constructor(public appSettings: AppSettings,
              public appService: AppService,
              public dialog: MatDialog,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private cd2: ChangeDetectorRef
  ) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.refreshPage();
      setTimeout(() => {
        this.refreshPage();
      }, 1000);
    });
  }

  ngAfterViewInit() {
    this.config = {
      observer: true,
      observeParents: true,
      slidesPerView: 6,
      spaceBetween: 16,
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,
      loop: false,
      preloadImages: false,
      lazy: true,
      breakpoints: {
        480: {
          slidesPerView: 1
        },
        740: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 5,
        }
      }
    };
  }

  public openProductDialog(product) {
    let dialogRef = this.dialog.open(ProductDialogComponent, {
      data: product,
      panelClass: 'product-dialog',
      direction: (this.settings.rtl) ? 'rtl' : 'ltr'
    });
    dialogRef.afterClosed().subscribe(product => {
      if (product) {
        this.router.navigate(['/', product.id, product.name]);
      }
    });
  }

  public refreshPage(){
    // @ts-ignore
    // this.directiveRef2.nativeElement.swiper.update();
    // this.directiveRef2 = this.directiveRef2.nativeElement.swiper;
    this.directiveRef2.update();
    setTimeout(() => {
      this.config.observer = true;
    });
    this.directiveRef2.setIndex(0);
    this.cd2.detectChanges();
    if (this.directiveRef2.swiper()) {
      setTimeout(() => {
        this.directiveRef2.swiper().lazy.load();
      }, 0);
    }
  }

  public changeString($productType, $brand, $mpn){
    $brand = $brand.replace(/ /g, "_").toLowerCase();
    $mpn = $mpn.replace(/-/g, "_").toLowerCase();
    $productType = $productType.replace(/ /g, "_").toLowerCase();
    return $productType + '-' + $brand + '-' + $mpn;
  }

  public changeStringBrand($brand){
    return $brand.replace(/ /g, "_").toLowerCase();
  }

  public handleImgError(ev: any) {
    const source = ev.srcElement;
    const imgSrc = `assets/images/productos/generico2.jpg`;
    source.src = imgSrc;
  }
}
