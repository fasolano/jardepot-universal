import {Component, OnInit, HostListener, ViewChild, AfterViewInit, ViewEncapsulation, Output, EventEmitter, Input} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {Settings, AppSettings} from '../app.settings';
import {AppService} from '../app.service';
import {Category, Product} from '../app.models';
import {SidenavMenuService} from '../theme/components/sidenav-menu/sidenav-menu.service';
import {TelephoneDialogComponent} from '../theme/components/menu/telephone-dialog/telephone-dialog.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {CookieService} from 'ngx-cookie-service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [SidenavMenuService]
})
export class PagesComponent implements OnInit, AfterViewInit {
    // tslint:disable-next-line:no-inferrable-types
    @Output() onOpenTelephoneDialog: EventEmitter<any> = new EventEmitter();
    public showBackToTop: boolean = false;
    public categories: Category[];
    public category: Category;
    public brands = [];
    public productTypes = [];
    public additional = [];
    public sidenavMenuItems: Array<any>;
    public actualUrl: string;
    public actualUrls: string[];
    public visibleCart = false;
    public busy = true;
    public productoLink: string;
    public whatsappText: string;
    public productFormat: string;
    @ViewChild('sidenav', {static: true}) sidenav: any;

    public settings: Settings;
    formSearch: FormGroup;
    faWhatsapp = faWhatsapp;
    window = null;

    constructor(public appSettings: AppSettings,
                public appService: AppService,
                private activatedRoute: ActivatedRoute,
                public sidenavMenuService: SidenavMenuService,
                public router: Router,
                public dialog: MatDialog,
                private cookieService: CookieService,
                private fb: FormBuilder,
                public snackBar: MatSnackBar) {

        this.router.events.subscribe(event => {
            this.actualUrl = this.router.url;
            this.actualUrls = this.actualUrl.split('/');
            if (this.actualUrls[1] == 'catalogo') {
                this.productoLink = this.actualUrls[3];
                this.productFormat = this.productoLink.replace(/-/g, ' ').replace(/_/g, '-');
                this.whatsappText = 'mas de ' + this.productFormat;
                this.visibleCart = true;
            } else {
                this.whatsappText = '';
                this.visibleCart = false;
            }
        });
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.window = (typeof window !== "undefined") ? window : null;
        // this.getProductsCart();
        this.sidenavMenuItems = this.sidenavMenuService.getSidenavMenuItems();
        this.getBrands();
        this.getProductTypes();
        this.getAdditional();
        this.createForm();
    }

    createForm() {
        this.formSearch = this.fb.group({
            valorSearch: [null, Validators.required],
            // userNum: null, userDate: [null, Validators.required],
        });
    }

    public getBrands() {
        this.appService.getBrands().subscribe(data => {
            this.brands = data;
            this.brands.forEach(brand => {
                brand.selected = false;
            });
        });
    }

    public getProductsCart() {

        /*total = [];
        grandTotal = 0;
        cartItemCount = [];
        cartItemCountTotal = 0;*/
        if (this.cookieService.check('session')) {
            this.appService.getProductsCart().subscribe(res => {
                if (res == null) {
                    this.cookieService.delete('session', '/');
                } else {
                    this.appService.Data.cartList = JSON.parse(res[0]);
                    this.appService.Data.totalPrice = null;
                    this.appService.Data.totalCartCount = null;
                    this.appService.Data.cartList.forEach(product => {
                        this.appService.Data.totalPrice = this.appService.Data.totalPrice + (product.cartCount * product.newPrice);
                        this.appService.Data.totalCartCount = this.appService.Data.totalCartCount + product.cartCount;
                    });
                }
            });
        }
    }

    public getAdditional() {
        this.appService.getAdditional().subscribe(data => {
            this.additional = data;
        });
    }

    public getProductTypes() {
        this.appService.getProductTypes().subscribe(data => {
            this.productTypes = data;
        });
    }

