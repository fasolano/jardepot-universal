import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {MatSnackBar} from '@angular/material';
import {Category, Product} from './app.models';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';


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
    // public urlAPI = 'https://jardepot.com/jardepotAPI/public';
    // public urlAPI = 'https://seragromex.com/jardepotAPI';
    public urlAPI = 'https://api.jardepot.com';
    // public urlAPI = 'http://localhost/jardepotAPI/public';
    // public urlAPI = 'http://192.168.1.88/jardepotAPI';

    constructor(public http: HttpClient, public snackBar: MatSnackBar, private cookieService: CookieService, private route: Router) {
    }

    public getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.url + 'categories.json');
    }

    public getProductsRelated(product): Observable<Product[]>{
        const headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        const params = new HttpParams().set('product', product);
        return this.http.get<Product[]>(this.urlAPI+'/api/products/related', {headers, params});
    }

    public getProducts(nivel1, nivel2, brandFilter, characteristicFilter): Observable<Product[]>{
        const headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        const params = new HttpParams().set('nivel1',nivel1).set('nivel2', this.filterHilo(nivel2)).set('brands', brandFilter).set('characteristics', characteristicFilter);
        return this.http.get<Product[]>(this.urlAPI+'/api/products', {headers, params});
    }

    public getSectionsProducts(nivel1, nivel2): Observable<Product[]>{
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        let params = new HttpParams().set('nivel1',nivel1).set('nivel2', this.filterHilo(nivel2));
        return this.http.get<Product[]>(this.urlAPI+'/api/products/sections', {headers, params});
    }

    public getProductByName(product): Observable<Product> {

        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        let params = new HttpParams().set('product',product);
        return this.http.get<Product>(this.urlAPI+'/api/product',{headers, params});
    }

    public getBanners(): Observable<any[]> {
        return this.http.get<any[]>(this.url + 'banners.json');
    }

    public getMenu() {
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        let params = '';
        return this.http.get<any[]>(this.urlAPI+'/api/menu/navbar', { headers });
    }

    public getProductTypes() {
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        let params = '';
        return this.http.get<any[]>(this.urlAPI+'/api/menu/productsTypes', { headers });
    }

    public getBrands() {
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        let params = '';
        return this.http.get<any[]>(this.urlAPI+'/api/menu/brands', { headers });
    }

    public getAdditional() {
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        let params = '';
        return this.http.get<any[]>(this.urlAPI+'/api/menu/additional', { headers });
    }

    public getFilters(productType){
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        let params = new HttpParams().set('productType', this.filterHilo(productType) );
        return this.http.get<any[]>(this.urlAPI+'/api/products/filters', { headers, params});
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

            let index = this.Data.cartList.findIndex(item => item.id == product.id);

            if (index >= 0) {
                this.Data.cartList[index] = product;
            }else{
                this.Data.cartList.push(product);
            }

            this.Data.cartList.forEach(product => {
                this.Data.totalPrice = this.Data.totalPrice + (product.cartCount * product.newPrice);
                this.Data.totalCartCount = this.Data.totalCartCount + product.cartCount;
            });

            message = 'El producto ' + product.name + ' ha sido agregado al carrito.';
            status = 'success';
            this.snackBar.open(message, '×', {panelClass: [status], verticalPosition: 'top', duration: 3000});
            const params = { 'product' : JSON.stringify(product), 'quantity' : product.cartCount, 'sessionCookie' : session };

            return this.http.post(this.urlAPI+'/api/cart/addProduct', params);
        } else {

        }
    }

    public setCookieApp(){
        const headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        return this.http.get(this.urlAPI + '/api/session', {headers});
    }

    public removeFromCart(product: Product){
        let message, status;
        let session = this.cookieService.get('session');

        message = 'El producto ' + product.name + ' ha sido eliminado del carrito.';
        status = 'error';
        this.snackBar.open(message, '×', {panelClass: [status], verticalPosition: 'top', duration: 3000});
        const params = new HttpParams().set('product', product.name).set('sessionCookie', session);
        this.http.delete(this.urlAPI+'/api/cart/removeProduct', {params}).subscribe(res => {
        });
    }

    public getProductsCart(){
        let session = this.cookieService.get('session');
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        let params = new HttpParams().set('sessionCookie', session );
        return this.http.get(this.urlAPI+'/api/cart/products', {headers, params});
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
            {value: 'cuernavaca', name: 'Entrega en sucursal Cuernavaca', desc: 'GRATIS / Entrega de 1 a 2 días hábiles *En algunos casos la entrega puede extenderse hasta 7 días hábiles en cuyo caso se lo haremos saber de inmediato.', cost:0, min:0},
            {value: 'pachuca', name: 'Entrega en sucursal Pachuca', desc: 'GRATIS / Entrega de 1 a 2 días hábiles *En algunos casos la entrega puede extenderse hasta 7 días hábiles en cuyo caso se lo haremos saber de inmediato.', cost:0, min:0}
        ];
    }

    public getPaymentMethods() {
        return [
            {value: 'PayPal', name: 'Paypal', desc: 'Realiza el pago con Paypal para empezar a procesar tu pedido de forma inmediata *Genera un comisión del 4%', cost:1.04},
            {value: 'MercadoPago', name: 'Mercado Pago', desc: 'Realiza el pago con Mercado pago para empezar a procesar tu pedido de forma inmediata *Genera un comisión del 4%', cost:1.04},
            {value: 'Transferencia', name: 'Transferencia Bancaria', desc: 'Realiza transferencia bancaria y envia el comprobante', cost:1}
        ];
    }

    public getProductLevels($productType) {
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        let params = new HttpParams().set('productType', this.filterHilo($productType) );
        return this.http.get<any[]>(this.urlAPI+'/api/product/levels', { headers, params });
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
        return this.http.get<Product[]>(this.urlAPI+'/api/products/search', {params});
    }

    public getProductsOffer(){
        return this.http.get<Product[]>(this.urlAPI+'/api/products/offer');
    }

    public createOrder(forms) {
        let session = this.cookieService.get('session');
        const params = {'forms': JSON.stringify(forms), 'sessionCookie': session};
        return this.http.post(this.urlAPI+'/api/checkout/createOrder', params);
    }

    public createMercadopago(order, products, client, delivery){
        const params = {'order': JSON.stringify(order), 'products': JSON.stringify(products), 'client': JSON.stringify(client), 'delivery': JSON.stringify(delivery)};
        return this.http.post('https://fasolano.com/jardepotAPI/api/checkout/mercadopago', params);
    }

    public confirmMercadopago($data){
        const params = {'data':$data};
        return this.http.post('https://fasolano.com/jardepotAPI/api/confirm/mercadopago', params);
    }

    public enviarBusqueda(forms, busqueda) {
        //  let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        let session = this.cookieService.get('session');
        const params = {'forms': JSON.stringify(forms), 'textoBuscado': busqueda, 'sessionCookie': session};
        return this.http.post(this.urlAPI+'/api/products/sendSearch', params);
    }

    public sendConfirmationPayment($state, $payment, $data, $token){
        let session = "";
        if(this.cookieService.check('session')){
            session = this.cookieService.get('session');
        }
        const params = {'state':$state, 'payment':$payment, 'data':$data, 'token': $token, 'sessionCookie':session};
        return this.http.post(this.urlAPI+'/api/confirm/checkout', params);
    }

    public getDescriptionNivel2(nivel1, nivel2) {
        let params = new HttpParams().set('nivel1', nivel1 ).set('nivel2', this.filterHilo(nivel2) );
        return this.http.get(this.urlAPI+'/api/products/getDescriptionNivel2', {params});
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
        return this.http.get(this.urlAPI+'/api/menu/breadcrumb', {params});
    }

    public payPalPayment($id){
        let products = [];
        this.Data.cartList.forEach(obj => {
            const price = obj.newPrice * obj.cartCount
            const product = {
                'reference_id': obj.name,
                'amount': {
                    'currency_code': 'MXN',
                    'value': price
                }
            }
            products.push(product)
        });
        return products;
    }

    public getCookie(name: string) {
        let documento = (typeof document !== "undefined") ? document : null;
        if(documento){
            let ca: Array<string> = documento.cookie.split(';');
            let caLen: number = ca.length;
            let cookieName = `${name}=`;
            let c: string;

            for (let i: number = 0; i < caLen; i += 1) {
                c = ca[i].replace(/^\s+/g, '');
                if (c.indexOf(cookieName) == 0) {
                    return c.substring(cookieName.length, c.length);
                }
            }
            return '';
        }
        return '';
    }

    public deleteCookie(name) {
        this.setCookie(name, '', -1);
    }

    public setCookie(name: string, value: string, expireDays: number, path: string = '') {
        let documento = (typeof document !== "undefined") ? document : null;
        if(documento){
            let d:Date = new Date();
            d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
            let expires:string = `expires=${d.toUTCString()}`;
            let cpath:string = path ? `; path=${path}` : '';
            documento.cookie = `${name}=${value}; ${expires}${cpath}`;
        }

    }

}
