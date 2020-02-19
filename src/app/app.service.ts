import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {MatSnackBar} from '@angular/material';
import {Category, Product} from './app.models';
import {CookieService} from 'ngx-cookie-service';

export class Data {
    constructor(public categories: Category[],
                public compareList: Product[],
                public wishList: Product[],
                public cartList: Product[],
                public totalPrice: number,
                public totalCartCount: number) {
    }
}

@Injectable()
export class AppService {
    public Data = new Data(
        [], // categories
        [], // compareList
        [],  // wishList
        [],  // cartList
        null, // totalPrice,
        0 // totalCartCount
    );
    public cookieValue: any = 'UNKNOWN';

    public url = 'assets/data/';
    public urlAPI = 'https://jardepot.com/jardepotAPI';
    // public urlAPI = 'https://seragromex.com/jardepotAPI';
    // public urlAPI = 'http://koot.mx/jardepotAPI';
    // public urlAPI = 'http://localhost/jardepotAPI';
    // public urlAPI = 'http://192.168.1.88/jardepotAPI';

    constructor(public http: HttpClient, public snackBar: MatSnackBar, private cookieService: CookieService) {
    }

    public getProductsRelated(product): Observable<Product[]> {
        const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
        const params = new HttpParams().set('product', product);
        return this.http.get<Product[]>(this.urlAPI + '/public/api/products/related', {headers, params});
    }

    public getProducts(nivel1, nivel2, brandFilter, characteristicFilter): Observable<Product[]>{
        const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
        const params = new HttpParams().set('nivel1', nivel1).set('nivel2', this.filterHilo(nivel2)).set('brands', brandFilter).set('characteristics', characteristicFilter);
        return this.http.get<Product[]>(this.urlAPI + '/public/api/products', {headers, params});
    }

    public getSectionsProducts(nivel1, nivel2): Observable<Product[]>{
        let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
        let params = new HttpParams().set('nivel1', nivel1).set('nivel2', this.filterHilo(nivel2));
        return this.http.get<Product[]>(this.urlAPI+ '/public/api/products/sections', {headers, params});
    }

    public getProductByName(product): Observable<Product> {
        let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
        let params = new HttpParams().set('product', product);
        return this.http.get<Product>(this.urlAPI + '/public/api/product',{headers, params});
    }

    public getBanners(): any[]{
        return [
            { title: "Jardinería", subtitle: "Un pasto bien cuidado...<br>Comienza con el equipo adecuado.", image: "assets/images/productos/Cover/podadora.jpg", url: ""},
            { title: "Agricultura", subtitle: "Tu proyecto merece el mejor respaldo.", image: "assets/images/productos/Cover/motocultor.jpg" },
            { title: "Aspersoras", subtitle: "Para cuidar tu esfuerzo,<br>es bueno contar con el mejor equipo", image: "assets/images/productos/Cover/aspersora.jpg" }
        ];
    }

    public getMenu() {
        let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
        let params = '';
        return this.http.get<any[]>(this.urlAPI + '/public/api/menu/navbar', { headers });
    }

    public getProductTypes() {
        let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
        let params = '';
        return this.http.get<any[]>(this.urlAPI + '/public/api/menu/productsTypes', { headers });
    }

    public getBrands() {
        let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
        let params = '';
        return this.http.get<any[]>(this.urlAPI + '/public/api/menu/brands', { headers });
    }

    public getAdditional() {
        let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
        let params = '';
        return this.http.get<any[]>(this.urlAPI + '/public/api/menu/additional', { headers });
    }

    public getFilters(productType){
        let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
        let params = new HttpParams().set('productType', this.filterHilo(productType) );
        return this.http.get<any[]>(this.urlAPI + '/public/api/products/filters', { headers, params});
    }

