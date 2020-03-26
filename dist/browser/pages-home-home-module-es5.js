(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ngx-json-ld [json]=\"json\"></ngx-json-ld>\r\n<app-banners></app-banners>\r\n\r\n<div fxLayout=\"row wrap\" class=\"info-bar\" fxShow=\"\" fxHide.lt-md=\"\">\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n        <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n            <mat-icon class=\"mat-icon-xlg m-0 fn-color-jd mt-2\">build</mat-icon>\r\n            <div class=\"content\">\r\n                <p style=\"color: rgba(0, 0, 0, 0.87) !important;\">Garantía y Refacciones</p>\r\n                <span class=\"text-muted m-0\">Todos nuestros equipos cuentan con garantía, contra defectos de fábrica y contamos con las refacciones originales de los mismos.</span>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n        <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n            <mat-icon class=\"mat-icon-xlg fn-color-jd mt-2\">local_shipping</mat-icon>\r\n            <div class=\"content\">\r\n                <p style=\"color: rgba(0, 0, 0, 0.87) !important;\">Envío Gratis</p>\r\n                <span class=\"text-muted m-0\">En compras superiores a $3,000 pesos.</span>\r\n                <p> <a href=\"javascript: void(0)\" (click)=\"openDeliveryTermsDialog()\" style=\"color: rgba(0, 0, 0, 0.54) !important;\">*Condiciones</a></p>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n        <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n            <mat-icon class=\"mat-icon-xlg m-0 fn-color-jd mt-2\">monetization_on</mat-icon>\r\n            <div class=\"content\">\r\n                <p style=\"color: rgba(0, 0, 0, 0.87) !important;\">Paga Seguro</p>\r\n                <!--                <span class=\"text-muted m-0\">Aceptamos pagos mediante PayPal, Mercado Pago, transferencia y Deposito Bancario.</span>-->\r\n                <span class=\"text-muted m-0\">Aceptamos pagos mediante PayPal, transferencia y Deposito Bancario.</span>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n        <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n            <mat-icon class=\"mat-icon-xlg m-0 fn-color-jd mt-2\">perm_phone_msg</mat-icon>\r\n            <div class=\"content\">\r\n                <p style=\"color: rgba(0, 0, 0, 0.87) !important;\">Soporte y Asesoría</p>\r\n                <span class=\"text-muted m-0\">¿Dudas sobre tu equipo?, nuestros ingenieros te pueden apoyar por teléfono, Whatsapp o en nuestras tiendas.</span>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n<app-sections-panel [productTypes]=\"productTypes\" [brands]=\"brands\" [additional]=\"additional\"></app-sections-panel>\r\n\r\n<app-brands-carousel [brands]=\"distributions\"></app-brands-carousel>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products-tabs {\n  margin-top: 30px;\n}\n\n.info-bar {\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxceGFtcHBcXGh0ZG9jc1xcZW1wb3JpdW0tc3NyL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHMtdGFic3tcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLmluZm8tYmFye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4iLCIucHJvZHVjdHMtdGFicyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5pbmZvLWJhciB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/dialog/dialog.component */ "./src/app/shared/dialog/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(appService, dialog, meta, title) {
        this.appService = appService;
        this.dialog = dialog;
        this.meta = meta;
        this.title = title;
        this.distributions = [];
        this.banners = [];
        this.brands = [];
        this.additional = [];
        this.text = "Los envíos gratuitos que ofrece JarDepot son a la cobertura terrestre normal de las paqueterías con las que tenemos convenio (ODM, FEDEX).<br>" +
            "NO aplica a zonas extendidas (En extra coberturas se le indicará la diferencia a pagar para su consideración).<br>" +
            "NO aplica con otras paqueterías<br>" +
            "El tiempo de entrega estimado y sujeto a existencias es de 2 a 6 días hábiles, (Mínimo/Máximo) contados a partir de las siguientes " +
            "24 hrs de que su depósito se ha verificado y de recibir su correo con los datos completos para facturar y enviar su producto.<br><br>";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getBanners();
        this.getDistributions();
        this.getBrands();
        this.getProductTypes();
        this.getAdditional();
        this.getMetas();
        this.json = {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Jardepot",
            "url": "http://jardepot.com",
            "address": "Av. Emiliano Zapata 129, Tlaltenango, 62170 Cuernavaca, Mor., México",
            "sameAs": [
                "https://www.facebook.com/Jardepot",
                "https://www.instagram.com/jardepotsade",
                "https://twitter.com/jardepot",
                "https://www.youtube.com/channel/UCym0cCHYeEDqs70RD7Zs2-g"
            ]
        };
    };
    HomeComponent.prototype.getMetas = function () {
        var _this = this;
        this.appService.getDescriptionNivel2('index', 'index').subscribe(function (data) {
            var res = JSON.parse(JSON.stringify(data));
            _this.meta.updateTag({ name: 'description', content: res.result.metadescription.substr(0, 150) });
            _this.meta.updateTag({ name: 'keywords', content: res.result.keywords });
            _this.title.setTitle(res.result.metatitle.substr(0, 70));
        });
    };
    HomeComponent.prototype.getBanners = function () {
    };
    HomeComponent.prototype.getDistributions = function () {
        this.distributions = this.appService.getDistributions();
    };
    HomeComponent.prototype.getBrands = function () {
        var _this = this;
        this.appService.getBrands().subscribe(function (data) {
            _this.brands = data;
        });
        this.brands.forEach(function (brand) {
            brand.selected = false;
        });
    };
    HomeComponent.prototype.getAdditional = function () {
        var _this = this;
        this.appService.getAdditional().subscribe(function (data) {
            _this.additional = data;
        });
    };
    HomeComponent.prototype.getProductTypes = function () {
        var _this = this;
        this.appService.getProductTypes().subscribe(function (data) {
            _this.productTypes = data;
        });
    };
    HomeComponent.prototype.openDeliveryTermsDialog = function () {
        var textBody = "Los envíos gratuitos que ofrece JarDepot son a la cobertura terrestre normal de las paqueterías con las que tenemos convenio (ODM, FEDEX).<br>" +
            "NO aplica a zonas extendidas (En extra coberturas se le indicará la diferencia a pagar para su consideración).<br>" +
            'Las compras deben ser mayor a $3,000.00 MXN<br>' +
            "NO aplica con otras paqueterías<br>" +
            "El tiempo de entrega estimado y sujeto a existencias es de 2 a 6 días hábiles, (Mínimo/Máximo) contados a partir de las siguientes " +
            "24 hrs de que su depósito se ha verificado y de recibir su correo con los datos completos para facturar y enviar su producto.<br><br>";
        var dialogRef = this.dialog.open(_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"], {
            panelClass: 'generic-dialog',
            direction: 'ltr'
        });
        dialogRef.componentInstance.title = 'Condiciones de envíos Gratis:';
        dialogRef.componentInstance.body = textBody;
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: routes, HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _ngx_lite_json_ld__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-lite/json-ld */ "./node_modules/@ngx-lite/json-ld/fesm5/ngx-lite-json-ld.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _ngx_lite_json_ld__WEBPACK_IMPORTED_MODULE_5__["NgxJsonLdModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map