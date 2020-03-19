(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\" class=\"h-100 app\" [ngClass]=\"settings.theme\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\"> \r\n    <router-outlet></router-outlet> \r\n    <ngx-spinner bdColor=\"rgba(51,51,51,0.7)\" size=\"large\" color=\"#fff\" type=\"ball-clip-rotate\"></ngx-spinner>     \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pages.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pages.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n\r\n    <mat-sidenav [opened]=\"false\" mode=\"over\" #sidenav class=\"sidenav mat-elevation-z6\" style=\"\" id=\"sidenavMenu\">\r\n        <div fxLayoutAlign=\"space-between center\">\r\n            <h2 class=\"fn-color-jd\">Menú Jardepot</h2>\r\n            <button mat-icon-button color=\"warn\" class=\"close bg-color-jd\" (click)=\"sidenav.close()\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n        </div>\r\n        <div class=\"divider\"></div>\r\n        <app-sidenav-menu [menuItems]=\"sidenavMenuItems\" [menuParentId]=\"0\"></app-sidenav-menu>\r\n        <div class=\"divider\"></div>\r\n        <div class=\"text-center py-2\">\r\n            <a href=\"https://www.facebook.com/Jardepot\" target=\"_blank\">\r\n                <svg class=\"social-icon fll-color-jd\" viewBox=\"0 0 24 24\">\r\n                    <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z\"/>\r\n                </svg>\r\n            </a>\r\n            <a href=\"https://www.instagram.com/jardepotsade/\" target=\"_blank\" style=\"padding-left: 20px;\">\r\n                <svg class=\"social-icon fll-color-jd\" viewBox=\"0 0 24 24\"\r\n                     style=\"height: 40px; margin-bottom: 4px; margin-right: 5px;\">\r\n                    <path d=\"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z\"/>\r\n                </svg>\r\n            </a>\r\n            <a href=\"https://www.youtube.com/channel/UCym0cCHYeEDqs70RD7Zs2-g\" target=\"_blank\" style=\"padding-left: 25px;\">\r\n                <svg class=\"social-icon fll-color-jd\" viewBox=\"0 0 24 24\">\r\n                    <path d=\"M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z\"/>\r\n                </svg>\r\n            </a>\r\n        </div>\r\n    </mat-sidenav>\r\n\r\n\r\n    <mat-toolbar color=\"primary\" ngStyle.lt-sm=\"z-index: 3; position: fixed\" ngStyle.gt-xs=\"z-index: 3;position: fixed\">\r\n        <mat-toolbar-row class=\"tel-movil\">\r\n            <div style=\"width: 100%;\" ngStyle.sm=\"z-index: 3;position: fixed;\">\r\n                <div fxLayoutAlign=\"space-between center\" class=\"top-toolbar theme-container barra \"\r\n                     fxLayout=\"row-reverse\">\r\n                     <span fxHide=\"false\" fxHide.gt-sm>\r\n                         <button mat-button (click)=\"sidenav.toggle()\" class=\"sidenav-toggle\"\r\n                                 style=\"vertical-align: text-bottom; margin-right: 10px;margin-top: 15px\">\r\n                             <mat-icon style=\"font-size: 40px; vertical-align: baseline;\">menu</mat-icon>\r\n                         </button>\r\n                     </span>\r\n                    <div class=\"top-menu\" fxLayout=\"row\">\r\n                         <span class=\"\" fxLayoutAlign=\"center center\" style=\"cursor: pointer;font-size: 24px\"\r\n                               ngStyle.md=\"font-size: 22px\" (click)=\"openTelephoneDialog()\">\r\n                           &nbsp;  <mat-icon class=\"mat-icon-sm\">call</mat-icon>Más teléfonos <mat-icon\r\n                                 class=\"mat-icon-sm\">arrow_drop_down</mat-icon>\r\n                         </span>\r\n                    </div>\r\n                    <div fxFlex=\"80\" fxLayout=\"row wrap\" fxShow=\"false\" fxShow.gt-sm\r\n                         style=\"font-size: 28px; margin-left: 10px;\" ngStyle.md=\"font-size: 25px\">\r\n                        <div fxFlex=\"35\" fxFlex.lt-lg=\"42\">\r\n                            Llámanos al: <a href=\"tel:8002129225\" style=\"text-decoration: none;\">(800)212 9225</a>\r\n                        </div>\r\n                        <div fxFlex=\"21\" fxFlex.lt-lg=\"27\" style=\"font-size: 20px;\">\r\n                            CDMX (55) 4996 8849\r\n                        </div>\r\n                        <div fxFlex=\"21\" fxFlex.lt-lg=\"25\" style=\"font-size: 20px;\">\r\n                            GDL (33) 1728 3353\r\n                        </div>\r\n                        <div fxFlex=\"21\" fxFlex.lt-lg=\"25\" style=\"font-size: 20px;\">\r\n                            EDOMX (722) 648 1040\r\n                        </div>\r\n                    </div>\r\n                    <!--<span class=\"\"  >\r\n                        ,<span style=\"font-size: 20px;\"> en <br> y </span>&nbsp;\r\n                    </span>-->\r\n                </div>\r\n            </div>\r\n        </mat-toolbar-row>\r\n\r\n        <!--<mat-toolbar-row style=\"padding: 0 ;height: 32px\">\r\n             <div style=\"z-index: 2;position: fixed;width: 100%;\">\r\n                 <div fxLayoutAlign=\"space-between center\" class=\"top-toolbar theme-container barra \" fxLayout=\"row-reverse\">\r\n                 <span fxHide=\"false\" fxHide.gt-sm>\r\n                     <button mat-button (click)=\"sidenav.toggle()\" class=\"sidenav-toggle\" style=\"vertical-align: text-bottom; margin-right: 10px;margin-top: 15px\" >\r\n                         <mat-icon style=\"font-size: 40px; vertical-align: baseline;\">menu</mat-icon>\r\n                     </button>\r\n                 </span>\r\n                     <span class=\"\" fxShow=\"false\" fxShow.gt-sm style=\"font-size: 26px\"  ngStyle.md=\"font-size: 23px\">\r\n                         Llámanos al: <a href=\"tel:8002129225\" style=\"text-decoration: none;\">(800) 212 9225 </a>  &nbsp;<span style=\"font-size: 23px;\">JarDepot ¡Tu equipo siempre contigo!</span>  &nbsp;</span>\r\n                     <div class=\"top-menu\" fxLayout=\"row\">\r\n                     <span class=\"\" fxLayoutAlign=\"center center\" style=\"cursor: pointer;font-size: 24px\" ngStyle.md=\"font-size: 22px\" (click)=\"openTelephoneDialog()\">\r\n                       &nbsp;  <mat-icon class=\"mat-icon-sm\">call</mat-icon>Teléfonos de contacto <mat-icon class=\"mat-icon-sm\">arrow_drop_down</mat-icon>\r\n                     </span>\r\n                     </div>\r\n                 </div>\r\n             </div>\r\n        </mat-toolbar-row>-->\r\n\r\n        <!--<mat-toolbar-row class=\"tel-movil\">\r\n            <div style=\"z-index: 2;position: fixed;width: 100%;\">\r\n                <div fxLayoutAlign=\"space-between center\" class=\"top-toolbar theme-container barra\"\r\n                     fxLayout=\"row-reverse\">\r\n                    <span fxHide=\"false\" fxHide.gt-sm>\r\n                        <button mat-button (click)=\"sidenav.toggle()\" class=\"sidenav-toggle\"\r\n                                style=\"vertical-align: text-bottom; margin-right: 10px;margin-top: 15px\">\r\n                            <mat-icon style=\"font-size: 40px; vertical-align: baseline;\">menu</mat-icon>\r\n                        </button>\r\n                    </span>\r\n                    <div fxShow=\"false\" fxLayout=\"row wrap\" fxShow.gt-sm style=\"font-size: 18px\" ngStyle.md=\"font-size: 14px\"  fxLayoutAlign=\"end center\">\r\n                        <div fxLayout=\"row wrap\" >\r\n                            <div fxFlex=\"23\">\r\n                                <div fxLayout=\"row\">Sin costo:&nbsp;<a href=\"tel:8002129225\">(800) 212 9225</a>&nbsp;</div>\r\n                                <div fxLayout=\"row\">Mayoreo&nbsp;<a href=\"tel:5531324245\">(55) 3132 4245</a>&nbsp;</div>\r\n                            </div>\r\n                            <div fxFlex=\"19\">\r\n                                <div fxLayout=\"row\">CDMX&nbsp;<a href=\"tel:5549968849\">(55) 4996 8849</a>&nbsp;&nbsp;&nbsp;&nbsp;</div>\r\n                                <div fxLayout=\"row\">CDMX&nbsp;<a href=\"tel:5549974360\">(55) 4997 4360</a>&nbsp;&nbsp;&nbsp;&nbsp;</div>\r\n                            </div>\r\n                            <div fxFlex=\"19\">\r\n                                <div fxLayout=\"row\">MTY&nbsp;<a href=\"tel:8120635708\">(812) 063 5708</a>&nbsp;</div>\r\n                                <div fxLayout=\"row\">GDL&nbsp;<a href=\"tel:3317283353\">(33) 1728 3353</a>&nbsp;</div>\r\n\r\n                            </div>\r\n                            <div fxFlex=\"19\">\r\n                                <div fxLayout=\"row\">MOR&nbsp;<a href=\"tel:7773179630\">(777) 317 9630</a>&nbsp;&nbsp;</div>\r\n                                <div fxLayout=\"row\">MCH&nbsp;<a href=\"tel:4433560484\">(443) 356 0484</a>&nbsp;</div>\r\n                            </div>\r\n                            <div fxFlex=\"19\">\r\n                                <div fxLayout=\"row\">EDO.MX&nbsp;<a href=\"tel:7226481040\">(722) 648 1040</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\r\n                                <div fxLayout=\"row\">HGO&nbsp;<a href=\"tel:7716887808\">(771) 688 7808</a>&nbsp;</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"top-menu\" fxLayout=\"row\">\r\n                        <span class=\"\" fxLayoutAlign=\"center center\" style=\"cursor: pointer;font-size: 22px\"\r\n                              ngStyle.md=\"font-size: 22px\" (click)=\"openTelephoneDialog()\">\r\n                          &nbsp;  <mat-icon class=\"mat-icon-sm\">call</mat-icon>Teléfonos <mat-icon class=\"mat-icon-sm\">arrow_drop_down</mat-icon>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </mat-toolbar-row>-->\r\n\r\n        <!-- Esta es para que este prendiendo y apagando\r\n        <mat-toolbar-row fxLayoutAlign=\"space-between center\" class=\"top-toolbar theme-container barra\" fxLayout=\"row-reverse\">\r\n             <span fxHide=\"false\" fxHide.gt-sm>\r\n                 <button mat-button (click)=\"sidenav.toggle()\" class=\"sidenav-toggle\" style=\"vertical-align: text-bottom; margin-right: 10px;\">\r\n                     <mat-icon style=\"font-size: 40px; vertical-align: baseline;\">menu</mat-icon>\r\n                 </button>\r\n             </span>\r\n             <span class=\"parpadea\" fxShow=\"false\" fxShow.gt-sm>Jardepot ¡Tu equipo siempre contigo! Llamanos al: (800) 212 9225</span>\r\n             <div class=\"top-menu\" fxLayout=\"row\">\r\n                 <span class=\"parpadea\" fxLayoutAlign=\"center center\" style=\"cursor: pointer;\" (click)=\"openTelephoneDialog()\">\r\n                      <mat-icon class=\"mat-icon-sm\">call</mat-icon>Teléfonos de contacto <mat-icon class=\"mat-icon-sm\">arrow_drop_down</mat-icon>\r\n                 </span>\r\n             </div>\r\n         </mat-toolbar-row>-->\r\n        <mat-toolbar-row fxLayoutAlign=\"space-between center\" style=\"margin-top: 0; margin-bottom: 12px;\"\r\n                         class=\"theme-container\">\r\n            <!--        <mat-toolbar-row fxLayoutAlign=\"space-between center\" style=\"margin-top: 32px; margin-bottom: 12px;\" class=\"theme-container\">-->\r\n            <div fxFlex=\"25\" fxFlex.lt-md=\"80\">\r\n                <a class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\">\r\n                    <img src=\"assets/images/logos/logoJardepot.png\" alt=\"Logo Jardepot\" title=\"Logo Jardepot\"\r\n                         style=\"max-height: 50px; max-width: 50vw;\">\r\n                </a>\r\n            </div>\r\n            <div fxShow=\"false\" fxShow.gt-sm fxFlex=\"55\">\r\n                <form [formGroup]=\"formSearch\" method=\"get\" class=\"search-form\" fxLayout=\"row\" (ngSubmit)=\"search()\">\r\n                    <!--                    <input type=\"text\" placeholder=\"Busca tu producto...\" [(ngModel)]=\"valorSearch\" [ngModelOptions]=\"{standalone: true}\" fxFlex>-->\r\n                    <input type=\"text\" placeholder=\"Busca tu producto...\" formControlName=\"valorSearch\" fxFlex>\r\n                    <button mat-mini-fab (click)=\"search()\" type=\"submit\"\r\n                            class=\"search-btn mat-elevation-z0 text-muted\">\r\n                        <mat-icon>search</mat-icon>\r\n                    </button>\r\n                </form>\r\n            </div>\r\n            <div fxFlex=\"20\" fxLayoutAlign=\"end center\">\r\n                <div fxLayoutAlign=\"center center\">\r\n                    <button mat-button [matMenuTriggerFor]=\"cartMenu\" #cartMenuTrigger=\"matMenuTrigger\"\r\n                            class=\"flex-row-button\">\r\n                        <mat-icon class=\"mat-icon-lg fn-color-jd\">shopping_cart</mat-icon>\r\n                        <span *ngIf=\"appService.Data.totalCartCount > 0\"\r\n                              class=\"cart-items-count\">{{appService.Data.totalCartCount}}</span>\r\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxShow=\"false\" fxShow.gt-xs\r\n                             class=\"top-cart\">\r\n                            <span>Carrito de compras</span>\r\n                            <span *ngIf=\"appService.Data.totalCartCount > 0\">\r\n                                <bdi>{{appService.Data.totalCartCount}} Producto<span\r\n                                        *ngIf=\"appService.Data.totalCartCount > 1\">s</span> -\r\n                                    $<span>{{appService.Data.totalPrice | number : '1.2-2'}}</span>\r\n                                </bdi>\r\n                            </span>\r\n                        </div>\r\n                        <mat-icon class=\"mat-icon-sm\">arrow_drop_down</mat-icon>\r\n                    </button>\r\n                    <mat-menu #cartMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\"\r\n                              class=\"top-menu-dropdown cart-dropdown\" (click)=\"fixDisappearIOSBug()\">\r\n                        <ng-template matMenuContent>\r\n                            <span class=\"d-block\">\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted\">\r\n                                    <b><span>{{appService.Data.totalCartCount}} PRODUCTO<span\r\n                                            *ngIf=\"appService.Data.totalCartCount > 1\">S</span></span></b>\r\n                                    <b><a [routerLink]=\"['/cart']\" class=\"text-muted\">VER CARRITO</a></b>\r\n                                </div>\r\n                                <div class=\"divider mt-1\"></div>\r\n                                <div *ngIf=\"appService.Data.totalCartCount == 0\" class=\"py-1 text-muted text-center\">No tienes ningún producto en tu carrito todavía</div>\r\n                                <mat-list>\r\n                                    <mat-list-item *ngFor=\"let product of appService.Data.cartList\">\r\n                                        <h3 matLine class=\"text-muted\"> {{product.name}} </h3>\r\n                                        <p matLine class=\"text-muted\">\r\n                                            <bdi>{{product.cartCount}} x ${{product.newPrice | number : '1.2-2'}}</bdi>\r\n                                        </p>\r\n                                        <img [src]=\"product.images[0].small\" (error)=\"handleImgError($event)\"\r\n                                             alt=\"image\">\r\n                                        <button mat-icon-button color=\"warn\" class=\"remove\"\r\n                                                (click)=\"remove(product);stopClickPropagate($event)\"\r\n                                                matTooltip=\"Eliminar\" matTooltipPosition=\"before\">\r\n                                            <mat-icon class=\"mat-icon-sm\">close</mat-icon>\r\n                                        </button>\r\n                                    </mat-list-item>\r\n                                </mat-list>\r\n                                <div *ngIf=\"appService.Data.cartList.length > 0\" class=\"cart-dropdown-footer\">\r\n                                    <div class=\"divider mt-1\"></div>\r\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted mt-1\">\r\n                                        <b>TOTAL:</b>\r\n                                        <b class=\"new-price\">${{appService.Data.totalPrice | number : '1.2-2'}}</b>\r\n                                    </div>\r\n                                    <div class=\"divider mt-1\"></div>\r\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mt-1\">\r\n                                        <button mat-mini-fab color=\"warn\" (click)=\"clear();stopClickPropagate($event)\"\r\n                                                matTooltip=\"Borrar todo\" matTooltipPosition=\"after\">\r\n                                            <mat-icon>remove_shopping_cart</mat-icon>\r\n                                        </button>\r\n                                        <a [routerLink]=\"['/checkout']\" mat-mini-fab class=\"bg-color-jd\"\r\n                                           matTooltip=\"Pagar\" matTooltipPosition=\"before\">\r\n                                            <mat-icon>check</mat-icon>\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                            </span>\r\n                        </ng-template>\r\n                    </mat-menu>\r\n                </div>\r\n            </div>\r\n        </mat-toolbar-row>\r\n\r\n        <mat-toolbar-row fxHide=\"false\" fxHide.gt-sm fxLayoutAlign=\"start center\" class=\"theme-container\">\r\n            <div fxFlex=\"100\" fxLayoutAlign=\"start center\">\r\n                <div fxLayoutAlign=\"center center\" fxFlex=\"100\">\r\n                    <form [formGroup]=\"formSearch\" method=\"get\" class=\"search-form\" fxLayout=\"row\" style=\"width: 100%;\"\r\n                          (ngSubmit)=\"search()\">\r\n                        <input type=\"text\" placeholder=\"Busca tu producto...\" formControlName=\"valorSearch\" fxFlex>\r\n                        <button mat-mini-fab (click)=\"search()\" type=\"submit\"\r\n                                class=\"search-btn mat-elevation-z0 text-muted\">\r\n                            <mat-icon>search</mat-icon>\r\n                        </button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </mat-toolbar-row>\r\n\r\n    </mat-toolbar>\r\n\r\n\r\n    <app-telephone-bar></app-telephone-bar>\r\n    <app-menu fxShow=\"false\" fxShow.gt-sm></app-menu>\r\n\r\n\r\n    <div class=\"theme-container main\">\r\n        <app-breadcrumb></app-breadcrumb>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n\r\n\r\n    <!-- <app-options></app-options> -->\r\n\r\n    <app-footer></app-footer>\r\n\r\n    <div *ngIf=\"showBackToTop && visibleCart\" fxLayout=\"row\" fxLayoutAlign=\"center center\"\r\n         class=\"cart-footer transition\">\r\n        <a (click)=\"getProductByUrl()\" style=\"color:#fff;margin: auto\">\r\n            <mat-icon>shopping_cart</mat-icon>\r\n        </a>\r\n    </div>\r\n\r\n    <div *ngIf=\"showBackToTop\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"call-footer transition\">\r\n        <a href=\"tel:8002129225\" style=\"color:#fff;margin: auto\">\r\n            <mat-icon>call</mat-icon>\r\n        </a>\r\n    </div>\r\n\r\n    <div *ngIf=\"showBackToTop\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"WA-footer transition\">\r\n        <a href=\"https://wa.me/525551857805?text=Hola,%20me%20gustaría%20saber%20{{whatsappText}}\" target=\"_blank\">\r\n            <fa-icon [icon]=\"faWhatsapp\" style=\"font-size: 25px;color:#fff\"></fa-icon>\r\n        </a>\r\n    </div>\r\n\r\n    <div *ngIf=\"showBackToTop\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"back-to-top transition\"\r\n         (click)=\"scrollToTop()\">\r\n        <mat-icon>arrow_upward</mat-icon>\r\n    </div>\r\n\r\n\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/banners/banners.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/banners/banners.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banners-container\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" *ngIf=\"banners.length > 0\"\r\n     style=\"max-height: 400px;\" style=\"max-width: 100%;\">\r\n    <div fxLayout=\"row\" fxLayout.gt-sm=\"column\" fxLayout.xs=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"40\">\r\n        <div class=\"banner\" fxFlex=\"50\" fxFlex.gt-sm=\"60\" [ngStyle]=\"bannerResize[0]\" style=\"min-height: 117px; background-position-y: inherit;\">\r\n            <a [routerLink]=\"['/Equipos/Podadoras']\" style=\"text-decoration: none; width: 100%;\">\r\n                <div class=\"info\" fxLayoutAlign=\"start start\">\r\n                    <div class=\"px-2\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n                        <h2 class=\"title\" style=\"text-align: left; font-size: 36px; font-weight: 500;\">{{getBanner(0).title}}</h2>\r\n                        <h3 class=\"subtitle\" [innerHTML]=\"getBanner(0).subtitle\" style=\"text-align: left;\"></h3>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n        </div>\r\n        <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"40\">\r\n            <a [routerLink]=\"['/Equipos/Motocultores']\" style=\"text-decoration: none; width: 100%;\">\r\n                <div class=\"banner\" fxFlex [ngStyle]=\"bannerResize[1]\"\r\n                     style=\"min-height: 117px; background-position-y: inherit;\">\r\n                    <div class=\"info\" fxLayoutAlign=\"end end\">\r\n                        <div class=\"px-2\" fxLayout=\"column\" fxLayoutAlign=\"end end\">\r\n                            <h2 class=\"title\" style=\"font-size: 36px; font-weight: 500;\">{{getBanner(1).title}}</h2>\r\n                            <h3 class=\"subtitle\" [innerHTML]=\"getBanner(1).subtitle\"></h3>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayout.gt-sm=\"column\" fxLayout.xs=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"60\">\r\n        <!--<div fxLayout=\"row\" fxFlexOrder=\"2\" fxFlexOrder.gt-sm=\"1\" fxFlex=\"50\" fxFlex.gt-sm=\"33\">\r\n            <div class=\"banner\" fxFlex [ngStyle]=\"getBgImage(3)\">\r\n                <div class=\"info\" fxLayoutAlign=\"space-around center\">\r\n                    <div class=\"px-2\" fxLayout=\"column\" fxLayoutAlign=\"end center\">\r\n                      <h2 class=\"title\">{{getBanner(3).title}}</h2>\r\n                      <h4 class=\"subtitle\">{{getBanner(3).subtitle}}</h4>\r\n                      <a [routerLink]=\"['/products']\" mat-raised-button color=\"primary\" class=\"mt-2 bg-color-jd\">Comprar ahora4</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"banner\" fxFlex [ngStyle]=\"getBgImage(4)\">\r\n                <div class=\"info\" fxLayoutAlign=\"center center\">\r\n                    <div class=\"px-2\" fxLayout=\"column\" fxLayoutAlign=\"end center\">\r\n                      <h2 class=\"title\">{{getBanner(4).title}}</h2>\r\n                      <h4 class=\"subtitle\">{{getBanner(4).subtitle}}</h4>\r\n                      <a [routerLink]=\"['/products']\" mat-raised-button color=\"primary\" class=\"mt-2 bg-color-jd\">Comprar ahora5</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>-->\r\n        <div class=\"banner\" fxFlexOrder=\"1\" fxFlexOrder.gt-sm=\"2\" fxFlex=\"50\" fxFlex.gt-sm=\"100\"\r\n             [ngStyle]=\"bannerResize[2]\">\r\n            <a [routerLink]=\"['/Equipos/Aspersoras']\" style=\"text-decoration: none; width: 100%;\">\r\n                <div class=\"info\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                    <div class=\"px-2\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                        <h2 class=\"title\" style=\"text-align: left; font-size: 36px; font-weight: 500;\">{{getBanner(2).title}}</h2>\r\n                        <h3 class=\"subtitle\" [innerHTML]=\"getBanner(2).subtitle\" style=\"text-align: left;\"></h3>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/brands-carousel/brands-carousel.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/brands-carousel/brands-carousel.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"brands-carousel\">\r\n    <div class=\"swiper-container h-100\" [swiper]=\"config\">\r\n        <p class=\"mat-card-title\">Nuestros canales de distribución en México</p>\r\n        <div class=\"swiper-wrapper h-100\">\r\n            <div *ngFor=\"let brand of brands\" class=\"swiper-slide\">\r\n                <div class=\"p-0\" fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"height: 112px;\">\r\n                    <a href=\"{{brand.url}}\" target=\"_blank\" class=\"brand-item\" style=\"text-decoration: none;\">\r\n                        <img *ngIf=\"brand.type == 'img'\" [attr.data-src]=\"brand.image\" class=\"swiper-lazy\" alt=\"{{brand.image}}\"\r\n                             style=\"width: 140px;height: 140px;min-height: 140px;min-width: 140px;max-height: 140px;max-width: 140px;\">\r\n                        <mat-icon *ngIf=\"brand.type == 'map'\" class=\"fn-color-jd\" style=\"font-size: 65px; height: 65px; width: 65px;\">{{brand.image}}</mat-icon>\r\n                    </a>\r\n                    <div *ngIf=\"brand.type == 'img'\" class=\"swiper-lazy-preloader\"></div>\r\n                    <p *ngIf=\"brand.type == 'map'\" class=\"text-default\">{{brand.name}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <button mat-icon-button class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n        <button mat-icon-button class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/controls/controls.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/controls/controls.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Diseño en el grid de todos los productos -->\r\n<div *ngIf=\"type!='cart' && type!='product'\" fxLayout=\"column\" fxLayout.xs=\"column\" [fxLayoutAlign]=\"align\" class=\"text-muted\" style=\"height: 40px;\">\r\n    <!--    <div *ngIf=\"product?.availibilityCount > 0 && type!='carousel'\">-->\r\n    <!--        <bdi>-->\r\n    <!--            <span class=\"fw-500\">Cantidad:</span>-->\r\n    <!--            <br>-->\r\n    <!--            <button mat-icon-button matTooltip=\"Quitar\" (click)=\"decrement()\"><mat-icon>remove</mat-icon></button>-->\r\n    <!--            <span> {{count}} </span>-->\r\n    <!--            <button mat-icon-button matTooltip=\"Más\" (click)=\"increment()\"><mat-icon>add</mat-icon></button>-->\r\n    <!--        </bdi>-->\r\n    <!--    </div>-->\r\n    <div *ngIf=\"product?.stock\">\r\n        <button mat-button matTooltip=\"Agregar\" [disabled]=\"busy\" *ngIf=\"product?.availibilityCount > 0\" (click)=\"addToCart(product)\"><mat-icon class=\"fn-color-jd\">shopping_cart</mat-icon> Agregar al carrito</button>\r\n        <button *ngIf=\"type!='all'\" mat-icon-button matTooltip=\"Vista rápida\" (click)=\"openProductDialog(product)\"><mat-icon>remove_red_eye</mat-icon></button>\r\n    </div>\r\n</div>\r\n\r\n<!-- Organización en la parte de producto -->\r\n<div *ngIf=\"type=='product' && product?.stock\" fxLayout.gt=\"column\" fxLayout=\"row wrap\" fxLayoutAlign=\"start start\" class=\"text-muted p-1\">\r\n    <div *ngIf=\"product?.availibilityCount > 0\" fxFlex.gt-md=\"100\" fxFlex=\"40\">\r\n        <bdi>\r\n            <span class=\"fw-500\">Cantidad:</span>\r\n            <br>\r\n            <button mat-icon-button matTooltip=\"Quitar\" (click)=\"decrement()\"><mat-icon>remove</mat-icon></button>\r\n            <span> {{count}} </span>\r\n            <button mat-icon-button matTooltip=\"Más\" (click)=\"increment()\"><mat-icon>add</mat-icon></button>\r\n        </bdi>\r\n    </div>\r\n    <div fxFlex.gt-md=\"100\" fxFlex=\"50\" class=\"area-btn-shopping\">\r\n        <button mat-button matTooltip=\"Agregar\" class=\"btn-shopping\" [disabled]=\"busy\" *ngIf=\"product?.availibilityCount > 0\" (click)=\"addToCart(product)\"><!--<mat-icon>shopping_cart</mat-icon> -->Agregar al carrito</button>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Organización en la pate del carrito -->\r\n<div *ngIf=\"type=='cart' && product?.stock\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayout.xs=\"column\" class=\"text-muted\">\r\n    <div *ngIf=\"product?.availibilityCount > 0\">\r\n        <bdi>\r\n            <button mat-icon-button matTooltip=\"Quitar\" [disabled]=\"busy\" (click)=\"decrement()\"><mat-icon>remove</mat-icon></button>\r\n            <span> {{count}} </span>\r\n            <button mat-icon-button matTooltip=\"Más\" [disabled]=\"busy\" (click)=\"increment()\"><mat-icon>add</mat-icon></button>\r\n        </bdi>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/dialog/dialog.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/dialog/dialog.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-container\" fxLayout=\"column\" ngStyle.gt-sm=\"width: 700px;\">\n    <div class=\"close-btn-outer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <h2>{{title}}</h2>\n        <button mat-mini-fab color=\"warn\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\n    </div>\n    <div mat-dialog-content style=\"max-height: 80vh;\">\n        <div fxLayout=\"row wrap\">\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"100\">\n                <div class=\"py-1 text-muted\" fxLayout=\"row wrap\" >\n                    <strong [innerHTML]=\"body\"></strong>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/json-ld/json-ld.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/json-ld/json-ld.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [innerHTML]=\"jsonLD\"></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/paypal-button/paypal-button.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/paypal-button/paypal-button.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-container\" fxLayout=\"column\" ngStyle.gt-sm=\"width: 700px;\">\n    <div class=\"close-btn-outer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <h2>Pagar con Paypal</h2>\n        <button mat-mini-fab color=\"warn\" (click)=\"close()\">\n            <mat-icon>close</mat-icon>\n        </button>\n    </div>\n    <div mat-dialog-content style=\"max-height: 80vh;\">\n        <div>*Se agregará una comisión del 4% por método de pago Paypal</div>\n        <div fxShow=\"{{deliveryComission}}\">*El total de tu cuenta es menor a $3,000.00 se agregará un cargo extra de $300.00 por envio envio</div>\n        <form [formGroup]=\"clientForm\">\n            <div fxLayout=\"row wrap\">\n                <div fxFlex=\"50\" fxFlex.lt-sm=\"100\" class=\"px-1\">\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\n                        <mat-label>Nombre(s)</mat-label>\n                        <input matInput placeholder=\"Nombre(s)\" formControlName=\"firstName\" maxlength=\"50\" required (keyup)=\"showButtonPaypal()\">\n                        <mat-error *ngIf=\"clientForm.controls.firstName.errors?.required\">\n                            Nombre es requerido\n                        </mat-error>\n                        <mat-error *ngIf=\"clientForm.controls.firstName.hasError('minlength')\">\n                            El nombre es muy corto, mínimo 3 caracteres\n                        </mat-error>\n                        <mat-error *ngIf=\"clientForm.controls.firstName.hasError('pattern')\">\n                            Escribe en nombre válido\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n                <div fxFlex=\"50\" fxFlex.lt-sm=\"100\" class=\"px-1\">\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\n                        <mat-label>Apellidos</mat-label>\n                        <input matInput placeholder=\"Apellido\" formControlName=\"lastName\" maxlength=\"50\" required (keyup)=\"showButtonPaypal()\">\n                        <mat-error *ngIf=\"clientForm.controls.lastName.errors?.required\">Apellido es requerido\n                        </mat-error>\n                        <mat-error *ngIf=\"clientForm.controls.lastName.hasError('minlength')\">\n                            El apellido es muy corto, mínimo 3 caracteres\n                        </mat-error>\n                        <mat-error *ngIf=\"clientForm.controls.lastName.hasError('pattern')\">\n                            Escribe un apellido válido\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n                <div fxFlex=\"50\" fxFlex.lt-sm=\"100\" class=\"px-1\">\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\n                        <mat-label>Email</mat-label>\n                        <input matInput placeholder=\"Email\" formControlName=\"email\" required (keyup)=\"showButtonPaypal()\">\n                        <mat-error *ngIf=\"clientForm.controls.email.errors?.required\">Correo electrónico es requerido</mat-error>\n                        <mat-error *ngIf=\"clientForm.controls.email.hasError('invalidEmail')\">El Correo electrónico es invalido</mat-error>\n                    </mat-form-field>\n                </div>\n                <div fxFlex=\"50\" fxFlex.lt-sm=\"100\" class=\"px-1\">\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\n                        <mat-label>Teléfono (10 dígitos)</mat-label>\n                        <input matInput placeholder=\"Teléfono\" formControlName=\"phone\" maxlength=\"10\" required (keyup)=\"showButtonPaypal()\">\n                        <mat-error *ngIf=\"clientForm.controls.phone.errors?.required\">Teléfono es requerido</mat-error>\n                        <mat-error *ngIf=\"clientForm.controls.phone.hasError('pattern')\">\n                            El teléfono es invalido, ingresa números\n                        </mat-error>\n                        <mat-error *ngIf=\"clientForm.controls.phone.hasError('minlength')\">\n                            El teléfono es muy corto, son 10 números\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n        </form>\n        <div class=\"py-1 text-muted\" fxLayout=\"row\" fxFlexAlign=\"end end\">\n            <div fxFlex=\"100\">\n                <div id=\"text-container\" fxShow=\"{{showButton}}\">Por favor rellena todos los campos</div>\n                <div id=\"paypal-button-container\" fxHide=\"{{showButton}}\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/products-carousel/product-dialog/product-dialog.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/products-carousel/product-dialog/product-dialog.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"close-btn-outer\">\r\n    <button mat-mini-fab color=\"warn\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n</div>\r\n<div mat-dialog-content>\r\n    <div fxLayout=\"row wrap\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n            <div class=\"swiper-container h-100\" [swiper]=\"config\">\r\n                <div class=\"swiper-wrapper\">\r\n                    <div *ngFor=\"let image of product.images\" class=\"swiper-slide\">\r\n                        <img [attr.data-src]=\"image.medium\" class=\"swiper-lazy\" title=\"{{product?.productType+' '+product?.brand+' '+product?.mpn}}\"\r\n                             alt=\"{{product?.productType+' '+product?.brand+' '+product?.mpn}}\" (error)=\"handleImgError($event)\"/>\r\n                        <div class=\"swiper-lazy-preloader\"></div>\r\n                    </div>\r\n                </div>\r\n                <button mat-icon-button class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n                <button mat-icon-button class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n            </div>\r\n        </div>\r\n\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" ngClass.gt-sm=\"px-2 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n            <h2>{{product.name}}</h2>\r\n            <p class=\"py-1 lh\" style=\" font-size: 17px; text-align: justify\">{{product?.description}}</p>\r\n            <div class=\"mt-3\" fxLayout=\"row wrap\">\r\n                <div  fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n                    <h3 class=\"old-price text-muted\"><span *ngIf=\"product?.oldPrice\">${{product?.oldPrice | number : '1.2-2'}}</span></h3>\r\n                    <span style=\"color: #de1f21;\"> <h1 class=\"new-price\">${{product?.newPrice | number : '1.2-2'}}</h1> </span><span>IVA incluido</span>\r\n                    <div class=\"py-1 lh\">\r\n                        <p *ngIf=\"product?.inventory > 0\" class=\"fn-color-inStock\" ><mat-icon class=\"mat-icon-sm m-0 fn-color-inStock\">flash_on</mat-icon>&nbsp;Envío de volada </p>\r\n                    </div>\r\n                </div>\r\n                <div fxLayoutAlign=\"end center\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n                    <app-controls [product]=\"product\" [type]=\"'all'\"></app-controls>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"divider\"></div>\r\n            <div class=\"mt-2\" style=\"font-weight: bold !important;\">\r\n                <p> <mat-icon class=\"mat-icon-sm m-0 fn-color-jd\">local_shipping</mat-icon> Envío Gratis, a partir de $3,000.00 pesos</p>\r\n                <p> <mat-icon class=\"mat-icon-sm m-0 fn-color-jd\">perm_phone_msg</mat-icon> Soporte y asesoria </p>\r\n                <p> <mat-icon class=\"mat-icon-sm m-0 fn-color-jd\">build</mat-icon> Garantía de Fabrica </p>\r\n            </div>\r\n            <div fxLayoutAlign=\"end center\" class=\"text-muted\">\r\n                <a  class=\"text-muted\" routerLink=\"/catalogo/{{changeStringBrand(product.brand)}}/{{changeString(product.productType, product.brand, product.mpn)}}\" (click)=\"close()\" style=\"text-decoration: none;\">\r\n                    Ver ficha completa <button [mat-dialog-close] mat-icon-button matTooltip=\"Ver ficha completa\"><mat-icon>arrow_forward</mat-icon></button>\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/products-carousel/products-carousel.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/products-carousel/products-carousel.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #swiperEl class=\"swiper-container\" [swiper]=\"config\">\r\n    <div class=\"swiper-wrapper h-100\">\r\n        <div *ngFor=\"let product of products; let last = last\" class=\"swiper-slide\">\r\n            <mat-card class=\"product-item\" style=\"overflow: hidden;\">\r\n                <a [routerLink]=\"['/catalogo/', changeStringBrand(product.brand), changeString(product.productType, product.brand, product.mpn)]\" class=\"image-link\">\r\n                    <div *ngIf=\"product.discount\" class=\"ribbon ribbon-top-right\">\r\n                        <span>Oferta</span>\r\n                    </div>\r\n                    <div style=\"width: 100%; height: 187px;\">\r\n                        <img [attr.data-src]=\"product.images[0].medium\" class=\"swiper-lazy\" title=\"{{product?.productType+' '+product?.brand+' '+product?.mpn}}\"\r\n                             alt=\"{{product?.productType+' '+product?.brand+' '+product?.mpn}}\" (error)=\"handleImgError($event)\" style=\"max-height: 187px;\"/>\r\n                    </div>\r\n                    <img src=\"../assets/images/otros/gratis.png\" class=\"free-delivery\">\r\n                    <div class=\"swiper-lazy-preloader\"></div>\r\n                </a>\r\n                <h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>\r\n                <a [routerLink]=\"['/catalogo/', changeStringBrand(product.brand), changeString(product.productType, product.brand, product.mpn)]\" class=\"title text-truncate\">\r\n                    {{product.name}}\r\n                </a>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"prices\">\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"height: 39px;\">\r\n                        <p class=\"old-price text-muted\"><span *ngIf=\"product.oldPrice && product.stock\">${{product.oldPrice | number : '1.2-2'}}</span></p>\r\n                        <p class=\"new-price\" *ngIf=\"product.stock\">${{product.newPrice | number : '1.2-2'}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"divider mt-2\"></div>\r\n                <div class=\"icons\">\r\n                    <app-controls [product]=\"product\" [type]=\"'carousel'\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                </div>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n    <button mat-mini-fab class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n    <button mat-mini-fab class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/sections-panel/sections-panel.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/sections-panel/sections-panel.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutGap=\"3%\">\n    <mat-card fxFlex=\"31\" fxFlex.lt-md=\"100\">\n        <mat-card-title>Equipos</mat-card-title>\n        <mat-card-content>\n            <mat-list fxFlex=\"100\" fxLayout=\"row wrap\">\n                <mat-list-item *ngFor=\"let type of productsType\" fxFlex=\"50\" ngClass.lt-sm=\"mt-2\">\n                    <a title=\"Aspersoras\" class=\"link-type\" fxLayoutAlign=\"start center\" routerLink=\"/Equipos/{{changeString(type.name)}}\">\n                        <mat-icon class=\"fn-color-jd bold\">keyboard_arrow_right</mat-icon>\n                        <span class=\"link-obscure\"><h2 style=\"font-size: 16px;\">{{type.name}}</h2></span>\n                    </a>\n                </mat-list-item>\n            </mat-list>\n        </mat-card-content>\n    </mat-card>\n    <mat-card fxFlex=\"31\" fxFlex.lt-md=\"100\" fxLayoutGap=\"3\">\n        <mat-card-title>Marcas</mat-card-title>\n        <mat-card-content>\n            <mat-list fxFlex=\"100\" fxLayout=\"row wrap\">\n                <mat-list-item *ngFor=\"let brand of brands\" fxFlex=\"50\" ngClass.lt-sm=\"mt-2\">\n                    <a title=\"Aspersoras\" class=\"link-type\" fxLayoutAlign=\"start center\" routerLink=\"/Marcas/{{changeString(brand.name)}}\">\n                        <mat-icon class=\"fn-color-jd bold\">keyboard_arrow_right</mat-icon>\n                        <span class=\"link-obscure\"><h2 style=\"font-size: 16px;\">{{brand.name}}</h2></span>\n                    </a>\n                </mat-list-item>\n            </mat-list>\n        </mat-card-content>\n    </mat-card>\n    <mat-card fxFlex=\"31\" fxFlex.lt-md=\"100\" fxLayoutGap=\"3\" fxLayout=\"column\">\n        <mat-card-title>Otros</mat-card-title>\n        <mat-card-content>\n            <mat-expansion-panel *ngFor=\"let add of additional; let first = first\" [expanded]=\"first\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        {{add.name}}\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-list fxFlex=\"100\" fxLayout=\"row wrap\">\n                    <mat-list-item *ngFor=\"let option of add.options\" fxFlex=\"50\" ngClass.lt-sm=\"mt-2\">\n                        <a title=\"\" class=\"link-type\" fxLayoutAlign=\"start center\" routerLink=\"/{{changeString(add.name)}}/{{changeString(option.name)}}\">\n                            <mat-icon class=\"fn-color-jd bold\">keyboard_arrow_right</mat-icon>\n                            <span *ngIf=\"option.name == 'Cascos y caretas' || option.name == 'Protección anticorte'\" class=\"link-obscure\" title=\"{{ option.name}}\"><h2 style=\"font-size: 16px;\">{{ option.name | truncate :9 }}</h2></span>\n                            <span *ngIf=\"option.name != 'Cascos y caretas' && option.name != 'Protección anticorte'\" class=\"link-obscure\" ><h2 style=\"font-size: 16px;\">{{ option.name }}</h2></span>\n                        </a>\n                    </mat-list-item>\n                </mat-list>\n            </mat-expansion-panel>\n\n\n\n\n\n            <!--<mat-list>\n                <ng-container *ngFor=\"let add of additionals\">\n                    <mat-list-item>{{add.name}}</mat-list-item>\n                    <mat-list style=\"margin-left:30px;\">\n                        <div *ngFor=\"let option of add.options\">\n                            <mat-list-item>{{ option.name }}</mat-list-item>\n                        </div>\n                    </mat-list>\n                </ng-container>\n            </mat-list>-->\n\n\n        </mat-card-content>\n    </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/sections-side/sections-side.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/sections-side/sections-side.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<mat-accordion displayMode=\"flat\" multi=\"true\">\r\n    <mat-expansion-panel expanded>\r\n        <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n                <h4>Secciones por tipo de productos</h4>\r\n            </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-buttons\">\r\n            <a routerLink=\"/equipos/{{changeStringBrand(type.name)}}\" mat-button  fxFlex=\"46\" *ngFor=\"let type of productTypes\" class=\"bg-color-jd\" title=\"{{type.name}}\">\r\n                <h2 style=\"font-size: 14px; font-weight: 500;\">{{type.name}}</h2>\r\n            </a>\r\n        </div>\r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel expanded>\r\n        <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n                <h4>Secciones por marcas</h4>\r\n            </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-brands\">\r\n\r\n            <a mat-button *ngFor=\"let brand of brands\" routerLink=\"/marcas/{{changeStringBrand(brand.name)}}\" title=\"{{brand.name}}\">\r\n                <img [src]=\"brand.image\" [title]=\"brand.name\" [alt]=\"brand.name\"/>\r\n            </a>\r\n        </div>\r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel  expanded *ngFor=\"let add of additional\">\r\n        <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n                <h4>{{add.name}}</h4>\r\n            </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-buttons\">\r\n            <a routerLink=\"/{{changeStringBrand(add.name)}}/{{changeStringBrand(option.name)}}\" mat-button  fxFlex=\"46\" *ngFor=\"let option of add.options\" class=\"bg-color-jd\" title=\"{{add.name}}\">\r\n                <h2 style=\"font-size: 14px; font-weight: 500;\">{{option.name}}</h2>\r\n            </a>\r\n        </div>\r\n    </mat-expansion-panel>\r\n\r\n</mat-accordion>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/telephone-bar/telephone-bar.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/telephone-bar/telephone-bar.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxHide.gt-sm>\n    <div fxFlex=\"100\">\n        <mat-card fxLayout=\"row\">\n            <a href=\"https://wa.me/525551857805?text=Hola,%20me%20gustaría%20saber%20\" target=\"_blank\" mat-raised-button class=\" whats\" fxFlex=\"50\">\n\n                <fa-icon [icon]=\"faWhatsapp\" style=\"font-size: 20px;\"></fa-icon> Escríbenos\n            </a>\n            <a href=\"tel:8002129225\" mat-raised-button class=\" llamanos\" fxFlex=\"50\">\n\n                 <mat-icon>phone</mat-icon> Llámanos\n            </a>\n        </mat-card>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/breadcrumb/breadcrumb.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/breadcrumb/breadcrumb.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" *ngIf=\"router.url != '/'\">\r\n    <div fxFlex=\"100\">\r\n        <mat-card fxLayout=\"row\" class=\"breadcrumb light-block\">\r\n            <a *ngIf=\"router.url != '/'\" routerLink=\"/\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" (click)=\"closeSubMenus()\">\r\n                <mat-icon>home</mat-icon>\r\n                <span class=\"breadcrumb-title\">Inicio</span>\r\n            </a>\r\n            <div *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <a *ngIf=\"i < (breadcrumbs.length - 2)\">{{breadcrumb.name}}</a>\r\n                <a *ngIf=\"i == (breadcrumbs.length - 2) && breadcrumb.url == '/'\" [routerLink]=\"[breadcrumb.url, breadcrumb.level1, breadcrumb.level2]\">{{breadcrumb.name}}</a>\r\n                <a *ngIf=\"i == (breadcrumbs.length - 2) && breadcrumb.url != '/'\" >{{breadcrumb.name}}</a>\r\n                <span *ngIf=\"i == (breadcrumbs.length - 1)\" class=\"active\"><b>{{breadcrumb.name}}</b></span>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/footer/footer.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/footer/footer.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"bg-primary footer\">\r\n\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\" class=\"py-3 border-bottom-mute theme-container\">\r\n        <div fxFlex=\"200\" fxFlex.gt-sm=\"60\" fxFlex.sm=\"100\" ngClass.xs=\"mt-2\" class=\"contact-information\">\r\n            <h3 class=\"col-title\">INFORMACIÓN DE CONTACTO</h3>\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-2 secondary-color\">\r\n                <mat-icon class=\"fn-color-jd\">location_on</mat-icon>\r\n                <a href=\"https://goo.gl/maps/X217x5HGYWMCLJqSA\" target=\"_blank\"\r\n                   class=\"secondary-color\">\r\n                    Av. Emiliano Zapata No. 129, Tlaltenango 62170, Cuernavaca Morelos.\r\n                </a>\r\n            </p>\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-2 secondary-color\">\r\n                <mat-icon class=\"fn-color-jd\">location_on</mat-icon>\r\n                <a href=\"https://goo.gl/maps/28EjpejSSvc8eU388\" target=\"_blank\" class=\"secondary-color\">\r\n                    Blvd. Valle de San Javier No. 713, Fraccionamiento Valle de San Javier, 42086, Pachuca de Soto\r\n                    Hidalgo.\r\n                </a>\r\n            </p>\r\n\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"start\" class=\"mt-1 secondary-color\">\r\n                <p fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"fn-color-jd\">schedule</mat-icon>\r\n                    Lunes - Viernes / 9:00AM - 6:00PM\r\n                </p>\r\n                <p fxLayoutAlign=\"start center\" class=\"mt-1\">\r\n                    <mat-icon class=\"fn-color-jd\">schedule</mat-icon>\r\n                    Sabado / 9:00AM - 2:00PM\r\n                </p>\r\n            </div>\r\n            <!--            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1 secondary-color\">-->\r\n            <!--                <mat-icon class=\"fn-color-jd\">directions</mat-icon>-->\r\n            <!--                <a href=\"https://goo.gl/maps/X217x5HGYWMCLJqSA\" class=\"link secondary-color\">Ver indicaciones</a>-->\r\n            <!--            </p>-->\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1 secondary-color\">\r\n                <mat-icon class=\"fn-color-jd\">call</mat-icon>\r\n                <a href=\"tel:5531324245\" class=\"secondary-color\">(55) 3132 4245</a>\r\n            </p>\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-2 secondary-color\">\r\n                <mat-icon class=\"fn-color-jd\">mail_outline</mat-icon>\r\n                <a href=\"mailto:mayoreo@jardepot.com\" class=\"secondary-color\">mayoreo@jardepot.com</a>\r\n            </p>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"40\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n            <a href=\"https://www.google.com/maps?ll=18.943294,-99.242404&z=19&t=m&hl=es&gl=MX&mapclient=embed&cid=16350433314905119230\" target=\"_blank\">\r\n                <img src=\"./../assets/images/others/maps.png\" alt=\"Google maps\" style=\"width:100%; height:250px;\">\r\n            </a>\r\n            <!--<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.85820092739723!2d-99.24223220734008!3d18.94328777835146!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdde304b76aaa5%3A0xe2e86878baa1d9fe!2sJARDEPOT%20MORELOS!5e0!3m2!1ses!2smx!4v1580915920238!5m2!1ses!2smx\"\r\n                    frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>-->\r\n            <!--<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"true\">\r\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"true\"></agm-marker>\r\n            </agm-map>-->\r\n        </div>\r\n\r\n    </div>\r\n    <div fxLayout=\"row wrap\" class=\"copyright secondary-color theme-container footer-tels\">\r\n        <div fxLayoutAlign.lt-sm=\"start start\" fxLayout=\"column\" fxFlex=\"20\" fxFlex.lt-md=\"33\" fxFlex.lt-sm=\"50\">\r\n            <p>Ciudad de México</p>\r\n            <a href=\"tel:5549974360\" style=\"color: #fff;\"><h2 style=\"font-size: 15px; font-weight: 300;\">(55) 4997 4360</h2></a>\r\n            <br>\r\n            <br>\r\n            <a href=\"tel:5549968849\" style=\"color: #fff;\"><h2 style=\"font-size: 15px; font-weight: 300;\">(55) 4996 8849</h2></a>\r\n            <br>\r\n        </div>\r\n        <div fxLayoutAlign.lt-sm=\"start end\" fxLayout=\"column\" fxFlex=\"20\" fxFlex.lt-md=\"33\" fxFlex.lt-sm=\"50\">\r\n            <p>Morelos</p>\r\n            <a href=\"tel:7773179630\" style=\"color: #fff;\"><h2 style=\"font-size: 15px; font-weight: 300;\">(777) 317 9630</h2></a>\r\n            <br>\r\n            <br>\r\n            <a href=\"tel:7773179652\" style=\"color: #fff;\"><h2 style=\"font-size: 15px; font-weight: 300;\">(777) 317 9652</h2></a>\r\n            <br>\r\n        </div>\r\n        <div fxLayoutAlign.lt-sm=\"start start\" fxLayout=\"column\" fxFlex=\"20\" fxFlex.lt-md=\"33\" fxFlex.lt-sm=\"50\">\r\n            <p>Estado de México</p>\r\n            <a href=\"tel:7226481040\" style=\"color: #fff;\"><h2 style=\"font-size: 15px; font-weight: 300;\">(722) 648 1040</h2></a>\r\n        </div>\r\n        <div fxLayoutAlign.lt-sm=\"start end\" fxLayout=\"column\" fxFlex=\"20\" fxFlex.lt-md=\"33\" fxFlex.lt-sm=\"50\">\r\n            <p>Puebla</p>\r\n            <a href=\"tel:2227051726\" style=\"color: #fff;\"><h2 style=\"font-size: 15px; font-weight: 300;\">(222) 705 1726</h2></a>\r\n        </div>\r\n        <div fxLayoutAlign.lt-sm=\"start start\" fxLayout=\"column\" fxFlex=\"20\" fxFlex.lt-md=\"33\" fxFlex.lt-sm=\"50\">\r\n            <p>Michoacán</p>\r\n            <a href=\"tel:4433560484\" style=\"color: #fff;\"><h2 style=\"font-size: 15px; font-weight: 300;\">(443) 356 0484</h2></a>\r\n        </div>\r\n        <div fxLayoutAlign.lt-sm=\"start end\" fxLayout=\"column\" fxFlex=\"20\" fxFlex.lt-md=\"33\" fxFlex.lt-sm=\"50\">\r\n            <p>Nuevo León</p>\r\n            <a href=\"tel:8120635708\" style=\"color: #fff;\"><h2 style=\"font-size: 15px; font-weight: 300;\">(81) 2063 5708</h2></a>\r\n        </div>\r\n        <div fxLayoutAlign.lt-sm=\"start start\" fxLayout=\"column\" fxFlex=\"20\" fxFlex.lt-md=\"33\" fxFlex.lt-sm=\"50\">\r\n            <p>Quintana Roo</p>\r\n            <a href=\"tel:9982940670\" style=\"color: #fff;\"><h2 style=\"font-size: 15px; font-weight: 300;\">(998) 294 0670</h2></a>\r\n        </div>\r\n        <div fxLayoutAlign.lt-sm=\"start end\" fxLayout=\"column\" fxFlex=\"20\" fxFlex.lt-md=\"33\" fxFlex.lt-sm=\"50\">\r\n            <p>San Luis Potosí</p>\r\n            <a href=\"tel:4443280420\" style=\"color: #fff;\"><h2 style=\"font-size: 15px; font-weight: 300;\">(444) 328 0420</h2></a>\r\n        </div>\r\n        <div fxLayoutAlign.lt-sm=\"start start\" fxLayout=\"column\" fxFlex=\"20\" fxFlex.lt-md=\"33\" fxFlex.lt-sm=\"50\">\r\n            <p>Guadalajara</p>\r\n            <a href=\"tel:3317283353\" style=\"color: #fff;\"><h2 style=\"font-size: 15px; font-weight: 300;\">(33) 1728 3353</h2></a>\r\n        </div>\r\n        <div fxLayoutAlign.lt-sm=\"start end\" fxLayout=\"column\" fxFlex=\"20\" fxFlex.lt-md=\"33\" fxFlex.lt-sm=\"50\">\r\n            <p>Tabasco</p>\r\n            <a href=\"tel:9933070286\" style=\"color: #fff;\"><h2 style=\"font-size: 15px; font-weight: 300;\">(993) 307 0286</h2></a>\r\n        </div>\r\n        <div fxLayoutAlign.lt-sm=\"start start\" fxLayout=\"column\" fxFlex=\"20\" fxFlex.lt-md=\"33\" fxFlex.lt-sm=\"50\">\r\n            <p>Yucatán</p>\r\n            <a href=\"tel:9993491123\" style=\"color: #fff;\"><h2 style=\"font-size: 15px; font-weight: 300;\">(999) 349 1123</h2></a>\r\n        </div>\r\n        <div fxLayoutAlign.lt-sm=\"start end\" fxLayout=\"column\" fxFlex=\"20\" fxFlex.lt-md=\"33\" fxFlex.lt-sm=\"50\">\r\n            <p>Del Interior</p>\r\n            <a href=\"tel:8002129225\" style=\"color: #fff;\"><h2 style=\"font-size: 15px; font-weight: 300;\">(800) 212 9225</h2></a>\r\n        </div>\r\n        <div fxLayoutAlign.lt-sm=\"start start\" fxLayout=\"column\" fxFlex=\"20\" fxFlex.lt-md=\"33\" fxFlex.lt-sm=\"50\">\r\n            <p>Veracruz</p>\r\n            <a href=\"tel:2293300992\" style=\"color: #fff;\"><h2 style=\"font-size: 15px; font-weight: 300;\">(229) 330 0992</h2></a>\r\n        </div>\r\n        <div fxLayoutAlign.lt-sm=\"start end\" fxLayout=\"column\" fxFlex=\"20\" fxFlex.lt-md=\"33\" fxFlex.lt-sm=\"50\">\r\n            <p>Hidalgo</p>\r\n            <a href=\"tel:7716887808\" style=\"color: #fff;\"><h2 style=\"font-size: 15px; font-weight: 300;\">(771) 688 7808</h2></a>\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" class=\"copyright secondary-color theme-container mt-2\">\r\n        <p fxFlex=\"30\" fxFlex.lt-md=\"80\" fxLayoutAlign=\"space-between center\">\r\n            <a style=\"color: #fff;\" href=\"javascript: void(0)\" (click)=\"openAvisoPrivacidadDialog()\">Aviso de Privacidad&nbsp;</a>\r\n            &nbsp;|&nbsp;&nbsp;\r\n            <a style=\"color: #fff;\" href=\"javascript: void(0)\" (click)=\"openAvisoLegalDialog()\">Aviso Legal</a>\r\n        </p>\r\n        <p fxFlex=\"100\" fxFlex.lt-md=\"100\" class=\"text-center\">\r\n            <a>JarDepot es una marca registrada. Todos los derechos reservados 2020.</a>\r\n        </p>\r\n        <p fxFlex=\"100\" fxLayoutAlign=\"center center\" fxLayoutAlign.xs=\"center center\">\r\n            <a href=\"https://www.facebook.com/Jardepot\" target=\"_blank\" style=\"margin-right: 25px;\">\r\n                <svg class=\"social-icon\" viewBox=\"0 0 24 24\">\r\n                    <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z\"/>\r\n                </svg>\r\n            </a>\r\n            <a href=\"https://www.instagram.com/jardepotsade/\" target=\"_blank\" style=\"margin-right: 30px;\">\r\n                <svg class=\"social-icon\" viewBox=\"0 0 24 24\" style=\"height: 40px;\">\r\n                    <path d=\"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z\"/>\r\n                </svg>\r\n            </a>\r\n            <a href=\"https://www.youtube.com/channel/UCym0cCHYeEDqs70RD7Zs2-g\" target=\"_blank\">\r\n                <svg class=\"social-icon\" viewBox=\"0 0 24 24\">\r\n                    <path d=\"M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z\"/>\r\n                </svg>\r\n            </a>\r\n        </p>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/menu/menu.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/menu/menu.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"top-navbar mat-elevation-z2\" style=\"margin-top:136px\" fxLayoutAlign=\"center center\">\r\n\r\n    <div *ngFor=\"let option of menuTopBar\">\r\n        <a *ngIf=\"option.nivel2?.length > 0\" mat-button [matMenuTriggerFor]=\"subMenu\" >\r\n            {{option.nivel1}} <mat-icon *ngIf=\"option.nivel2?.length > 0\" class=\"caret\">arrow_drop_down</mat-icon>\r\n        </a>\r\n        <mat-menu #subMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"app-dropdown\">\r\n            <a *ngFor=\"let subOption of option.nivel2\" style=\"color: #424242 !important; font-weight: 500;\" mat-menu-item routerLink=\"/{{changeString(option.nivel1)}}/{{changeString(subOption)}}\"\r\n               routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                {{subOption}}\r\n            </a>\r\n        </mat-menu>\r\n    </div>\r\n    <!--<a mat-button  routerLink=\"/ofertas\">\r\n        Ofertas\r\n    </a>-->\r\n    <a routerLink=\"/ofertas\"mat-raised-button class=\"no-mobile oferta\">\r\n        <img src=\"/assets/images/logos/ofertas-icon.png\" alt=\"logo oferta\" style=\"width: 24px;\"> Ofertas\r\n    </a>\r\n\r\n    <a href=\"https://wa.me/525551857805?text=Hola,%20me%20gustaría%20saber%20\" target=\"_blank\" mat-raised-button class=\"no-mobile whats\">\r\n        <fa-icon [icon]=\"faWhatsapp\" style=\"font-size: 20px;\"></fa-icon> WhatsApp\r\n    </a>\r\n\r\n    <a href=\"https://wa.me/7226481040?text=Hola,%20me%20gustaría%20saber%20sobre%20sus%20refacciones\" target=\"_blank\" mat-raised-button class=\"no-mobile refaccion\">\r\n        <mat-icon style=\"font-size: 22px;\">settings</mat-icon> Refacciones\r\n    </a>\r\n\r\n\r\n</mat-toolbar>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/menu/telephone-dialog/telephone-dialog.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/menu/telephone-dialog/telephone-dialog.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"telephone-container\" fxLayout=\"column\" ngStyle.gt-sm=\"width: 700px;\">\r\n    <div class=\"close-btn-outer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <h2>Nuestros números teléfonicos</h2>\r\n        <button mat-mini-fab color=\"warn\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n    </div>\r\n    <div mat-dialog-content style=\"max-height: 80vh;\">\r\n        <div fxLayout=\"row wrap\">\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"100\">\r\n                <div class=\"py-1 text-muted\" fxLayout=\"row wrap\" >\r\n                    <div class=\"phone-item\" fxFlex=\"20\" fxFlex.lt-md=\"43\">\r\n                        <p><mat-icon class=\"mat-icon-sm\">call</mat-icon> <strong>CDMX</strong></p>\r\n                        <span><a href=\"tel:5549974360\" class=\"number\">(55) 4997 4360</a></span>\r\n                        <!--                        <span><mat-icon class=\"mat-icon-sm\">call</mat-icon> (55) 4996 8849</span>-->\r\n                    </div>\r\n                    <div class=\"phone-item\" fxFlex=\"20\" fxFlex.lt-md=\"43\">\r\n                        <p><mat-icon class=\"mat-icon-sm\">call</mat-icon> <strong>CDMX</strong></p>\r\n                        <span><a href=\"tel:5549968849\" class=\"number\">(55) 4996 8849</a></span>\r\n                    </div>\r\n                    <div class=\"phone-item\" fxFlex=\"20\" fxFlex.lt-md=\"43\">\r\n                        <p><mat-icon class=\"mat-icon-sm\">call</mat-icon> <strong>Morelos</strong></p>\r\n                        <span><a href=\"tel:7773179630\" class=\"number\">(777) 317 9630</a></span>\r\n                    </div>\r\n                    <div class=\"phone-item\" fxFlex=\"20\" fxFlex.lt-md=\"43\">\r\n                        <p><mat-icon class=\"mat-icon-sm\">call</mat-icon> <strong>Edo. Mex.</strong></p>\r\n                        <span><a href=\"tel:7226481040\"class=\"number\">(722) 648 1040</a></span>\r\n                    </div>\r\n\r\n                    <div class=\"phone-item\" fxFlex=\"20\" fxFlex.lt-md=\"43\">\r\n                        <p><mat-icon class=\"mat-icon-sm\">call</mat-icon> <strong>Q. Roo</strong></p>\r\n                        <span><a href=\"tel:9982940670\" class=\"number\">(998) 294 0670</a></span>\r\n                    </div>\r\n                    <div class=\"phone-item\" fxFlex=\"20\" fxFlex.lt-md=\"43\">\r\n                        <p><mat-icon class=\"mat-icon-sm\">call</mat-icon> <strong>Guadalajara</strong></p>\r\n                        <span><a href=\"tel:3317283353\" class=\"number\">(33) 1728 3353</a></span>\r\n                    </div>\r\n                    <div class=\"phone-item\" fxFlex=\"20\" fxFlex.lt-md=\"43\">\r\n                        <!--                        <p><mat-icon class=\"mat-icon-sm\">call</mat-icon> <strong>San Luis Potosí</strong></p>-->\r\n                        <p><mat-icon class=\"mat-icon-sm\">call</mat-icon> <strong>S.L.P.</strong></p>\r\n                        <span><a href=\"tel:4443280420\" class=\"number\">(444) 328 0420</a></span>\r\n                    </div>\r\n                    <div class=\"phone-item\" fxFlex=\"20\" fxFlex.lt-md=\"43\">\r\n                        <p><mat-icon class=\"mat-icon-sm\">call</mat-icon> <strong>Nuevo León</strong></p>\r\n                        <span><a href=\"tel:8120635708\" class=\"number\">(812) 063 5708</a></span>\r\n                    </div>\r\n\r\n                    <div class=\"phone-item\" fxFlex=\"20\" fxFlex.lt-md=\"43\">\r\n                        <p><mat-icon class=\"mat-icon-sm\">call</mat-icon> <strong>Michoacán</strong></p>\r\n                        <span><a href=\"tel:4433560484\" class=\"number\">(443) 356 0484</a></span>\r\n                    </div>\r\n                    <div class=\"phone-item\" fxFlex=\"20\" fxFlex.lt-md=\"43\">\r\n                        <p><mat-icon class=\"mat-icon-sm\">call</mat-icon> <strong>Hidalgo</strong></p>\r\n                        <span><a href=\"tel:7716887808\" class=\"number\">(771) 688 7808</a></span>\r\n                    </div>\r\n                    <div class=\"phone-item\" fxFlex=\"20\" fxFlex.lt-md=\"43\">\r\n                        <p><mat-icon class=\"mat-icon-sm\">call</mat-icon> <strong>Tabasco</strong></p>\r\n                        <span><a href=\"tel:9933070286\" class=\"number\">(993) 307 0286</a></span>\r\n                    </div>\r\n                    <div class=\"phone-item\" fxFlex=\"20\" fxFlex.lt-md=\"43\">\r\n                        <p><mat-icon class=\"mat-icon-sm\">call</mat-icon> <strong>Veracruz</strong></p>\r\n                        <span><a href=\"tel:2293300992\" class=\"number\">(229) 330 0992</a></span>\r\n                    </div>\r\n\r\n                    <div class=\"phone-item\" fxFlex=\"20\" fxFlex.lt-md=\"43\">\r\n                        <p><mat-icon class=\"mat-icon-sm\">call</mat-icon> <strong>Puebla</strong></p>\r\n                        <span><a href=\"tel:2227051726\" class=\"number\">(222) 705 1726</a></span>\r\n                    </div>\r\n                    <div class=\"phone-item\" fxFlex=\"20\" fxFlex.lt-md=\"43\">\r\n                        <p><mat-icon class=\"mat-icon-sm\">call</mat-icon> <strong>Del Interior</strong></p>\r\n                        <span><a href=\"tel:8002129225\" class=\"number\">(800) 212 9225</a></span>\r\n                    </div>\r\n                    <div class=\"phone-item\" fxFlex=\"20\" fxFlex.lt-md=\"43\">\r\n                        <p><mat-icon class=\"mat-icon-sm\">call</mat-icon> <strong>Mayoreo</strong></p>\r\n                        <span><a href=\"tel:5531324245\" class=\"number\">(55) 3132 4245</a></span>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/sidenav-menu/sidenav-menu.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/sidenav-menu/sidenav-menu.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let menu of menuTopBar\" class=\"menu-item\">\r\n\r\n    <a mat-button fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n       (click)=\"onClick(menu.nivel1)\" [id]=\"'menu-item-'+menu.nivel1\">\r\n        <span class=\"menu-title\">{{menu.nivel1}}</span>\r\n        <mat-icon class=\"menu-expand-icon transition-2\">arrow_drop_down</mat-icon>\r\n    </a>\r\n\r\n    <div  class=\"sub-menu\" [id]=\"'sub-menu-'+menu.nivel1\">\r\n        <a *ngFor=\"let submenu of menu.nivel2\" mat-button\r\n           fxLayout=\"row\" fxLayoutAlign=\"start center\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"\r\n           routerLink=\"/{{changeString(menu.nivel1)}}/{{changeString(submenu)}}\"\r\n           (click)=\"onClick(menu.nivel1)\" [id]=\"'menu-item-'+menu.nivel1\">\r\n            <span class=\"menu-title\">{{submenu}}</span>\r\n        </a>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/components/top-menu/top-menu.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/components/top-menu/top-menu.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-menu\">    \r\n\r\n    <a mat-button [matMenuTriggerFor]=\"currencyMenu\" #currencyMenuTrigger=\"matMenuTrigger\">\r\n        {{currency}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n    </a>\r\n    <mat-menu #currencyMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-dropdown\">\r\n        <span (mouseleave)=\"currencyMenuTrigger.closeMenu()\">\r\n            <button mat-menu-item *ngFor=\"let cur of currencies\" (click)=\"changeCurrency(cur)\">\r\n                <span>{{cur}}</span>\r\n            </button>\r\n        </span>\r\n    </mat-menu>\r\n\r\n    <a mat-button [matMenuTriggerFor]=\"langMenu\" #langMenuTrigger=\"matMenuTrigger\">\r\n        <img [src]=\"flag.image\" width=\"18\">\r\n        <span fxShow=\"false\" fxShow.gt-sm class=\"flag-menu-title\">{{flag.name}}</span>\r\n        <mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n    </a>\r\n    <mat-menu #langMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-dropdown\">\r\n        <span (mouseleave)=\"langMenuTrigger.closeMenu()\">\r\n            <button mat-menu-item *ngFor=\"let flag of flags\" (click)=\"changeLang(flag)\">\r\n                <img [src]=\"flag.image\" width=\"18\"> {{flag.name}}\r\n            </button>\r\n        </span>\r\n    </mat-menu>\r\n\r\n    <span fxShow=\"false\" fxShow.gt-sm>\r\n        <a mat-button routerLink=\"/compare\">Compare <span *ngIf=\"settings.rtl\">&rlm;</span>({{appService.Data.compareList.length}})</a>\r\n        <a mat-button routerLink=\"/wishlist\">Wishlist <span *ngIf=\"settings.rtl\">&rlm;</span>({{appService.Data.wishList.length}})</a>\r\n    </span>  \r\n\r\n    <a mat-button [matMenuTriggerFor]=\"accountMenu\" #accountMenuTrigger=\"matMenuTrigger\">\r\n        <mat-icon class=\"mat-icon-sm account-icon\">person</mat-icon> <span fxShow=\"false\" fxShow.gt-sm>account</span> <mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n    </a>\r\n    <mat-menu #accountMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-dropdown account\">\r\n        <span (mouseleave)=\"accountMenuTrigger.closeMenu()\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"user-info\">                   \r\n                <img src=\"assets/images/others/user.jpg\" alt=\"user-image\" width=\"50\">\r\n                <p>Emilio Verdines <br> <small>emilio_v <span *ngIf=\"settings.rtl\">&rlm;</span>(152<mat-icon class=\"mat-icon-xs\">star</mat-icon>)</small></p>\r\n            </div>\r\n            <div class=\"divider\"></div>\r\n            <a mat-menu-item routerLink=\"/account\"> \r\n                <mat-icon class=\"mat-icon-sm\">settings</mat-icon>\r\n                <span>Account Settings</span> \r\n            </a>\r\n            <a mat-menu-item routerLink=\"/compare\" fxHide=\"false\" fxHide.gt-sm>\r\n                <mat-icon class=\"mat-icon-sm\">compare</mat-icon>\r\n                <span>Compare <span *ngIf=\"settings.rtl\">&rlm;</span>({{appService.Data.compareList.length}})</span> \r\n            </a>\r\n            <a mat-menu-item routerLink=\"/wishlist\" fxHide=\"false\" fxHide.gt-sm>\r\n                <mat-icon class=\"mat-icon-sm\">favorite</mat-icon>\r\n                <span>Wishlist <span *ngIf=\"settings.rtl\">&rlm;</span>({{appService.Data.wishList.length}})</span>\r\n            </a>\r\n            <a mat-menu-item routerLink=\"/\"> \r\n                <mat-icon class=\"mat-icon-sm\">lock</mat-icon>\r\n                <span>Lock screen</span> \r\n            </a>\r\n            <a mat-menu-item routerLink=\"/\"> \r\n                <mat-icon class=\"mat-icon-sm\">help</mat-icon>\r\n                <span>Help</span> \r\n            </a>\r\n            <div class=\"divider\"></div>\r\n            <a mat-menu-item routerLink=\"/sign-in\"> \r\n                <mat-icon class=\"mat-icon-sm\">power_settings_new</mat-icon>\r\n                <span>Sign Out</span> \r\n            </a>\r\n        </span>\r\n    </mat-menu>    \r\n\r\n</div>  "

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AppComponent = class AppComponent {
    constructor(appSettings, router, appService) {
        this.appSettings = appSettings;
        this.router = router;
        this.appService = appService;
        this.loading = false;
        this.cookieValue = 'UNKNOWN';
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.window = (typeof window !== "undefined") ? window : null;
        // this.appService.addCarrito($user, $token);
        // this.router.navigate(['']);  //redirect other pages to homepage on browser refresh
    }
    ngAfterViewInit() {
        if (this.window) {
            this.router.events.subscribe(event => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                    this.window.scrollTo(0, 0);
                }
            });
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.models.ts":
/*!*******************************!*\
  !*** ./src/app/app.models.ts ***!
  \*******************************/
/*! exports provided: Category, Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Category {
    constructor(id, name, hasSubCategory, parentId) {
        this.id = id;
        this.name = name;
        this.hasSubCategory = hasSubCategory;
        this.parentId = parentId;
    }
}
Category.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: Boolean },
    { type: Number }
];
class Product {
    constructor(id, name, images, oldPrice, newPrice, discount, description, availibilityCount, inventory, stock, brand, mpn, productType, dataSheet, metaDescription, metaTitle, idSeccion, cartCount, keywords) {
        this.id = id;
        this.name = name;
        this.images = images;
        this.oldPrice = oldPrice;
        this.newPrice = newPrice;
        this.discount = discount;
        this.description = description;
        this.availibilityCount = availibilityCount;
        this.inventory = inventory;
        this.stock = stock;
        this.brand = brand;
        this.mpn = mpn;
        this.productType = productType;
        this.dataSheet = dataSheet;
        this.metaDescription = metaDescription;
        this.metaTitle = metaTitle;
        this.idSeccion = idSeccion;
        this.cartCount = cartCount;
        this.keywords = keywords;
    }
}
Product.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: Array },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: String },
    { type: Number },
    { type: Number },
    { type: Boolean },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: Number },
    { type: Number },
    { type: String }
];


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_agm_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/utils/custom-overlay-container */ "./src/app/theme/utils/custom-overlay-container.ts");
/* harmony import */ var _theme_utils_scroll_strategy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme/utils/scroll-strategy */ "./src/app/theme/utils/scroll-strategy.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _theme_components_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./theme/components/top-menu/top-menu.component */ "./src/app/theme/components/top-menu/top-menu.component.ts");
/* harmony import */ var _theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./theme/components/menu/menu.component */ "./src/app/theme/components/menu/menu.component.ts");
/* harmony import */ var _theme_components_sidenav_menu_sidenav_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./theme/components/sidenav-menu/sidenav-menu.component */ "./src/app/theme/components/sidenav-menu/sidenav-menu.component.ts");
/* harmony import */ var _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./theme/components/breadcrumb/breadcrumb.component */ "./src/app/theme/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _theme_utils_app_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./theme/utils/app-interceptor */ "./src/app/theme/utils/app-interceptor.ts");
/* harmony import */ var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./theme/components/footer/footer.component */ "./src/app/theme/components/footer/footer.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_lite_json_ld__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-lite/json-ld */ "./node_modules/@ngx-lite/json-ld/fesm2015/ngx-lite-json-ld.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'my-app' }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDLf9Ywk47zipEtorDewwMmB3JtuXdzYL4'
            }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_11__["routing"],
            _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_24__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
            _ngx_lite_json_ld__WEBPACK_IMPORTED_MODULE_26__["NgxJsonLdModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            _pages_pages_component__WEBPACK_IMPORTED_MODULE_13__["PagesComponent"],
            _theme_components_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_14__["TopMenuComponent"],
            _theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"],
            _theme_components_sidenav_menu_sidenav_menu_component__WEBPACK_IMPORTED_MODULE_16__["SidenavMenuComponent"],
            _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbComponent"],
            _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"]
        ],
        providers: [
            _app_settings__WEBPACK_IMPORTED_MODULE_18__["AppSettings"],
            _app_service__WEBPACK_IMPORTED_MODULE_19__["AppService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_22__["CookieService"],
            { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayContainer"], useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_8__["CustomOverlayContainer"] },
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_MENU_SCROLL_STRATEGY"], useFactory: _theme_utils_scroll_strategy__WEBPACK_IMPORTED_MODULE_9__["menuScrollStrategy"], deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _theme_utils_app_interceptor__WEBPACK_IMPORTED_MODULE_20__["AppInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");


const routes = [
    {
        path: '',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"], children: [
            { path: '', loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "./src/app/pages/home/home.module.ts")).then(m => m.HomeModule) },
            {
                path: 'cart',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-cart-cart-module */ "pages-cart-cart-module").then(__webpack_require__.bind(null, /*! ./pages/cart/cart.module */ "./src/app/pages/cart/cart.module.ts")).then(m => m.CartModule),
                data: { breadcrumb: 'Carrito de compra' }
            },
            {
                path: 'checkout',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-checkout-checkout-module */ "pages-checkout-checkout-module").then(__webpack_require__.bind(null, /*! ./pages/checkout/checkout.module */ "./src/app/pages/checkout/checkout.module.ts")).then(m => m.CheckoutModule),
                data: { breadcrumb: 'Pago de pedido' }
            },
            {
                path: 'confirmation',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-confirmation-confirmation-module */ "pages-confirmation-confirmation-module").then(__webpack_require__.bind(null, /*! ./pages/confirmation/confirmation.module */ "./src/app/pages/confirmation/confirmation.module.ts")).then(m => m.ConfirmationModule),
                data: { breadcrumb: 'Agradecimiento' }
            },
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-products-products-module */ "pages-products-products-module").then(__webpack_require__.bind(null, /*! ./pages/products/products.module */ "./src/app/pages/products/products.module.ts")).then(m => m.ProductsModule),
                data: { breadcrumb: 'Todos los productos' }
            },
            {
                path: '404',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-not-exist-not-exist-module */ "pages-not-exist-not-exist-module").then(__webpack_require__.bind(null, /*! ./pages/not-exist/not-exist.module */ "./src/app/pages/not-exist/not-exist.module.ts")).then(m => m.NotExistModule),
                data: { breadcrumb: 'No encontrado' }
            }
        ]
    },
    {
        path: '**', redirectTo: '404'
    }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"],
});


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: Data, AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






