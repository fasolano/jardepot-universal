import {
    Component, OnInit, ViewChild,
    ComponentFactoryResolver,
    ViewContainerRef, ComponentFactory, ComponentRef, ViewEncapsulation
} from '@angular/core';
import { Data, AppService } from '../../app.service';
import { Product } from '../../app.models';
import { PaypalButtonComponent } from '../../shared/paypal-button/paypal-button.component';
import {MatDialog, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    total = [];
    grandTotal = 0;
    cartItemCount = [];
    cartItemCountTotal = 0;
    componentRef: ComponentRef<any>;
    dataSource: MatTableDataSource<any>;
    displayedColumns = ['producto', 'nombre', 'precio', 'cantidad', 'total'];
    @ViewChild('paypalCont',{read: ViewContainerRef, static: true}) container: any;

    constructor(public appService: AppService, private _cfr: ComponentFactoryResolver, public dialog: MatDialog) {
        // constructor(public appService: AppService) {
    }

    public handleImgError(ev: any) {
        const source = ev.srcElement;
        const imgSrc = `assets/images/productos/generico2.jpg`;
        source.src = imgSrc;
    }

    ngAfterViewInit(){
        let listProducts: Product[] = this.appService.Data.cartList;
        this.appService.getProductsCart().subscribe(res => {
            if(res != null){
                let listProducts: Product[] = JSON.parse(res[0]);
                this.dataSource = new MatTableDataSource(listProducts);
            }
        });
    }

    ngOnInit() {
        this.appService.Data.cartList.forEach(product => {
            this.total.push({"id":product.id, "total":product.cartCount * product.newPrice});
            this.grandTotal += product.cartCount * product.newPrice;
            this.cartItemCount.push({"id":product.id, "soldQuantity":product.cartCount});
            this.cartItemCountTotal += product.cartCount;
        });
    }

    public addComponent(){
        const factory: ComponentFactory<PaypalButtonComponent> = this._cfr.resolveComponentFactory(PaypalButtonComponent);
        this.componentRef = this.container.createComponent(factory);
    }

    public destroyButton(){
        this.componentRef.destroy();
    }

    ngOnDestroy() {
        if(this.componentRef != undefined){
            this.componentRef.destroy();
        }
    }

    public getTotal($producto){
        if(this.total.length == 0){
            this.appService.Data.cartList.forEach(product => {
                this.total.push({"id":product.id, "total":product.cartCount * product.newPrice});
                this.grandTotal += product.cartCount * product.newPrice;
                this.cartItemCount.push({"id":product.id, "soldQuantity":product.cartCount});
                this.cartItemCountTotal += product.cartCount;
            });
        }
        return this.total.find(item => item.id == $producto).total;
    }

    public updateCart(value) {
        if (value) {
            let indexOf = this.dataSource.data.findIndex(item => item.id == value.productId);
            if(indexOf >= 0){
                this.dataSource.data[indexOf].cartCount = value.soldQuantity;
            }else{
                // this.total.push({"id":value.productId, "total":value.total});
            }

            indexOf = this.total.findIndex(item => item.id == value.productId);
            if(indexOf >= 0){
                this.total[indexOf].total = value.total;
            }else{
                this.total.push({"id":value.productId, "total":value.total});
            }

            indexOf = this.cartItemCount.findIndex(item => item.id == value.productId);
            if(indexOf >= 0){
                this.cartItemCount[indexOf].soldQuantity = value.soldQuantity;
            }else{
                this.cartItemCount.push({"id":value.productId, "soldQuantity":value.soldQuantity});
            }
            this.grandTotal = 0;
            this.total.forEach((price, index) => {
                this.grandTotal += price.total;
            });
            this.cartItemCountTotal = 0;
            this.cartItemCount.forEach((count, index) => {
                this.cartItemCountTotal += count.soldQuantity;
            });

            this.appService.Data.totalPrice = this.grandTotal;
            this.appService.Data.totalCartCount = this.cartItemCountTotal;
            let productTemp: Product;
            this.appService.Data.cartList.forEach(product => {
                this.cartItemCount.forEach((count, index) => {
                    if (product.id == count.id) {
                        if(value.productId == product.id){
                            productTemp = product;
                        }
                        product.cartCount = count.soldQuantity;
                    }

                });
            });
            this.appService.addToCart(productTemp).subscribe($data=>{

            });
        }
    }

    public remove(product) {
        const index: number = this.appService.Data.cartList.findIndex(item => item.id == product.id);
        if (index !== -1) {
            this.appService.Data.cartList.splice(index, 1);
            this.grandTotal = this.grandTotal - this.total[index].total;
            this.appService.Data.totalPrice = this.grandTotal;
            this.total.splice(index,1);

            this.cartItemCountTotal = this.cartItemCountTotal - this.cartItemCount[index].soldQuantity;
            this.appService.Data.totalCartCount = this.cartItemCountTotal;
            this.cartItemCount.splice(index,1);
            this.appService.resetProductCartCount(product);
            this.appService.removeFromCart(product);
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

    public openDialog(){
        this.dialog.open(PaypalButtonComponent, {
            panelClass: 'generic-dialog',
            direction: 'ltr'
        });
    }

    public changeString($productType, $brand, $mpn){
        $brand = $brand.replace(/ /g, "_");
        $mpn = $mpn.replace(/-/g, "_");
        $productType = $productType.replace(/ /g, "_");
        return $productType + '-' + $brand + '-' + $mpn;
    }

    public changeStringBrand($brand){
        return $brand.replace(/ /g, "_");
    }

}
