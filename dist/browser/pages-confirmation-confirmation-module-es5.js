(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-confirmation-confirmation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/confirmation/confirmation.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/confirmation/confirmation.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign.gt-sm=\"center center\" fxLayoutAlign.sm=\"center center\" class=\"mat-elevation-z3 text-muted\">\n\n    <div *ngIf=\"state == 'success'\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"p-2 text-center\">\n            <button mat-fab class=\"bg-color-jd\">\n                <mat-icon>check</mat-icon>\n            </button>\n            <i class=\"c-icon hq-icon hq-icon-category-pole-saws hq-icon-large \" title=\"\"></i>\n            <h2 class=\"py-2\">Gracias por tu compra por {{payment}}.</h2>\n            <h2 class=\"py-1\">Tu pedido se procesará en breve y te informaremos el número de guía de paquetería que le corresponde.</h2>\n            <h2 class=\"py-2\">Si tienes alguna duda por favor contáctanos 800 212 9225.</h2>\n        </div>\n    </div>\n    <div *ngIf=\"state == 'completed'\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"p-2 text-center\">\n            <button mat-fab class=\"bg-color-jd\">\n                <mat-icon>check</mat-icon>\n            </button>\n            <i class=\"c-icon hq-icon hq-icon-category-pole-saws hq-icon-large \" title=\"\"></i>\n            <h2 class=\"py-2\">Gracias por tu compra por {{payment}}.</h2>\n            <h2 class=\"py-1\">Tu pedido se procesará en breve y te informaremos el número de guía de paquetería que le corresponde.</h2>\n            <h2 class=\"py-1\">¿Necesitas factura electronica? Responde con tus datos de facturación al mensaje de correo que te enviamos a la dirección que nos proporcionaste</h2>\n            <h2 class=\"py-2\">Si tienes alguna duda por favor contáctanos 800 212 9225.</h2>\n        </div>\n    </div>\n    <div *ngIf=\"state == 'pending'\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"p-2 text-center\">\n            <button mat-fab class=\"bg-color-jd\">\n                <mat-icon>report_problem</mat-icon>\n            </button>\n            <h2 class=\"py-2\">Estamos validando tu pago con {{payment}}.</h2>\n            <h2 class=\"py-1\">En breve comenzaremos a procesar tu pedido.</h2>\n            <h2 class=\"py-2\">Si tienes alguna duda por favor contáctanos 800 212 9225.</h2>\n        </div>\n    </div>\n    <div *ngIf=\"state == 'failure'\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"p-2 text-center\">\n            <button mat-fab class=\"bg-color-jd\">\n                <mat-icon>cancel</mat-icon>\n            </button>\n            <h2 class=\"py-2\">Algo ha salido mal, {{payment}} no ha procesado correctamente tu compra.</h2>\n            <h2 class=\"py-1\">Sabemos que en ocasiones esto puede ser frustrante. Comunicate con nosotros, te apoyaremos en lo que necesites.</h2>\n            <h2 class=\"py-1\">Por favor intentalo de nuevo.</h2>\n            <h2 class=\"py-2\">Estamos aquí para ayudarte contáctanos 800 212 9225</h2>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/confirmation/confirmation.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/confirmation/confirmation.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z1 {\n  background: #fff;\n  padding: 8px 12px;\n}\n\n.mat-elevation-z3 {\n  background: #fff;\n  padding: 8px 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZmlybWF0aW9uL0M6XFx4YW1wcFxcaHRkb2NzXFxlbXBvcml1bS1zc3Ivc3JjXFxhcHBcXHBhZ2VzXFxjb25maXJtYXRpb25cXGNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWVsZXZhdGlvbi16MXtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxufVxyXG4ubWF0LWVsZXZhdGlvbi16M3tcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxufVxyXG4iLCIubWF0LWVsZXZhdGlvbi16MSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/confirmation/confirmation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/confirmation/confirmation.component.ts ***!
  \**************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent(activatedRoute, appService, spinner, cookieService) {
        this.activatedRoute = activatedRoute;
        this.appService = appService;
        this.spinner = spinner;
        this.cookieService = cookieService;
        this.done = false;
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            var temp;
            _this.state = params['state'];
            temp = params['data'];
            _this.framengData = temp.split('?');
            _this.payment = _this.framengData[0];
            _this.data = _this.framengData[1];
            _this.activatedRoute.queryParams.subscribe(function (getParams) {
                _this.data = getParams;
                if (_this.data != "") {
                    _this.state = _this.data.status.toLocaleLowerCase();
                    _this.state = _this.state == 'completed' ? 'success' : _this.state;
                    _this.appService.sendConfirmationPayment(_this.state, 'button', JSON.stringify(_this.data), params['token']).subscribe(function (response) {
                        if (_this.cookieService.check('session')) {
                            _this.cookieService.delete('session', '/');
                        }
                        _this.done = true;
                        // @ts-ignore
                        _this.state = response.data;
                        if (_this.state == 'success') {
                            _this.appService.Data.cartList = [];
                            _this.appService.Data.totalPrice = 0;
                            _this.appService.Data.totalCartCount = 0;
                        }
                        _this.spinner.hide();
                    });
                }
                else if (JSON.stringify(_this.data) == "{}") {
                    setTimeout(function () { _this.spinner.show(); }, 1000);
                    if (_this.payment == 'MercadoPago') {
                        _this.appService.confirmMercadopago(JSON.stringify(_this.data)).subscribe(function (responseMP) {
                            // @ts-ignore
                            _this.appService.sendConfirmationPayment(_this.state, _this.payment, JSON.stringify(_this.data), responseMP.data).subscribe(function (response) {
                                if (_this.cookieService.check('session')) {
                                    _this.cookieService.delete('session', '/');
                                }
                                _this.done = true;
                                // @ts-ignore
                                _this.state = response.data;
                                _this.spinner.hide();
                            });
                        });
                    }
                    else {
                        _this.appService.sendConfirmationPayment(_this.state, _this.payment, JSON.stringify(_this.data), "").subscribe(function (response) {
                            if (_this.cookieService.check('session')) {
                                _this.cookieService.delete('session', '/');
                            }
                            _this.done = true;
                            // @ts-ignore
                            _this.state = response.data;
                            _this.spinner.hide();
                        });
                    }
                }
            });
        });
    };
    ConfirmationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
    ]; };
    ConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation',
            template: __webpack_require__(/*! raw-loader!./confirmation.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/confirmation/confirmation.component.html"),
            styles: [__webpack_require__(/*! ./confirmation.component.scss */ "./src/app/pages/confirmation/confirmation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/pages/confirmation/confirmation.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/confirmation/confirmation.module.ts ***!
  \***********************************************************/
/*! exports provided: routes, ConfirmationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationModule", function() { return ConfirmationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmation.component */ "./src/app/pages/confirmation/confirmation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: ':state/:data', component: _confirmation_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationComponent"], pathMatch: 'full' },
    { path: ':state/:data/:token', component: _confirmation_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationComponent"], pathMatch: 'full' },
];
var ConfirmationModule = /** @class */ (function () {
    function ConfirmationModule() {
    }
    ConfirmationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [
                _confirmation_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationComponent"]
            ]
        })
    ], ConfirmationModule);
    return ConfirmationModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-confirmation-confirmation-module-es5.js.map