class Data {
    constructor(categories, compareList, wishList, cartList, totalPrice, totalCartCount) {
        this.categories = categories;
        this.compareList = compareList;
        this.wishList = wishList;
        this.cartList = cartList;
        this.totalPrice = totalPrice;
        this.totalCartCount = totalCartCount;
    }
}
Data.ctorParameters = () => [
    { type: Array },
    { type: Array },
    { type: Array },
    { type: Array },
    { type: Number },
    { type: Number }
];
let AppService = class AppService {
    // public urlAPI = 'https://seragromex.com/jardepotAPI';
    // public urlAPI = 'https://fasolano.com/jardepotAPI';
    // public urlAPI = 'http://localhost/jardepotAPI';
    // public urlAPI = 'http://192.168.1.88/jardepotAPI';
    constructor(http, snackBar, cookieService, route) {
        this.http = http;
        this.snackBar = snackBar;
        this.cookieService = cookieService;
        this.route = route;
        this.Data = new Data([], // categories
        [], // compareList
        [], // wishList
        [], // cartList
        null, // totalPrice,
        0 // totalCartCount
        );
        this.cookieValue = 'UNKNOWN';
        this.url = 'assets/data/';
        this.urlAPI = 'https://jardepot.com/jardepotAPI';
    }
    getCategories() {
        return this.http.get(this.url + 'categories.json');
    }
    getProductsRelated(product) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('product', product);
        return this.http.get(this.urlAPI + '/public/api/products/related', { headers, params });
    }
    getProducts(nivel1, nivel2, brandFilter, characteristicFilter) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('nivel1', nivel1).set('nivel2', this.filterHilo(nivel2)).set('brands', brandFilter).set('characteristics', characteristicFilter);
        return this.http.get(this.urlAPI + '/public/api/products', { headers, params });
    }
    getSectionsProducts(nivel1, nivel2) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('nivel1', nivel1).set('nivel2', this.filterHilo(nivel2));
        return this.http.get(this.urlAPI + '/public/api/products/sections', { headers, params });
    }
    getProductByName(product) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('product', product);
        return this.http.get(this.urlAPI + '/public/api/product', { headers, params });
    }
    getBanners() {
        return this.http.get(this.url + 'banners.json');
    }
    getMenu() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let params = '';
        return this.http.get(this.urlAPI + '/public/api/menu/navbar', { headers });
    }
    getProductTypes() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let params = '';
        return this.http.get(this.urlAPI + '/public/api/menu/productsTypes', { headers });
    }
    getBrands() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let params = '';
        return this.http.get(this.urlAPI + '/public/api/menu/brands', { headers });
    }
    getAdditional() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let params = '';
        return this.http.get(this.urlAPI + '/public/api/menu/additional', { headers });
    }
    getFilters(productType) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('productType', this.filterHilo(productType));
        return this.http.get(this.urlAPI + '/public/api/products/filters', { headers, params });
    }
    addToCompare(product) {
        let message, status;
        if (this.Data.compareList.filter(item => item.id == product.id)[0]) {
            message = 'The product ' + product.name + ' already added to comparison list.';
            status = 'error';
        }
        else {
            this.Data.compareList.push(product);
            message = 'The product ' + product.name + ' has been added to comparison list.';
            status = 'success';
        }
        this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
    }
    addToWishList(product) {
        let message, status;
        if (this.Data.wishList.filter(item => item.id == product.id)[0]) {
            message = 'The product ' + product.name + ' already added to wish list.';
            status = 'error';
        }
        else {
            this.Data.wishList.push(product);
            message = 'The product ' + product.name + ' has been added to wish list.';
            status = 'success';
        }
        this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
    }
    addToCart(product) {
        if (this.cookieService.check('session')) {
            let message, status;
            let session = this.cookieService.get('session');
            this.Data.totalPrice = null;
            this.Data.totalCartCount = null;
            let index = this.Data.cartList.findIndex(item => item.id == product.id);
            if (index >= 0) {
                this.Data.cartList[index] = product;
            }
            else {
                this.Data.cartList.push(product);
            }
            this.Data.cartList.forEach(product => {
                this.Data.totalPrice = this.Data.totalPrice + (product.cartCount * product.newPrice);
                this.Data.totalCartCount = this.Data.totalCartCount + product.cartCount;
            });
            message = 'El producto ' + product.name + ' ha sido agregado al carrito.';
            status = 'success';
            this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
            const params = { 'product': JSON.stringify(product), 'quantity': product.cartCount, 'sessionCookie': session };
            return this.http.post(this.urlAPI + '/public/api/cart/addProduct', params);
        }
        else {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
            this.http.get(this.urlAPI + '/public/api/session', { headers }).subscribe(data => {
                this.cookieValue = data;
                this.cookieService.set('session', JSON.stringify(data), null, '/');
                this.addToCart(product);
            });
        }
    }
    removeFromCart(product) {
        let message, status;
        let session = this.cookieService.get('session');
        message = 'El producto ' + product.name + ' ha sido eliminado del carrito.';
        status = 'error';
        this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('product', product.name).set('sessionCookie', session);
        this.http.delete(this.urlAPI + '/public/api/cart/removeProduct', { params }).subscribe(res => {
        });
    }
    getProductsCart() {
        let session = this.cookieService.get('session');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('sessionCookie', session);
        return this.http.get(this.urlAPI + '/public/api/cart/products', { headers, params });
    }
    resetProductCartCount(product) {
        this.removeFromCart(product);
        product.cartCount = 0;
    }
    getDistributions() {
        return [
            { name: '', image: 'assets/images/distribucion/mclibre.jpg', url: 'https://eshops.mercadolibre.com.mx/jardepot', type: 'img' },
            { name: 'Tienda Cuernavaca', image: 'location_on', url: 'https://goo.gl/maps/X217x5HGYWMCLJqSA', type: 'map' },
            { name: '', image: 'assets/images/distribucion/claroshop.jpg', url: 'https://www.claroshop.com/Tienda/124005/JarDepot.com/', type: 'img' },
            { name: '', image: 'assets/images/distribucion/elektra.jpg', url: 'https://www.elektra.com.mx/husqvarna', type: 'img' },
            { name: 'Tienda Pachuca', image: 'location_on', url: 'https://g.page/JARDEPOT?share', type: 'map' },
            { name: '', image: 'assets/images/distribucion/walmart.jpg', url: 'https://www.walmart.com.mx/productos?Ntt=husqvarna', type: 'img' }
        ];
    }
    getDeliveryMethods() {
        return [
            // {value: 'ocurre', name: 'Envio a Ocurre', desc: '$100.00 MXN / Entrega de 2 a 6 días hábiles *Compras mayores a 2500 gratis', cost:100, min:2500},
            { value: 'domicilio', name: 'Envio a domicilio', desc: '$300.00 MXN / Entrega de 2 a 6 días hábiles *Compras mayores a $3,000.00 gratis y en área de cobertura', cost: 300, min: 3000 },
            { value: 'cuernavaca', name: 'Entrega en sucursal Cuernavaca', desc: 'GRATIS / Entrega de 1 a 2 días hábiles *La entrega extender a 6 días hábiles', cost: 0, min: 0 },
            { value: 'pachuca', name: 'Entrega en sucursal Pachuca', desc: 'GRATIS / Entrega de 1 a 2 días hábiles *La entrega extender a 6 días hábiles', cost: 0, min: 0 }
        ];
    }
    getPaymentMethods() {
        return [
            { value: 'PayPal', name: 'Paypal', desc: 'Realiza el pago con Paypal para empezar a procesar tu pedido de forma inmediata *Genera un comisión del 4%', cost: 1.04 },
            { value: 'MercadoPago', name: 'Mercado Pago', desc: 'Realiza el pago con Mercado pago para empezar a procesar tu pedido de forma inmediata *Genera un comisión del 4%', cost: 1.04 },
            { value: 'Transferencia', name: 'Transferencia Bancaria', desc: 'Realiza transferencia bancaria y envia el comprobante', cost: 1 }
        ];
    }
    getProductLevels($productType) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('productType', this.filterHilo($productType));
        return this.http.get(this.urlAPI + '/public/api/product/levels', { headers, params });
    }
    errorHandl(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
    getProductsSearch(valorSearch) {
        let session = this.cookieService.get('session');
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('valorSearch', valorSearch);
        return this.http.get(this.urlAPI + '/public/api/products/search', { params });
    }
    getProductsOffer() {
        return this.http.get(this.urlAPI + '/public/api/products/offer');
    }
    createOrder(forms) {
        let session = this.cookieService.get('session');
        const params = { 'forms': JSON.stringify(forms), 'sessionCookie': session };
        return this.http.post(this.urlAPI + '/public/api/checkout/createOrder', params);
    }
    createMercadopago(order, products, client, delivery) {
        const params = { 'order': JSON.stringify(order), 'products': JSON.stringify(products), 'client': JSON.stringify(client), 'delivery': JSON.stringify(delivery) };
        return this.http.post('https://fasolano.com/jardepotAPI/public/api/checkout/mercadopago', params);
    }
    confirmMercadopago($data) {
        const params = { 'data': $data };
        return this.http.post('https://fasolano.com/jardepotAPI/public/api/confirm/mercadopago', params);
    }
    enviarBusqueda(forms, busqueda) {
        //  let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        let session = this.cookieService.get('session');
        const params = { 'forms': JSON.stringify(forms), 'textoBuscado': busqueda, 'sessionCookie': session };
        return this.http.post(this.urlAPI + '/public/api/products/sendSearch', params);
    }
    sendConfirmationPayment($state, $payment, $data, $token) {
        let session = "";
        if (this.cookieService.check('session')) {
            session = this.cookieService.get('session');
        }
        const params = { 'state': $state, 'payment': $payment, 'data': $data, 'token': $token, 'sessionCookie': session };
        return this.http.post(this.urlAPI + '/public/api/confirm/checkout', params);
    }
    getDescriptionNivel2(nivel1, nivel2) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('nivel1', nivel1).set('nivel2', this.filterHilo(nivel2));
        return this.http.get(this.urlAPI + '/public/api/products/getDescriptionNivel2', { params });
    }
    filterHilo(productType) {
        let productType1;
        if (productType === 'Hilo Nylon' || productType === 'hilo nylon') {
            productType1 = 'Hilo-Nylon';
        }
        else {
            productType1 = productType;
        }
        return productType1;
    }
    defineBreadcrumb($params, $previousUrl, $component) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', $params).set('previousUrl', $previousUrl).set('component', $component);
        return this.http.get(this.urlAPI + '/public/api/menu/breadcrumb', { params });
    }
    payPalPayment($id) {
        let products = [];
        this.Data.cartList.forEach(obj => {
            const price = obj.newPrice * obj.cartCount;
            const product = {
                'reference_id': obj.name,
                'amount': {
                    'currency_code': 'MXN',
                    'value': price
                }
            };
            products.push(product);
        });
        return products;
    }
};
AppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AppService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], AppService);