    public changeCategory(event) {
        if (typeof window !== "undefined"){
            if (event.target) {
                this.category = this.categories.filter(category => category.name === event.target.innerText)[0];
            }
            if (this.window.innerWidth < 960) {
                this.stopClickPropagate(event);
            }
        }

    }

    public remove(product) {
        const index: number = this.appService.Data.cartList.indexOf(product);
        if (index !== -1) {
            this.appService.Data.cartList.splice(index, 1);
            this.appService.Data.totalPrice = this.appService.Data.totalPrice - product.newPrice * product.cartCount;
            this.appService.Data.totalCartCount = this.appService.Data.totalCartCount - product.cartCount;
            this.appService.resetProductCartCount(product);
        }
    }

    public clear() {
        this.appService.Data.cartList.forEach(product => {
            this.appService.resetProductCartCount(product);
        });
        this.appService.Data.cartList.length = 0;
        this.appService.Data.totalPrice = 0;
        this.appService.Data.totalCartCount = 0;
    }

    public stopClickPropagate(event: any) {
        event.stopPropagation();
        event.preventDefault();
    }

    public search() {
        const valor = this.formSearch.value.valorSearch;
        if (valor !== '') {
            this.router.navigate(['/busqueda/', valor]);
        }
    }

    public scrollToTop() {
        if(this.window) {
            const scrollDuration = 200;
            const scrollStep = -this.window.pageYOffset / (scrollDuration / 20);
            const scrollInterval = setInterval(() => {
                if (this.window.pageYOffset !== 0) {
                    this.window.scrollBy(0, scrollStep);
                } else {
                    clearInterval(scrollInterval);
                }
            }, 10);
            if (this.window.innerWidth <= 768) {
                setTimeout(() => {
                    this.window.scrollTo(0, 0);
                });
            }
        }

    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll($event) {
        ($event.target.documentElement.scrollTop > 300) ? this.showBackToTop = true : this.showBackToTop = false;
    }

    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.sidenav.close();
            }
        });
        this.sidenavMenuService.expandActiveSubMenu(this.sidenavMenuService.getSidenavMenuItems());
    }

    public closeSubMenus() {
        if (this.window.innerWidth < 960) {
            this.sidenavMenuService.closeAllSubMenus();
        }
    }

    public openTelephoneDialog() {
        const dialogRef = this.dialog.open(TelephoneDialogComponent, {
            panelClass: 'telephone-dialog',
            direction: 'ltr'
        });
    }

    public getProductByUrl() {
        this.appService.getProductByName(this.productoLink).subscribe(data => {
            this.addProducToCart(data);
        });
    }

    public addProducToCart(product: Product) {
        if (this.busy) {
            const currentProduct = this.appService.Data.cartList.filter(item => item.id == product.id)[0];
            if (currentProduct) {
                if ((currentProduct.cartCount + 1) <= product.availibilityCount) {
                    this.busy = false;
                    product.cartCount = currentProduct.cartCount + 1;
                } else {
                    this.snackBar.open('No puedes agregar más de este producto', '×', {
                        panelClass: 'error',
                        verticalPosition: 'top',
                        duration: 5000
                    });
                    return false;
                }
            } else {
                this.busy = false;
                product.cartCount = 1;
            }
            this.appService.addToCart(product);
            setTimeout(() => {
                this.busy = true;
            }, 500);
        }
    }

    public handleImgError(ev: any) {
        const source = ev.srcElement;
        const imgSrc = `assets/images/productos/generico2.jpg`;
        source.src = imgSrc;
    }

    public fixDisappearIOSBug() {
        if (typeof document !== 'undefined') {
            const styleNode = document.createElement('style');
            styleNode.type = 'text/css';
            styleNode.id = 'panel-fix';
            styleNode.appendChild(document.createTextNode('.mat-menu-panel{overflow: initial !important;}'));
            document.getElementsByTagName('head')[0].appendChild(styleNode);
            setTimeout(() => {
                styleNode.remove();
            }, 500);
        }
    }

}