    public addToCompare(product: Product) {
        let message, status;
        if (this.Data.compareList.filter(item => item.id == product.id)[0]) {
            message = 'The product ' + product.name + ' already added to comparison list.';
            status = 'error';
        } else {
            this.Data.compareList.push(product);
            message = 'The product ' + product.name + ' has been added to comparison list.';
            status = 'success';
        }
        this.snackBar.open(message, '×', {panelClass: [status], verticalPosition: 'top', duration: 3000});
    }

    public addToWishList(product: Product) {
        let message, status;
        if (this.Data.wishList.filter(item => item.id == product.id)[0]) {
            message = 'The product ' + product.name + ' already added to wish list.';
            status = 'error';
        } else {
            this.Data.wishList.push(product);
            message = 'The product ' + product.name + ' has been added to wish list.';
            status = 'success';
        }
        this.snackBar.open(message, '×', {panelClass: [status], verticalPosition: 'top', duration: 3000});
    }

    public addToCart(product: Product) {
        if (this.cookieService.check('session')) {
            let message, status;
            let session = this.cookieService.get('session');

            this.Data.totalPrice = null;
            this.Data.totalCartCount = null;

            const index = this.Data.cartList.findIndex(item => item.id == product.id);

            if (index >= 0) {
                this.Data.cartList[index] = product;
            } else {
                this.Data.cartList.push(product);
            }

            this.Data.cartList.forEach( product => {
                this.Data.totalPrice = this.Data.totalPrice + (product.cartCount * product.newPrice);
                this.Data.totalCartCount = this.Data.totalCartCount + product.cartCount;
            });

            message = 'El producto ' + product.name + ' ha sido agregado al carrito.';
            status = 'success';
            this.snackBar.open(message, '×', {panelClass: [status], verticalPosition: 'top', duration: 3000});
            const params = {'product':JSON.stringify(product), 'quantity':product.cartCount, 'sessionCookie':session};
            this.http.post(this.urlAPI+'/public/api/cart/addProduct', params).subscribe(res => {
            });
        } else {
            const headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
            this.http.get(this.urlAPI + '/public/api/session', {headers}).subscribe(data => {
                this.cookieValue = data;
                this.cookieService.set( 'session', JSON.stringify(data), null, '/' );
                this.addToCart(product);
            });
        }
    }

    public removeFromCart(product: Product){
        let message, status;
        let session = this.cookieService.get('session');

        message = 'El producto ' + product.name + ' ha sido eliminado del carrito.';
        status = 'error';
        this.snackBar.open(message, '×', {panelClass: [status], verticalPosition: 'top', duration: 3000});
        const params = new HttpParams().set('product', product.name).set('sessionCookie', session);
        this.http.delete(this.urlAPI+'/public/api/cart/removeProduct', {params}).subscribe(res => {
        });
    }

    public getProductsCart(){
        let session = this.cookieService.get('session');
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        let params = new HttpParams().set('sessionCookie', session );
        return this.http.get(this.urlAPI+'/public/api/cart/products', {headers, params});
    }

    public resetProductCartCount(product: Product) {
        this.removeFromCart(product);
        product.cartCount = 0;
    }

    public getDistributions() {
        return [
            {name: '', image: 'assets/images/distribucion/mclibre.jpg', url: 'https://eshops.mercadolibre.com.mx/jardepot', type:'img'},
            {name: 'Tienda Cuernavaca', image: 'location_on', url: 'https://goo.gl/maps/X217x5HGYWMCLJqSA', type:'map'},
            {name: '', image: 'assets/images/distribucion/claroshop.jpg', url: 'https://www.claroshop.com/Tienda/124005/JarDepot.com/', type:'img'},
            {name: '', image: 'assets/images/distribucion/elektra.jpg', url: 'https://www.elektra.com.mx/husqvarna', type:'img'},
            {name: 'Tienda Pachuca', image: 'location_on', url: 'https://g.page/JARDEPOT?share', type:'map'},
            {name: '', image: 'assets/images/distribucion/walmart.jpg', url: 'https://www.walmart.com.mx/productos?Ntt=husqvarna', type:'img'}
        ];
    }