/***/ }),

/***/ "./src/app/app.settings.ts":
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/*! exports provided: Settings, AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

class Settings {
    constructor(name, theme, rtl) {
        this.name = name;
        this.theme = theme;
        this.rtl = rtl;
    }
}
Settings.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: Boolean }
];
let AppSettings = class AppSettings {
    constructor() {
        this.settings = new Settings('Jardepot', // theme name
        'jardepot', // green, blue, red, pink, purple, grey
        false // true = rtl, false = ltr
        );
    }
};
AppSettings = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
], AppSettings);



/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.main {\n  min-height: 360px;\n  min-height: calc(100vh - 268px);\n}\n.sidenav {\n  width: 250px;\n  padding: 8px 16px;\n  position: fixed;\n}\n.sidenav .divider {\n  margin: 8px 0;\n}\n.cart-items-count {\n  position: absolute;\n  top: -3px;\n  left: 26px;\n  background: #f44336;\n  height: 18px;\n  width: 18px;\n  line-height: 18px;\n  border-radius: 50%;\n  font-size: 11px;\n}\n.busqueda {\n  min-height: 32px !important;\n}\n.barra {\n  border-radius: 0px 0px 10px 10px;\n  background-color: #f68600;\n  height: 60px;\n}\n.barra a {\n  color: #ffffff;\n}\n.tel-movil {\n  padding: 0 !important;\n  height: 60px !important;\n}\n@media (max-width: 959px) {\n  .barra {\n    border-radius: 0px 0px 10px 10px;\n    background-color: #f68600;\n    height: 32px;\n  }\n\n  .tel-movil {\n    padding: 0 !important;\n    height: 32px !important;\n  }\n}\n.bg-color-jd {\n  background-color: #f68600 !important;\n  color: white !important;\n}\n.fn-color-jd {\n  color: #f68600 !important;\n}\n.title-muted {\n  color: #616161 !important;\n  display: block;\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 18px;\n}\n.bg-color-oferta {\n  background-color: #de1f21 !important;\n  color: #fff !important;\n}\n.tel-title {\n  font-size: 20px;\n}\n.phone-item p {\n  font-size: 19px;\n}\n.phone-item span {\n  font-size: 16px;\n  display: block;\n}\n.bold {\n  font-weight: bold;\n}\n.link-obscure {\n  color: #424242 !important;\n  font-weight: 500;\n}\n#cdk-overlay-0 .mat-menu-panel {\n  min-width: 300px !important;\n  max-width: 900px !important;\n}\n.mat-menu-content div {\n  width: 100%;\n}\n#sidenavMenu {\n  max-width: 100%;\n  width: 80%;\n  background-color: rgba(80, 80, 80, 0.9);\n}\n#sidenavMenu .fll-color-jd {\n  fill: #f68600 !important;\n}\n.parpadea {\n  font-size: 20px;\n  animation-name: parpadeo;\n  animation-duration: 2s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  -webkit-animation-name: parpadeo;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  margin: 5px;\n}\n@-webkit-keyframes parpadeo {\n  0% {\n    color: #fff;\n  }\n  50% {\n    color: #424242;\n  }\n  100% {\n    color: #fff;\n  }\n}\n@keyframes parpadeo {\n  0% {\n    color: #fff;\n  }\n  50% {\n    color: #424242;\n  }\n  100% {\n    color: #fff;\n  }\n}\n.fixed-header {\n  position: fixed;\n  top: 0;\n  z-index: 2;\n}\n/* ----------- dispositivos móviles ----------- */\n/* cambios css para modo vertical y horizontal */\n@media only screen and (min-width: 320px) and (max-width: 736px) {\n  /* inserta aquí tu código */\n}\n@media only screen and (min-device-width: 320px) and (max-device-width: 736px) {\n  /* inserta aquí tu código */\n}\n.call-footer:hover {\n  opacity: 0.9;\n}\n.cart-footer {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  right: 20px;\n  bottom: 185px;\n  opacity: 0.7;\n  color: #fff;\n  background-color: #de1f21;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL0M6XFx4YW1wcFxcaHRkb2NzXFxlbXBvcml1bS1zc3Ivc3JjXFxhcHBcXHBhZ2VzXFxwYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0FERUo7QUNDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURFSjtBQ0RJO0VBQ0ksYUFBQTtBREdSO0FDQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FER0o7QUNBQTtFQUNJLDJCQUFBO0FER0o7QUNBQTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FER0o7QUNEQTtFQUNJLGNBQUE7QURJSjtBQ0FBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtBREdKO0FDQUE7RUFDSTtJQUNJLGdDQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0VER047O0VDREU7SUFDSSxxQkFBQTtJQUNBLHVCQUFBO0VESU47QUFDRjtBQ0RBO0VBQ0ksb0NBQUE7RUFDQSx1QkFBQTtBREdKO0FDQUE7RUFDSSx5QkFBQTtBREdKO0FDQUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBREdKO0FDQUE7RUFDSSxvQ0FBQTtFQUNBLHNCQUFBO0FER0o7QUNBQTtFQUNJLGVBQUE7QURHSjtBQ0FBO0VBQ0ksZUFBQTtBREdKO0FDQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBREdKO0FDQUE7RUFDSSxpQkFBQTtBREdKO0FDQUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FER0o7QUNBQTtFQUNJLDJCQUFBO0VBQ0EsMkJBQUE7QURHSjtBQ0FBO0VBQ0ksV0FBQTtBREdKO0FDQUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHVDQUFBO0FER0o7QUNGSTtFQUNJLHdCQUFBO0FESVI7QUNBQTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUVBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsV0FBQTtBREVKO0FDT0E7RUFDSTtJQUFLLFdBQUE7RURRUDtFQ1BFO0lBQU0sY0FBQTtFRFVSO0VDVEU7SUFBTyxXQUFBO0VEWVQ7QUFDRjtBQ1ZBO0VBQ0k7SUFBSyxXQUFBO0VEYVA7RUNaRTtJQUFNLGNBQUE7RURlUjtFQ2RFO0lBQU8sV0FBQTtFRGlCVDtBQUNGO0FDZkE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUVBLFVBQUE7QURnQko7QUNiQSxpREFBQTtBQUNBLGdEQUFBO0FBQ0E7RUFJSSwyQkFBQTtBRGFKO0FDVkE7RUFJSSwyQkFBQTtBRFNKO0FDTkE7RUFDSSxZQUFBO0FEUUo7QUNMQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QURRSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLm1haW4ge1xuICBtaW4taGVpZ2h0OiAzNjBweDtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDI2OHB4KTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4uc2lkZW5hdiAuZGl2aWRlciB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi5jYXJ0LWl0ZW1zLWNvdW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zcHg7XG4gIGxlZnQ6IDI2cHg7XG4gIGJhY2tncm91bmQ6ICNmNDQzMzY7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmJ1c3F1ZWRhIHtcbiAgbWluLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xufVxuXG4uYmFycmEge1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ODYwMDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uYmFycmEgYSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGVsLW1vdmlsIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIC5iYXJyYSB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ODYwMDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cblxuICAudGVsLW1vdmlsIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5iZy1jb2xvci1qZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNjg2MDAgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5mbi1jb2xvci1qZCB7XG4gIGNvbG9yOiAjZjY4NjAwICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZS1tdXRlZCB7XG4gIGNvbG9yOiAjNjE2MTYxICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJnLWNvbG9yLW9mZXJ0YSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTFmMjEgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLnRlbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnBob25lLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLnBob25lLWl0ZW0gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5saW5rLW9ic2N1cmUge1xuICBjb2xvcjogIzQyNDI0MiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jY2RrLW92ZXJsYXktMCAubWF0LW1lbnUtcGFuZWwge1xuICBtaW4td2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogOTAwcHggIWltcG9ydGFudDtcbn1cblxuLm1hdC1tZW51LWNvbnRlbnQgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNzaWRlbmF2TWVudSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MCwgODAsIDgwLCAwLjkpO1xufVxuI3NpZGVuYXZNZW51IC5mbGwtY29sb3ItamQge1xuICBmaWxsOiAjZjY4NjAwICFpbXBvcnRhbnQ7XG59XG5cbi5wYXJwYWRlYSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYW5pbWF0aW9uLW5hbWU6IHBhcnBhZGVvO1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBwYXJwYWRlbztcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbkAtbW96LWtleWZyYW1lcyBwYXJwYWRlbyB7XG4gIDAlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICA1MCUge1xuICAgIGNvbG9yOiAjNDI0MjQyO1xuICB9XG4gIDEwMCUge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcGFycGFkZW8ge1xuICAwJSB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgNTAlIHtcbiAgICBjb2xvcjogIzQyNDI0MjtcbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuQGtleWZyYW1lcyBwYXJwYWRlbyB7XG4gIDAlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICA1MCUge1xuICAgIGNvbG9yOiAjNDI0MjQyO1xuICB9XG4gIDEwMCUge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG4uZml4ZWQtaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG59XG5cbi8qIC0tLS0tLS0tLS0tIGRpc3Bvc2l0aXZvcyBtw7N2aWxlcyAtLS0tLS0tLS0tLSAqL1xuLyogY2FtYmlvcyBjc3MgcGFyYSBtb2RvIHZlcnRpY2FsIHkgaG9yaXpvbnRhbCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC8qIGluc2VydGEgYXF1w60gdHUgY8OzZGlnbyAqL1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzM2cHgpIHtcbiAgLyogaW5zZXJ0YSBhcXXDrSB0dSBjw7NkaWdvICovXG59XG4uY2FsbC1mb290ZXI6aG92ZXIge1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5jYXJ0LWZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IDE4NXB4O1xuICBvcGFjaXR5OiAwLjc7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUxZjIxO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59IiwiLm1haW57XHJcbiAgICBtaW4taGVpZ2h0OiAzNjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNjhweCk7XHJcbiAgICAvLyAgcGFkZGluZzogMTZweDtcclxufVxyXG4uc2lkZW5hdntcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLmRpdmlkZXJ7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgIH1cclxufVxyXG4uY2FydC1pdGVtcy1jb3VudHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTNweDtcclxuICAgIGxlZnQ6IDI2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmJ1c3F1ZWRhe1xyXG4gICAgbWluLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmFycmF7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNjg2MDA7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmJhcnJhIGF7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLy9zb24gcGFyYSBiYXJyYSBjb24gdGVsZWZvbm9zXHJcbi50ZWwtbW92aWx7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxufVxyXG4vL3NvbiBwYXJhIGJhcnJhIGNvbiB0ZWxlZm9ub3NcclxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAuYmFycmEge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNjg2MDA7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG4gICAgLnRlbC1tb3ZpbHtcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iZy1jb2xvci1qZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNjg2MDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm4tY29sb3ItamR7XHJcbiAgICBjb2xvcjogI2Y2ODYwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGl0bGUtbXV0ZWR7XHJcbiAgICBjb2xvcjogIzYxNjE2MSFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5iZy1jb2xvci1vZmVydGF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUxZjIxICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGVsLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ucGhvbmUtaXRlbSBwe1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcblxyXG4ucGhvbmUtaXRlbSBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5ib2xke1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5saW5rLW9ic2N1cmV7XHJcbiAgICBjb2xvcjogIzQyNDI0MiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuI2Nkay1vdmVybGF5LTAgLm1hdC1tZW51LXBhbmVsIHtcclxuICAgIG1pbi13aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1tZW51LWNvbnRlbnQgZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNzaWRlbmF2TWVudXtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgwLDgwLDgwLDAuOSk7XHJcbiAgICAuZmxsLWNvbG9yLWpke1xyXG4gICAgICAgIGZpbGw6ICNmNjg2MDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnBhcnBhZGVhIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBwYXJwYWRlbztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOnBhcnBhZGVvO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgbWFyZ2luOjVweDtcclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHBhcnBhZGVve1xyXG4gICAgMCUgeyBjb2xvcjogI2ZmZjsgfVxyXG4gICAgNTAlIHsgY29sb3I6IHJnYig2Niw2Niw2Nik7IH1cclxuICAgIDEwMCUgeyBjb2xvcjogI2ZmZjsgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcGFycGFkZW8ge1xyXG4gICAgMCUgeyBjb2xvcjogI2ZmZjsgfVxyXG4gICAgNTAlIHsgY29sb3I6IHJnYig2Niw2Niw2Nik7IH1cclxuICAgIDEwMCUgeyBjb2xvcjogI2ZmZjsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHBhcnBhZGVvIHtcclxuICAgIDAlIHsgY29sb3I6ICNmZmY7IH1cclxuICAgIDUwJSB7IGNvbG9yOiByZ2IoNjYsNjYsNjYpOyB9XHJcbiAgICAxMDAlIHsgY29sb3I6ICNmZmY7IH1cclxufVxyXG5cclxuLmZpeGVkLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICAvL2xlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgLy93aWR0aDogMTAwJSAgIWltcG9ydGFudDtcclxufVxyXG4vKiAtLS0tLS0tLS0tLSBkaXNwb3NpdGl2b3MgbcOzdmlsZXMgLS0tLS0tLS0tLS0gKi9cclxuLyogY2FtYmlvcyBjc3MgcGFyYSBtb2RvIHZlcnRpY2FsIHkgaG9yaXpvbnRhbCAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuYW5kIChtaW4td2lkdGg6IDMyMHB4KVxyXG5hbmQgKG1heC13aWR0aDogNzM2cHgpXHJcbntcclxuICAgIC8qIGluc2VydGEgYXF1w60gdHUgY8OzZGlnbyAqL1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweClcclxuYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3MzZweClcclxue1xyXG4gICAgLyogaW5zZXJ0YSBhcXXDrSB0dSBjw7NkaWdvICovXHJcbn1cclxuXHJcbi5jYWxsLWZvb3Rlcjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5jYXJ0LWZvb3RlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgei1pbmRleDogOTk5OTk5O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBib3R0b206IDE4NXB4O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUxZjIxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/components/sidenav-menu/sidenav-menu.service */ "./src/app/theme/components/sidenav-menu/sidenav-menu.service.ts");
/* harmony import */ var _theme_components_menu_telephone_dialog_telephone_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/components/menu/telephone-dialog/telephone-dialog.component */ "./src/app/theme/components/menu/telephone-dialog/telephone-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









 //TemplateCompiler

let PagesComponent = class PagesComponent {
    constructor(appSettings, appService, activatedRoute, sidenavMenuService, router, dialog, cookieService, fb, snackBar, _compiler) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.sidenavMenuService = sidenavMenuService;
        this.router = router;
        this.dialog = dialog;
        this.cookieService = cookieService;
        this.fb = fb;
        this.snackBar = snackBar;
        this._compiler = _compiler;
        // tslint:disable-next-line:no-inferrable-types
        this.onOpenTelephoneDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showBackToTop = false;
        this.brands = [];
        this.productTypes = [];
        this.additional = [];
        this.visibleCart = false;
        this.busy = true;
        this.faWhatsapp = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faWhatsapp"];
        this.router.events.subscribe(event => {
            this.actualUrl = this.router.url;
            this.actualUrls = this.actualUrl.split('/');
            if (this.actualUrls[1] == 'catalogo') {
                this.productoLink = this.actualUrls[3];
                this.productFormat = this.productoLink.replace(/-/g, ' ').replace(/_/g, '-');
                this.whatsappText = 'mas de ' + this.productFormat;
                this.visibleCart = true;
            }
            else {
                this.whatsappText = '';
                this.visibleCart = false;
            }
        });
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this._compiler.clearCache();
        this.getProductsCart();
        this.sidenavMenuItems = this.sidenavMenuService.getSidenavMenuItems();
        this.getBrands();
        this.getProductTypes();
        this.getAdditional();
        this.createForm();
    }
    createForm() {
        this.formSearch = this.fb.group({
            valorSearch: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
        });
    }
    getBrands() {
        this.appService.getBrands().subscribe(data => {
            this.brands = data;
            this.brands.forEach(brand => {
                brand.selected = false;
            });
        });
    }
    getProductsCart() {
        /*total = [];
        grandTotal = 0;
        cartItemCount = [];
        cartItemCountTotal = 0;*/
        if (this.cookieService.check('session')) {
            this.appService.getProductsCart().subscribe(res => {
                if (res == null) {
                    this.cookieService.delete('session', '/');
                }
                else {
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
    getAdditional() {
        this.appService.getAdditional().subscribe(data => {
            this.additional = data;
        });
    }
    getProductTypes() {
        this.appService.getProductTypes().subscribe(data => {
            this.productTypes = data;
        });
    }
    changeCategory(event) {
        if (event.target) {
            this.category = this.categories.filter(category => category.name === event.target.innerText)[0];
        }
        if (window.innerWidth < 960) {
            this.stopClickPropagate(event);
        }
    }
    remove(product) {
        const index = this.appService.Data.cartList.indexOf(product);
        if (index !== -1) {
            this.appService.Data.cartList.splice(index, 1);
            this.appService.Data.totalPrice = this.appService.Data.totalPrice - product.newPrice * product.cartCount;
            this.appService.Data.totalCartCount = this.appService.Data.totalCartCount - product.cartCount;
            this.appService.resetProductCartCount(product);
        }
    }
    clear() {
        this.appService.Data.cartList.forEach(product => {
            this.appService.resetProductCartCount(product);
        });
        this.appService.Data.cartList.length = 0;
        this.appService.Data.totalPrice = 0;
        this.appService.Data.totalCartCount = 0;
    }
    stopClickPropagate(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    search() {
        const valor = this.formSearch.value.valorSearch;
        if (valor !== '') {
            this.router.navigate(['/busqueda/', valor]);
        }
    }
    scrollToTop() {
        const scrollDuration = 200;
        const scrollStep = -window.pageYOffset / (scrollDuration / 20);
        const scrollInterval = setInterval(() => {
            if (window.pageYOffset !== 0) {
                window.scrollBy(0, scrollStep);
            }
            else {
                clearInterval(scrollInterval);
            }
        }, 10);
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                window.scrollTo(0, 0);
            });
        }
    }
    onWindowScroll($event) {
        ($event.target.documentElement.scrollTop > 300) ? this.showBackToTop = true : this.showBackToTop = false;
    }
    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.sidenav.close();
            }
        });
        this.sidenavMenuService.expandActiveSubMenu(this.sidenavMenuService.getSidenavMenuItems());
    }
    closeSubMenus() {
        if (window.innerWidth < 960) {
            this.sidenavMenuService.closeAllSubMenus();
        }
    }
    openTelephoneDialog() {
        const dialogRef = this.dialog.open(_theme_components_menu_telephone_dialog_telephone_dialog_component__WEBPACK_IMPORTED_MODULE_5__["TelephoneDialogComponent"], {
            panelClass: 'telephone-dialog',
            direction: 'ltr'
        });
    }
    getProductByUrl() {
        this.appService.getProductByName(this.productoLink).subscribe(data => {
            this.addProducToCart(data);
        });
    }
    addProducToCart(product) {
        if (this.busy) {
            const currentProduct = this.appService.Data.cartList.filter(item => item.id == product.id)[0];
            if (currentProduct) {
                if ((currentProduct.cartCount + 1) <= product.availibilityCount) {
                    this.busy = false;
                    product.cartCount = currentProduct.cartCount + 1;
                }
                else {
                    this.snackBar.open('No puedes agregar más de este producto', '×', {
                        panelClass: 'error',
                        verticalPosition: 'top',
                        duration: 5000
                    });
                    return false;
                }
            }
            else {
                this.busy = false;
                product.cartCount = 1;
            }
            this.appService.addToCart(product);
            setTimeout(() => { this.busy = true; }, 500);
        }
    }
    handleImgError(ev) {
        const source = ev.srcElement;
        const imgSrc = `assets/images/productos/generico2.jpg`;
        source.src = imgSrc;
    }
    fixDisappearIOSBug() {
        const styleNode = document.createElement('style');
        styleNode.type = 'text/css';
        styleNode.id = 'panel-fix';
        styleNode.appendChild(document.createTextNode('.mat-menu-panel{overflow: initial !important;}'));
        document.getElementsByTagName('head')[0].appendChild(styleNode);
        setTimeout(() => {
            styleNode.remove();
        }, 500);
    }
};
PagesComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidenavMenuService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], PagesComponent.prototype, "onOpenTelephoneDialog", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav', { static: true }),
    __metadata("design:type", Object)
], PagesComponent.prototype, "sidenav", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PagesComponent.prototype, "onWindowScroll", null);
PagesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-pages',
        template: __webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pages.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        providers: [_theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidenavMenuService"]],
        styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"],
        _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidenavMenuService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"]])
], PagesComponent);



