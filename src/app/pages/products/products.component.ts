import { Component, OnInit, ViewChild, HostListener, Input, Injectable, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProductDialogComponent } from '../../shared/products-carousel/product-dialog/product-dialog.component';
import { AppService } from '../../app.service';
import { Product } from '../../app.models';
import { Settings, AppSettings } from 'src/app/app.settings';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
@Injectable({
    providedIn: 'root'
})
export class ProductsComponent implements OnInit {
    @ViewChild('sidenav', {static: true}) sidenav: any;
    public busy = 1;
    public sidenavOpen: boolean = true;
    private sub: any;
    nivel1: any;
    nivel2: any;
    private typeProductFilter: string;
    public viewType: string = 'grid';
    public viewCol: number = 25;
    public counts = [12, 24, 36];
    public count: any;
    public sortings = ['Más relevantes', 'Menor precio', 'Mayor precio'];
    public sort: any;
    public products: Array<Product> = [];
    public brands = [];
    public productTypes = [];
    public additional = [];
    public page: any;
    public settings: Settings;
    public sections: Array<any> = [];
    public listFilters: Array<any> = [];
    // ategoriesFilter probablemente no se utilizará
    public categoriesFilter: Array<any> = [];
    public orderByOption: string = 'relevant';
    public activeFilters: Array<any> = [];
    public busqueda: boolean = true;
    public busquedaEmpty: boolean = false;
    public textSearch: string = '';
    public searchSend: boolean = false;
    public form: FormGroup;
    public faWhatsapp = faWhatsapp;
    public descriptionNivel2: string;
    public titleProducts: string;
    public distributions = [];
    constructor(public appSettings: AppSettings,
                private activatedRoute: ActivatedRoute,
                public appService: AppService,
                public dialog: MatDialog,
                private router: Router,
                public formBuilder: FormBuilder,
                private meta: Meta,
                public title: Title, public snackBar: MatSnackBar) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.products = [];
        this.count = this.counts[0];
        this.sort = this.sortings[0];

