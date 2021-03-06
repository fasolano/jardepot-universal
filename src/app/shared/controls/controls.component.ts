import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Data, AppService} from '../../app.service';
import {Product} from '../../app.models';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
    @Input() product: Product;
    @Input() type: string;
    @Input() align: string;
    @Output() onOpenProductDialog: EventEmitter<any> = new EventEmitter();
    @Output() onQuantityChange: EventEmitter<any> = new EventEmitter<any>();
    public count: number = 1;
    public busy = false;

    constructor(public appService: AppService, public snackBar: MatSnackBar, public cookieService: CookieService, public router: Router) {
    }

    ngOnInit() {
        if (this.product) {
            if (this.product.cartCount > 0) {
                this.count = this.product.cartCount;
            }
        }
        this.layoutAlign();
    }

    public layoutAlign() {
        if (this.type == 'all') {
            this.align = 'space-between center';
        } else if (this.type == 'wish') {
            this.align = 'start center';
        } else {
            this.align = 'center center';
        }
    }


    public increment(count) {
        if (this.type == 'cart') {
            this.busy = true;
            setTimeout(() => {
                this.busy = false;
            }, 800);
        }
        if (this.count < this.product.availibilityCount) {
            this.count++;
            let obj = {
                productId: this.product.id,
                soldQuantity: this.count,
                total: this.count * this.product.newPrice
            };
            this.changeQuantity(obj);
        } else {
            this.snackBar.open('No sé pueden aumentar la cantidad de este producto ' + this.count + '.', '×', {
                panelClass: 'error',
                verticalPosition: 'top',
                duration: 3000
            });
        }
    }

    public decrement(count) {
        if (this.type == 'cart') {
            this.busy = true;
            setTimeout(() => {
                this.busy = false;
            }, 800);
        }
        if (this.count > 1) {
            this.count--;
            let obj = {
                productId: this.product.id,
                soldQuantity: this.count,
                total: this.count * this.product.newPrice
            };
            this.changeQuantity(obj);
        }
    }

    public addToCompare(product: Product) {
        this.appService.addToCompare(product);
    }

    public addToWishList(product: Product) {
        this.appService.addToWishList(product);
    }

    public addToCart(product: Product) {
        let currentProduct = this.appService.Data.cartList.filter(item => item.id == product.id)[0];
        if (currentProduct) {
            if ((currentProduct.cartCount + this.count) <= this.product.availibilityCount) {
                this.busy = true;
                product.cartCount = currentProduct.cartCount + this.count;
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
            this.busy = true;
            product.cartCount = this.count;
        }
        this.appService.addToCart(product).subscribe(data => {

        });
        setTimeout(() => {
            this.busy = false;
        }, 500);
    }

    public addToCartAndNavigate(product: Product) {
        let currentProduct = this.appService.Data.cartList.filter(item => item.id == product.id)[0];
        if (currentProduct) {
            if ((currentProduct.cartCount + 1) <= product.availibilityCount) {
                // this.busy = true;
                    product.cartCount = currentProduct.cartCount + this.count;

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
            product.cartCount = this.count;
        }
        if(this.cookieService.check('session')){
            this.appService.addToCart(product).subscribe(res => {
                this.router.navigate(['/cart']);
            });
        }else{
            this.appService.setCookieApp().subscribe(data => {
                this.appService.cookieValue = data;
                this.appService.setCookie( 'session', JSON.stringify(data), 3, '/');
                this.appService.addToCart(product).subscribe(res => {
                    this.router.navigate(['/cart']);
                });
            });
        }

    }

    public openProductDialog(event) {
        this.onOpenProductDialog.emit(event);
    }

    public changeQuantity(value) {
        this.onQuantityChange.emit(value);
    }

}