/***/ }),

/***/ "./src/app/shared/banners/banners.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/banners/banners.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banners-container {\n  margin: 22px -8px;\n}\n.banners-container .banner {\n  position: relative;\n  margin: 8px;\n  padding: 0;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n  transition: 0.15s ease-in;\n}\n.banners-container .banner .info {\n  height: 100%;\n  width: 100%;\n  color: #fff;\n  padding: 90px 0;\n  transition: 0.15s ease-in;\n}\n.banners-container .banner .info h1 {\n  font-size: 36px;\n}\n.banners-container .banner .info .title {\n  font-weight: 500;\n  text-align: center;\n}\n.banners-container .banner .info .subtitle {\n  font-weight: normal;\n  font-style: italic;\n  text-align: center;\n}\n@media (max-width: 959px) {\n  .banners-container .banner .info {\n    padding: 30px 0px;\n  }\n  .banners-container .banner .info h1 {\n    font-size: 24px;\n  }\n  .banners-container .banner .info h2 {\n    font-size: 16px;\n  }\n  .banners-container .banner .info h3 {\n    font-size: 14px;\n  }\n  .banners-container .banner .info h4 {\n    font-size: 14px;\n  }\n}\n.info div {\n  background: rgba(0, 0, 0, 0.4);\n}\n/*h1{\n    background: rgba(0, 0, 0, 0.4);\n}\nh2{\n    background: rgba(0, 0, 0, 0.4);\n}\nh3{\n    background: rgba(0, 0, 0, 0.4);\n}\nh4{\n    background: rgba(0, 0, 0, 0.4);\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Jhbm5lcnMvQzpcXHhhbXBwXFxodGRvY3NcXGVtcG9yaXVtLXNzci9zcmNcXGFwcFxcc2hhcmVkXFxiYW5uZXJzXFxiYW5uZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvYmFubmVycy9iYW5uZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNFUjtBRERRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDR1o7QURGWTtFQUNJLGVBQUE7QUNJaEI7QURGWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNJaEI7QURGWTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0loQjtBRE9BO0VBR1k7SUFDSSxpQkFBQTtFQ1BkO0VEUWM7SUFDSSxlQUFBO0VDTmxCO0VEUWM7SUFDSSxlQUFBO0VDTmxCO0VEUWM7SUFDSSxlQUFBO0VDTmxCO0VEUWM7SUFDSSxlQUFBO0VDTmxCO0FBQ0Y7QURZQTtFQUNJLDhCQUFBO0FDVko7QURhQTs7Ozs7Ozs7Ozs7RUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9iYW5uZXJzL2Jhbm5lcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVycy1jb250YWluZXJ7XHJcbiAgICBtYXJnaW46IDIycHggLThweDtcclxuICAgIC5iYW5uZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbjogOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW47XHJcbiAgICAgICAgLmluZm97XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA5MHB4IDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW47XHJcbiAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN1YnRpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAuaW5mb3tcclxuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgIC5iYW5uZXJzLWNvbnRhaW5lcntcclxuICAgICAgICAuYmFubmVye1xyXG4gICAgICAgICAgICAuaW5mb3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaW5mbyBkaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi8qaDF7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuaDJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuaDN7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuaDR7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn0qL1xyXG4iLCIuYmFubmVycy1jb250YWluZXIge1xuICBtYXJnaW46IDIycHggLThweDtcbn1cbi5iYW5uZXJzLWNvbnRhaW5lciAuYmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDhweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluO1xufVxuLmJhbm5lcnMtY29udGFpbmVyIC5iYW5uZXIgLmluZm8ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOTBweCAwO1xuICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluO1xufVxuLmJhbm5lcnMtY29udGFpbmVyIC5iYW5uZXIgLmluZm8gaDEge1xuICBmb250LXNpemU6IDM2cHg7XG59XG4uYmFubmVycy1jb250YWluZXIgLmJhbm5lciAuaW5mbyAudGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmFubmVycy1jb250YWluZXIgLmJhbm5lciAuaW5mbyAuc3VidGl0bGUge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTlweCkge1xuICAuYmFubmVycy1jb250YWluZXIgLmJhbm5lciAuaW5mbyB7XG4gICAgcGFkZGluZzogMzBweCAwcHg7XG4gIH1cbiAgLmJhbm5lcnMtY29udGFpbmVyIC5iYW5uZXIgLmluZm8gaDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuYmFubmVycy1jb250YWluZXIgLmJhbm5lciAuaW5mbyBoMiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5iYW5uZXJzLWNvbnRhaW5lciAuYmFubmVyIC5pbmZvIGgzIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmJhbm5lcnMtY29udGFpbmVyIC5iYW5uZXIgLmluZm8gaDQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLmluZm8gZGl2IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4vKmgxe1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbmgye1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbmgze1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbmg0e1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn0qLyJdfQ== */"