    public getDeliveryMethods() {
        return [
            // {value: 'ocurre', name: 'Envio a Ocurre', desc: '$100.00 MXN / Entrega de 2 a 6 días hábiles *Compras mayores a 2500 gratis', cost:100, min:2500},
            {value: 'domicilio', name: 'Envio a domicilio', desc: '$300.00 MXN / Entrega de 2 a 6 días hábiles *Compras mayores a $3,000.00 gratis y en área de cobertura', cost:300, min:3000},
            {value: 'cuernavaca', name: 'Entrega en sucursal Cuernavaca', desc: 'GRATIS / Entrega de 1 a 2 días hábiles *La entrega extender a 6 días hábiles', cost:0, min:0},
            {value: 'pachuca', name: 'Entrega en sucursal Pachuca', desc: 'GRATIS / Entrega de 1 a 2 días hábiles *La entrega extender a 6 días hábiles', cost:0, min:0}
        ];
    }

    public getPaymentMethods() {
        return [
            {value: 'PayPal', name: 'Paypal', desc: 'Realiza el pago con Paypal para empezar a procesar tu pedido de forma inmediata *Genera un comisión del 4%', cost:1.04},
            // {value: 'MercadoPago', name: 'Mercado Pago', desc: 'Realiza el pago con Mercado pago para empezar a procesar tu pedido de forma inmediata *Genera un comisión del 4%', cost:1.04},
            {value: 'Transferencia', name: 'Transferencia Bancaria', desc: 'Realiza transferencia bancaria y envia el comprobante', cost:1}
        ];
    }

    public getProductLevels($productType) {
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        let params = new HttpParams().set('productType', this.filterHilo($productType) );
        return this.http.get<any[]>(this.urlAPI+'/public/api/product/levels', { headers, params });
    }

    errorHandl(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }

    public getProductsSearch(valorSearch){
        let session = this.cookieService.get('session');
        let params = new HttpParams().set('valorSearch', valorSearch );
        return this.http.get<Product[]>(this.urlAPI+'/public/api/products/search', {params});
    }

    public getProductsOffer(){
        return this.http.get<Product[]>(this.urlAPI+'/public/api/products/offer');
    }

    public createOrder(forms) {
        let session = this.cookieService.get('session');
        const params = {'forms': JSON.stringify(forms), 'sessionCookie': session};
        return this.http.post(this.urlAPI+'/public/api/checkout/createOrder', params);
    }

    public enviarBusqueda(forms, busqueda) {
        //  let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        let session = this.cookieService.get('session');
        const params = {'forms': JSON.stringify(forms), 'textoBuscado': busqueda, 'sessionCookie': session};
        return this.http.post(this.urlAPI+'/public/api/products/sendSearch', params);
    }

    public sendConfirmationPayment($state, $payment, $data){
        const params = {'state':$state, 'payment':$payment, 'data':$data};
        return this.http.post(this.urlAPI+'/public/api/confirm/checkout', params);
    }

    public getDescriptionNivel2(nivel1, nivel2) {
        let params = new HttpParams().set('nivel1', nivel1 ).set('nivel2', this.filterHilo(nivel2) );
        return this.http.get(this.urlAPI+'/public/api/products/getDescriptionNivel2', {params});
    }

    public filterHilo(productType) {
        let productType1;
        if (productType === 'Hilo Nylon' || productType === 'hilo nylon') {
            productType1 = 'Hilo-Nylon';
        } else {
            productType1 = productType;
        }
        return productType1;
    }

    public defineBreadcrumb($params, $previousUrl, $component){
        let params = new HttpParams().set('params', $params ).set('previousUrl', $previousUrl).set('component', $component);
        return this.http.get(this.urlAPI+'/public/api/menu/breadcrumb', {params});
    }

}