        this.form = this.formBuilder.group({
            comentario: [null,  Validators.compose([Validators.minLength(4)])],
            nombre: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
            telefono: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern('[0-9]*')])]
        });

        this.sub = this.activatedRoute.params.subscribe(params => {
            this.moveToFirstPage();
            this.activeFilters['brand'] = [];
            this.activeFilters['characteristic'] = [];
            this.activeFilters['range'] = [];
            this.descriptionNivel2 = '';
            if (params['nivel1'] !== undefined && params['nivel2'] !== undefined) {
                this.nivel1 = params['nivel1'];
                this.nivel2 = params['nivel2'];
                this.busqueda = true;
                this.nivel1 = this.nivel1.replace(/-/g, ' ');
                this.nivel2 = this.nivel2.replace(/-/g, ' ');
                this.setTypeProductFilter(this.nivel1);
                this.filters(this.nivel2);
                this.getProducts();
                this.getSectionsProducts(this.nivel1, this.nivel2);
                this.appService.getDescriptionNivel2(this.nivel1, this.nivel2).subscribe(data => {
                    const res = JSON.parse(JSON.stringify(data));
                    this.descriptionNivel2 = res.result.texto;

                    this.meta.updateTag({name: 'description', content: res.result.metadescription.substr(0,150)});
                    this.meta.updateTag({name: 'keywords', content: res.result.keywords});
                    this.title.setTitle(res.result.metatitle.substr(0,70));
                });
                this.titleProducts = this.nivel2;
            } else if(params['search'] !== undefined) {
                this.busqueda = false;
                this.busquedaEmpty = false;
                this.appService.getProductsSearch(params['search']).subscribe(data => {
                    this.textSearch = params['search'];
                    this.orderByOption = 'default';
                    // @ts-ignore
                    if (data === 'emptyProducts') {
                        this.busquedaEmpty = true;
                        this.products = [];
                    } else {
                        this.products = data;
                    }
                    this.titleProducts = 'Buscaste: ' + this.textSearch;
                    this.meta.updateTag({name: 'description', content: 'Busca los productos que necesites Jardepot'});
                    this.meta.updateTag({name: 'keywords', content: 'Busca los productos que necesites Jardepot'});
                    this.title.setTitle('Jardepot, el lugar donde encuentras todo lo que necesitas');
                });
            } else {
                this.busqueda = false;
                this.appService.getProductsOffer().subscribe(data => {
                    this.meta.updateTag({name: 'description', content: 'Busca los productos con las mejores ofertas en Jardepot'});
                    this.meta.updateTag({name: 'keywords', content: 'Ofertas Jardepot'});
                    this.title.setTitle('Jardepot el lugar donde encuentras las mejores ofertas');
                    this.orderByOption = 'relevant';
                    // @ts-ignore
                    if (data === 'emptyProducts') {
                        this.busquedaEmpty = false;
                        this.products = [];
                        this.titleProducts = 'Sin productos en oferta: ';
                    } else {
                        this.products = data;
                        this.titleProducts = 'Productos en oferta: ';
                    }
                });
            }
        });

        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }

        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }

        this.getBrands();
        this.getProductTypes();
        this.getAdditional();
        this.getDistributions();
    }

    public addToCart(product: Product) {
        let currentProduct = this.appService.Data.cartList.filter(item => item.id == product.id)[0];
        if (currentProduct) {
            if ((currentProduct.cartCount + 1) <= product.availibilityCount) {
                // this.busy = true;
                product.cartCount = currentProduct.cartCount + 1;
            } else {
                // this.snackBar.open('You can not add more items than available. In stock ' + this.product.availibilityCount + ' items and you already added ' + currentProduct.cartCount + ' item to your cart', '×', {
                this.snackBar.open('No puedes agregar más de este producto', '×', {
                    panelClass: 'error',
                    verticalPosition: 'top',
                    duration: 5000
                });
                return false;
            }
        } else {
            // this.busy = true;
            product.cartCount = 1;
        }
        this.appService.addToCart(product).subscribe(res => {
            this.router.navigate(['/cart']);
        });
    }

    /*public addToCart(product){
        this.controlsComponent.addToCart(product);
        window.open('jardepot.com/cart', '_self');
    }*/

    public handleImgError(ev: any) {
        const source = ev.srcElement;
        const imgSrc = `assets/images/productos/generico2.jpg`;
        source.src = imgSrc;
    }

    public setTypeProductFilter($nivel1){
        $nivel1 = $nivel1.toLowerCase();
        if($nivel1 == "accesorios y consumibles" || $nivel1 == "equipos" || $nivel1 == "herramientas manuales" || $nivel1 == "refacciones" || $nivel1 == "fumigación"){
            this.typeProductFilter = 'marcas';
        }else if($nivel1 == "marcas" || $nivel1 == "agricultura" || $nivel1 == "jardinería" || $nivel1 == "fumigación"){
            this.typeProductFilter = 'equipos';
        }else{
            this.typeProductFilter = '';
        }
    }

    public moveToFirstPage() {
        this.page = 1;
        return;
    }

    public addCategoriteFilter($section, $event) {
        if (this.activeFilters['brand'].length == 0 || this.activeFilters['brand'].length == this.sections.length) {
            var buttons = document.getElementsByClassName('btn-section');
            // @ts-ignore
            for (let button of buttons) {
                button.classList.add('selected');
            }
            this.activeFilters['brand'] = [];
            this.activeFilters['brand'].push($section);
            $event.currentTarget.classList.remove('selected');
        } else {
            let existCategory = this.activeFilters['brand'].filter(section => section == $section);
            if (existCategory.length > 0) {
                this.activeFilters['brand'] = this.activeFilters['brand'].filter(section => section != $section);
                $event.currentTarget.classList.add('selected');
            } else {
                this.activeFilters['brand'].push($section);
                $event.currentTarget.classList.remove('selected');
            }
        }

        if (this.nivel1 === 'Marcas' && this.activeFilters['brand'].length == 1) {
            this.filters(this.activeFilters['brand'][0]);
        } else if (this.nivel1 === 'Marcas') {
            this.listFilters = [];
            this.activeFilters['characteristic'] = [];
            this.activeFilters['range'] = [];
        }
        this.getProducts();
        this.closeSideMenu();
    }

    public addCharacteristicFilter($characteristic, $filter, $event) {
        let characteristic = $filter.characteristic;
        let existFilter = this.activeFilters['characteristic'].filter(section => section.id == characteristic);
        if (existFilter.length > 0) {
            this.activeFilters['characteristic'].forEach((filter: any, key: any) => {
                if (filter.value == $characteristic && filter.id == characteristic) {
                    this.activeFilters['characteristic'].splice(key, 1);
                    $event.currentTarget.classList.add('selected');
                } else if (filter.id == characteristic) {
                    var buttons = document.getElementsByClassName('tipo-' + $filter.characteristic);
                    // @ts-ignore
                    for (let button of buttons) {
                        button.classList.add('selected');
                    }
                    this.activeFilters['characteristic'][key].value = $characteristic;
                    $event.currentTarget.classList.remove('selected');
                }
            });
        } else {
            $event.currentTarget.classList.remove('selected');
            this.activeFilters['characteristic'].push({id: characteristic, value: $characteristic, type: $filter.type});
        }
        this.getProducts();
        this.closeSideMenu();
    }

    public changeString($productType, $brand, $mpn) {
        $brand = $brand.replace(/ /g, '_').toLowerCase();
        $mpn = $mpn.replace(/-/g, '_').toLowerCase();
        $productType = $productType.replace(/ /g, '_').toLowerCase();
        return $productType + '-' + $brand + '-' + $mpn;
    }

    public changeStringBrand($brand) {
        return $brand.replace(/ /g, '_').toLowerCase();
    }

    public getBrands() {
        this.appService.getBrands().subscribe(data => {
            this.brands = data;
        });
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

    public getProducts() {
        if (this.busy) {
            this.busy = 0;
            let brandFilters = this.activeFilters['brand'];
            brandFilters = brandFilters.join();
            let characteristicsFilters = this.activeFilters['characteristic'];
            characteristicsFilters = JSON.stringify(characteristicsFilters);
            this.appService.getProducts(this.nivel1, this.nivel2, brandFilters, characteristicsFilters).subscribe(data => {
                this.busy = 1;
                if(brandFilters == "" && characteristicsFilters == "[]" && data.length < 1){
                    this.router.navigate(['404']);
                }else{
                    this.products = data;
                }
            });
        }

    }

    public getChangeRange(id) {
        this.activeFilters['characteristic'].forEach((filter: any, key: any) => {
            if (filter.id == id) {
                this.activeFilters['characteristic'][key].value = this.activeFilters['range'][id];
            }
        });
        this.getProducts();
        this.closeSideMenu();
    }

    public getSectionsProducts(nivel1, nivel2) {
        this.appService.getSectionsProducts(nivel1, nivel2).subscribe(data => {
            this.sections = data;
        });
    }

    @HostListener('window:resize')
    public onWindowResize(): void {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    }

    public changeCount(count) {
        this.count = count;
    }

    public changeViewType(viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
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

    public filters(productType) {
        if (productType.substr(productType.length - 2, productType.length - 1) == 'as' || productType.substr(productType.length - 2, productType.length - 1) == 'os') {
            productType = productType.substr(0, productType.length - 1);
        } else if (productType.substr(productType.length - 2, productType.length - 1) == 'es') {
            productType = productType.substr(0, productType.length - 2);
        }
        this.appService.getFilters(productType).subscribe(data => {
            this.listFilters = data;
            for (let filter of this.listFilters) {
                if (filter.type == 2) {
                    this.activeFilters['characteristic'].push({id: filter.characteristic, value: filter.valueMax, type: filter.type});
                    this.activeFilters['range'][filter.characteristic] = filter.valueMax;
                }
            }
        });
    }

    public onPageChanged(event) {
        this.page = event;
        // this.getProducts();
        window.scrollTo(0, 0);
    }

    public onSubmitTeLlamamos(values: Object): void {
        if (this.form.valid) {
            this.appService.enviarBusqueda(values, this.textSearch).subscribe(data => {
                const res = JSON.parse(JSON.stringify(data));
                this.searchSend = res.resultado;
            });
            this.form.reset();
        } else {
            this.searchSend = false;
        }
    }

    public openDeliveryTermsDialog() {
        const text = 'Los envíos gratuitos que ofrece JarDepot son a la cobertura terrestre normal de las paqueterías con las que tenemos convenio (ODM).<br>' +
            'NO aplica a zonas extendidas (En extra coberturas se le indicará la diferencia a pagar para su consideración).<br>' +
            'Las compras deben ser mayor a $3,000.00 MXN<br>' +
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

    public getDistributions() {
        this.distributions = this.appService.getDistributions();
    }

    public closeSideMenu(){
        if(!this.sidenavOpen){
            this.sidenav.close();
        }
    }
}