/***/ }),

/***/ "./src/app/shared/banners/banners.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/banners/banners.component.ts ***!
  \*****************************************************/
/*! exports provided: BannersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersComponent", function() { return BannersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let BannersComponent = class BannersComponent {
    constructor(appService) {
        this.appService = appService;
        this.banners = [];
        this.bannerResize = [];
    }
    ngOnInit() {
        this.window = (typeof window !== 'undefined') ? window : null;
        this.appService.getBanners().subscribe(data => {
            this.banners = data;
            if (this.window) {
                if (this.window.innerWidth < 960) {
                    this.bannerResize[0] = {
                        'background-image': 'url(' + data[0].mobile + ')'
                    };
                    this.bannerResize[1] = {
                        'background-image': 'url(' + data[1].mobile + ')'
                    };
                    this.bannerResize[2] = {
                        'background-image': 'url(' + data[2].mobile + ')'
                    };
                }
                else {
                    this.bannerResize[0] = {
                        'background-image': 'url(' + data[0].image + ')'
                    };
                    this.bannerResize[1] = {
                        'background-image': 'url(' + data[1].image + ')'
                    };
                    this.bannerResize[2] = {
                        'background-image': 'url(' + data[2].image + ')'
                    };
                }
            }
        });
    }
    onWindowResize() {
        if (this.window) {
            if (this.window.innerWidth < 960) {
                this.bannerResize[0] = {
                    'background-image': 'url(' + this.banners[0].mobile + ')'
                };
                this.bannerResize[1] = {
                    'background-image': 'url(' + this.banners[1].mobile + ')'
                };
                this.bannerResize[2] = {
                    'background-image': 'url(' + this.banners[2].mobile + ')'
                };
            }
            else {
                this.bannerResize[0] = {
                    'background-image': 'url(' + this.banners[0].image + ')'
                };
                this.bannerResize[1] = {
                    'background-image': 'url(' + this.banners[1].image + ')'
                };
                this.bannerResize[2] = {
                    'background-image': 'url(' + this.banners[2].image + ')'
                };
            }
        }
    }
    getBanner(index) {
        return this.banners[index];
    }
    getBgImage(index) {
        let bgImage;
        if (this.window) {
            if (this.window.innerWidth < 960) {
                bgImage = {
                    'background-image': index != null ? 'url(' + this.banners[index].mobile + ')' : 'url(https://via.placeholder.com/600x400/ff0000/fff/)'
                };
            }
            else {
                bgImage = {
                    'background-image': index != null ? 'url(' + this.banners[index].image + ')' : 'url(https://via.placeholder.com/600x400/ff0000/fff/)'
                };
            }
        }
        return bgImage;
    }
};
BannersComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('banners'),
    __metadata("design:type", Array)
], BannersComponent.prototype, "banners", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BannersComponent.prototype, "onWindowResize", null);
BannersComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-banners',
        template: __webpack_require__(/*! raw-loader!./banners.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/banners/banners.component.html"),
        styles: [__webpack_require__(/*! ./banners.component.scss */ "./src/app/shared/banners/banners.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
], BannersComponent);



/***/ }),

/***/ "./src/app/shared/brands-carousel/brands-carousel.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/brands-carousel/brands-carousel.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brands-carousel {\n  background: #fff;\n  position: relative;\n  padding: 8px 0;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n.brands-carousel .swiper-container {\n  padding: 8px 2px;\n  margin: 0 14px;\n}\n.brands-carousel .swiper-container .brand-item {\n  height: 80px;\n  display: flex;\n  align-items: center;\n}\n.brands-carousel .swiper-container .brand-item img {\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n}\n.brands-carousel .swiper-button-prev {\n  left: -10px;\n}\n.brands-carousel .swiper-button-next {\n  right: -10px;\n}\n.text-default {\n  font-size: 15px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2JyYW5kcy1jYXJvdXNlbC9DOlxceGFtcHBcXGh0ZG9jc1xcZW1wb3JpdW0tc3NyL3NyY1xcYXBwXFxzaGFyZWRcXGJyYW5kcy1jYXJvdXNlbFxcYnJhbmRzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvYnJhbmRzLWNhcm91c2VsL2JyYW5kcy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNFUjtBRERRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0daO0FERlk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSWhCO0FEQUk7RUFDSSxXQUFBO0FDRVI7QURBSTtFQUNJLFlBQUE7QUNFUjtBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYnJhbmRzLWNhcm91c2VsL2JyYW5kcy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZHMtY2Fyb3VzZWx7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIC5zd2lwZXItY29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAycHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDE0cHg7XHJcbiAgICAgICAgLmJyYW5kLWl0ZW17XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN3aXBlci1idXR0b24tcHJldntcclxuICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgIH1cclxuICAgIC5zd2lwZXItYnV0dG9uLW5leHR7XHJcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGV4dC1kZWZhdWx0e1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4iLCIuYnJhbmRzLWNhcm91c2VsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA4cHggMDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5icmFuZHMtY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXIge1xuICBwYWRkaW5nOiA4cHggMnB4O1xuICBtYXJnaW46IDAgMTRweDtcbn1cbi5icmFuZHMtY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXIgLmJyYW5kLWl0ZW0ge1xuICBoZWlnaHQ6IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYnJhbmRzLWNhcm91c2VsIC5zd2lwZXItY29udGFpbmVyIC5icmFuZC1pdGVtIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uYnJhbmRzLWNhcm91c2VsIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICBsZWZ0OiAtMTBweDtcbn1cbi5icmFuZHMtY2Fyb3VzZWwgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gIHJpZ2h0OiAtMTBweDtcbn1cblxuLnRleHQtZGVmYXVsdCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/brands-carousel/brands-carousel.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/brands-carousel/brands-carousel.component.ts ***!
  \*********************************************************************/
/*! exports provided: BrandsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsCarouselComponent", function() { return BrandsCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let BrandsCarouselComponent = class BrandsCarouselComponent {
    constructor() {
        this.brands = [];
        this.config = {};
    }
    ngAfterViewInit() {
        this.config = {
            slidesPerView: 4,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: true,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },
            speed: 500,
            effect: 'slide',
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                480: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 2,
                },
                960: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 4,
                },
                1500: {
                    slidesPerView: 4,
                }
            }
        };
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('brands'),
    __metadata("design:type", Array)
], BrandsCarouselComponent.prototype, "brands", void 0);
BrandsCarouselComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-brands-carousel',
        template: __webpack_require__(/*! raw-loader!./brands-carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/brands-carousel/brands-carousel.component.html"),
        styles: [__webpack_require__(/*! ./brands-carousel.component.scss */ "./src/app/shared/brands-carousel/brands-carousel.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BrandsCarouselComponent);



/***/ }),

/***/ "./src/app/shared/controls/controls.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/controls/controls.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".area-btn-shopping {\n  text-align: center;\n}\n.area-btn-shopping .btn-shopping {\n  background-color: #de1f21;\n  border-radius: 5px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbnRyb2xzL0M6XFx4YW1wcFxcaHRkb2NzXFxlbXBvcml1bS1zc3Ivc3JjXFxhcHBcXHNoYXJlZFxcY29udHJvbHNcXGNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29udHJvbHMvY29udHJvbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFNRSxrQkFBQTtBQ0pGO0FEREU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbnRyb2xzL2NvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFyZWEtYnRuLXNob3BwaW5ne1xyXG4gIC5idG4tc2hvcHBpbmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUxZjIxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiLmFyZWEtYnRuLXNob3BwaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFyZWEtYnRuLXNob3BwaW5nIC5idG4tc2hvcHBpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUxZjIxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/controls/controls.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/controls/controls.component.ts ***!
  \*******************************************************/
/*! exports provided: ControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsComponent", function() { return ControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.models */ "./src/app/app.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ControlsComponent = class ControlsComponent {
    constructor(appService, snackBar) {
        this.appService = appService;
        this.snackBar = snackBar;
        this.onOpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onQuantityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.count = 1;
        this.busy = false;
    }
    ngOnInit() {
        if (this.product) {
            if (this.product.cartCount > 0) {
                this.count = this.product.cartCount;
            }
        }
        this.layoutAlign();
    }
    layoutAlign() {
        if (this.type == 'all') {
            this.align = 'space-between center';
        }
        else if (this.type == 'wish') {
            this.align = 'start center';
        }
        else {
            this.align = 'center center';
        }
    }
    increment(count) {
        if (this.type == 'cart') {
            this.busy = true;
            setTimeout(() => { this.busy = false; }, 800);
        }
        if (this.count < this.product.availibilityCount) {
            this.count++;
            let obj = {
                productId: this.product.id,
                soldQuantity: this.count,
                total: this.count * this.product.newPrice
            };
            this.changeQuantity(obj);
        }
        else {
            this.snackBar.open('No sé pueden aumentar la cantidad de este producto ' + this.count + '.', '×', {
                panelClass: 'error',
                verticalPosition: 'top',
                duration: 3000
            });
        }
    }
    decrement(count) {
        if (this.type == 'cart') {
            this.busy = true;
            setTimeout(() => { this.busy = false; }, 800);
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
    addToCompare(product) {
        this.appService.addToCompare(product);
    }
    addToWishList(product) {
        this.appService.addToWishList(product);
    }
    addToCart(product) {
        let currentProduct = this.appService.Data.cartList.filter(item => item.id == product.id)[0];
        if (currentProduct) {
            if ((currentProduct.cartCount + this.count) <= this.product.availibilityCount) {
                this.busy = true;
                product.cartCount = currentProduct.cartCount + this.count;
            }
            else {
                // this.snackBar.open('You can not add more items than available. In stock ' + this.product.availibilityCount + ' items and you already added ' + currentProduct.cartCount + ' item to your cart', '×', {
                this.snackBar.open('No puedes agregar más de este producto', '×', {
                    panelClass: 'error',
                    verticalPosition: 'top',
                    duration: 5000
                });
                return false;
            }
        }
        else {
            this.busy = true;
            product.cartCount = this.count;
        }
        this.appService.addToCart(product);
        setTimeout(() => { this.busy = false; }, 500);
    }
    openProductDialog(event) {
        this.onOpenProductDialog.emit(event);
    }
    changeQuantity(value) {
        this.onQuantityChange.emit(value);
    }
};
ControlsComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _app_models__WEBPACK_IMPORTED_MODULE_3__["Product"])
], ControlsComponent.prototype, "product", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], ControlsComponent.prototype, "type", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], ControlsComponent.prototype, "align", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], ControlsComponent.prototype, "onOpenProductDialog", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], ControlsComponent.prototype, "onQuantityChange", void 0);
ControlsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-controls',
        template: __webpack_require__(/*! raw-loader!./controls.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/controls/controls.component.html"),
        styles: [__webpack_require__(/*! ./controls.component.scss */ "./src/app/shared/controls/controls.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
], ControlsComponent);



/***/ }),

/***/ "./src/app/shared/dialog/dialog.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/dialog/dialog.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/dialog/dialog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/dialog/dialog.component.ts ***!
  \***************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

;

let DialogComponent = class DialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.config = {};
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
    close() {
        this.dialogRef.close();
    }
};
DialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }
];
DialogComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-dialog',
        template: __webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/dialog/dialog.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/shared/dialog/dialog.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
], DialogComponent);



/***/ }),

/***/ "./src/app/shared/json-ld/json-ld.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/json-ld/json-ld.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9qc29uLWxkL2pzb24tbGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/json-ld/json-ld.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/json-ld/json-ld.component.ts ***!
  \*****************************************************/
/*! exports provided: JsonLdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonLdComponent", function() { return JsonLdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let JsonLdComponent = class JsonLdComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.jsonLD = this.getSafeHTML(this.json);
    }
    getSafeHTML(value) {
        // If value convert to JSON and escape / to prevent script tag in JSON
        const json = value
            ? JSON.stringify(value, null, 2).replace(/\//g, '\\/')
            : '';
        const html = `${json}`;
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
};
JsonLdComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('json'),
    __metadata("design:type", Object)
], JsonLdComponent.prototype, "json", void 0);
JsonLdComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-json-ld',
        template: __webpack_require__(/*! raw-loader!./json-ld.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/json-ld/json-ld.component.html"),
        styles: [__webpack_require__(/*! ./json-ld.component.scss */ "./src/app/shared/json-ld/json-ld.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
], JsonLdComponent);



/***/ }),

/***/ "./src/app/shared/paypal-button/paypal-button.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/paypal-button/paypal-button.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#buttons-container > div > div {\n  width: 150px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BheXBhbC1idXR0b24vQzpcXHhhbXBwXFxodGRvY3NcXGVtcG9yaXVtLXNzci9zcmNcXGFwcFxcc2hhcmVkXFxwYXlwYWwtYnV0dG9uXFxwYXlwYWwtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvcGF5cGFsLWJ1dHRvbi9wYXlwYWwtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYXlwYWwtYnV0dG9uL3BheXBhbC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYnV0dG9ucy1jb250YWluZXIgPiBkaXYgPiBkaXZ7XHJcbiAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxufVxyXG4iLCIjYnV0dG9ucy1jb250YWluZXIgPiBkaXYgPiBkaXYge1xuICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/paypal-button/paypal-button.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/paypal-button/paypal-button.component.ts ***!
  \*****************************************************************/
/*! exports provided: PaypalButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalButtonComponent", function() { return PaypalButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let PaypalButtonComponent = class PaypalButtonComponent {
    constructor(appService, formBuilder, dialogRef, router) {
        this.appService = appService;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.router = router;
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showButton = true;
        this.deliveryComission = true;
    }
    ngOnInit() {
        this.deliveryComission = this.appService.Data.totalPrice < 3000;
        this.clientForm = this.formBuilder.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]{3,50}')])],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]{3,50}')])],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__["emailValidator"]])],
            phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')])]
        });
        let total = this.appService.Data.totalPrice;
        //se evalua si lleva comisión de envio
        total += this.deliveryComission ? 300 : 0;
        //Se agrega la comisión de paypal
        total = total * 1.04;
        const router = this.router;
        const modal = this.dialogRef;
        const form = this.clientForm;
        let products = [];
        this.appService.Data.cartList.forEach(product => {
            products.push(product.name);
        });
        // @ts-ignore
        paypal.Buttons({
            createOrder: function (data, actions) {
                return actions.order.create({
                    purchase_units: [
                        {
                            reference_id: "PAGOJD",
                            amount: {
                                value: total
                            }
                        }
                    ]
                });
            },
            onApprove: function (data, actions) {
                return actions.order.capture().then(function (details) {
                    const status = details.purchase_units[0].payments.captures[0].status;
                    const name = details.purchase_units[0].shipping.name.full_name;
                    const address = Object.values(details.purchase_units[0].shipping.address).toString();
                    const clientForm = JSON.stringify(form.value);
                    // const email = details.payer.email_address;
                    modal.close();
                    router.navigate(['/confirmation/button/PayPal', data.orderID], { queryParams: { 'name': name, 'status': status, 'address': address, 'client': clientForm } });
                    // Call your server to save the transaction
                    return true;
                });
            }
        }).render('#paypal-button-container');
    }
    showButtonPaypal() {
        this.showButton = this.clientForm.invalid;
    }
    removeObject() {
        this._ref.destroy();
    }
    close() {
        this.dialogRef.close();
    }
};
PaypalButtonComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PaypalButtonComponent.prototype, "output", void 0);
PaypalButtonComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-paypal-button',
        template: __webpack_require__(/*! raw-loader!./paypal-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/paypal-button/paypal-button.component.html"),
        styles: [__webpack_require__(/*! ./paypal-button.component.scss */ "./src/app/shared/paypal-button/paypal-button.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], PaypalButtonComponent);



/***/ }),

/***/ "./src/app/shared/products-carousel/product-dialog/product-dialog.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/products-carousel/product-dialog/product-dialog.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-dialog .mat-dialog-container {\n  overflow: visible !important;\n}\n.product-dialog .mat-dialog-container .close-btn-outer {\n  position: relative;\n}\n.product-dialog .mat-dialog-container .close-btn-outer button {\n  position: absolute;\n  right: -44px;\n  top: -44px;\n}\n.product-dialog .mat-dialog-container .swiper-slide {\n  text-align: center;\n}\n.product-dialog .mat-dialog-container .swiper-slide img {\n  max-width: 100%;\n}\n.fn-color-inStock {\n  color: #15a225 !important;\n  font-weight: bold;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Byb2R1Y3RzLWNhcm91c2VsL3Byb2R1Y3QtZGlhbG9nL0M6XFx4YW1wcFxcaHRkb2NzXFxlbXBvcml1bS1zc3Ivc3JjXFxhcHBcXHNoYXJlZFxccHJvZHVjdHMtY2Fyb3VzZWxcXHByb2R1Y3QtZGlhbG9nXFxwcm9kdWN0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3Byb2R1Y3RzLWNhcm91c2VsL3Byb2R1Y3QtZGlhbG9nL3Byb2R1Y3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksNEJBQUE7QUNBUjtBRENRO0VBQ0ksa0JBQUE7QUNDWjtBREFZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0VoQjtBRENRO0VBQ0ksa0JBQUE7QUNDWjtBREFZO0VBQ0ksZUFBQTtBQ0VoQjtBRElBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcm9kdWN0cy1jYXJvdXNlbC9wcm9kdWN0LWRpYWxvZy9wcm9kdWN0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWRpYWxvZ3tcclxuICAgIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5jbG9zZS1idG4tb3V0ZXJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC00NHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtNDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3dpcGVyLXNsaWRle1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZuLWNvbG9yLWluU3RvY2t7XHJcbiAgICBjb2xvcjogIzE1YTIyNSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIiwiLnByb2R1Y3QtZGlhbG9nIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdC1kaWFsb2cgLm1hdC1kaWFsb2ctY29udGFpbmVyIC5jbG9zZS1idG4tb3V0ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdC1kaWFsb2cgLm1hdC1kaWFsb2ctY29udGFpbmVyIC5jbG9zZS1idG4tb3V0ZXIgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTQ0cHg7XG4gIHRvcDogLTQ0cHg7XG59XG4ucHJvZHVjdC1kaWFsb2cgLm1hdC1kaWFsb2ctY29udGFpbmVyIC5zd2lwZXItc2xpZGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZHVjdC1kaWFsb2cgLm1hdC1kaWFsb2ctY29udGFpbmVyIC5zd2lwZXItc2xpZGUgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZm4tY29sb3ItaW5TdG9jayB7XG4gIGNvbG9yOiAjMTVhMjI1ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/products-carousel/product-dialog/product-dialog.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/products-carousel/product-dialog/product-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDialogComponent", function() { return ProductDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.models */ "./src/app/app.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




let ProductDialogComponent = class ProductDialogComponent {
    constructor(appService, dialogRef, product) {
        this.appService = appService;
        this.dialogRef = dialogRef;
        this.product = product;
        this.config = {};
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
    close() {
        this.dialogRef.close();
    }
    changeString($productType, $brand, $mpn) {
        $brand = $brand.replace(/ /g, "_");
        $mpn = $mpn.replace(/-/g, "_");
        $productType = $productType.replace(/ /g, "_");
        return $productType + '-' + $brand + '-' + $mpn;
    }
    changeStringBrand($brand) {
        return $brand.replace(/ /g, "_");
    }
    handleImgError(ev) {
        const source = ev.srcElement;
        const imgSrc = `assets/images/images/generico2.jpg`;
        source.src = imgSrc;
    }
};
ProductDialogComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: _app_models__WEBPACK_IMPORTED_MODULE_3__["Product"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
];
ProductDialogComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-product-dialog',
        template: __webpack_require__(/*! raw-loader!./product-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/products-carousel/product-dialog/product-dialog.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./product-dialog.component.scss */ "./src/app/shared/products-carousel/product-dialog/product-dialog.component.scss")]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
        _app_models__WEBPACK_IMPORTED_MODULE_3__["Product"]])
], ProductDialogComponent);



