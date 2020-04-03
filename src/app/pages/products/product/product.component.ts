import {Component, HostListener, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {SwiperConfigInterface, SwiperDirective} from 'ngx-swiper-wrapper';
import {Data, AppService} from '../../../app.service';
import {Product} from '../../../app.models';
import {emailValidator} from '../../../theme/utils/app-validators';
import {ProductZoomComponent} from './product-zoom/product-zoom.component';
import {Title, Meta} from '@angular/platform-browser';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {DialogComponent} from '../../../shared/dialog/dialog.component';
import {ProductDialogComponent} from '../../../shared/products-carousel/product-dialog/product-dialog.component';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@Injectable({
    providedIn: 'root'
})
export class ProductComponent implements OnInit {
    @ViewChild('sidenav', {static: true}) sidenav: any;
    public sidenavOpen = true;
    @ViewChild('zoomViewer', {static: true}) zoomViewer;
    @ViewChild(SwiperDirective, {static: true}) directiveRef: SwiperDirective;
    public config: SwiperConfigInterface = {};
    public config2: SwiperConfigInterface = {};
    public product: Product;
    public image: any;
    public zoomImage: any;
    private sub: any;
    public form: FormGroup;
    public relatedProducts: Array<Product>;
    public brands = [];
    public productTypes = [];
    public additional = [];
    public dataSheet: string;
    public productName: string;
    public sendComment = false;
    json;
    faWhatsapp = faWhatsapp;
    public distributions = [];
    window;

    constructor(public appService: AppService,
                private activatedRoute: ActivatedRoute,
                public dialog: MatDialog,
                public formBuilder: FormBuilder,
                private cd: ChangeDetectorRef,
                private router: Router,
                public title: Title,
                private meta: Meta) {
    }

    ngOnInit() {
        this.window = (typeof window !== "undefined") ? window : null;
        this.sub = this.activatedRoute.params.subscribe(params => {
            /*setTimeout(() => {
                this.scrollToTop();
            }, 300);*/

            this.getProductByName(params.product);
            this.getRelatedProducts(params.product);
            this.productName = params.product;
            // this.scrollToTop();
        });

        if (this.window.innerWidth < 1280) {
            this.sidenavOpen = false;
        }

        /*this.getBrands();
        this.getProductTypes();
        this.getAdditional();*/
        this.form = this.formBuilder.group({
            comentario: [null, Validators.minLength(4)],
            nombre: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
            telefono: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern('[0-9]*')])],
            email: [null, Validators.compose([Validators.required, emailValidator])],
            whatsapp: [null, Validators.compose([Validators.minLength(10), Validators.pattern('[0-9]*')])],
            producto: [this.productName, Validators.compose([Validators.required])],
        });
        this.getDistributions();
    }

    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 4,
            spaceBetween: 10,
            keyboard: true,
            navigation: true,
            pagination: false,
            loop: false,
            preloadImages: false,
            lazy: false,
            breakpoints: {
                480: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 3,
                }
            }
        };
    }

    @HostListener('window:resize')
    public onWindowResize(): void {
        (this.window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    }

    public getRelatedProducts(product: any) {
        this.appService.getProductsRelated(product).subscribe(data => {
            this.relatedProducts = data;
            this.refreshPage();
        });
    }

    private getProductByName(product) {
        this.appService.getProductByName(product).subscribe(data => {
            // @ts-ignore
            if (data == 0) {
                this.router.navigate(['/busqueda/no-encontrado']);
                return;
            }
            this.product = data;
            this.json = {
                '@context': 'http://schema.org',
                '@type': 'Product',
                'name': this.product.name,
                'mpn': this.product.mpn,
                'brand': this.product.brand,
                'image': data.images[0].medium,
                'description': this.product.description,
                'offers': {
                    '@type': 'Offer',
                    'price': this.product.newPrice
                }
            };
            this.dataSheet = this.product.dataSheet;
            this.image = data.images[0].medium;
            this.zoomImage = data.images[0].big;
            this.meta.updateTag({name: 'description', content: this.product.metaDescription.substr(0, 150)});
            this.meta.updateTag({name: 'keywords', content: this.product.keywords});
            this.title.setTitle(this.product.metaTitle.substr(0, 70));
            this.refreshPage();
        });
    }

    public refreshPage() {
        setTimeout(() => {
            this.config.observer = true;
        });
        this.directiveRef.setIndex(0);
        this.cd.detectChanges();
        if (this.directiveRef.swiper()) {
            setTimeout(() => {
                this.directiveRef.swiper().lazy.load();
            }, 0);
        }
    }

    public selectImage(image) {
        this.image = image.medium;
        this.zoomImage = image.big;
    }

    public onMouseMove(e) {
        if (this.window.innerWidth >= 1280) {
            let image, offsetX, offsetY, x, y, zoomer;
            image = e.currentTarget;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            x = offsetX / image.offsetWidth * 100;
            y = offsetY / image.offsetHeight * 100;
            zoomer = this.zoomViewer.nativeElement.children[0];
            if (zoomer) {
                zoomer.style.backgroundImage = 'url(https://jardepot.com/' + this.zoomImage + ')';
                zoomer.style.backgroundPosition = x + '% ' + y + '%';
                zoomer.style.display = 'block';
                zoomer.style.height = image.height + 'px';
                zoomer.style.width = image.width + 'px';
            }
        }
    }

    public onMouseLeave(event) {
        this.zoomViewer.nativeElement.children[0].style.display = 'none';
    }

    public openZoomViewer() {
        this.dialog.open(ProductZoomComponent, {
            data: this.zoomImage,
            panelClass: 'zoom-dialog'
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public createForm() {
        this.form = this.formBuilder.group({
            comentario: [null, Validators.minLength(4)],
            nombre: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
            telefono: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern('[0-9]*')])],
            email: [null, Validators.compose([Validators.required, emailValidator])],
            whatsapp: [null, Validators.compose([Validators.minLength(10), Validators.pattern('[0-9]*')])],
            producto: [this.productName, Validators.compose([Validators.required])],
        });
    }

    public onSubmit(values: Object): void {
        if (this.form.valid) {
            this.appService.enviarBusqueda(values, '').subscribe(data => {
                const res = JSON.parse(JSON.stringify(data));
                this.sendComment = res;
                this.form.reset();
                this.createForm();
            });
        } else {
            this.sendComment = false;
        }
    }

    public handleImgError(ev: any) {
        const source = ev.srcElement;
        const imgSrc = `assets/images/productos/generico2.jpg`;
        source.src = imgSrc;
    }

    public openDeliveryTermsDialog() {
        const text = 'Los envíos gratuitos que ofrece JarDepot son a la cobertura terrestre normal de las paqueterías con las que tenemos convenio (ODM).<br>' +
            'NO aplica a zonas extendidas (En extra coberturas se le indicará la diferencia a pagar para su consideración).<br>' +
            'NO aplica con otras paqueterías<br>' +
            'El tiempo de entrega estimado y sujeto a existencias es de 2 a 6 días hábiles, (Mínimo/Máximo) contados a partir de las siguientes ' +
            '24 hrs de que su depósito se ha verificado y de recibir su correo con los datos completos para facturar y enviar su producto.<br><br>';
        const dialogRef = this.dialog.open(DialogComponent, {
            panelClass: 'generic-dialog',
            direction: 'ltr'
        });
        dialogRef.componentInstance.title = 'Condiciones de envíos Gratis:';
        dialogRef.componentInstance.body = text;
    }

    /*public scrollToTop() {
        // this.window = (typeof window !== "undefined") ? window : null;
        if(window){
            const scrollDuration = 20;
            const scrollStep = -window.pageYOffset / (scrollDuration / 20);
            const scrollInterval = setInterval(() => {
                if (window.pageYOffset !== 0) {
                    window.scrollBy(0, scrollStep);
                } else {
                    clearInterval(scrollInterval);
                }
            }, 10);
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    window.scrollTo(0, 0);
                });
            }
        }
    }*/

    public getDistributions() {
        this.distributions = this.appService.getDistributions();
    }
}