/***/ }),

/***/ "./src/app/shared/products-carousel/products-carousel.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shared/products-carousel/products-carousel.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiper-container {\n  padding: 16px 2px 2px 2px;\n}\n.swiper-container .swiper-slide {\n  text-align: center;\n}\n.swiper-button-next.swiper-button-disabled,\n.swiper-button-prev.swiper-button-disabled {\n  pointer-events: auto;\n}\n.ribbon span {\n  position: absolute;\n  display: block;\n  width: 225px;\n  padding: 5px 0;\n  moz-box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);\n  -khtml-box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);\n  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);\n  -o-box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);\n  color: #fff;\n  font-size: 18px;\n  text-align: center;\n  background-color: #de1f21 !important;\n  padding: 0;\n  font-weight: 700;\n}\n.ribbon-top-right span {\n  left: -80px;\n  top: 18px;\n  transform: rotate(-45deg);\n}\n.free-delivery {\n  width: 80px;\n  position: absolute;\n  top: 123px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Byb2R1Y3RzLWNhcm91c2VsL0M6XFx4YW1wcFxcaHRkb2NzXFxlbXBvcml1bS1zc3Ivc3JjXFxhcHBcXHNoYXJlZFxccHJvZHVjdHMtY2Fyb3VzZWxcXHByb2R1Y3RzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvcHJvZHVjdHMtY2Fyb3VzZWwvcHJvZHVjdHMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKO0FEQUk7RUFDSSxrQkFBQTtBQ0VSO0FEQ0E7O0VBRUksb0JBQUE7QUNFSjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsOENBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0NKO0FERUE7RUFDSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FDQ0o7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcHJvZHVjdHMtY2Fyb3VzZWwvcHJvZHVjdHMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpcGVyLWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDE2cHggMnB4IDJweCAycHg7XHJcbiAgICAuc3dpcGVyLXNsaWRle1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tZGlzYWJsZWQsXHJcbi5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG59XHJcblxyXG5cclxuLnJpYmJvbiBzcGFue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjI1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIG1vei1ib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgLWtodG1sLWJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLDAsMCwuNik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLDAsMCwuNik7XHJcbiAgICAtby1ib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUxZjIxICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnJpYmJvbi10b3AtcmlnaHQgc3BhbiB7XHJcbiAgICBsZWZ0OiAtODBweDtcclxuICAgIHRvcDogMThweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi5mcmVlLWRlbGl2ZXJ5e1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEyM3B4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG4iLCIuc3dpcGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHggMnB4IDJweCAycHg7XG59XG4uc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLXNsaWRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tZGlzYWJsZWQsXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLnJpYmJvbiBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIyNXB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbW96LWJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAta2h0bWwtYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIC1vLWJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTFmMjEgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnJpYmJvbi10b3AtcmlnaHQgc3BhbiB7XG4gIGxlZnQ6IC04MHB4O1xuICB0b3A6IDE4cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5cbi5mcmVlLWRlbGl2ZXJ5IHtcbiAgd2lkdGg6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMjNweDtcbiAgcmlnaHQ6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/products-carousel/products-carousel.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/products-carousel/products-carousel.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsCarouselComponent", function() { return ProductsCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-dialog/product-dialog.component */ "./src/app/shared/products-carousel/product-dialog/product-dialog.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let ProductsCarouselComponent = class ProductsCarouselComponent {
    constructor(appSettings, appService, dialog, router, activatedRoute, cd2) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.dialog = dialog;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cd2 = cd2;
        this.products = [];
        // @ViewChild('swiperEl', {static: true}) directiveRef2: SwiperDirective;
        this.config = {};
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
    openProductDialog(product) {
        let dialogRef = this.dialog.open(_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ProductDialogComponent"], {
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
    refreshPage() {
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
    changeString($productType, $brand, $mpn) {
        $brand = $brand.replace(/ /g, "_").toLowerCase();
        $mpn = $mpn.replace(/-/g, "_").toLowerCase();
        $productType = $productType.replace(/ /g, "_").toLowerCase();
        return $productType + '-' + $brand + '-' + $mpn;
    }
    changeStringBrand($brand) {
        return $brand.replace(/ /g, "_").toLowerCase();
    }
    handleImgError(ev) {
        const source = ev.srcElement;
        const imgSrc = `assets/images/productos/generico2.jpg`;
        source.src = imgSrc;
    }
};
ProductsCarouselComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('products'),
    __metadata("design:type", Array)
], ProductsCarouselComponent.prototype, "products", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperDirective"], { static: true }),
    __metadata("design:type", ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperDirective"])
], ProductsCarouselComponent.prototype, "directiveRef2", void 0);
ProductsCarouselComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-products-carousel',
        template: __webpack_require__(/*! raw-loader!./products-carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/products-carousel/products-carousel.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./products-carousel.component.scss */ "./src/app/shared/products-carousel/products-carousel.component.scss")]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"],
        _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
], ProductsCarouselComponent);



/***/ }),

/***/ "./src/app/shared/sections-panel/sections-panel.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/sections-panel/sections-panel.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".link-type {\n  text-decoration: none;\n}\n\n.mat-list-item {\n  height: 25px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlY3Rpb25zLXBhbmVsL0M6XFx4YW1wcFxcaHRkb2NzXFxlbXBvcml1bS1zc3Ivc3JjXFxhcHBcXHNoYXJlZFxcc2VjdGlvbnMtcGFuZWxcXHNlY3Rpb25zLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2VjdGlvbnMtcGFuZWwvc2VjdGlvbnMtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBRENBO0VBQ0ksdUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZWN0aW9ucy1wYW5lbC9zZWN0aW9ucy1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rLXR5cGV7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLm1hdC1saXN0LWl0ZW17XHJcbiAgICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG4iLCIubGluay10eXBlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubWF0LWxpc3QtaXRlbSB7XG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/sections-panel/sections-panel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/sections-panel/sections-panel.component.ts ***!
  \*******************************************************************/
/*! exports provided: SectionsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsPanelComponent", function() { return SectionsPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let SectionsPanelComponent = class SectionsPanelComponent {
    constructor() {
        this.productsType = [];
        this.brands = [];
        this.additional = [];
    }
    ngOnInit() {
    }
    changeString($string) {
        return $string.replace(/ /g, "-").toLowerCase();
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('productTypes'),
    __metadata("design:type", Array)
], SectionsPanelComponent.prototype, "productsType", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('brands'),
    __metadata("design:type", Array)
], SectionsPanelComponent.prototype, "brands", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('additional'),
    __metadata("design:type", Array)
], SectionsPanelComponent.prototype, "additional", void 0);
SectionsPanelComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sections-panel',
        template: __webpack_require__(/*! raw-loader!./sections-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/sections-panel/sections-panel.component.html"),
        styles: [__webpack_require__(/*! ./sections-panel.component.scss */ "./src/app/shared/sections-panel/sections-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SectionsPanelComponent);



/***/ }),

/***/ "./src/app/shared/sections-side/sections-side.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/sections-side/sections-side.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-sidenav {\n  width: 280px;\n  border: 0 !important;\n}\n.filter-sidenav .mat-expansion-panel-header-title {\n  text-transform: uppercase;\n}\n.filter-row {\n  background: #fff;\n  padding: 8px 12px;\n}\n.all-products {\n  min-height: 400px;\n  padding: 2px;\n  overflow: hidden;\n}\n.all-products.p-left {\n  padding-left: 16px;\n}\n.products-wrapper {\n  margin: 8px -8px;\n}\n.products-wrapper .col {\n  padding: 8px;\n}\n.categories-wrapper {\n  position: relative;\n  max-height: 300px;\n}\n.filter-buttons a {\n  min-width: 36px;\n  margin: 0 6px 10px 0;\n  padding: 0;\n}\n.filter-price .mat-slider-horizontal {\n  min-width: 110px;\n}\n.filter-brands a {\n  width: 66px;\n  height: 44px;\n  min-width: 66px;\n  margin: 0 6px 10px 0;\n  padding: 0px;\n  overflow: hidden;\n}\n.filter-brands a img {\n  width: 66px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlY3Rpb25zLXNpZGUvQzpcXHhhbXBwXFxodGRvY3NcXGVtcG9yaXVtLXNzci9zcmNcXGFwcFxcc2hhcmVkXFxzZWN0aW9ucy1zaWRlXFxzZWN0aW9ucy1zaWRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2VjdGlvbnMtc2lkZS9zZWN0aW9ucy1zaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FDREo7QURFSTtFQUNJLHlCQUFBO0FDQVI7QURHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREVBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7QUNFUjtBREVBO0VBQ0ksZ0JBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FERUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURHSTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUNBUjtBREtJO0VBQ0ksZ0JBQUE7QUNGUjtBRE9JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNKUjtBREtRO0VBQ0ksV0FBQTtBQ0haIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NlY3Rpb25zLXNpZGUvc2VjdGlvbnMtc2lkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmZpbHRlci1zaWRlbmF2e1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbn1cclxuLmZpbHRlci1yb3d7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbn1cclxuLmFsbC1wcm9kdWN0c3tcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICYucC1sZWZ0e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuLnByb2R1Y3RzLXdyYXBwZXJ7XHJcbiAgICBtYXJnaW46IDhweCAtOHB4O1xyXG4gICAgLmNvbHtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLXdyYXBwZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmZpbHRlci1idXR0b25ze1xyXG4gICAgYXtcclxuICAgICAgICBtaW4td2lkdGg6IDM2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDZweCAxMHB4IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRlci1wcmljZXtcclxuICAgIC5tYXQtc2xpZGVyLWhvcml6b250YWx7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRlci1icmFuZHN7XHJcbiAgICBhe1xyXG4gICAgICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBtaW4td2lkdGg6IDY2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDZweCAxMHB4IDA7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogNjZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmZpbHRlci1zaWRlbmF2IHtcbiAgd2lkdGg6IDI4MHB4O1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cbi5maWx0ZXItc2lkZW5hdiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZmlsdGVyLXJvdyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xufVxuXG4uYWxsLXByb2R1Y3RzIHtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hbGwtcHJvZHVjdHMucC1sZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG4ucHJvZHVjdHMtd3JhcHBlciB7XG4gIG1hcmdpbjogOHB4IC04cHg7XG59XG4ucHJvZHVjdHMtd3JhcHBlciAuY29sIHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY2F0ZWdvcmllcy13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbn1cblxuLmZpbHRlci1idXR0b25zIGEge1xuICBtaW4td2lkdGg6IDM2cHg7XG4gIG1hcmdpbjogMCA2cHggMTBweCAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZmlsdGVyLXByaWNlIC5tYXQtc2xpZGVyLWhvcml6b250YWwge1xuICBtaW4td2lkdGg6IDExMHB4O1xufVxuXG4uZmlsdGVyLWJyYW5kcyBhIHtcbiAgd2lkdGg6IDY2cHg7XG4gIGhlaWdodDogNDRweDtcbiAgbWluLXdpZHRoOiA2NnB4O1xuICBtYXJnaW46IDAgNnB4IDEwcHggMDtcbiAgcGFkZGluZzogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZpbHRlci1icmFuZHMgYSBpbWcge1xuICB3aWR0aDogNjZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/sections-side/sections-side.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/sections-side/sections-side.component.ts ***!
  \*****************************************************************/
/*! exports provided: SectionsSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsSideComponent", function() { return SectionsSideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let SectionsSideComponent = class SectionsSideComponent {
    constructor(appService) {
        this.appService = appService;
        this.productTypes = [];
        this.brands = [];
        this.additional = [];
    }
    ngOnInit() {
        this.getBrands();
        this.getProductTypes();
        this.getAdditional();
    }
    getBrands() {
        this.appService.getBrands().subscribe(data => {
            this.brands = data;
        });
    }
    getAdditional() {
        this.appService.getAdditional().subscribe(data => {
            this.additional = data;
        });
    }
    getProductTypes() {
        this.appService.getProductTypes().subscribe(data => {
            this.productTypes = data;
        });
    }
    changeStringBrand($brand) {
        return $brand.replace(/ /g, "-").toLowerCase();
    }
};
SectionsSideComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }
];
SectionsSideComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sections-side',
        template: __webpack_require__(/*! raw-loader!./sections-side.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/sections-side/sections-side.component.html"),
        styles: [__webpack_require__(/*! ./sections-side.component.scss */ "./src/app/shared/sections-side/sections-side.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
], SectionsSideComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/pipes/pipes.module */ "./src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var _controls_controls_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls/controls.component */ "./src/app/shared/controls/controls.component.ts");
/* harmony import */ var _brands_carousel_brands_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./brands-carousel/brands-carousel.component */ "./src/app/shared/brands-carousel/brands-carousel.component.ts");
/* harmony import */ var _products_carousel_products_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products-carousel/products-carousel.component */ "./src/app/shared/products-carousel/products-carousel.component.ts");
/* harmony import */ var _products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products-carousel/product-dialog/product-dialog.component */ "./src/app/shared/products-carousel/product-dialog/product-dialog.component.ts");
/* harmony import */ var _banners_banners_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./banners/banners.component */ "./src/app/shared/banners/banners.component.ts");
/* harmony import */ var _theme_components_menu_telephone_dialog_telephone_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../theme/components/menu/telephone-dialog/telephone-dialog.component */ "./src/app/theme/components/menu/telephone-dialog/telephone-dialog.component.ts");
/* harmony import */ var _sections_panel_sections_panel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sections-panel/sections-panel.component */ "./src/app/shared/sections-panel/sections-panel.component.ts");
/* harmony import */ var _telephone_bar_telephone_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./telephone-bar/telephone-bar.component */ "./src/app/shared/telephone-bar/telephone-bar.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _sections_side_sections_side_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sections-side/sections-side.component */ "./src/app/shared/sections-side/sections-side.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/shared/dialog/dialog.component.ts");
/* harmony import */ var _json_ld_json_ld_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./json-ld/json-ld.component */ "./src/app/shared/json-ld/json-ld.component.ts");
/* harmony import */ var _paypal_button_paypal_button_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./paypal-button/paypal-button.component */ "./src/app/shared/paypal-button/paypal-button.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true,
    suppressScrollX: true
};















let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"]
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _controls_controls_component__WEBPACK_IMPORTED_MODULE_8__["ControlsComponent"],
            _brands_carousel_brands_carousel_component__WEBPACK_IMPORTED_MODULE_9__["BrandsCarouselComponent"],
            _products_carousel_products_carousel_component__WEBPACK_IMPORTED_MODULE_10__["ProductsCarouselComponent"],
            _products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ProductDialogComponent"],
            _banners_banners_component__WEBPACK_IMPORTED_MODULE_12__["BannersComponent"],
            _sections_panel_sections_panel_component__WEBPACK_IMPORTED_MODULE_14__["SectionsPanelComponent"],
            _theme_components_menu_telephone_dialog_telephone_dialog_component__WEBPACK_IMPORTED_MODULE_13__["TelephoneDialogComponent"],
            _telephone_bar_telephone_bar_component__WEBPACK_IMPORTED_MODULE_15__["TelephoneBarComponent"],
            _sections_side_sections_side_component__WEBPACK_IMPORTED_MODULE_17__["SectionsSideComponent"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_18__["DialogComponent"],
            _json_ld_json_ld_component__WEBPACK_IMPORTED_MODULE_19__["JsonLdComponent"],
            _paypal_button_paypal_button_component__WEBPACK_IMPORTED_MODULE_20__["PaypalButtonComponent"]
        ],
        declarations: [
            _controls_controls_component__WEBPACK_IMPORTED_MODULE_8__["ControlsComponent"],
            _brands_carousel_brands_carousel_component__WEBPACK_IMPORTED_MODULE_9__["BrandsCarouselComponent"],
            _products_carousel_products_carousel_component__WEBPACK_IMPORTED_MODULE_10__["ProductsCarouselComponent"],
            _products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ProductDialogComponent"],
            _theme_components_menu_telephone_dialog_telephone_dialog_component__WEBPACK_IMPORTED_MODULE_13__["TelephoneDialogComponent"],
            _banners_banners_component__WEBPACK_IMPORTED_MODULE_12__["BannersComponent"],
            _telephone_bar_telephone_bar_component__WEBPACK_IMPORTED_MODULE_15__["TelephoneBarComponent"],
            _sections_panel_sections_panel_component__WEBPACK_IMPORTED_MODULE_14__["SectionsPanelComponent"],
            _sections_side_sections_side_component__WEBPACK_IMPORTED_MODULE_17__["SectionsSideComponent"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_18__["DialogComponent"],
            _json_ld_json_ld_component__WEBPACK_IMPORTED_MODULE_19__["JsonLdComponent"],
            _paypal_button_paypal_button_component__WEBPACK_IMPORTED_MODULE_20__["PaypalButtonComponent"]
        ],
        entryComponents: [
            _products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ProductDialogComponent"],
            _theme_components_menu_telephone_dialog_telephone_dialog_component__WEBPACK_IMPORTED_MODULE_13__["TelephoneDialogComponent"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_18__["DialogComponent"],
            _json_ld_json_ld_component__WEBPACK_IMPORTED_MODULE_19__["JsonLdComponent"],
            _paypal_button_paypal_button_component__WEBPACK_IMPORTED_MODULE_20__["PaypalButtonComponent"]
        ],
        providers: [
            { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/telephone-bar/telephone-bar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/telephone-bar/telephone-bar.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".whats {\n  color: #fff !important;\n  background-color: #35b73a !important;\n  padding: 5px 8px 2px;\n  margin-right: 3px;\n  line-height: 21px;\n  border-radius: 5px !important;\n}\n\n.llamanos {\n  color: #fff !important;\n  background-color: #f68600 !important;\n  padding: 5px 8px 2px;\n  margin-right: 3px;\n  line-height: 21px;\n  border-radius: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RlbGVwaG9uZS1iYXIvQzpcXHhhbXBwXFxodGRvY3NcXGVtcG9yaXVtLXNzci9zcmNcXGFwcFxcc2hhcmVkXFx0ZWxlcGhvbmUtYmFyXFx0ZWxlcGhvbmUtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvdGVsZXBob25lLWJhci90ZWxlcGhvbmUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90ZWxlcGhvbmUtYmFyL3RlbGVwaG9uZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hhdHN7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1YjczYSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogNXB4IDhweCAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxsYW1hbm9ze1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNjg2MDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDVweCA4cHggMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi53aGF0cyB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNWI3M2EgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4IDhweCAycHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sbGFtYW5vcyB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNjg2MDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4IDhweCAycHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/telephone-bar/telephone-bar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/telephone-bar/telephone-bar.component.ts ***!
  \*****************************************************************/
/*! exports provided: TelephoneBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelephoneBarComponent", function() { return TelephoneBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let TelephoneBarComponent = class TelephoneBarComponent {
    constructor() {
        this.faWhatsapp = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faWhatsapp"];
    }
    ngOnInit() {
    }
};
TelephoneBarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-telephone-bar',
        template: __webpack_require__(/*! raw-loader!./telephone-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/telephone-bar/telephone-bar.component.html"),
        styles: [__webpack_require__(/*! ./telephone-bar.component.scss */ "./src/app/shared/telephone-bar/telephone-bar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TelephoneBarComponent);



/***/ }),

/***/ "./src/app/theme/components/breadcrumb/breadcrumb.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.breadcrumb {\n  padding: 8px 0;\n  box-shadow: none;\n  margin-bottom: 16px;\n}\n.breadcrumb a, .breadcrumb span {\n  font-size: 13px;\n  text-decoration: none;\n  color: inherit;\n}\n.breadcrumb .mat-icon {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n  padding: 0 6px;\n  opacity: 0.7;\n}\n.breadcrumb .breadcrumb-title.active {\n  text-transform: uppercase;\n}\n.breadcrumb .breadcrumb-item + .breadcrumb-item:before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  content: \"»\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9DOlxceGFtcHBcXGh0ZG9jc1xcZW1wb3JpdW0tc3NyL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcYnJlYWRjcnVtYlxcYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBREVKO0FDREk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FER1I7QUNESTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FER1I7QUNESTtFQUNJLHlCQUFBO0FER1I7QUNESTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QURHUiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmJyZWFkY3J1bWIge1xuICBwYWRkaW5nOiA4cHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5icmVhZGNydW1iIGEsIC5icmVhZGNydW1iIHNwYW4ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uYnJlYWRjcnVtYiAubWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHBhZGRpbmc6IDAgNnB4O1xuICBvcGFjaXR5OiAwLjc7XG59XG4uYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi10aXRsZS5hY3RpdmUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW06YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBjb250ZW50OiBcIsK7XCI7XG59IiwiLmJyZWFkY3J1bWJ7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgYSwgc3BhbntcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gICAgLm1hdC1pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG4gICAgLmJyZWFkY3J1bWItdGl0bGUuYWN0aXZle1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICAuYnJlYWRjcnVtYi1pdGVtKy5icmVhZGNydW1iLWl0ZW06YmVmb3Jle1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiwrtcIjtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/theme/components/breadcrumb/breadcrumb.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.ts ***!
  \*********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/components/sidenav-menu/sidenav-menu.service */ "./src/app/theme/components/sidenav-menu/sidenav-menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(appSettings, router, appService, activatedRoute, title, sidenavMenuService) {
        this.appSettings = appSettings;
        this.router = router;
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.sidenavMenuService = sidenavMenuService;
        this.previousUrl = "";
        this.breadcrumbs = [];
        this.window = (typeof window !== "undefined") ? window : null;
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.breadcrumbs = [];
                this.parseRoute(this.router.routerState.snapshot.root);
                this.previousUrl = event.url;
            }
        });
    }
    parseRoute(node) {
        if (node.data['breadcrumb']) {
            if (node.routeConfig.path === "") {
                const params = JSON.stringify(node.firstChild.params);
                // @ts-ignore
                this.appService.defineBreadcrumb(params, this.previousUrl, node.firstChild.component.name).subscribe(data => {
                    // @ts-ignore
                    this.breadcrumbs = data;
                });
                return;
            }
            else if (node.url.length) {
                this.setBreadcrumOthersPages(node);
                return;
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }
    setBreadcrumOthersPages(node) {
        let urlSegments = [];
        node.pathFromRoot.forEach(routerState => {
            urlSegments = urlSegments.concat(routerState.url);
        });
        let url = urlSegments.map(urlSegment => {
            return urlSegment.path;
        }).join('/');
        if (node.params.name) {
            this.breadcrumbs.push({
                name: node.params.name,
                url: '/' + url,
                level1: '',
                level2: ''
            });
        }
        else {
            this.breadcrumbs.push({
                name: node.data['breadcrumb'],
                url: '#!',
                level1: '',
                level2: ''
            });
        }
    }
    closeSubMenus() {
        if (this.window.innerWidth < 960) {
            this.sidenavMenuService.closeAllSubMenus();
        }
    }
};
BreadcrumbComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
    { type: _theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_5__["SidenavMenuService"] }
];
BreadcrumbComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-breadcrumb',
        template: __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/breadcrumb/breadcrumb.component.html"),
        providers: [_theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_5__["SidenavMenuService"]],
        styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/theme/components/breadcrumb/breadcrumb.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
        _theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_5__["SidenavMenuService"]])
], BreadcrumbComponent);



/***/ }),

/***/ "./src/app/theme/components/footer/footer.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  min-height: 100px;\n  padding: 16px 16px 0;\n}\n.footer .subscribe-block {\n  padding: 16px 0 32px 0;\n  text-align: center;\n}\n.footer .subscribe-block h1, .footer .subscribe-block h3 {\n  line-height: 1;\n}\n.footer .subscribe-block h1 {\n  margin-bottom: 6px;\n}\n.footer .subscribe-block .subscribe-search-form {\n  height: 50px;\n  padding: 0 16px;\n}\n.footer .subscribe-block .subscribe-search-form input[type=text] {\n  border: 0;\n  outline: none;\n  padding: 0 25px;\n  font-size: 16px;\n}\n.footer .subscribe-block .subscribe-search-form button {\n  font-size: 16px;\n  padding: 0 24px;\n  border-radius: 0;\n}\n.footer .col-title {\n  font-weight: 600;\n}\n.footer .mat-icon {\n  height: 21px;\n  line-height: 21px;\n}\n.footer .link {\n  text-decoration: none;\n}\n.footer .link:hover {\n  text-decoration: underline;\n}\n.footer .contact-information .mat-icon {\n  margin-right: 10px;\n}\n.footer .copyright {\n  font-size: 13px;\n  font-weight: 300;\n}\n@media (max-width: 575px) {\n  .footer .subscribe-block .subscribe-search-form {\n    height: 40px;\n    margin-top: 16px;\n  }\n  .footer .subscribe-block .subscribe-search-form input[type=text] {\n    padding: 0 8px;\n    font-size: 14px;\n  }\n  .footer .subscribe-block .subscribe-search-form button {\n    font-size: 14px;\n    padding: 0 16px;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .footer .subscribe-block .subscribe-search-form {\n    margin-top: 16px;\n  }\n}\n.sebm-google-map-container {\n  height: 220px;\n}\n.footer-tels div {\n  font-size: 15px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mb290ZXIvQzpcXHhhbXBwXFxodGRvY3NcXGVtcG9yaXVtLXNzci9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0o7QURBSTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRERRO0VBQ0ksY0FBQTtBQ0daO0FERFE7RUFDSSxrQkFBQTtBQ0daO0FERFE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0daO0FERlk7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDSWhCO0FERlk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSWhCO0FEQUk7RUFDSSxnQkFBQTtBQ0VSO0FEQUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNFUjtBREFJO0VBQ0kscUJBQUE7QUNFUjtBRERRO0VBQ0ksMEJBQUE7QUNHWjtBRENRO0VBQ0ksa0JBQUE7QUNDWjtBREVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQVI7QURJQTtFQUVRO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0VDRlY7RURHVTtJQUNJLGNBQUE7SUFDQSxlQUFBO0VDRGQ7RURHVTtJQUNJLGVBQUE7SUFDQSxlQUFBO0VDRGQ7QUFDRjtBRE1BO0VBRVE7SUFDSSxnQkFBQTtFQ0xWO0FBQ0Y7QURTQTtFQUNJLGFBQUE7QUNQSjtBRFVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMDtcclxuICAgIC5zdWJzY3JpYmUtYmxvY2t7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAwIDMycHggMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaDEsIGgze1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN1YnNjcmliZS1zZWFyY2gtZm9ybXtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAyNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29sLXRpdGxle1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICAubWF0LWljb257XHJcbiAgICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgfVxyXG4gICAgLmxpbmt7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250YWN0LWluZm9ybWF0aW9ue1xyXG4gICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb3B5cmlnaHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgLmZvb3RlciAuc3Vic2NyaWJlLWJsb2Nre1xyXG4gICAgICAgIC5zdWJzY3JpYmUtc2VhcmNoLWZvcm17XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5mb290ZXIgLnN1YnNjcmliZS1ibG9ja3tcclxuICAgICAgICAuc3Vic2NyaWJlLXNlYXJjaC1mb3Jte1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNlYm0tZ29vZ2xlLW1hcC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxufVxyXG5cclxuLmZvb3Rlci10ZWxzIGRpdntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuIiwiLmZvb3RlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiAxNnB4IDE2cHggMDtcbn1cbi5mb290ZXIgLnN1YnNjcmliZS1ibG9jayB7XG4gIHBhZGRpbmc6IDE2cHggMCAzMnB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb290ZXIgLnN1YnNjcmliZS1ibG9jayBoMSwgLmZvb3RlciAuc3Vic2NyaWJlLWJsb2NrIGgzIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uZm9vdGVyIC5zdWJzY3JpYmUtYmxvY2sgaDEge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4uZm9vdGVyIC5zdWJzY3JpYmUtYmxvY2sgLnN1YnNjcmliZS1zZWFyY2gtZm9ybSB7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLmZvb3RlciAuc3Vic2NyaWJlLWJsb2NrIC5zdWJzY3JpYmUtc2VhcmNoLWZvcm0gaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMCAyNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uZm9vdGVyIC5zdWJzY3JpYmUtYmxvY2sgLnN1YnNjcmliZS1zZWFyY2gtZm9ybSBidXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5mb290ZXIgLmNvbC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZm9vdGVyIC5tYXQtaWNvbiB7XG4gIGhlaWdodDogMjFweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG4uZm9vdGVyIC5saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZvb3RlciAubGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmZvb3RlciAuY29udGFjdC1pbmZvcm1hdGlvbiAubWF0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZm9vdGVyIC5jb3B5cmlnaHQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuZm9vdGVyIC5zdWJzY3JpYmUtYmxvY2sgLnN1YnNjcmliZS1zZWFyY2gtZm9ybSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbiAgLmZvb3RlciAuc3Vic2NyaWJlLWJsb2NrIC5zdWJzY3JpYmUtc2VhcmNoLWZvcm0gaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgcGFkZGluZzogMCA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5mb290ZXIgLnN1YnNjcmliZS1ibG9jayAuc3Vic2NyaWJlLXNlYXJjaC1mb3JtIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvb3RlciAuc3Vic2NyaWJlLWJsb2NrIC5zdWJzY3JpYmUtc2VhcmNoLWZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbn1cbi5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAyMjBweDtcbn1cblxuLmZvb3Rlci10ZWxzIGRpdiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/theme/components/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/dialog/dialog.component */ "./src/app/shared/dialog/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let FooterComponent = class FooterComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.lat = 18.943268;
        this.lng = -99.242426;
        this.zoom = 17;
    }
    ngOnInit() {
    }
    subscribe() {
    }
    openAvisoPrivacidadDialog() {
        const textBody = 'Los datos personales (Los Datos) solicitados, son tratados por Jardepot S.A. de C.V. (Jardepot),' +
            ' con la finalidad de brindarle el servicio que nos solicita, conocer sus necesidades de productos o servicios y ' +
            'estar en posibilidad de ofrecerle los que más se adecuen a sus preferencias; comunicarle promociones, atender quejas y ' +
            'aclaraciones, y en su caso, tratarlos para fines compatibles con los mencionados en este Aviso de Privacidad y que se consideren ' +
            'análogos para efectos legales. En caso de formalizar con Usted la aceptación de algún producto o servicio ofrecido por Jardepot, ' +
            'sus Datos serán utilizados para el cumplimiento de las obligaciones derivadas de esa relación jurídica.      ' +
            'Los Datos serán tratados de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento.' +
            '      La confidencialidad de los Datos está garantizada y los mismos están protegidos por medidas de seguridad administrativas, técnicas y físicas,' +
            ' para evitar su daño, pérdida, alteración, destrucción, uso, acceso o divulgación indebida. Únicamente las personas autorizadas tendrán acceso a sus Datos.     ' +
            ' En caso de existir alguna modificación al presente Aviso de Privacidad se hará de su conocimiento en nuestro sitio de Internet';
        const dialogRef = this.dialog.open(_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], {
            panelClass: 'generic-dialog',
            direction: 'ltr'
        });
        dialogRef.componentInstance.title = 'Aviso de privacidad';
        dialogRef.componentInstance.body = textBody;
    }
    openAvisoLegalDialog() {
        const textBody = ' TÉRMINOS Y CONDICIONES DE USO\n' +
            '      <br>\n' +
            '      <br>\n' +
            '      1. Objeto.\n' +
            '      <br>\n' +
            '      Los presentes Términos y Condiciones de Uso (los “<u>TCU</u>”) regulan el uso del sitio web www.jardepot.com, de cuyo uso en México es titular Jardepot S.A. de C.V. (“Jardepot”), así como las condiciones de compra y venta de los productos ofrecidos en el mismo y las Políticas de Privacidad.\n' +
            '      <u>Jardepot S.A. de C.V.</u> es una persona moral constituida de conformidad con las leyes de los Estados Unidos Mexicanos.\n' +
            '      A través de su Sitio Web Jardepot proporciona información acerca de los productos y servicios que presta, ofreciendo la posibilidad de contratarlos a aquellas personas que, previo cumplimiento de los requisitos establecidos por Jardepot (i.e. ser mayor de edad, completar el formulario de registro y seguir los pasos señalados posteriormente vía e-mail), adquieren la calidad de Usuarios (los “<u>Usuarios</u>”). La condición de (“Usuario”) supone la adhesión a las TCU en la versión publicada en el momento en que se acceda al Sitio Web.\n' +
            '      En cualquier caso, aquellas personas físicas que accedan al Sitio Web y que no lleguen a registrarse (los “<u>Usuarios</u>”) aceptan quedar sometidos a los TCU en la medida en que les sean aplicables.\n' +
            '      Los productos y servicios ofrecidos por Jardepot se dirigen única y exclusivamente a personas con plena capacidad y legitimación para obligarse de conformidad con los TCU, asimismo Jardepot solamente acepta y distribuye pedidos en el territorio de México (el “<u>Territorio</u>”).\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      2. Información sobre los productos.\n' +
            '      <br>\n' +
            '      Las descripciones de los productos expuestos en el Sitio Web se realizan en base a la información proporcionada por los proveedores de Jardepot, en consecuencia, la información proporcionada en el Sitio Web acerca de cada producto, incluyendo las fotografías y/o vídeos, así como los nombres comerciales, marcas o signos distintivos son expuestos para orientar a los Usuarios.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      3. Disponibilidad.\n' +
            '      <br>\n' +
            '      El número de unidades disponibles al iniciarse las campañas han sido reservadas por nuestros proveedores para su venta en el Sitio Web. En ningún caso Jardepot pondrá a la venta intencionalmente más unidades de las que el proveedor le haya reservado.\n' +
            '      En ocasiones, debido a causas ajenas a o difícilmente controlables por <u>Jardepot</u>, tales como errores humanos o fallas en los sistemas informáticos, es posible que la cantidad finalmente servida por el proveedor difiera del pedido realizado por Jardepot para satisfacer los pedidos de los Usuarios.\n' +
            '      En caso de que el producto no esté disponible después de haberse formalizado mediante pago el pedido, el Usuario será informado por email de la anulación total o parcial de éste. En caso de anulación total <u>Jardepot</u> reembolsará al Usuario el pago realizado en el mismo medio en que fue realizado. La anulación parcial del pedido debido a falta de disponibilidad no da derecho a la anulación de la totalidad del pedido. Si a raíz de esta anulación el cliente quiere devolver el producto entregado deberá seguir lo estipulado en el apartado 10 de las TCU.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      4. Pago.\n' +
            '      <br>\n' +
            '      El Usuario se compromete a pagar en el momento que realiza el pedido. Al precio inicial sujeto a cambio sin previo aviso y a existencias del producto al momento de compra, que figure en el Sitio Web mediante depósito o transferencia bancaria o a través de tarjeta de crédito o de débito (Visa, Mastercard, Visa Electrón, American Express y/u otras tarjetas análogas), mediante el sistema de PayPal.\n' +
            '      El Usuario deberá notificar a Jardepot cualquier cargo indebido o fraudulento en la tarjeta utilizada para las compras, por e-mail o vía telefónica, en el menor plazo de tiempo posible para que Jardepot pueda realizar las gestiones oportunas.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      5. Seguridad.\n' +
            '      <br>\n' +
            '      <u>Jardepot</u> para el proceso de pagos cuenta con las máximas medidas de seguridad comercialmente disponibles en el sistema PAYPAL con lo que se garantiza:\n' +
            '      (i)Que el Usuario está comunicando sus datos al centro servidor de PAYPAL y no a cualquier otro que intentara hacerse pasar por éste.\n' +
            '      (ii);Que entre el Usuario y el centro servidor de PAYPAL los datos se transmiten cifrados, evitando su posible lectura o manipulación por terceros.\n' +
            '      Asimismo, <u>Jardepot</u> no tiene acceso a datos confidenciales relativos al medio de pago utilizado, y por tanto tampoco los almacena.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      6. Formalización de pedidos.\n' +
            '      <br>\n' +
            '      Una vez formalizado el pedido, Jardepot enviará un e-mail al Usuario confirmando los detalles de la compra realizada, adicionalmente se le estará enviando otro e-mail con el estado del pago del pedido. Una vez confirmado el pago del pedido el usuario recibirá un e-mail con la confirmación del mismo y además los e-mails correspondientes a los distintos estados de envío del pedido.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      7. Cancelación de pedidos.\n' +
            '      <br>\n' +
            '      Jardepot aceptará la cancelación de los pedidos por parte del cliente con una penalización de 20% sobre el monto total del pedido, siempre y cuando ésta se solicite antes del envío del producto. Una vez enviado, no se aceptarán cancelaciones de pedidos por parte del cliente por ningún motivo. Todo pedido está Sujeto a Existencias al momento de compra; en caso de no contar con el producto, Jardepot devolverá en un plazo no mayor a 72 Hrs el importe depositado por el cliente sin ningún compromiso adicional.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      8. Plazos, Lugar de Entrega y Extravíos.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      8.1 Entrega del producto.\n' +
            '      <br>\n' +
            '      Jardepot se compromete a entregar el producto en perfecto estado en la dirección que el Usuario señale en el formulario de pedido, y que en todo caso deberá estar comprendida dentro de la cobertura ODM Express del Territorio Mexicano. Con el fin de optimizar la entrega, agradecemos al Usuario que indique una dirección en la cual el pedido pueda ser entregado dentro de las horas de trabajo.\n' +
            '      Jardepot no será responsable por los errores causados en la entrega cuando la dirección de entrega señalada por el Usuario en el formulario de pedido no se ajuste a la realidad o hayan sido omitidos datos necesarios para su ubicación.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      8.2 Plazo de Entrega.\n' +
            '      <br>\n' +
            '      El plazo máximo fijado para las entregas es de treinta (15) días hábiles, contados desde la comprobación del pago, aunque el plazo de entrega habitual de Jardepot suele oscilar entre los 3 y 7 días hábiles, contados desde la fecha de verificación de pago.\n' +
            '      Estos plazos son promedios, y por tanto una estimación, con lo cual es posible que varíen por cuestiones de logística o causas de fuerza mayor. En caso de retraso en la entrega, Jardepot informará al Usuario en cuanto tenga conocimiento del mismo.\n' +
            '      Para mayor información, es importante tener en cuenta que el procedimiento durante este tiempo es el siguiente: recibir la mercancía de nuestros proveedores en nuestros almacenes, preparación de los pedidos y envío a través de ODM Express. El día que se envía el pedido por ODM Express, Jardepot lo comunicará al Usuario mediante e-mail confirmando la salida de nuestros almacenes e indicando el número de guía de rastreo correspondiente. Cada entrega se considera realizada desde el momento en que ODM Express pone el producto a disposición del Usuario, lo cual se materializa a través del sistema de control utilizado por dicha compañía de transportes.\n' +
            '      En el caso de retraso en la entrega de los pedidos por causas imputables a <u>Jardepot</u>, el Usuario podrá anular su pedido de acuerdo con el procedimiento descrito en el Apartado 11 de los TCU. No se considerarán retrasos en la entrega aquellos casos en los que el pedido haya sido puesto a disposición del Usuario por parte de la compañía de transporte dentro del plazo antes señalado y no haya podido ser entregado por causas imputables al Usuario.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      8.3 Datos de entrega, entregas no realizadas y extravío.\n' +
            '      <br>\n' +
            '      En el mismo e-mail en el que se informa al Usuario que el producto ha salido de los almacenes de Jardepot, se proporciona el número de guía y el número de atención al cliente de la compañía de transportes responsable de la entrega, para que, en caso que surja cualquier problema con la entrega, el Usuario pueda contactar directamente a ODM Express para resolverla.\n' +
            '      Si en el momento de la entrega el Usuario se encuentra ausente, se dejará un aviso en el que figura la hora de la visita con un número de teléfono para que pueda contactarlos y coordinar una nueva entrega.\n' +
            '      Si el Usuario no se comunica después de un largo período de tiempo su paquete será devuelto al depósito de <strong>Jardepot</strong> y nosotros le contactaremos para volver a coordinar la entrega. El costo de esta nueva entrega correrá por su cuenta.\n' +
            '      Si el motivo por el que no se ha podido realizar la entrega es el extravío del paquete, nuestro transportista iniciará una investigación. En estos casos, los plazos de respuesta de nuestros transportistas suelen oscilar entre una y tres semanas.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      8.4 Diligencia en la entrega.\n' +
            '      <br>\n' +
            '      El Usuario deberá comprobar el buen estado del paquete ante el transportista que, por cuenta de Jardepot, realice la entrega del producto solicitado, indicando en la hoja de entrega cualquier anomalía que pudiera detectar en el embalaje. Si posteriormente, una vez revisado el producto, el Usuario detectase cualquier incidencia en el mismo, incluyendo algún golpe, rotura, indicios de haber sido abierto o cualquier desperfecto causado en el mismo por el envío, el Usuario deberá comunicarlo a Jardepot vía e-mail dentro de los 7 días hábiles siguientes a la entrega.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      9. Devoluciónes y reenbolsos.\n' +
            '      <br>\n' +
            '      Jardepot no acepta devoluciones, verifique y aclare todas sus dudas con el departamento de ventas antes de realizar su compra.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      9.2 Reembolsos al Usuario.\n' +
            '      <br>\n' +
            '      Si por algún error de inventario se recibiese un pago por un producto no disponible para cumplir con el plazo de entrega prometido, Jardepot comunicará al Usuario la próxima disponibilidad del producto para acordar una fecha posterior de envío o en su caso realizará un reembolso igual al pago realizado.\n' +
            '      La aplicación de la devolución en la cuenta o tarjeta del Usuario dependerá de la tarjeta y de la entidad financiera emisora. El plazo de aplicación será de hasta 30 días para las tarjetas de crédito.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      10. Garantía de los productos adquiridos.\n' +
            '      <br>\n' +
            '      Jardepot actúa en calidad de distribuidor de fabricantes o distribuidores mayoristas que garantizan que los productos que se presentan a la venta en el Sitio Web funcionan correctamente y no presentan defectos, ni vicios ocultos que puedan hacerlos peligrosos o inadecuados para su uso normal.\n' +
            '      La garantía contractual ofrecida es la que habitualmente concede el proveedor y la misma será claramente detallada en la ficha descriptiva de los productos.\n' +
            '      Una vez que el Usuario haya recibido el producto tendrá un folleto informativo que provee el fabricante con las instrucciones suficientes para el correcto uso e instalación del producto y toda la información acerca de la garantía. Ningún Usuario podrá reclamar una garantía más amplia de la que ahí se indica.\n' +
            '      Jardepot no estará obligado a recoger el producto averiado y el Usuario deberá dirigirse al Servicio Posventa del Proveedor. En este sentido, Jardepot realizará las acciones encaminadas a proporcionar a los Usuarios que así lo soliciten los datos de contacto de dicho servicio y facilitará a estos información suficiente para la presentación de las reclamaciones pertinentes.\n' +
            '      La garantía perderá su vigencia en caso de defectos o deterioros causados por factores externos, accidentes, en especial, accidentes eléctricos, desgaste, instalación y utilización no conforme a las instrucciones del Proveedor.\n' +
            '      Quedan excluidos de la garantía los productos modificados o reparados por el Usuario o cualquier otra persona no autorizada por el proveedor. La garantía no será aplicable a los vicios aparentes y los defectos de conformidad del producto, para los que cualquier reclamación deberá ser formulada por el Usuario en cuestión en los 7 días siguientes a la entrega de los productos. La garantía no cubrirá los productos dañados por un uso inadecuado.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      11. Propiedad intelectual e industrial.\n' +
            '      <br>\n' +
            '      Jardepot ostenta todos los derechos sobre el contenido, diseño y código fuente del Sitio Web y, en especial, de manera enunciativa más no limitativa, sobre las fotografías, imágenes, textos, diseños, y datos que se incluyen en el Sitio Web. Las marcas publicadas son propiedad de sus respectivos dueños y solo se utilizan con fines de comercializar en el sitio los productos que fabrican. Se advierte a los Usuarios que tales derechos están protegidos por la legislación mexicana e internacional vigente relativa a la propiedad intelectual e industrial y son de su uso exclusivo.\n' +
            '      Queda expresamente prohibida la reproducción total o parcial de esta web o de cualquiera de sus contenidos, sin el permiso previo y por escrito de Jardepot. Asimismo queda totalmente prohibida la copia, reproducción, adaptación, modificación, distribución, comercialización, comunicación pública y/o cualquier otra acción que comporte una infracción de las leyes aplicables en materia de propiedad intelectual y/o industrial, así como el uso de los contenidos de la web si no es con la autorización previa y por escrito de Jardepot.\n' +
            '      Jardepot no concede licencia o autorización implícita alguna sobre los derechos de propiedad intelectual y/o industrial o sobre cualquier otro derecho o propiedad relacionado, directa o indirectamente, con los contenidos incluidos en el Sitio Web.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      12. Acceso y estancia en la web. Nuestros contenidos.\n' +
            '      <br>\n' +
            '      Los Usuarios y Usuarios son responsables de su conducta al acceder a la información del Sitio Web. Como consecuencia de lo anterior, los Usuarios y Usuarios serán los únicos responsables, frente a Jardepot y/o cualquier tercero, de:\n' +
            '      (i)las consecuencias que se puedan derivar de una utilización, con fines o efectos ilícitos o contrarios al presente documento, de cualquier contenido del Sitio Web, elaborado o no por Jardepot, publicado o no bajo su nombre de forma oficial; y\n' +
            '      (ii)las consecuencias que se puedan derivar de la utilización contraria al contenido de los TCU que sea lesiva de los intereses o derechos de terceros, o que de cualquier forma pueda dañar, inutilizar o deteriorar la web o sus servicios o impedir el normal disfrute de otros Usuarios o Usuarios.\n' +
            '      Jardepot se reserva el derecho a actualizar los contenidos del Sitio Web cuando lo estime conveniente, así como a eliminarlos, limitarlos o impedir el acceso a ellos, de manera temporal o definitiva, así como denegar el acceso a la web a Usuarios y Usuarios que hagan un mal uso de los contenidos y/o incumplan cualquiera de las condiciones establecidas en el presente documento.\n' +
            '      Jardepot informa que no garantiza:\n' +
            '      (i)que el acceso al Sitio Web y/o a los sitios web de enlace sea ininterrumpido o libre de errores;\n' +
            '      (ii)que el contenido o software al que los Usuarios y Usuarios accedan a través del Sitio Web o de los sitios web de enlace no contenga error alguno, virus informático u otros elementos en los contenidos que puedan producir alteraciones en su sistema o en los documentos electrónicos y ficheros almacenados en su sistema informático o de cualquier forma causen algún daño;\n' +
            '      (iii)el aprovechamiento que de la información o contenido del Sitio Web o sitios webs de enlace que los Usuarios y Usuarios pudieran realizar para sus propósitos personales.\n' +
            '      La información contenida en esta página web debe ser considerada por los Usuarios como divulgativa y orientadora, motivo por el cual Jardepot no garantiza la exactitud de la información contenida en el Sitio Web y por consiguiente no asume responsabilidad alguna sobre los posibles perjuicios o incomodidades para los Usuarios que pudiesen derivarse de alguna inexactitud presente en el mismo.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      13. Responsabilidad.\n' +
            '      <br>\n' +
            '      Jardepot no asume responsabilidad alguna derivada, de manera enunciativa más no limitativa de:\n' +
            '      (i)la utilización que los Usuarios &nbsp;puedan hacer de los materiales de este sitio web o de los sitios web de enlace, ya sean prohibidos o permitidos, en infracción de los derechos de propiedad intelectual y/o industrial de contenidos de la web o de terceros;\n' +
            '      (ii)los eventuales daños y perjuicios a los Usuarios causados por un funcionamiento normal o anormal de las herramientas de búsqueda, de la organización o la localización de los contenidos y/o acceso a la web y, en general, de los errores o problemas que se generen en el desarrollo o instrumentación de los elementos técnicos que la web o un programa facilite al Usuario;\n' +
            '      (iii)los contenidos de aquellas páginas a las que los Usuarios puedan acceder desde enlaces incluidos en la web, ya sean autorizados o no;\n' +
            '      (iv)los actos u omisiones de terceros, independientemente de la relación que dichos terceros pudieran tener con Jardepot;\n' +
            '      (v)el acceso de menores de edad a los contenidos incluidos en la web, así como el envío de información personal que estos pudieran realizar; ni\n' +
            '      (vi)las comunicaciones o diálogos en el transcurso de los debates, foros, chats y comunidades virtuales que se organicen a través de o entorno al Sitio Web y/o sitios web de enlace, ni responderá, por tanto, de los eventuales daños y prejuicios que sufran los Usuarios o Usuarios a consecuencia de dichas comunicaciones y/o diálogos.\n' +
            '      Asmismo Jardepot no será responsable en forma alguna, cuando se produzcan:\n' +
            '      (i)errores o retrasos en el acceso al Sitio Web a la hora de introducir los datos en el formulario de pedido, la lentitud o imposibilidad de recepción por parte de los destinatarios de la confirmación del pedido o cualquier anomalía que pueda surgir cuando tales incidencias sean debidas a problemas en la red Internet, caso fortuito o fuerza mayor o cualquier otra contingencia imprevisible ajena a Jardepot;\n' +
            '      (ii)fallos o incidencias que pudieran producirse en las comunicaciones, ya sea borrándose o por transmisiones incompletas, de manera que no se garantiza que los servicios del Sitio Web estén constantemente operativos;\n' +
            '      (iii)de los errores o daños producidos al Sitio Web por un mal uso del servicio por parte del Usuario;\n' +
            '      (iv)de la no operatividad o problemas en la dirección de e-mail facilitada por el Usuario para el envío de la confirmación del pedido;\n' +
            '      En todo caso, Jardepot se compromete a solucionar los problemas que puedan surgir y a ofrecer todo el apoyo necesario al Usuario para llegar a una solución rápida y satisfactoria de la incidencia.\n' +
            '      Asimismo, Jardepot tiene derecho a realizar durante intervalos temporales definidos, campañas promocionales para promover el registro de nuevos miembros en su servicio. Jardepot se reserva el derecho de modificar las condiciones de las campañas, así como prorrogarlas o proceder a la exclusión de cualquiera de los participantes de la campaña en caso que detecte cualquier anomalía, abuso o comportamiento poco ético en la participación de los mismos.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      14. Políticas de privacidad.\n' +
            '      <br>\n' +
            '      Los Usuarios se comprometen a navegar por el Sitio Web y a utilizar el contenido del mismo de buena fe. La cumplimentación de cualquier formulario existente en el Sitio Web o la remisión de un correo electrónico a cualquiera de nuestros buzones implican la aceptación de estos TCU, así como la autorización a Jardepot para usar los datos facilitados por el Usuario o Usuario.\n' +
            '      Los datos de los Usuarios serán utilizados para el envío a través de e-mail de las campañas que realice Jardepot y para la entrega de las compras.<br>\n' +
            '      Por la mera visita a la web, los Usuarios no facilitan información personal alguna ni quedan obligados a facilitarla.\n' +
            '      El ordenador donde está alojado el Sitio Web utiliza cookies para mejorar el servicio prestado por Jardepot. Estas cookies se instalan automáticamente en el ordenador empleado por los Usuarios pero no almacenan ningún tipo de información relativa a éstos.\n' +
            '      Jardepot se compromete a guardar la máxima reserva y confidencialidad sobre la información que le sea facilitada y a utilizarla únicamente para los fines indicados.\n' +
            '      Jardepot presume que los datos proporcionados han sido introducidos por su titular o por persona autorizada por éste, así como que son correctos y exactos.\n' +
            '      Corresponde a los Usuarios la actualización de sus propios datos. En cualquier momento, el Usuario tendrá el derecho de acceso, rectificación, cancelación y oposición a sus datos personales. Para ejercitar esta facultad el Usuario deberá acceder al apartado “Mi Cuenta” en el Sitio Web. Por lo tanto, el Usuario es responsable de la veracidad y exactitud de sus datos personales.\n' +
            '      Conforme a la legislación vigente en materia de protección de datos, Jardepot ha adoptado los niveles de seguridad adecuados a los datos facilitados por los Usuarios y, además, ha instalado todos los medios y medidas a su alcance para evitar la pérdida, mal uso, alteración, acceso no autorizado y extracción de los mismos.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '\n' +
            '      15. Nulidad.\n' +
            '      <br>\n' +
            '      En caso de que cualquier cláusula de los presentes TCU sea declarada nula, las demás cláusulas seguirán vigentes y se interpretarán teniendo en cuenta la voluntad de las partes y la finalidad misma de los presentes TCU.\n' +
            '      Jardepot podrá no ejercitar alguno de los derechos y facultades conferidos en este documento lo que no implicará en ningún caso la renuncia a los mismos salvo reconocimiento expreso por parte de Jardepot o prescripción de la acción que en cada caso corresponda.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '\n' +
            '      16. Modificación de los Términos y Condiciones de Uso.\n' +
            '      <br>\n' +
            '      Jardepot se reserva el derecho de modificar, en cualquier momento, la presentación y configuración del Sitio Web, así como los presentes TCU. Por ello, Jardepot recomienda al Usuario leerlas atentamente cada vez que acceda al Sitio Web. Los Usuarios y Usuarios siempre dispondrán de los TCU en un sitio visible, libremente accesible para cuantas consultas quiera realizar. En cualquier caso, la aceptación de los TCU será un paso previo e indispensable a la adquisición de cualquier producto disponible a través del Sitio Web.\n' +
            '      <br>\n' +
            '      <br>\n' +
            '      \n' +
            '      17.Ley y jurisdicción aplicable.\n' +
            '      <br>\n' +
            '      Las presentes TCU se rigen por la legislación mexicana aplicable. Para resolver cualquier controversia o conflicto que se derive de los presentes TCU, las partes se someten a la jurisdicción de los tribunales de la Ciudad de Cuernavaca, Morelos.';
        const dialogRef = this.dialog.open(_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], {
            panelClass: 'generic-dialog',
            direction: 'ltr'
        });
        dialogRef.componentInstance.title = 'Aviso legal';
        dialogRef.componentInstance.body = textBody;
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
FooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/theme/components/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], FooterComponent);



/***/ }),

/***/ "./src/app/theme/components/menu/menu.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/theme/components/menu/menu.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".whats {\n  color: #fff !important;\n  background-color: #35b73a !important;\n  padding: 5px 8px 2px;\n  margin-right: 3px;\n  font-size: 12px;\n  font-weight: 400;\n  max-height: 32px;\n  line-height: 21px;\n  border-radius: 5px !important;\n}\n\n.oferta {\n  color: #fff !important;\n  background-color: #de1f21 !important;\n  padding: 5px 8px 2px;\n  margin-right: 3px;\n  font-size: 12px;\n  font-weight: 400;\n  max-height: 32px;\n  line-height: 21px;\n  border-radius: 5px !important;\n}\n\n.refaccion {\n  color: #fff !important;\n  background-color: #f68600 !important;\n  padding: 5px 8px 2px;\n  margin-right: 3px;\n  font-size: 12px;\n  font-weight: 400;\n  max-height: 32px;\n  line-height: 21px;\n  border-radius: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L0M6XFx4YW1wcFxcaHRkb2NzXFxlbXBvcml1bS1zc3Ivc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoYXRze1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1YjczYSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDVweCA4cHggMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1heC1oZWlnaHQ6IDMycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vZmVydGEge1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlMWYyMSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDVweCA4cHggMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1heC1oZWlnaHQ6IDMycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZWZhY2Npb24ge1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ODYwMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDVweCA4cHggMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1heC1oZWlnaHQ6IDMycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLndoYXRzIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1YjczYSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHggOHB4IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWF4LWhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xufVxuXG4ub2ZlcnRhIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlMWYyMSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHggOHB4IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWF4LWhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xufVxuXG4ucmVmYWNjaW9uIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ODYwMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHggOHB4IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWF4LWhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/theme/components/menu/menu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/components/menu/menu.component.ts ***!
  \*********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let MenuComponent = class MenuComponent {
    constructor(appService) {
        this.appService = appService;
        this.faWhatsapp = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faWhatsapp"];
    }
    ngOnInit() {
        this.appService.getMenu().subscribe(data => {
            this.menuTopBar = data;
        });
    }
    changeString($strign) {
        return $strign.replace(/ /g, '-').toLowerCase();
    }
};
MenuComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
MenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/theme/components/menu/menu.component.scss")]
    }),
    __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
], MenuComponent);



/***/ }),

/***/ "./src/app/theme/components/menu/telephone-dialog/telephone-dialog.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/components/menu/telephone-dialog/telephone-dialog.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".telephone-dialog {\n  max-width: 90vw !important;\n}\n\n.phone-item {\n  margin: 8px;\n}\n\n.number {\n  color: #757575 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L3RlbGVwaG9uZS1kaWFsb2cvQzpcXHhhbXBwXFxodGRvY3NcXGVtcG9yaXVtLXNzci9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXG1lbnVcXHRlbGVwaG9uZS1kaWFsb2dcXHRlbGVwaG9uZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS90ZWxlcGhvbmUtZGlhbG9nL3RlbGVwaG9uZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS90ZWxlcGhvbmUtZGlhbG9nL3RlbGVwaG9uZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVsZXBob25lLWRpYWxvZ3tcclxuICAgIG1heC13aWR0aDogOTB2dyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGhvbmUtaXRlbSB7XHJcbiAgICBtYXJnaW46IDhweDtcclxufVxyXG5cclxuLm51bWJlciB7XHJcbiAgICBjb2xvcjogIzc1NzU3NSAhaW1wb3J0YW50O1xyXG59XHJcbi8vXHJcbi8vQG1lZGlhIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbi8vICAgIC5udW1iZXIge1xyXG4vLyAgICAgICAgbWFyZ2luOiA4cHg7XHJcbi8vICAgICAgICBjb2xvcjogIzc1NzU3NSAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgIH1cclxuLy99XHJcbiIsIi50ZWxlcGhvbmUtZGlhbG9nIHtcbiAgbWF4LXdpZHRoOiA5MHZ3ICFpbXBvcnRhbnQ7XG59XG5cbi5waG9uZS1pdGVtIHtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5udW1iZXIge1xuICBjb2xvcjogIzc1NzU3NSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/theme/components/menu/telephone-dialog/telephone-dialog.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/components/menu/telephone-dialog/telephone-dialog.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TelephoneDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelephoneDialogComponent", function() { return TelephoneDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let TelephoneDialogComponent = class TelephoneDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.config = {};
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
    close() {
        this.dialogRef.close();
    }
};
TelephoneDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }
];
TelephoneDialogComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-telephone-dialog',
        template: __webpack_require__(/*! raw-loader!./telephone-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/menu/telephone-dialog/telephone-dialog.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./telephone-dialog.component.scss */ "./src/app/theme/components/menu/telephone-dialog/telephone-dialog.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
], TelephoneDialogComponent);



/***/ }),

/***/ "./src/app/theme/components/sidenav-menu/sidenav-menu.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.menu-item .mat-button {\n  width: 100%;\n  font-weight: 400;\n}\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n  transform: rotate(180deg);\n}\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px;\n}\n\n.menu-item .menu-title {\n  font-weight: 500;\n  color: #fff;\n}\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n\n.sub-menu .sub-menu .mat-button {\n  padding-left: 56px;\n}\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 76px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 96px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 116px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 136px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 156px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 176px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 196px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 216px;\n}\n\n.sub-menu .mat-button {\n  padding-left: 36px;\n}\n\n.sub-menu.show {\n  max-height: 500px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlbmF2LW1lbnUvQzpcXHhhbXBwXFxodGRvY3NcXGVtcG9yaXVtLXNzci9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXHNpZGVuYXYtbWVudVxcc2lkZW5hdi1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL3NpZGVuYXYtbWVudS9zaWRlbmF2LW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvc2lkZW5hdi1tZW51L0M6XFx4YW1wcFxcaHRkb2NzXFxlbXBvcml1bS1zc3Ivc3JjXFxhcHBcXHRoZW1lXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNESjs7QURLSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0ZSOztBREtZO0VBR0kseUJBQUE7QUNIaEI7O0FET0k7RUFDSSxrQkFBQTtBQ0xSOztBRE9JO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FDTFI7O0FEU0E7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFHQSxxQ0FBQTtBQ1BKOztBQ3pCUTtFQUNJLGtCQUFBO0FEMkJaOztBQzVCUTtFQUNJLGtCQUFBO0FEOEJaOztBQy9CUTtFQUNJLGtCQUFBO0FEaUNaOztBQ2xDUTtFQUNJLG1CQUFBO0FEb0NaOztBQ3JDUTtFQUNJLG1CQUFBO0FEdUNaOztBQ3hDUTtFQUNJLG1CQUFBO0FEMENaOztBQzNDUTtFQUNJLG1CQUFBO0FENkNaOztBQzlDUTtFQUNJLG1CQUFBO0FEZ0RaOztBQ2pEUTtFQUNJLG1CQUFBO0FEbURaOztBRG5CSTtFQUNJLGtCQUFBO0FDcUJSOztBRG5CSTtFQUNJLGlCQUFBO0VBR0Esb0NBQUE7QUNxQlIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL3NpZGVuYXYtbWVudS9zaWRlbmF2LW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL21peGluc1wiO1xyXG5cclxuLm1lbnUtZXhwYW5kLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLm1lbnUtaXRlbXtcclxuICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgLy90ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICYuZXhwYW5kZWR7XHJcbiAgICAgICAgICAgIC5tZW51LWV4cGFuZC1pY29ue1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUtdGl0bGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxufVxyXG5cclxuLnN1Yi1tZW51e1xyXG4gICAgQGluY2x1ZGUgbWVudS1sZXZlbC1wYWRkaW5nKCk7XHJcbiAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDM2cHg7XHJcbiAgICB9XHJcbiAgICAmLnNob3d7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgfVxyXG59XHJcbiIsIi5tZW51LWV4cGFuZC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4ubWVudS1pdGVtIC5tYXQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ubWVudS1pdGVtIC5tYXQtYnV0dG9uLmV4cGFuZGVkIC5tZW51LWV4cGFuZC1pY29uIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4ubWVudS1pdGVtIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4ubWVudS1pdGVtIC5tZW51LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zdWItbWVudSB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogNTZweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiA3NnB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiA5NnB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTE2cHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTM2cHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDE1NnB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTc2cHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTk2cHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDIxNnB4O1xufVxuLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xufVxuLnN1Yi1tZW51LnNob3cge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XG59IiwiQG1peGluIG1lbnUtbGV2ZWwtcGFkZGluZygpe1xyXG4gICAgJGVsZW06ICcnO1xyXG4gICAgQGZvciAkaSBmcm9tIDIgdGhyb3VnaCAxMCB7XHJcbiAgICAgICAgJGVsZW06IGlmKCRpID09IDIsIFwiLnN1Yi1tZW51XCIsIHNlbGVjdG9yLW5lc3QoJGVsZW0sIFwiLnN1Yi1tZW51XCIpKTsgICAgICBcclxuICAgICAgICAjeyRlbGVtICsgJyAubWF0LWJ1dHRvbid9IHsgXHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweCArICgyMHB4ICogJGkpOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/theme/components/sidenav-menu/sidenav-menu.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.component.ts ***!
  \*************************************************************************/
/*! exports provided: SidenavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavMenuComponent", function() { return SidenavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav-menu.service */ "./src/app/theme/components/sidenav-menu/sidenav-menu.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SidenavMenuComponent = class SidenavMenuComponent {
    constructor(sidenavMenuService, appService) {
        this.sidenavMenuService = sidenavMenuService;
        this.appService = appService;
    }
    ngOnInit() {
        this.parentMenu = this.menuItems.filter(item => item.parentId == this.menuParentId);
        this.appService.getMenu().subscribe(data => {
            this.menuTopBar = data;
        });
    }
    onClick(menuId) {
        this.document = (typeof document !== "undefined") ? document : null;
        if (document) {
            let menuItem = document.getElementById('menu-item-' + menuId);
            if (menuItem.classList.contains('expanded')) {
                this.sidenavMenuService.closeOtherSubMenus();
            }
            else {
                this.sidenavMenuService.closeOtherSubMenus();
                this.sidenavMenuService.toggleMenuItem(menuId);
            }
        }
    }
    changeString($string) {
        return $string.replace(/ /g, '-');
    }
};
SidenavMenuComponent.ctorParameters = () => [
    { type: _sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__["SidenavMenuService"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuItems'),
    __metadata("design:type", Object)
], SidenavMenuComponent.prototype, "menuItems", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuParentId'),
    __metadata("design:type", Object)
], SidenavMenuComponent.prototype, "menuParentId", void 0);
SidenavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sidenav-menu',
        template: __webpack_require__(/*! raw-loader!./sidenav-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/sidenav-menu/sidenav-menu.component.html"),
        providers: [_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__["SidenavMenuService"]],
        styles: [__webpack_require__(/*! ./sidenav-menu.component.scss */ "./src/app/theme/components/sidenav-menu/sidenav-menu.component.scss")]
    }),
    __metadata("design:paramtypes", [_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__["SidenavMenuService"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
], SidenavMenuComponent);



/***/ }),

/***/ "./src/app/theme/components/sidenav-menu/sidenav-menu.model.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.model.ts ***!
  \*********************************************************************/
/*! exports provided: SidenavMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavMenu", function() { return SidenavMenu; });
class SidenavMenu {
    constructor(id, title, routerLink, href, target, hasSubMenu, parentId) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
    }
}
SidenavMenu.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: Boolean },
    { type: Number }
];


/***/ }),

/***/ "./src/app/theme/components/sidenav-menu/sidenav-menu.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.service.ts ***!
  \***********************************************************************/
/*! exports provided: SidenavMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavMenuService", function() { return SidenavMenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _sidenav_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidenav-menu */ "./src/app/theme/components/sidenav-menu/sidenav-menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let SidenavMenuService = class SidenavMenuService {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.document = (typeof document !== "undefined") ? document : null;
    }
    getSidenavMenuItems() {
        return _sidenav_menu__WEBPACK_IMPORTED_MODULE_3__["sidenavMenuItems"];
    }
    expandActiveSubMenu(menu) {
        let url = this.location.path();
        let routerLink = decodeURIComponent(url);
        let activeMenuItem = menu.filter(item => item.routerLink === routerLink);
        if (activeMenuItem[0]) {
            let menuItem = activeMenuItem[0];
            while (menuItem.parentId != 0) {
                let parentMenuItem = menu.filter(item => item.id == menuItem.parentId)[0];
                menuItem = parentMenuItem;
                this.toggleMenuItem(menuItem.id);
            }
        }
    }
    toggleMenuItem(menuId) {
        if (this.document) {
            let menuItem = document.getElementById('menu-item-' + menuId);
            let subMenu = document.getElementById('sub-menu-' + menuId);
            if (subMenu) {
                if (subMenu.classList.contains('show')) {
                    subMenu.classList.remove('show');
                    menuItem.classList.remove('expanded');
                }
                else {
                    subMenu.classList.add('show');
                    menuItem.classList.add('expanded');
                }
            }
        }
    }
    closeOtherSubMenus() {
        if (this.document) {
            let subMenu = document.getElementsByClassName('sub-menu');
            Array.from(subMenu).forEach((item) => {
                item.classList.remove('show');
            });
            let menu = document.getElementsByClassName('mat-button');
            Array.from(menu).forEach((item) => {
                item.classList.remove('expanded');
            });
        }
    }
    /*public closeOtherSubMenus(){
        let currentMenuItem = menu.filter(item => item.id == menuId)[0];
        menu.forEach(item => {
            if((item.id != menuId && item.parentId == currentMenuItem.parentId) || (currentMenuItem.parentId == 0 && item.id != menuId) ){
                let subMenu = document.getElementById('sub-menu-'+item.id);
                let menuItem = document.getElementById('menu-item-'+item.id);
                if(subMenu){
                    if(subMenu.classList.contains('show')){
                        subMenu.classList.remove('show');
                        menuItem.classList.remove('expanded');
                    }
                }
            }
        });
    }*/
    closeAllSubMenus() {
        if (this.document) {
            _sidenav_menu__WEBPACK_IMPORTED_MODULE_3__["sidenavMenuItems"].forEach(item => {
                let subMenu = document.getElementById('sub-menu-' + item.id);
                let menuItem = document.getElementById('menu-item-' + item.id);
                if (subMenu) {
                    if (subMenu.classList.contains('show')) {
                        subMenu.classList.remove('show');
                        menuItem.classList.remove('expanded');
                    }
                }
            });
        }
    }
};
SidenavMenuService.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
SidenavMenuService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], SidenavMenuService);



/***/ }),

/***/ "./src/app/theme/components/sidenav-menu/sidenav-menu.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.ts ***!
  \***************************************************************/
/*! exports provided: sidenavMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidenavMenuItems", function() { return sidenavMenuItems; });
/* harmony import */ var _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav-menu.model */ "./src/app/theme/components/sidenav-menu/sidenav-menu.model.ts");

const sidenavMenuItems = [
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](1, 'Home', '/', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](2, 'Fashion', null, null, null, true, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](10, 'Women', null, null, null, true, 2),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](11, 'Dresses & Skirts', '/products/dresses & skirts', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](12, 'Jackets', '/products/jackets', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](13, 'Tops & Blouses', '/products/tops & blouses', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](14, 'Shoes & Boots', '/products/shoes & boots', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](15, 'Knitwear', '/products/knitwear', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](20, 'Men', null, null, null, true, 2),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](21, 'T-shirts & Polos', '/products/t-shirts & polos', null, null, false, 20),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](22, 'Shoe & Boots', '/products/shoe & boots', null, null, false, 20),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](23, 'Jeans', '/products/jeans', null, null, false, 20),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](24, 'Coats', '/products/coats', null, null, false, 20),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](30, 'Kids', null, null, null, true, 2),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](31, 'Top', '/products/top', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](32, 'Pants & Shorts', '/products/pants & shorts', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](33, 'Dresses', '/products/dresses', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](34, 'Skirts', '/products/skirts', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](35, 'Set & Body', '/products/set & body', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](40, 'Accessories', null, null, null, true, 2),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](41, 'Watches', '/products/watches', null, null, false, 40),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](42, 'Bags & Wallet', '/products/bags & wallet', null, null, false, 40),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](43, 'Sunglasses', '/products/sunglasses', null, null, false, 40),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](44, 'Belts & Hats', '/products/belts & hats', null, null, false, 40),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](50, 'Jewellery', '/products/jewellery', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](51, 'Electronics', '/products/electronics', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](52, 'Sports', '/products/sports', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](52, 'Motors', '/products/motors', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](60, 'Pages', null, null, null, true, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](61, 'All products', '/products', null, null, false, 60),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](62, 'Product detail', '/products/2/PC All-in-One', null, null, false, 60),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](63, 'Sign in', '/sign-in', null, null, false, 60),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](64, '404 Error', '/404', null, null, false, 60),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](80, 'Contact', '/contact', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](140, 'Level 1', null, null, null, true, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](141, 'Level 2', null, null, null, true, 140),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](142, 'Level 3', null, null, null, true, 141),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](143, 'Level 4', null, null, null, true, 142),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](144, 'Level 5', null, 'http://themeseason.com', null, false, 143),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](200, 'External Link', null, 'http://themeseason.com', '_blank', false, 0)
];


/***/ }),

/***/ "./src/app/theme/components/top-menu/top-menu.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/top-menu/top-menu.component.ts ***!
  \*****************************************************************/
/*! exports provided: TopMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuComponent", function() { return TopMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let TopMenuComponent = class TopMenuComponent {
    constructor(appSettings, appService) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.currencies = ['USD', 'EUR'];
        this.flags = [
            { name: 'English', image: 'assets/images/flags/gb.svg' },
            { name: 'German', image: 'assets/images/flags/de.svg' },
            { name: 'French', image: 'assets/images/flags/fr.svg' },
            { name: 'Russian', image: 'assets/images/flags/ru.svg' },
            { name: 'Turkish', image: 'assets/images/flags/tr.svg' }
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.currency = this.currencies[0];
        this.flag = this.flags[0];
    }
    changeCurrency(currency) {
        this.currency = currency;
    }
    changeLang(flag) {
        this.flag = flag;
    }
};
TopMenuComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }
];
TopMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-top-menu',
        template: __webpack_require__(/*! raw-loader!./top-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/components/top-menu/top-menu.component.html")
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
], TopMenuComponent);



/***/ }),

/***/ "./src/app/theme/pipes/brand-search.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/theme/pipes/brand-search.pipe.ts ***!
  \**************************************************/
/*! exports provided: BrandSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandSearchPipe", function() { return BrandSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let BrandSearchPipe = class BrandSearchPipe {
    transform(brands, args) {
        let searchText = new RegExp(args, 'ig');
        if (brands) {
            return brands.filter(brand => {
                if (brand.name) {
                    return brand.name.search(searchText) !== -1;
                }
            });
        }
    }
};
BrandSearchPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'brandSearchPipe', pure: false })
], BrandSearchPipe);



/***/ }),

/***/ "./src/app/theme/pipes/filter-brands.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/theme/pipes/filter-brands.pipe.ts ***!
  \***************************************************/
/*! exports provided: FilterBrandsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterBrandsPipe", function() { return FilterBrandsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let FilterBrandsPipe = class FilterBrandsPipe {
    transform(brands, firstLetter) {
        if (firstLetter == 'all') {
            return brands;
        }
        else {
            return brands.filter(brand => brand.name.charAt(0) == firstLetter.toLowerCase());
        }
    }
};
FilterBrandsPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'filterBrands'
    })
], FilterBrandsPipe);



/***/ }),

/***/ "./src/app/theme/pipes/filter-by-id.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/theme/pipes/filter-by-id.pipe.ts ***!
  \**************************************************/
/*! exports provided: FilterByIdPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByIdPipe", function() { return FilterByIdPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let FilterByIdPipe = class FilterByIdPipe {
    transform(items, id) {
        return items.filter(item => item.id == id)[0];
    }
};
FilterByIdPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'filterById'
    })
], FilterByIdPipe);



/***/ }),

/***/ "./src/app/theme/pipes/filter-price.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/theme/pipes/filter-price.pipe.ts ***!
  \**************************************************/
/*! exports provided: FilterPricePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPricePipe", function() { return FilterPricePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let FilterPricePipe = class FilterPricePipe {
    transform(products, min, max) {
        return products.filter(product => product.newPrice <= max && product.newPrice >= min);
    }
};
FilterPricePipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'filterPrice'
    })
], FilterPricePipe);



/***/ }),

/***/ "./src/app/theme/pipes/order-by.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/theme/pipes/order-by.pipe.ts ***!
  \**********************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let OrderByPipe = class OrderByPipe {
    transform(products, $type, $categories) {
        switch ($type) {
            case 'relevant':
                return products;
                break;
            case 'low-high':
                return lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"](products, 'newPrice', 'asc');
                break;
            case 'high-low':
                return lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"](products, 'newPrice', 'desc');
                break;
            case 'default':
                // return _.orderBy(products, '', '');
                return products;
                break;
            default:
                return lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"](products, 'id', 'asc');
                break;
        }
    }
};
OrderByPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'orderBy'
    })
], OrderByPipe);



/***/ }),

/***/ "./src/app/theme/pipes/pipes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/theme/pipes/pipes.module.ts ***!
  \*********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-by-id.pipe */ "./src/app/theme/pipes/filter-by-id.pipe.ts");
/* harmony import */ var _filter_brands_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-brands.pipe */ "./src/app/theme/pipes/filter-brands.pipe.ts");
/* harmony import */ var _brand_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brand-search.pipe */ "./src/app/theme/pipes/brand-search.pipe.ts");
/* harmony import */ var _filter_price_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-price.pipe */ "./src/app/theme/pipes/filter-price.pipe.ts");
/* harmony import */ var _order_by_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-by.pipe */ "./src/app/theme/pipes/order-by.pipe.ts");
/* harmony import */ var _sanitizeHtml_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sanitizeHtml.pipe */ "./src/app/theme/pipes/sanitizeHtml.pipe.ts");
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./truncate.pipe */ "./src/app/theme/pipes/truncate.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let PipesModule = class PipesModule {
};
PipesModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ],
        declarations: [
            _filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterByIdPipe"],
            _filter_brands_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterBrandsPipe"],
            _brand_search_pipe__WEBPACK_IMPORTED_MODULE_4__["BrandSearchPipe"],
            _filter_price_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPricePipe"],
            _order_by_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderByPipe"],
            _sanitizeHtml_pipe__WEBPACK_IMPORTED_MODULE_7__["sanitizeHtmlPipe"],
            _truncate_pipe__WEBPACK_IMPORTED_MODULE_8__["TruncatePipe"]
        ],
        exports: [
            _filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterByIdPipe"],
            _filter_brands_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterBrandsPipe"],
            _brand_search_pipe__WEBPACK_IMPORTED_MODULE_4__["BrandSearchPipe"],
            _filter_price_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPricePipe"],
            _order_by_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderByPipe"],
            _sanitizeHtml_pipe__WEBPACK_IMPORTED_MODULE_7__["sanitizeHtmlPipe"],
            _truncate_pipe__WEBPACK_IMPORTED_MODULE_8__["TruncatePipe"]
        ]
    })
], PipesModule);



/***/ }),

/***/ "./src/app/theme/pipes/sanitizeHtml.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/theme/pipes/sanitizeHtml.pipe.ts ***!
  \**************************************************/
/*! exports provided: sanitizeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeHtmlPipe", function() { return sanitizeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let sanitizeHtmlPipe = class sanitizeHtmlPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    }
};
sanitizeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
];
sanitizeHtmlPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'sanitizeHtml'
    }),
    __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
], sanitizeHtmlPipe);



/***/ }),

/***/ "./src/app/theme/pipes/truncate.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/theme/pipes/truncate.pipe.ts ***!
  \**********************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let TruncatePipe = class TruncatePipe {
    transform(value, limite) {
        const limit = parseInt(limite);
        return value.length > limit ? value.substring(0, limit) + "..." : value;
    }
};
TruncatePipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: "truncate"
    })
], TruncatePipe);



/***/ }),

/***/ "./src/app/theme/utils/app-interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/theme/utils/app-interceptor.ts ***!
  \************************************************/
/*! exports provided: AppInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInterceptor", function() { return AppInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AppInterceptor = class AppInterceptor {
    constructor(spinner) {
        this.spinner = spinner;
    }
    intercept(req, next) {
        this.spinner.show();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                this.spinner.hide();
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            const started = Date.now();
            const elapsed = Date.now() - started;
            console.log(`Request for ${req.urlWithParams} failed after ${elapsed} ms.`);
            // debugger;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
};
AppInterceptor.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
];
AppInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
], AppInterceptor);



/***/ }),

/***/ "./src/app/theme/utils/app-validators.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/utils/app-validators.ts ***!
  \***********************************************/
/*! exports provided: emailValidator, matchingPasswords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailValidator", function() { return emailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchingPasswords", function() { return matchingPasswords; });
function emailValidator(control) {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
function matchingPasswords(passwordKey, passwordConfirmationKey) {
    return (group) => {
        let password = group.controls[passwordKey];
        let passwordConfirmation = group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({ mismatchedPasswords: true });
        }
    };
}


/***/ }),

/***/ "./src/app/theme/utils/custom-overlay-container.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/utils/custom-overlay-container.ts ***!
  \*********************************************************/
/*! exports provided: CustomOverlayContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomOverlayContainer", function() { return CustomOverlayContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let CustomOverlayContainer = class CustomOverlayContainer extends _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"] {
    _createContainer() {
        let container = document.createElement('div');
        container.classList.add('cdk-overlay-container');
        document.getElementById('app').appendChild(container);
        this._containerElement = container;
    }
};
CustomOverlayContainer = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
], CustomOverlayContainer);



/***/ }),

/***/ "./src/app/theme/utils/scroll-strategy.ts":
/*!************************************************!*\
  !*** ./src/app/theme/utils/scroll-strategy.ts ***!
  \************************************************/
/*! exports provided: menuScrollStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuScrollStrategy", function() { return menuScrollStrategy; });
function menuScrollStrategy(overlay) {
    return () => overlay.scrollStrategies.block();
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
        .catch(err => console.log(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\emporium-ssr\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map