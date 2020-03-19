(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-products-module"],{

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-pagination/dist/ngx-pagination.js ***!
  \************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



var PaginationService = /** @class */ (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = /** @class */ (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId();
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, config) {
        this.checkConfig(config);
        return {
            id: config.id != null ? config.id : this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe = __decorate$1([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'paginate',
            pure: false
        }),
        __metadata("design:paramtypes", [PaginationService])
    ], PaginatePipe);
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = /** @class */ (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "id", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Number)
    ], PaginationControlsComponent.prototype, "maxSize", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "directionLinks", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "autoHide", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "responsive", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "previousLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "nextLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsComponent.prototype, "pageChange", void 0);
    PaginationControlsComponent = __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pagination-controls',
            template: DEFAULT_TEMPLATE,
            styles: [DEFAULT_STYLES],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], PaginationControlsComponent);
    return PaginationControlsComponent;
}());

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = /** @class */ (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$2("design:type", String)
    ], PaginationControlsDirective.prototype, "id", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$2("design:type", Number)
    ], PaginationControlsDirective.prototype, "maxSize", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsDirective.prototype, "pageChange", void 0);
    PaginationControlsDirective = __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'pagination-template,[pagination-template]',
            exportAs: 'paginationApi'
        }),
        __metadata$2("design:paramtypes", [PaginationService,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PaginationControlsDirective);
    return PaginationControlsDirective;
}());

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NgxPaginationModule = /** @class */ (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [
                PaginatePipe,
                PaginationControlsComponent,
                PaginationControlsDirective
            ],
            providers: [PaginationService],
            exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
        })
    ], NgxPaginationModule);
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/products/product/product-zoom/product-zoom.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/products/product/product-zoom/product-zoom.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"controls\">\r\n    <button mat-mini-fab color=\"primary\" class=\"zoom-in\" (click)=\"zoomIn()\"><mat-icon>zoom_in</mat-icon></button>\r\n    <button mat-mini-fab color=\"primary\" class=\"zoom-out\" (click)=\"zoomOut()\"><mat-icon>zoom_out</mat-icon></button>\r\n    <button mat-mini-fab color=\"warn\" class=\"close\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n</div>\r\n<div mat-dialog-content>\r\n    <div class=\"viewer\">\r\n        <img [src]=\"image\" #zoomImage>\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/products/product/product.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/products/product/product.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container style=\"display: flex;\">\r\n\r\n    <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" [style.position]=\"sidenav.opened ? 'initial' : 'absolute'\" class=\"filter-sidenav\" perfectScrollbar>\r\n        <div>\r\n            <app-sections-side></app-sections-side>\r\n        </div>\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content class=\"all-products\" ngClass.gt-sm=\"p-left\" fxLayout=\"column\">\r\n        <ngx-json-ld [json]=\"json\"></ngx-json-ld>\r\n        <div fxLayout=\"row wrap\" fxFlex=\"100\">\r\n            <div fxLayout=\"column\"  fxFlex=\"100\">\r\n                <h1>{{product?.name}}</h1>\r\n                <div fxLayout=\"row wrap\" fxFlex=\"100\">\r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"40\">\r\n                        <mat-card class=\"product-image\" style=\"overflow: hidden;\">\r\n                            <!--                    <mat-chip-list *ngIf=\"product?.discount\"><mat-chip class=\"bg-color-oferta\" selected=\"true\">{{product?.discount}}</mat-chip></mat-chip-list>-->\r\n                            <div *ngIf=\"product?.discount\" class=\"ribbon ribbon-top-right\">\r\n                                <span>Oferta</span>\r\n                            </div>\r\n                            <button mat-icon-button (click)=\"openZoomViewer()\" fxHide=\"false\" fxHide.gt-md>\r\n                                <mat-icon>fullscreen</mat-icon>\r\n                            </button>\r\n                            <img *ngIf=\"image\" [src]=\"image\" (mousemove)=\"onMouseMove($event)\" title=\"{{product?.productType+' '+product?.brand+' '+product?.mpn}}\"\r\n                                 (mouseleave)=\"onMouseLeave($event)\" alt=\"{{product?.productType+' '+product?.brand+' '+product?.mpn}}\" (error)=\"handleImgError($event)\"\r\n                                 style=\"max-width: 100%;\"/>\r\n                            <img src=\"../assets/images/otros/gratis.png\" class=\"free-delivery\">\r\n                        </mat-card>\r\n\r\n                        <div class=\"small-carousel\">\r\n                            <div class=\"swiper-container\" [swiper]=\"config\">\r\n                                <div class=\"swiper-wrapper\">\r\n                                    <div *ngFor=\"let image of product?.images\" class=\"swiper-slide\">\r\n                                        <mat-card (click)=\"selectImage(image)\" class=\"p-1\">\r\n                                            <div style=\"height: 81px; width: 81px; text-align: center;\" ngStyle.lt-sm=\"height: 100px;\" fxLayoutAlign=\"center center\">\r\n                                                <img [attr.data-src]=\"image.small\" title=\"{{product?.productType+' '+product?.brand+' '+product?.mpn}}\" (error)=\"handleImgError($event)\"\r\n                                                     alt=\"{{product?.productType+' '+product?.brand+' '+product?.mpn}}\" class=\"swiper-lazy\" style=\"max-height: 100%\"/>\r\n                                            </div>\r\n                                            <div class=\"swiper-lazy-preloader\"></div>\r\n                                        </mat-card>\r\n                                    </div>\r\n                                </div>\r\n                                <button mat-icon-button class=\"swiper-button-prev swipe-arrow\">\r\n                                    <mat-icon>keyboard_arrow_left</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button class=\"swiper-button-next swipe-arrow\">\r\n                                    <mat-icon>keyboard_arrow_right</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div fxFlex=\"100\" fxLayout=\"row wrap\" fxFlex.gt-sm=\"60\" ngClass.gt-sm=\"m-0 p-3\"\r\n                         ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n\r\n                        <div fxFlex=\"100\" fxFlex.gt-md=\"65\" fxLayout=\"column\" style=\"padding-left: 10px; padding-right: 25px; margin-bottom: 15px;\">\r\n                            <div #zoomViewer fxShow=\"false\" fxShow.gt-md>\r\n                                <mat-card *ngIf=\"zoomImage\" class=\"zoom-viewer mat-elevation-z18\"\r\n                                          [ngStyle]=\"{'background-image': 'url(' + zoomImage + ')'}\"></mat-card>\r\n                            </div>\r\n\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutAlign.lt-md=\"space-between center\">\r\n                                <!--                                <h2>{{product?.name}}</h2>-->\r\n                                <button mat-button (click)=\"sidenav.toggle()\" class=\"bg-color-jd\" fxHide fxShow.lt-md>\r\n                                    Secciones\r\n                                </button>\r\n                                <a style=\"background: #35B73A;color: #fff\" fxHide fxShow.lt-md href=\"https://wa.me/527226481040?text=Hola,%20me%20gustar&iacute;a%20saber%20sobre%20las%20refacciones%20del%20producto%20{{product?.name}}\"\r\n                                   target=\"_blank\" mat-raised-button >\r\n                                    <fa-icon [icon]=\"faWhatsapp\" style=\"font-size: 20px;\"></fa-icon> Pregunta por refacciones\r\n                                </a>\r\n                            </div>\r\n                            <p class=\"py-1 lh\" style=\" font-size: 17px;font-weight: 500; text-align: justify\">{{product?.description}}</p>\r\n                            <h3 class=\"old-price text-muted\" >\r\n                                <span *ngIf=\"product?.oldPrice && product?.stock\">${{product?.oldPrice | number : '1.2-2'}}</span>\r\n                            </h3>\r\n                            <h1 class=\"new-price\" *ngIf=\"product?.stock\"><span style=\"color: #de1f21;\"> ${{product?.newPrice | number : '1.2-2'}} </span><span class=\"text-bold-tiny\">IVA incluido</span></h1>\r\n                            <div class=\"py-1 lh\">\r\n                                <!--                            <p><span class=\"fw-500 fn-color-jd\">Categoría: </span><span></span></p>-->\r\n                                <p *ngIf=\"product?.inventory > 0 && product?.stock\" class=\"fn-color-inStock\" ><mat-icon class=\"mat-icon-sm m-0 fn-color-inStock\">flash_on</mat-icon>&nbsp;Envío de volada </p>\r\n                            </div>\r\n                            <div class=\"divider\" sltyle=\"height: 2px;\"></div>\r\n                            <div style=\"font-weight: bold !important;\">\r\n                                <p> <mat-icon class=\"mat-icon-sm m-0 fn-color-jd\">local_shipping</mat-icon> Envío Gratis. <a style=\"color: rgba(0, 0, 0, 0.87);\" href=\"javascript: void(0)\" (click)=\"openDeliveryTermsDialog()\">*Condiciones</a></p>\r\n                                <p> <mat-icon class=\"mat-icon-sm m-0 fn-color-jd\">perm_phone_msg</mat-icon> Soporte y asesoria </p>\r\n                                <p> <mat-icon class=\"mat-icon-sm m-0 fn-color-jd\">build</mat-icon> Garantía de Fabrica </p>\r\n                                *Sujeto a existencias.\r\n                                <br>\r\n                                *Precios sujetos a cambio sin previo aviso.\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"boton-cel-WA\" fxShow fxHide.lt-md>\r\n                                <a style=\"background: #35B73A;color: #fff\" href=\"https://wa.me/527226481040?text=Hola,%20me%20gustar&iacute;a%20saber%20sobre%20las%20refacciones%20del%20producto%20{{product?.name}}\"\r\n                                   target=\"_blank\" mat-raised-button class=\"no-mobile whats\">\r\n                                    <fa-icon [icon]=\"faWhatsapp\" style=\"font-size: 20px;\"></fa-icon> Pregunta por refacciones\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                        <!--                        ********************************    -->\r\n                        <!--                        Se divide la zona de pago-->\r\n                        <!--                        ********************************    -->\r\n                        <div fxFlex=\"100\" fxFlex.gt-md=\"35\" fxLayout=\"column\">\r\n                            <div class=\"mat-elevation-z6 shopping-area\">\r\n                                <div class=\"py-2 text-shopping\">\r\n                                    <h2 class=\"new-price\" *ngIf=\"product?.stock\"><span style=\"color: #de1f21;\"> ${{product?.newPrice | number : '1.2-2'}} </span><span class=\"text-bold-tiny\">IVA incluido</span></h2>\r\n                                </div>\r\n                                <!--                                <p> <mat-icon class=\"mat-icon-sm m-0 fn-color-jd\">local_shipping</mat-icon> Envío Gratis <a style=\"color: rgba(0, 0, 0, 0.87);\" href=\"javascript: void(0)\" (click)=\"openDeliveryTermsDialog()\">*Condiciones</a></p>-->\r\n                                <div class=\"py-1\">\r\n                                    <app-controls [product]=\"product\" [type]=\"'product'\" [align]=\"'start end'\"></app-controls>\r\n                                </div>\r\n\r\n                                <div style=\"font-weight: bold !important;\">\r\n                                    <p> <mat-icon class=\"mat-icon-sm m-0 fn-color-jd\">monetization_on</mat-icon> Pagos seguros con </p>\r\n                                    <ul style=\"list-style-type: disc; padding-left: 2em;\">\r\n                                        <li>Paypal</li>\r\n                                        <!--                                        <li>Mercado pago</li>-->\r\n                                        <li>Depósito bancario</li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                            <!--                            <div class=\"divider mt-1\"></div>-->\r\n                            <!--                            <div class=\"divider\"></div>-->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div fxLayout=\"row wrap\" class=\"mt-2\">\r\n                    <div fxFlex=\"100\">\r\n                        <mat-card>\r\n                            <mat-tab-group [@.disabled]=\"true\" [selectedIndex]=\"0\">\r\n                                <mat-tab label=\"Ficha técnica\">\r\n                                    <div class=\"full-desc lh\">\r\n                                        <p class=\"fw-500 mt-2\" style=\"color: black !important;\"\r\n                                           [innerHTML]=\"dataSheet | sanitizeHtml\">\r\n                                        </p>\r\n                                    </div>\r\n                                </mat-tab>\r\n                                <mat-tab label=\"Dudas y Comentarios\">\r\n                                    <div *ngIf=\"sendComment == false\" class=\"full-desc lh\" style=\"color: black !important;\">\r\n                                        <h3 class=\"mt-2\">Dejanos tus datos para que un asesor te contacte.</h3>\r\n                                        <div class=\"divider\"></div>\r\n                                        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" fxLayout=\"row wrap\">\r\n                                            <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1 mt-2\">\r\n                                                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                                    <mat-label>Nombre Completo</mat-label>\r\n                                                    <input matInput placeholder=\"Tu nombre\" formControlName=\"nombre\" required>\r\n                                                    <mat-error *ngIf=\"form.controls.nombre.errors?.required\">El nombre es obligarotio</mat-error>\r\n                                                    <mat-error *ngIf=\"form.controls.nombre.hasError('minlength')\">Es un nombre muy corto, mínimo 4 caracteres</mat-error>\r\n                                                </mat-form-field>\r\n                                            </div>\r\n                                            <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1 mt-2\">\r\n                                                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                                    <mat-label>Email</mat-label>\r\n                                                    <input matInput placeholder=\"Tu email\" formControlName=\"email\" required>\r\n                                                    <mat-error *ngIf=\"form.controls.email.errors?.required\">El email es obligatorio</mat-error>\r\n                                                    <mat-error *ngIf=\"form.controls.email.hasError('invalidEmail')\">El email es invalido</mat-error>\r\n                                                </mat-form-field>\r\n                                            </div>\r\n                                            <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1 mt-2\">\r\n                                                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                                    <mat-label>Teléfono 10 DIGITOS</mat-label>\r\n                                                    <input matInput placeholder=\"Tu teléfono\" formControlName=\"telefono\" maxlength=\"10\" required>\r\n                                                    <mat-error *ngIf=\"form.controls.telefono.errors?.required\">El teléfono es obligatorio</mat-error>\r\n                                                    <mat-error *ngIf=\"form.controls.telefono.hasError('pattern')\">El teléfono es invalido, ingresa números\r\n                                                    </mat-error>\r\n                                                    <mat-error *ngIf=\"form.controls.telefono.hasError('minlength')\">\r\n                                                        El teléfono es muy corto, son 10 números\r\n                                                    </mat-error>\r\n                                                </mat-form-field>\r\n                                            </div>\r\n                                            <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1 mt-2\">\r\n                                                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                                    <mat-label>Whatsapp</mat-label>\r\n                                                    <input matInput placeholder=\"Tu Whatsapp\" maxlength=\"10\" formControlName=\"whatsapp\">\r\n                                                    <mat-error *ngIf=\"form.controls.whatsapp.hasError('pattern')\">\r\n                                                        El teléfono es invalido, ingresa números\r\n                                                    </mat-error>\r\n                                                    <mat-error *ngIf=\"form.controls.whatsapp.hasError('minlength')\">\r\n                                                        El teléfono es muy corto, son 10 números\r\n                                                    </mat-error>\r\n                                                </mat-form-field>\r\n                                            </div>\r\n\r\n                                            <div fxFlex=\"100\" class=\"px-1 mt-1\">\r\n                                                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                                    <mat-label>Comentarios</mat-label>\r\n                                                    <textarea matInput placeholder=\"Tus comentarios\" formControlName=\"comentario\" rows=\"3\"></textarea>\r\n                                                    <mat-error *ngIf=\"form.controls.comentario.hasError('minlength')\">Debes escribir al mínimo 4 caracteres.</mat-error>\r\n                                                </mat-form-field>\r\n                                            </div>\r\n                                            <input  type=\"hidden\" formControlName=\"producto\"  required>\r\n                                            <div fxFlex=\"100\" class=\"mt-2 text-center w-100\">\r\n                                                <button mat-raised-button class=\"bg-color-jd\" type=\"submit\">Enviar</button>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                    <div *ngIf=\"sendComment\" fxLayout=\"column\" fxLayoutAlign=\"space-around center\" >\r\n                                        <div fxFlexOffset=\"15\" style=\"height: 300px;\">\r\n                                            <h1>Gracias por compartir con nosotros, en breve nos comunicamos contigo.</h1>\r\n                                        </div>\r\n                                    </div>\r\n                                </mat-tab>\r\n                            </mat-tab-group>\r\n                        </mat-card>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div fxFlex=\"100\" fxLayout=\"column\">\r\n\r\n\r\n            <div class=\"py-2 mt-2\">\r\n                <h2>Productos relacionados</h2>\r\n                <div class=\"divider\"></div>\r\n                <app-products-carousel [products]=\"relatedProducts\"></app-products-carousel>\r\n            </div>\r\n\r\n\r\n            <div fxLayout=\"row wrap\" class=\"info-bar\">\r\n                <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                    <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                        <mat-icon class=\"mat-icon-xlg m-0 fn-color-jd mt-2\">build</mat-icon>\r\n                        <div class=\"content\">\r\n                            <p style=\"color: rgba(0, 0, 0, 0.87) !important;\">Garantía y Refacciones</p>\r\n                            <span class=\"text-muted m-0\">Todos nuestros equipos cuentan con garantía, contra defectos de fábrica y contamos con las refacciones originales de los mismos.</span>\r\n                        </div>\r\n                    </mat-card>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                    <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                        <mat-icon class=\"mat-icon-xlg fn-color-jd mt-2\">local_shipping</mat-icon>\r\n                        <div class=\"content\">\r\n                            <p style=\"color: rgba(0, 0, 0, 0.87) !important;\">Envío Gratis</p>\r\n                            <span class=\"text-muted m-0\" *ngIf=\"product\">En compras superiores a $3,000 pesos.</span>\r\n                            <a style=\"color: rgba(0, 0, 0, 0.87);\" href=\"javascript: void(0)\" (click)=\"openDeliveryTermsDialog()\">*Condiciones</a>\r\n                        </div>\r\n                    </mat-card>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                    <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                        <mat-icon class=\"mat-icon-xlg m-0 fn-color-jd mt-2\">monetization_on</mat-icon>\r\n                        <div class=\"content\">\r\n                            <p style=\"color: rgba(0, 0, 0, 0.87) !important;\">Paga Seguro</p>\r\n                            <!--                <span class=\"text-muted m-0\">Aceptamos pagos mediante PayPal, Mercado Pago, transferencia y Deposito Bancario.</span>-->\r\n                            <span class=\"text-muted m-0\">Aceptamos pagos mediante PayPal, transferencia y Deposito Bancario.</span>\r\n                        </div>\r\n                    </mat-card>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                    <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                        <mat-icon class=\"mat-icon-xlg m-0 fn-color-jd mt-2\">perm_phone_msg</mat-icon>\r\n                        <div class=\"content\">\r\n                            <p style=\"color: rgba(0, 0, 0, 0.87) !important;\">Soporte y Asesoría</p>\r\n                            <span class=\"text-muted m-0\">¿Dudas sobre tu equipo?, nuestros ingenieros te pueden apoyar por teléfono, Whatsapp o en nuestras tiendas.</span>\r\n                        </div>\r\n                    </mat-card>\r\n                </div>\r\n            </div>\r\n            <app-brands-carousel [brands]=\"distributions\"></app-brands-carousel>\r\n        </div>\r\n\r\n    </mat-sidenav-content>\r\n\r\n</mat-sidenav-container>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/products/products.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/products/products.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container style=\"display: flex;\">\r\n\r\n    <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"filter-sidenav\" [style.position]=\"sidenavOpen ? 'initial' : 'absolute'\" perfectScrollbar>\r\n\r\n        <mat-expansion-panel  expanded *ngIf=\"busqueda\">\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    <h4>Filtros de {{nivel2}}</h4>\r\n                </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n\r\n            <!--<div fxLayout=\"column\" fxLayoutAlign=\"space-between center\" class=\"text-muted\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"space-between center\" class=\"mt-2\">\r\n                    <mat-radio-button value=\"relevant\" (change)=\"orderBy($event)\">Relevancia</mat-radio-button>\r\n                    <mat-radio-button value=\"low-high\" (change)=\"orderBy($event)\">Precio: menos - más</mat-radio-button>\r\n                    <mat-radio-button value=\"high-low\" (change)=\"orderBy($event)\">Precio: más - menos</mat-radio-button>\r\n                </div>\r\n            </div>-->\r\n\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"space-between center\" class=\"text-muted mt-2\">\r\n                <h3>Organizar por {{typeProductFilter}}: </h3>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-brands mt-2\">\r\n                    <button fxFlex=\"46\" mat-raised-button *ngFor=\"let section of sections\"\r\n                            (click)=\"addCategoriteFilter(section.name, $event)\"\r\n                            [class.selected]=\"!section.selected\" class=\"bg-color-jd btn-section thin-button\"\r\n                            style=\"height: auto !important; width: auto !important;padding: 4px;white-space:pre-line;\">\r\n                        {{section.name}}\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"space-between center\" class=\"text-muted mt-2\"\r\n                 *ngFor=\"let filter of listFilters\">\r\n                <h3>Por {{filter.name}}: </h3>\r\n                <div *ngIf=\"filter.type == 1\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\"\r\n                     class=\"filter-brands mt-2\" style=\"width: 100%\">\r\n                    <button fxFlex=\"46\" mat-raised-button *ngFor=\"let value of filter.values\" id=\"btn2-{{value.name}}\"\r\n                            (click)=\"addCharacteristicFilter(value.id, filter, $event)\"\r\n                            [class.selected]=\"!value.selected\" class=\"bg-color-jd thin-button\"\r\n                            [ngClass]=\"'tipo-'+filter.characteristic\" style=\"width: auto; padding: 4px;\">\r\n                        {{value.name}}\r\n                    </button>\r\n                </div>\r\n\r\n                <div *ngIf=\"filter.type == 2\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\"\r\n                     class=\"filter-brands mt-2\" style=\"width: 100%\">\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted\">\r\n                        <span>De: <b>{{activeFilters['range'][filter.characteristic] | number : '1.1-1'}} {{filter.measure}} </b> o menos</span>\r\n                    </div>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"filter-price\" style=\"width: 100%;\">\r\n                        <mat-slider step=\"{{(filter.valueMax-filter.valueMin)/10}}\"\r\n                                    (change)=\"getChangeRange(filter.characteristic)\" color=\"primary\"\r\n                                    max=\"{{filter.valueMax}}\" min=\"{{filter.valueMin}}\" thumb-label=\"true\"\r\n                                    [(ngModel)]=\"activeFilters['range'][filter.characteristic]\"\r\n                                    style=\"width: 100%\">\r\n\r\n                        </mat-slider>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"filter.type == 3\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\"\r\n                     class=\"filter-brands mt-2\" style=\"width: 100%\">\r\n                    <button fxFlex=\"46\" mat-raised-button (click)=\"addCharacteristicFilter(1, filter, $event)\"\r\n                            [ngClass]=\"'tipo-'+filter.characteristic\" [class.selected]=\"!filter.selected\"\r\n                            class=\"bg-color-jd btn-section\" style=\"width: auto; padding: 4px;\">\r\n                        Si\r\n                    </button>\r\n                    <button fxFlex=\"46\" mat-raised-button (click)=\"addCharacteristicFilter(0, filter, $event)\"\r\n                            [ngClass]=\"'tipo-'+filter.characteristic\" [class.selected]=\"!filter.selected\"\r\n                            class=\"bg-color-jd btn-section\" style=\"width: auto; padding: 4px;\">\r\n                        No\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n        </mat-expansion-panel>\r\n\r\n\r\n        <app-sections-side></app-sections-side>\r\n\r\n    </mat-sidenav>\r\n\r\n\r\n    <mat-sidenav-content class=\"all-products\" ngClass.gt-sm=\"p-left\">\r\n        <div fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign.gt-sm=\"start start\" fxLayoutAlign.sm=\"space-between center\"\r\n             class=\"description-row mat-elevation-z1 text-muted\">\r\n            <h1>{{titleProducts}}</h1>\r\n        </div>\r\n        <div *ngIf=\"busquedaEmpty != true\"  class=\"mt-1\"> </div>\r\n\r\n        <div *ngIf=\"busquedaEmpty != true\" fxLayout=\"row\" [ngStyle.gt-sm]=\"{'height':'40px'}\"  fxLayout.xs=\"column\"\r\n             fxLayoutAlign.gt-sm=\"space-between center\" fxLayoutAlign.sm=\"space-between center\"\r\n             class=\"filter-row mat-elevation-z1 text-muted\">\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" >\r\n                <h4 style=\"margin-right: 10px;color: #fff !important\">Ordenar por: </h4>\r\n                <mat-form-field>\r\n                    <mat-select class=\"mat-select-value2\" [(value)]=\"orderByOption\" (selectionChange)=\"moveToFirstPage()\">\r\n                        <mat-option *ngIf=\"textSearch !== ''\" value=\"default\">\r\n                            Defecto\r\n                        </mat-option>\r\n                        <mat-option value=\"relevant\">\r\n                            Relevancia\r\n                        </mat-option>\r\n                        <mat-option value=\"low-high\">\r\n                            Menor Precio\r\n                        </mat-option>\r\n                        <mat-option value=\"high-low\">\r\n                            Mayor Precio\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <button mat-button *ngIf=\"!sidenavOpen\" (click)=\"sidenav.toggle()\" class=\"bg-color-jd\">\r\n                Filtros y Secciones\r\n            </button>\r\n            <div style=\"color: #fff !important\">\r\n                <a mat-button [matMenuTriggerFor]=\"countsMenu\" #countsMenuTrigger=\"matMenuTrigger\">\r\n                    Mostrar {{count}}\r\n                    <mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n                </a>\r\n                <mat-menu #countsMenu=\"matMenu\" xPosition=\"before\" class=\"app-dropdown\" overlapTrigger=\"true\">\r\n                    <span (mouseleave)=\"countsMenuTrigger.closeMenu()\">\r\n                        <button mat-menu-item *ngFor=\"let count of counts\" (click)=\"changeCount(count)\">\r\n                            <span>{{count}}</span>\r\n                        </button>\r\n                    </span>\r\n                </mat-menu>\r\n                <button mat-icon-button (click)=\"changeViewType('list', 100)\">\r\n                    <mat-icon>view_list</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"changeViewType('grid', 33.3)\">\r\n                    <mat-icon>view_module</mat-icon>\r\n                </button>\r\n                <button *ngIf=\"sidenavOpen\" mat-icon-button (click)=\"changeViewType('grid', 25)\">\r\n                    <mat-icon>view_comfy</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"viewType == 'grid' && busquedaEmpty == false\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n            <div *ngFor=\"let product of products | orderBy : orderByOption | paginate: { itemsPerPage: count, currentPage: page } \"\r\n                 fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\" fxFlex.sm=\"50\" class=\"col\">\r\n                <mat-card class=\"product-item text-center\" style=\"overflow: hidden;\">\r\n                    <!--<mat-chip-list *ngIf=\"product.discount\" style=\"left: 10px;\">\r\n                        <mat-chip selected=\"true\" class=\"bg-color-oferta\">{{product.discount}}</mat-chip>\r\n                    </mat-chip-list>-->\r\n                    <a [routerLink]=\"['/catalogo/', changeStringBrand(product.brand), changeString(product.productType, product.brand, product.mpn)]\"\r\n                       class=\"image-link\">\r\n                        <div>\r\n                            <div *ngIf=\"product.discount\" class=\"ribbon ribbon-top-right\">\r\n                                <span>Oferta</span>\r\n                            </div>\r\n                            <div style=\"width: 100%; height: 231px; \">\r\n                                <img class=\"img-product\" [src]=\"product.images[0].medium\" (error)=\"handleImgError($event)\" style=\"max-height: 231px;\"\r\n                                     title=\"{{product?.productType+' '+product?.brand+' '+product?.mpn}}\" alt=\"{{product.productType+' '+product.brand+' '+product.mpn}}\">\r\n                            </div>\r\n                            <img src=\"../assets/images/otros/gratis.png\" class=\"free-delivery\">\r\n                        </div>\r\n                    </a>\r\n                    <h4 class=\"category text-muted\">{{ (appService.Data.categories | filterById : product.categoryId)?.name }}</h4>\r\n                    <a [routerLink]=\"['/catalogo/', changeStringBrand(product.brand), changeString(product.productType, product.brand, product.mpn)]\"\r\n                       class=\"title-muted text-truncate\">\r\n                        {{product.productType}}<br>\r\n                        {{product.brand}} {{product.mpn}}\r\n                    </a>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"prices\" style=\"height: 110px;\">\r\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center\" *ngIf=\"product.stock\">\r\n                            <p class=\"old-price text-muted\"><span\r\n                                    *ngIf=\"product.oldPrice\">${{product.oldPrice | number : '1.2-2'}}</span>\r\n                            </p>\r\n                            <p class=\"new-price {{product.oldPrice ? 'fn-color-jd':''}} \" style=\"color: #de1f21 !important;\">\r\n                                ${{product.newPrice | number : '1.2-2'}}\r\n                            </p>\r\n                            <div  fxLayout=\"row\" fxLayoutAlign=\"center\" style=\"margin-top: 10px; margin-bottom: 10px;\">\r\n                                <button class=\"btn-comprar\" (click)=\"addToCart(product)\" style=\"cursor: pointer\"><mat-icon class=\"mat-icon-sm m-0\">shopping_cart</mat-icon> Comprar</button>\r\n                            </div>\r\n                            <p>\r\n                                <span *ngIf=\"product?.inventory > 0\" class=\"fn-color-inStock\"><mat-icon class=\"mat-icon-sm m-0\">flash_on</mat-icon>&nbsp;Envío de volada</span>&nbsp;\r\n                            </p>\r\n                            <p>\r\n                                <span style=\"font-size: 11px; font-weight: bold; cursor: pointer;\" (click)=\"openDeliveryTermsDialog()\">*Envio gratis a partir de $3,000 de compra</span>\r\n                            </p>\r\n                            <p>\r\n                                <span style=\"font-size: 12px; font-weight: bold; cursor: pointer;\" (click)=\"openDeliveryTermsDialog()\">*Consulte condiciones.</span>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <p class=\"py-1 text-muted lh\" [style.height]=\"viewCol == 25 ? '74px' : '94px'\"\r\n                       matTooltip=\"{{product.description}}\">{{ product.description | truncate :90 }} </p>\r\n\r\n                    <div class=\"divider mt-2\"></div>\r\n                    <div class=\"icons\">\r\n                        <app-controls [product]=\"product\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                    </div>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"prices\">\r\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                            <p class=\"legal-text\">*Sujeto a existencias.</p>\r\n                            <p class=\"legal-text\">*Precios sujetos a cambio sin previo aviso.</p>\r\n                        </div>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"viewType == 'list' && busquedaEmpty == false\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n            <div *ngFor=\"let product of products | orderBy : orderByOption | paginate: { itemsPerPage: count, currentPage: page }\"\r\n                 fxFlex=\"100\" class=\"col\">\r\n                <mat-card class=\"product-item\" style=\"overflow: hidden;\">\r\n                    <div fxLayout=\"row wrap\">\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"p-2\">\r\n                            <a [routerLink]=\"['/catalogo/', changeStringBrand(product.brand), changeString(product.productType, product.brand, product.mpn)]\"\r\n                               class=\"image-link\">\r\n                                <div style=\"position: relative; overflow: hidden;\">\r\n                                    <div *ngIf=\"product.discount\" class=\"ribbon ribbon-top-right\">\r\n                                        <span>Oferta</span>\r\n                                    </div>\r\n                                    <img [src]=\"product.images[0].medium\" title=\"{{product?.productType+' '+product?.brand+' '+product?.mpn}}\"\r\n                                         alt=\"{{product.productType+' '+product.brand+' '+product.mpn}}\" (error)=\"handleImgError($event)\">\r\n                                    <div style=\"position: absolute; right: 0px; bottom: 0px;\">\r\n                                        <img src=\"../assets/images/otros/gratis.png\">\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"p-2\">\r\n                            <h4 class=\"category text-muted\">{{ (appService.Data.categories | filterById : product.categoryId)?.name }}</h4>\r\n                            <a [routerLink]=\"['/catalogo/', changeStringBrand(product.brand), changeString(product.productType, product.brand, product.mpn)]\"\r\n                               class=\"title\">\r\n                                <h2 style=\"font-weight: 500; font-size: 18px;\">\r\n                                    {{product.productType}}<br>\r\n                                    {{product.brand}} {{product.mpn}}\r\n                                </h2>\r\n                            </a>\r\n                            <p class=\"py-1 text-muted lh\">{{product.description}}</p>\r\n                            <p><span *ngIf=\"product?.inventory > 0\" class=\"fn-color-inStock\"><mat-icon\r\n                                    class=\"mat-icon-sm m-0\">flash_on</mat-icon>&nbsp;Envío de volada</span>&nbsp;\r\n                            </p>\r\n                            <p>\r\n                                <span style=\"font-size: 11px; font-weight: bold; cursor: pointer;\" (click)=\"openDeliveryTermsDialog()\">*Envio gratis a partir de $3,000 de compra</span>\r\n                            </p>\r\n                            <p>\r\n                                <span style=\"font-size: 12px; font-weight: bold; cursor: pointer;\" (click)=\"openDeliveryTermsDialog()\">*Consulte condiciones.</span>\r\n                            </p>\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start\" class=\"prices\">\r\n                                <div fxLayout=\"column\" fxLayoutAlign=\"start start\" *ngIf=\"product.stock\">\r\n                                    <p class=\"old-price text-muted\"><span\r\n                                            *ngIf=\"product.oldPrice\">${{product.oldPrice | number : '1.2-2'}}</span></p>\r\n                                    <p class=\"new-price\" style=\"color: #de1f21 !important;\">${{product.newPrice | number : '1.2-2'}}</p>\r\n                                    <p class=\"legal-text\">*Sujeto a existencias.</p>\r\n                                    <p class=\"legal-text\">*Precios sujetos a cambio sin previo aviso.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"divider\"></div>\r\n                            <div class=\"icons\">\r\n                                <app-controls [product]=\"product\"\r\n                                              (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"busqueda == false && busquedaEmpty == true\" >\r\n            <mat-card *ngIf=\"searchSend == false\"  fxLayout=\"row\"  fxLayout.lt-md=\"row wrap\" class=\"p-0 text-center\">\r\n                <div fxFlex=\"100\" fxFlex.sm=\"100\" ngClass.xs=\"mt-2\" class=\"contact-information\">\r\n                    <h1 class=\"mt-1\">¿No encontraste tu producto?</h1>\r\n                    <h2 class=\"mt-1\">Comunícate al:</h2>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"prices\">\r\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"text-center\" style=\"font-size: 24px\">\r\n                            <p class=\"mt-1\"><mat-icon style=\"font-size: 25px;\">call</mat-icon>&nbsp;800 212 9225</p>\r\n                            <p><fa-icon [icon]=\"faWhatsapp\" style=\"font-size: 25px;\"></fa-icon>&nbsp;55 5185 7805</p>\r\n                            <br>\r\n                            <p> Horario de atención: 9am a 6pm</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.sm=\"100\" ngClass.xs=\"mt-2\" ngClass.sm=\"mt-3\">\r\n                    <h1 class=\"mt-2\">Nosotros te llamamos, ingresa tus datos.</h1>\r\n                    <div class=\"m-0 divider\"></div>\r\n                    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitTeLlamamos(form.value)\" fxLayout=\"row wrap\">\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1 mt-2\">\r\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                <mat-label>Nombre Completo</mat-label>\r\n                                <input matInput placeholder=\"Tu nombre\" formControlName=\"nombre\" required>\r\n                                <mat-error *ngIf=\"form.controls.nombre.errors?.required\">\r\n                                    El nombre es obligatorio\r\n                                </mat-error>\r\n                                <mat-error *ngIf=\"form.controls.nombre.hasError('minlength')\">\r\n                                    Es un nombre muy corto, mínimo 4 caracteres\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"px-1 mt-2\">\r\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                <mat-label>Teléfono</mat-label>\r\n                                <input matInput placeholder=\"Tu teléfono\" formControlName=\"telefono\" maxlength=\"10\" required>\r\n                                <mat-error *ngIf=\"form.controls.telefono.errors?.required\">\r\n                                    El teléfono es obligatorio\r\n                                </mat-error>\r\n                                <mat-error *ngIf=\"form.controls.telefono.hasError('pattern')\">\r\n                                    El teléfono es invalido, ingresa números\r\n                                </mat-error>\r\n                                <mat-error *ngIf=\"form.controls.telefono.hasError('minlength')\">\r\n                                    El teléfono es muy corto, son 10 números\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div fxFlex=\"100\" class=\"px-1 mt-1\">\r\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                <mat-label>Sus comentarios</mat-label>\r\n                                <textarea matInput placeholder=\"Tus comentarios\" formControlName=\"comentario\" rows=\"3\"></textarea>\r\n                                <mat-error *ngIf=\"form.controls.comentario.hasError('minlength')\">Mínimo 4 caracteres</mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div fxFlex=\"100\" class=\"mt-1 text-center w-100\" style=\"margin-bottom: 10px\">\r\n                            <button mat-raised-button class=\"bg-color-jd\" type=\"submit\">Enviar</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </mat-card>\r\n            <mat-card *ngIf=\"searchSend == true\" class=\"text-center\">\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"prices\">\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"text-center\">\r\n                        <h2 class=\"mt-1\">Jardepot agradece tu confianza.</h2>\r\n                        <div class=\"divider\"></div>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"mt-1\" >Nuestro equipo responderá tu solicitud a la brevedad.</p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"mt-1\">Puedes contactarnos a través del correo: ventas@jardepot.com, o por el telefono al (777) 399 08 09</p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"mt-1\">en un horario de Lunes a Viernes de 9am a 6pm y Sábados de 9am a 2pm.</p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"mt-2\">Será un gusto atenderte.</p>\r\n                        <div fxFlex=\"100\" class=\"mt-1 text-center w-100\">\r\n                            <a [routerLink]=\"['/']\" mat-raised-button class=\"bg-color-jd\">\r\n                                Regresar al Inicio\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"mt-2\"></div>\r\n                    </div>\r\n                </div>\r\n            </mat-card>\r\n        </div>\r\n\r\n        <div *ngIf=\"products.length > 0\" fxLayout=\"row wrap\">\r\n            <div fxFlex=\"100\">\r\n                <mat-card class=\"p-0 text-center\">\r\n                    <pagination-controls class=\"product-pagination\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"mt-2\"></div>\r\n\r\n        <div *ngIf=\"busquedaEmpty != true && descriptionNivel2 != ''\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign.gt-sm=\"start start\" fxLayoutAlign.sm=\"space-between center\"\r\n             class=\"description-row mat-elevation-z1 text-muted\">\r\n            <div class=\"divider mt-2\"></div>\r\n            <div [innerHTML]=\"descriptionNivel2 | sanitizeHtml\">\r\n            </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row wrap\" class=\"info-bar\" fxShow=\"\" fxHide.lt-md=\"\">\r\n            <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-icon class=\"mat-icon-xlg m-0 fn-color-jd mt-2\">build</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p style=\"color: rgba(0, 0, 0, 0.87) !important;\">Garantía y Refacciones</p>\r\n                        <span class=\"text-muted m-0\">Todos nuestros equipos cuentan con garantía, contra defectos de fábrica y contamos con las refacciones originales de los mismos.</span>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-icon class=\"mat-icon-xlg fn-color-jd mt-2\">local_shipping</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p style=\"color: rgba(0, 0, 0, 0.87) !important;\">Envío Gratis</p>\r\n                        <!--                <span class=\"text-muted m-0\" title=\"{{text}}\" [innerHTML]=\"text  | truncate :120 \"></span>-->\r\n                        <span class=\"text-muted m-0\">En compras superiores a $3,000 pesos.</span>\r\n                        <p> <a href=\"javascript: void(0)\" (click)=\"openDeliveryTermsDialog()\" style=\"color: rgba(0, 0, 0, 0.54) !important;\">*Condiciones</a></p>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-icon class=\"mat-icon-xlg m-0 fn-color-jd mt-2\">monetization_on</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p style=\"color: rgba(0, 0, 0, 0.87) !important;\">Paga Seguro</p>\r\n                        <!--                <span class=\"text-muted m-0\">Aceptamos pagos mediante PayPal, Mercado Pago, transferencia y Deposito Bancario.</span>-->\r\n                        <span class=\"text-muted m-0\">Aceptamos pagos mediante PayPal, transferencia y Deposito Bancario.</span>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-icon class=\"mat-icon-xlg m-0 fn-color-jd mt-2\">perm_phone_msg</mat-icon>\r\n                    <div class=\"content\">\r\n                        <p style=\"color: rgba(0, 0, 0, 0.87) !important;\">Soporte y Asesoría</p>\r\n                        <span class=\"text-muted m-0\">¿Dudas sobre tu equipo?, nuestros ingenieros te pueden apoyar por teléfono, Whatsapp o en nuestras tiendas.</span>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n        <app-brands-carousel [brands]=\"distributions\"></app-brands-carousel>\r\n\r\n    </mat-sidenav-content>\r\n\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/pages/products/product/product-zoom/product-zoom.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/products/product/product-zoom/product-zoom.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".zoom-dialog .mat-dialog-container {\n  overflow: visible !important;\n}\n.zoom-dialog .mat-dialog-container .controls {\n  position: relative;\n}\n.zoom-dialog .mat-dialog-container .controls button {\n  position: absolute;\n  top: -44px;\n}\n.zoom-dialog .mat-dialog-container .controls .zoom-in {\n  right: 44px;\n}\n.zoom-dialog .mat-dialog-container .controls .zoom-out {\n  right: 0;\n}\n.zoom-dialog .mat-dialog-container .controls .close {\n  right: -44px;\n}\n.zoom-dialog .mat-dialog-container .viewer {\n  width: 100%;\n  text-align: center;\n}\n.zoom-dialog .mat-dialog-container .viewer img {\n  max-width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC9wcm9kdWN0LXpvb20vQzpcXHhhbXBwXFxodGRvY3NcXGVtcG9yaXVtLXNzci9zcmNcXGFwcFxccGFnZXNcXHByb2R1Y3RzXFxwcm9kdWN0XFxwcm9kdWN0LXpvb21cXHByb2R1Y3Qtem9vbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC9wcm9kdWN0LXpvb20vcHJvZHVjdC16b29tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksNEJBQUE7QUNBUjtBRENRO0VBQ0ksa0JBQUE7QUNDWjtBREFZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDRWhCO0FEQVk7RUFDSSxXQUFBO0FDRWhCO0FEQVk7RUFDSSxRQUFBO0FDRWhCO0FEQVk7RUFDSSxZQUFBO0FDRWhCO0FEQ1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNDWjtBREFZO0VBQ0ksY0FBQTtBQ0VoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC16b29tL3Byb2R1Y3Qtem9vbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi56b29tLWRpYWxvZ3tcclxuICAgIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5jb250cm9sc3tcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC00NHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC56b29tLWlue1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQ0cHg7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC56b29tLW91dHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2xvc2V7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTQ0cHg7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52aWV3ZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxufSIsIi56b29tLWRpYWxvZyAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuLnpvb20tZGlhbG9nIC5tYXQtZGlhbG9nLWNvbnRhaW5lciAuY29udHJvbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uem9vbS1kaWFsb2cgLm1hdC1kaWFsb2ctY29udGFpbmVyIC5jb250cm9scyBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTQ0cHg7XG59XG4uem9vbS1kaWFsb2cgLm1hdC1kaWFsb2ctY29udGFpbmVyIC5jb250cm9scyAuem9vbS1pbiB7XG4gIHJpZ2h0OiA0NHB4O1xufVxuLnpvb20tZGlhbG9nIC5tYXQtZGlhbG9nLWNvbnRhaW5lciAuY29udHJvbHMgLnpvb20tb3V0IHtcbiAgcmlnaHQ6IDA7XG59XG4uem9vbS1kaWFsb2cgLm1hdC1kaWFsb2ctY29udGFpbmVyIC5jb250cm9scyAuY2xvc2Uge1xuICByaWdodDogLTQ0cHg7XG59XG4uem9vbS1kaWFsb2cgLm1hdC1kaWFsb2ctY29udGFpbmVyIC52aWV3ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnpvb20tZGlhbG9nIC5tYXQtZGlhbG9nLWNvbnRhaW5lciAudmlld2VyIGltZyB7XG4gIG1heC13aWR0aDogNjAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/products/product/product-zoom/product-zoom.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/products/product/product-zoom/product-zoom.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductZoomComponent", function() { return ProductZoomComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let ProductZoomComponent = class ProductZoomComponent {
    constructor(dialogRef, image) {
        this.dialogRef = dialogRef;
        this.image = image;
        this.count = 10;
        this.maxWidth = 60;
    }
    ngOnInit() { }
    close() {
        this.dialogRef.close();
    }
    zoomIn() {
        if (this.count < 60) {
            this.maxWidth = this.maxWidth + this.count;
            this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
            this.count = this.count + 10;
        }
    }
    zoomOut() {
        if (this.count > 10) {
            this.count = this.count - 10;
            this.maxWidth = this.maxWidth - this.count;
            this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
        }
    }
};
ProductZoomComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('zoomImage', { static: true }),
    __metadata("design:type", Object)
], ProductZoomComponent.prototype, "zoomImage", void 0);
ProductZoomComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-product-zoom',
        template: __webpack_require__(/*! raw-loader!./product-zoom.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/products/product/product-zoom/product-zoom.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./product-zoom.component.scss */ "./src/app/pages/products/product/product-zoom/product-zoom.component.scss")]
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
], ProductZoomComponent);



/***/ }),

/***/ "./src/app/pages/products/product/product.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/products/product/product.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-sidenav {\n  width: 280px;\n  border: 0 !important;\n}\n.filter-sidenav .mat-expansion-panel-header-title {\n  text-transform: uppercase;\n}\n.filter-row {\n  background: #fff;\n  padding: 8px 12px;\n}\n.all-products {\n  min-height: 400px;\n  padding: 2px;\n  overflow: hidden;\n}\n.all-products.p-left {\n  padding-left: 16px;\n}\n.products-wrapper {\n  margin: 8px -8px;\n}\n.products-wrapper .col {\n  padding: 8px;\n}\n.categories-wrapper {\n  position: relative;\n  max-height: 300px;\n}\n.mat-card.product-image {\n  padding: 6px;\n  text-align: center;\n}\n.mat-card.product-image button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 99;\n}\n.mat-card.product-image img {\n  max-width: 100%;\n}\n.mat-card.product-image .mat-chip-list {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  pointer-events: none;\n}\n.small-carousel {\n  margin-top: 8px;\n}\n.small-carousel .swiper-container {\n  padding: 2px;\n}\n.small-carousel .swiper-container .swiper-slide {\n  text-align: center;\n  min-width: 83px;\n}\n.small-carousel .swiper-container .swiper-slide img {\n  max-width: 100%;\n}\n.small-carousel .swiper-button-next.swiper-button-disabled,\n.small-carousel .swiper-button-prev.swiper-button-disabled {\n  opacity: 0;\n}\n.small-carousel .swiper-button-prev {\n  left: -10px;\n}\n.small-carousel .swiper-button-next {\n  right: -10px;\n}\n.mat-card.zoom-viewer {\n  position: absolute;\n  display: none;\n  background-repeat: no-repeat;\n  padding: 8px;\n  z-index: 99;\n}\n.mt-16 {\n  margin-top: 16px;\n}\n.details button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px;\n}\n.mat-list.reviews .mat-list-item .mat-list-avatar.review-author {\n  width: 80px;\n  height: 80px;\n}\n.mat-list.reviews .mat-list-item .mat-line.text {\n  white-space: unset;\n  font-style: italic;\n  margin: 10px 0;\n}\n.full-desc {\n  padding: 30px 40px;\n}\n.filter-sidenav {\n  width: 280px;\n  border: 0 !important;\n}\n.filter-sidenav .mat-expansion-panel-header-title {\n  text-transform: uppercase;\n}\n.shopping-area {\n  padding: 10px;\n  /*-webkit-box-shadow: -9px 8px 15px -1px rgba(0,0,0,0.75);\n  -moz-box-shadow: -9px 8px 15px -1px rgba(0,0,0,0.75);\n  box-shadow: -9px 8px 15px -1px rgba(0,0,0,0.75);*/\n}\n.text-bold-tiny {\n  font-weight: bold;\n  font-size: 12px;\n}\n@media (min-width: 1280px) {\n  .mat-card.product-image img {\n    cursor: zoom-in;\n    cursor: url('zoom.svg') 10 10, zoom-in;\n  }\n}\n.fn-color-inStock {\n  color: #15a225 !important;\n  font-weight: bold;\n  font-size: 20px;\n}\n.ribbon span {\n  position: absolute;\n  display: block;\n  width: 225px;\n  padding: 5px 0;\n  moz-box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);\n  -khtml-box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);\n  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);\n  -o-box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);\n  color: #fff;\n  font-size: 20px;\n  text-align: center;\n  background-color: #de1f21 !important;\n  padding: 0;\n  font-weight: 700;\n}\n.ribbon-top-right span {\n  left: -70px;\n  top: 25px;\n  transform: rotate(-45deg);\n}\n.free-delivery {\n  width: 90px;\n  position: absolute;\n  bottom: 0;\n  right: 0px;\n}\nmat-sidenav-content {\n  width: 80%;\n  margin-left: 0 !important;\n  flex: 1 1 auto;\n  padding-left: 10px;\n}\nmat-sidenav {\n  position: absolute;\n  flex: 0 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC9DOlxceGFtcHBcXGh0ZG9jc1xcZW1wb3JpdW0tc3NyL3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdHNcXHByb2R1Y3RcXHByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQUk7RUFDSSx5QkFBQTtBQ0VSO0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDRUo7QURBQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDR0o7QURGSTtFQUNJLGtCQUFBO0FDSVI7QURBQTtFQUNJLGdCQUFBO0FDR0o7QURGSTtFQUNJLFlBQUE7QUNJUjtBREFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0dKO0FEQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNHSjtBREZJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNJUjtBREZJO0VBQ0ksZUFBQTtBQ0lSO0FERkk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUNJUjtBREFBO0VBQ0ksZUFBQTtBQ0dKO0FERkk7RUFDSSxZQUFBO0FDSVI7QURIUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0taO0FESlk7RUFDSSxlQUFBO0FDTWhCO0FERkk7O0VBRUksVUFBQTtBQ0lSO0FERkk7RUFDSSxXQUFBO0FDSVI7QURGSTtFQUNJLFlBQUE7QUNJUjtBREFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0dKO0FEQUE7RUFDSSxnQkFBQTtBQ0dKO0FEQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDR0o7QURDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRVI7QURDQTtFQUNJLGtCQUFBO0FDRUo7QURBQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtBQ0dKO0FERkk7RUFDSSx5QkFBQTtBQ0lSO0FEQUE7RUFFSSxhQUFBO0VBQ0E7O21EQUFBO0FDSUo7QURDQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0VKO0FEQ0E7RUFDSTtJQUNJLGVBQUE7SUFDQSxzQ0FBQTtFQ0VOO0FBQ0Y7QURDQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7QURDQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7RUFDQSw2Q0FBQTtFQUNBLDhDQUFBO0VBQ0EseUNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBRENBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQ0VKO0FEQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0VKO0FEQ0E7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLXNpZGVuYXZ7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxufVxyXG4uZmlsdGVyLXJvd3tcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxufVxyXG4uYWxsLXByb2R1Y3Rze1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgJi5wLWxlZnR7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZHVjdHMtd3JhcHBlcntcclxuICAgIG1hcmdpbjogOHB4IC04cHg7XHJcbiAgICAuY29se1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhdGVnb3JpZXMtd3JhcHBlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQucHJvZHVjdC1pbWFnZSB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubWF0LWNoaXAtbGlzdHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zbWFsbC1jYXJvdXNlbHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIC5zd2lwZXItY29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAuc3dpcGVyLXNsaWRle1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogODNweDtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkLFxyXG4gICAgLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWRpc2FibGVke1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2e1xyXG4gICAgICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1idXR0b24tbmV4dHtcclxuICAgICAgICByaWdodDogLTEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtY2FyZC56b29tLXZpZXdlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgei1pbmRleDogOTk7XHJcbn1cclxuXHJcbi5tdC0xNntcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5kZXRhaWxzIGJ1dHRvbntcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1pbi13aWR0aDogMzZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5tYXQtbGlzdC5yZXZpZXdze1xyXG4gICAgLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWF2YXRhci5yZXZpZXctYXV0aG9ye1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZS50ZXh0e1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB9XHJcbn1cclxuLmZ1bGwtZGVzY3tcclxuICAgIHBhZGRpbmc6IDMwcHggNDBweDtcclxufVxyXG4uZmlsdGVyLXNpZGVuYXZ7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxufVxyXG5cclxuLnNob3BwaW5nLWFyZWF7XHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvKi13ZWJraXQtYm94LXNoYWRvdzogLTlweCA4cHggMTVweCAtMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IC05cHggOHB4IDE1cHggLTFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogLTlweCA4cHggMTVweCAtMXB4IHJnYmEoMCwwLDAsMC43NSk7Ki9cclxufVxyXG5cclxuLnRleHQtYm9sZC10aW55e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC5tYXQtY2FyZC5wcm9kdWN0LWltYWdlIGltZ3tcclxuICAgICAgICBjdXJzb3I6IHpvb20taW47XHJcbiAgICAgICAgY3Vyc29yOnVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vdGhlcnMvem9vbS5zdmcnKSAxMCAxMCwgem9vbS1pbjtcclxuICAgIH1cclxufVxyXG5cclxuLmZuLWNvbG9yLWluU3RvY2t7XHJcbiAgICBjb2xvcjogIzE1YTIyNSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnJpYmJvbiBzcGFue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjI1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIG1vei1ib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgLWtodG1sLWJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLDAsMCwuNik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLDAsMCwuNik7XHJcbiAgICAtby1ib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUxZjIxICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnJpYmJvbi10b3AtcmlnaHQgc3BhbiB7XHJcbiAgICBsZWZ0OiAtNzBweDtcclxuICAgIHRvcDogMjVweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi5mcmVlLWRlbGl2ZXJ5e1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMHB4O1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZsZXg6IDAgMSBhdXRvO1xyXG59XHJcbiIsIi5maWx0ZXItc2lkZW5hdiB7XG4gIHdpZHRoOiAyODBweDtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG4uZmlsdGVyLXNpZGVuYXYgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmZpbHRlci1yb3cge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbn1cblxuLmFsbC1wcm9kdWN0cyB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYWxsLXByb2R1Y3RzLnAtbGVmdCB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLnByb2R1Y3RzLXdyYXBwZXIge1xuICBtYXJnaW46IDhweCAtOHB4O1xufVxuLnByb2R1Y3RzLXdyYXBwZXIgLmNvbCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmNhdGVnb3JpZXMtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG59XG5cbi5tYXQtY2FyZC5wcm9kdWN0LWltYWdlIHtcbiAgcGFkZGluZzogNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWF0LWNhcmQucHJvZHVjdC1pbWFnZSBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5O1xufVxuLm1hdC1jYXJkLnByb2R1Y3QtaW1hZ2UgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLm1hdC1jYXJkLnByb2R1Y3QtaW1hZ2UgLm1hdC1jaGlwLWxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zbWFsbC1jYXJvdXNlbCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5zbWFsbC1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJweDtcbn1cbi5zbWFsbC1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLXNsaWRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4td2lkdGg6IDgzcHg7XG59XG4uc21hbGwtY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1zbGlkZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uc21hbGwtY2Fyb3VzZWwgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkLFxuLnNtYWxsLWNhcm91c2VsIC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDA7XG59XG4uc21hbGwtY2Fyb3VzZWwgLnN3aXBlci1idXR0b24tcHJldiB7XG4gIGxlZnQ6IC0xMHB4O1xufVxuLnNtYWxsLWNhcm91c2VsIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICByaWdodDogLTEwcHg7XG59XG5cbi5tYXQtY2FyZC56b29tLXZpZXdlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZzogOHB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuLm10LTE2IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmRldGFpbHMgYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgbWluLXdpZHRoOiAzNnB4O1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4ubWF0LWxpc3QucmV2aWV3cyAubWF0LWxpc3QtaXRlbSAubWF0LWxpc3QtYXZhdGFyLnJldmlldy1hdXRob3Ige1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLm1hdC1saXN0LnJldmlld3MgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lLnRleHQge1xuICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5mdWxsLWRlc2Mge1xuICBwYWRkaW5nOiAzMHB4IDQwcHg7XG59XG5cbi5maWx0ZXItc2lkZW5hdiB7XG4gIHdpZHRoOiAyODBweDtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG4uZmlsdGVyLXNpZGVuYXYgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNob3BwaW5nLWFyZWEge1xuICBwYWRkaW5nOiAxMHB4O1xuICAvKi13ZWJraXQtYm94LXNoYWRvdzogLTlweCA4cHggMTVweCAtMXB4IHJnYmEoMCwwLDAsMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogLTlweCA4cHggMTVweCAtMXB4IHJnYmEoMCwwLDAsMC43NSk7XG4gIGJveC1zaGFkb3c6IC05cHggOHB4IDE1cHggLTFweCByZ2JhKDAsMCwwLDAuNzUpOyovXG59XG5cbi50ZXh0LWJvbGQtdGlueSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLm1hdC1jYXJkLnByb2R1Y3QtaW1hZ2UgaW1nIHtcbiAgICBjdXJzb3I6IHpvb20taW47XG4gICAgY3Vyc29yOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL290aGVycy96b29tLnN2Z1wiKSAxMCAxMCwgem9vbS1pbjtcbiAgfVxufVxuLmZuLWNvbG9yLWluU3RvY2sge1xuICBjb2xvcjogIzE1YTIyNSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucmliYm9uIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjI1cHg7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBtb3otYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIC1raHRtbC1ib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgLW8tYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlMWYyMSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ucmliYm9uLXRvcC1yaWdodCBzcGFuIHtcbiAgbGVmdDogLTcwcHg7XG4gIHRvcDogMjVweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmZyZWUtZGVsaXZlcnkge1xuICB3aWR0aDogOTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmxleDogMCAxIGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/products/product/product.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/products/product/product.component.ts ***!
  \*************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../theme/utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
/* harmony import */ var _product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-zoom/product-zoom.component */ "./src/app/pages/products/product/product-zoom/product-zoom.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/dialog/dialog.component */ "./src/app/shared/dialog/dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











let ProductComponent = class ProductComponent {
    constructor(appService, activatedRoute, dialog, formBuilder, cd, router, title, meta) {
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.cd = cd;
        this.router = router;
        this.title = title;
        this.meta = meta;
        this.sidenavOpen = true;
        this.config = {};
        this.config2 = {};
        this.brands = [];
        this.productTypes = [];
        this.additional = [];
        this.sendComment = false;
        this.faWhatsapp = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faWhatsapp"];
        this.distributions = [];
    }
    ngOnInit() {
        this.window = (typeof window !== "undefined") ? window : null;
        this.sub = this.activatedRoute.params.subscribe(params => {
            setTimeout(() => {
                this.scrollToTop();
            }, 300);
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
        this.createForm();
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
    onWindowResize() {
        (this.window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    }
    /*public getBrands() {
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
    }*/
    getRelatedProducts(product) {
        this.appService.getProductsRelated(product).subscribe(data => {
            this.relatedProducts = data;
            this.refreshPage();
        });
    }
    getProductByName(product) {
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
            this.meta.updateTag({ name: 'description', content: this.product.metaDescription.substr(0, 150) });
            this.meta.updateTag({ name: 'keywords', content: this.product.keywords });
            this.title.setTitle(this.product.metaTitle.substr(0, 70));
            this.refreshPage();
        });
    }
    refreshPage() {
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
    selectImage(image) {
        this.image = image.medium;
        this.zoomImage = image.big;
    }
    onMouseMove(e) {
        if (this.window.innerWidth >= 1280) {
            let image, offsetX, offsetY, x, y, zoomer;
            image = e.currentTarget;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            x = offsetX / image.offsetWidth * 100;
            y = offsetY / image.offsetHeight * 100;
            zoomer = this.zoomViewer.nativeElement.children[0];
            if (zoomer) {
                zoomer.style.backgroundImage = 'url(' + image.currentSrc + ')';
                zoomer.style.backgroundPosition = x + '% ' + y + '%';
                zoomer.style.display = 'block';
                zoomer.style.height = image.height + 'px';
                zoomer.style.width = image.width + 'px';
            }
        }
    }
    onMouseLeave(event) {
        this.zoomViewer.nativeElement.children[0].style.display = 'none';
    }
    openZoomViewer() {
        this.dialog.open(_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_7__["ProductZoomComponent"], {
            data: this.zoomImage,
            panelClass: 'zoom-dialog'
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    createForm() {
        this.form = this.formBuilder.group({
            comentario: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)],
            nombre: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])],
            telefono: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')])],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__["emailValidator"]])],
            whatsapp: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')])],
            producto: [this.productName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    onSubmit(values) {
        if (this.form.valid) {
            this.appService.enviarBusqueda(values, '').subscribe(data => {
                const res = JSON.parse(JSON.stringify(data));
                this.sendComment = res;
                this.form.reset();
                this.createForm();
            });
        }
        else {
            this.sendComment = false;
        }
    }
    handleImgError(ev) {
        const source = ev.srcElement;
        const imgSrc = `assets/images/productos/generico2.jpg`;
        source.src = imgSrc;
    }
    openDeliveryTermsDialog() {
        const text = 'Los envíos gratuitos que ofrece JarDepot son a la cobertura terrestre normal de las paqueterías con las que tenemos convenio (ODM).<br>' +
            'NO aplica a zonas extendidas (En extra coberturas se le indicará la diferencia a pagar para su consideración).<br>' +
            'NO aplica con otras paqueterías<br>' +
            'El tiempo de entrega estimado y sujeto a existencias es de 2 a 6 días hábiles, (Mínimo/Máximo) contados a partir de las siguientes ' +
            '24 hrs de que su depósito se ha verificado y de recibir su correo con los datos completos para facturar y enviar su producto.<br><br>';
        const dialogRef = this.dialog.open(_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            panelClass: 'generic-dialog',
            direction: 'ltr'
        });
        dialogRef.componentInstance.title = 'Condiciones de envíos Gratis:';
        dialogRef.componentInstance.body = text;
    }
    scrollToTop() {
        if (this.window) {
            const scrollDuration = 20;
            const scrollStep = -this.window.pageYOffset / (scrollDuration / 20);
            const scrollInterval = setInterval(() => {
                if (this.window.pageYOffset !== 0) {
                    this.window.scrollBy(0, scrollStep);
                }
                else {
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
    getDistributions() {
        this.distributions = this.appService.getDistributions();
    }
};
ProductComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Meta"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav', { static: true }),
    __metadata("design:type", Object)
], ProductComponent.prototype, "sidenav", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('zoomViewer', { static: true }),
    __metadata("design:type", Object)
], ProductComponent.prototype, "zoomViewer", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperDirective"], { static: true }),
    __metadata("design:type", ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperDirective"])
], ProductComponent.prototype, "directiveRef", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductComponent.prototype, "onWindowResize", null);
ProductComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/products/product/product.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/pages/products/product/product.component.scss")]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Meta"]])
], ProductComponent);



/***/ }),

/***/ "./src/app/pages/products/products.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/products/products.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-sidenav {\n  width: 280px;\n  max-width: 280px !important;\n  border: 0 !important;\n}\n\n.filter-row {\n  background: #424242;\n  padding: 8px 12px;\n  color: #fff !important;\n}\n\n.description-row {\n  background: #fff;\n  padding: 8px 12px;\n}\n\n.all-products {\n  min-height: 400px;\n  padding: 2px;\n  overflow: hidden;\n}\n\n.all-products.p-left {\n  padding-left: 16px;\n}\n\n.products-wrapper {\n  margin: 8px -8px;\n}\n\n.products-wrapper .col {\n  padding: 8px;\n}\n\n.categories-wrapper {\n  position: relative;\n  max-height: 300px;\n}\n\n.filter-buttons button, .filter-buttons a {\n  min-width: 36px;\n  margin: 0 6px 10px 0;\n  padding: 0;\n}\n\n.filter-price .mat-slider-horizontal {\n  min-width: 110px;\n}\n\n.filter-brands button, .filter-brands a {\n  height: 44px;\n  min-width: 66px;\n  margin: 0 6px 10px 0;\n  padding: 0px;\n  overflow: hidden;\n}\n\n.filter-brands button img, .filter-brands a img {\n  width: 66px;\n}\n\n.thin-button {\n  height: 22px !important;\n  line-height: 15px !important;\n}\n\n.fn-color-inStock {\n  color: #15a225 !important;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.legal-text {\n  font-size: 12px;\n  font-weight: 700;\n}\n\n::ng-deep div.mat-select-value {\n  color: #fff !important;\n}\n\n::ng-deep #mat-select-0 > div > div.mat-select-arrow-wrapper {\n  color: #fff !important;\n}\n\n::ng-deep #app > app-pages > mat-sidenav-container > mat-sidenav-content > div > app-products > mat-sidenav-container > mat-sidenav-content > div.filter-row.mat-elevation-z1.text-muted.ng-star-inserted > div:nth-child(1) > mat-form-field > div > div.mat-form-field-underline {\n  background-color: #fff;\n}\n\n.ribbon span {\n  position: absolute;\n  display: block;\n  width: 225px;\n  padding: 5px 0;\n  moz-box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);\n  -khtml-box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);\n  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);\n  -o-box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);\n  color: #fff;\n  font-size: 20px;\n  text-align: center;\n  background-color: #de1f21 !important;\n  padding: 0;\n  font-weight: 700;\n}\n\n.ribbon-top-right span {\n  left: -70px;\n  top: 25px;\n  transform: rotate(-45deg);\n}\n\n.free-delivery {\n  width: 90px;\n  position: absolute;\n  top: 157px;\n  right: 0px;\n}\n\nmat-sidenav-content {\n  width: 80%;\n  margin-left: 0 !important;\n  flex: 1 1 auto;\n  padding-left: 10px;\n}\n\nmat-sidenav {\n  position: absolute;\n  flex: 0 1 auto;\n}\n\n.btn-comprar {\n  color: white;\n  background-color: #de1f21 !important;\n  border-radius: 10px;\n  width: 110px;\n  font-size: 18px;\n  border: none;\n  padding: 3px;\n  box-shadow: 1px 1px 1px #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvQzpcXHhhbXBwXFxodGRvY3NcXGVtcG9yaXVtLXNzci9zcmNcXGFwcFxccGFnZXNcXHByb2R1Y3RzXFxwcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBRElBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDREo7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDRko7O0FES0E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREdJO0VBQ0ksa0JBQUE7QUNEUjs7QURLQTtFQUNJLGdCQUFBO0FDRko7O0FER0k7RUFDSSxZQUFBO0FDRFI7O0FES0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDRko7O0FETUk7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDSFI7O0FEUUk7RUFDSSxnQkFBQTtBQ0xSOztBRFVJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1BSOztBRFFRO0VBQ0ksV0FBQTtBQ05aOztBRFdBO0VBQ0ksdUJBQUE7RUFDQSw0QkFBQTtBQ1JKOztBRFdBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNSSjs7QURXQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ1JKOztBRFdBO0VBQ0ksc0JBQUE7QUNSSjs7QURXQTtFQUNJLHNCQUFBO0FDUko7O0FEV0E7RUFFSSxzQkFBQTtBQ1RKOztBRFlBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsOENBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ1RKOztBRFlBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQ1RKOztBRFlBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNUSjs7QURZQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ1RKOztBRFlBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDVEo7O0FEWUE7RUFDSSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLXNpZGVuYXZ7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIC8vIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XHJcbiAgICAvL3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAvLyAgfVxyXG59XHJcbi5maWx0ZXItcm93e1xyXG4gICAgYmFja2dyb3VuZDogIzQyNDI0MjtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgLy9oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1yb3d7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbn1cclxuXHJcbi5hbGwtcHJvZHVjdHN7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmLnAtbGVmdHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0cy13cmFwcGVye1xyXG4gICAgbWFyZ2luOiA4cHggLThweDtcclxuICAgIC5jb2x7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2F0ZWdvcmllcy13cmFwcGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXItYnV0dG9uc3tcclxuICAgIGJ1dHRvbiwgYXtcclxuICAgICAgICBtaW4td2lkdGg6IDM2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDZweCAxMHB4IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRlci1wcmljZXtcclxuICAgIC5tYXQtc2xpZGVyLWhvcml6b250YWx7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRlci1icmFuZHN7XHJcbiAgICBidXR0b24sIGF7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNjZweDtcclxuICAgICAgICBtYXJnaW46IDAgNnB4IDEwcHggMDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRoaW4tYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm4tY29sb3ItaW5TdG9ja3tcclxuICAgIGNvbG9yOiAjMTVhMjI1ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmxlZ2FsLXRleHR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgZGl2Lm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwICNtYXQtc2VsZWN0LTAgPiBkaXYgPiBkaXYubWF0LXNlbGVjdC1hcnJvdy13cmFwcGVyIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAjYXBwID4gYXBwLXBhZ2VzID4gbWF0LXNpZGVuYXYtY29udGFpbmVyID4gbWF0LXNpZGVuYXYtY29udGVudCA+IGRpdiA+IGFwcC1wcm9kdWN0cyA+IG1hdC1zaWRlbmF2LWNvbnRhaW5lciA+IG1hdC1zaWRlbmF2LWNvbnRlbnQgPiBkaXYuZmlsdGVyLXJvdy5tYXQtZWxldmF0aW9uLXoxLnRleHQtbXV0ZWQubmctc3Rhci1pbnNlcnRlZCA+XHJcbmRpdjpudGgtY2hpbGQoMSkgPiBtYXQtZm9ybS1maWVsZCA+IGRpdiA+IGRpdi5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnJpYmJvbiBzcGFue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjI1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIG1vei1ib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgLWtodG1sLWJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLDAsMCwuNik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLDAsMCwuNik7XHJcbiAgICAtby1ib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUxZjIxICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnJpYmJvbi10b3AtcmlnaHQgc3BhbiB7XHJcbiAgICBsZWZ0OiAtNzBweDtcclxuICAgIHRvcDogMjVweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi5mcmVlLWRlbGl2ZXJ5e1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1N3B4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxubWF0LXNpZGVuYXYtY29udGVudCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxufVxyXG5cclxuLmJ0bi1jb21wcmFye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlMWYyMSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICM5OTk7XHJcbn1cclxuIiwiLmZpbHRlci1zaWRlbmF2IHtcbiAgd2lkdGg6IDI4MHB4O1xuICBtYXgtd2lkdGg6IDI4MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG4uZmlsdGVyLXJvdyB7XG4gIGJhY2tncm91bmQ6ICM0MjQyNDI7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uZGVzY3JpcHRpb24tcm93IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogOHB4IDEycHg7XG59XG5cbi5hbGwtcHJvZHVjdHMge1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgcGFkZGluZzogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmFsbC1wcm9kdWN0cy5wLWxlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cbi5wcm9kdWN0cy13cmFwcGVyIHtcbiAgbWFyZ2luOiA4cHggLThweDtcbn1cbi5wcm9kdWN0cy13cmFwcGVyIC5jb2wge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5jYXRlZ29yaWVzLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xufVxuXG4uZmlsdGVyLWJ1dHRvbnMgYnV0dG9uLCAuZmlsdGVyLWJ1dHRvbnMgYSB7XG4gIG1pbi13aWR0aDogMzZweDtcbiAgbWFyZ2luOiAwIDZweCAxMHB4IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5maWx0ZXItcHJpY2UgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gIG1pbi13aWR0aDogMTEwcHg7XG59XG5cbi5maWx0ZXItYnJhbmRzIGJ1dHRvbiwgLmZpbHRlci1icmFuZHMgYSB7XG4gIGhlaWdodDogNDRweDtcbiAgbWluLXdpZHRoOiA2NnB4O1xuICBtYXJnaW46IDAgNnB4IDEwcHggMDtcbiAgcGFkZGluZzogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZpbHRlci1icmFuZHMgYnV0dG9uIGltZywgLmZpbHRlci1icmFuZHMgYSBpbWcge1xuICB3aWR0aDogNjZweDtcbn1cblxuLnRoaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mbi1jb2xvci1pblN0b2NrIHtcbiAgY29sb3I6ICMxNWEyMjUgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmxlZ2FsLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbjo6bmctZGVlcCBkaXYubWF0LXNlbGVjdC12YWx1ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAjbWF0LXNlbGVjdC0wID4gZGl2ID4gZGl2Lm1hdC1zZWxlY3QtYXJyb3ctd3JhcHBlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAjYXBwID4gYXBwLXBhZ2VzID4gbWF0LXNpZGVuYXYtY29udGFpbmVyID4gbWF0LXNpZGVuYXYtY29udGVudCA+IGRpdiA+IGFwcC1wcm9kdWN0cyA+IG1hdC1zaWRlbmF2LWNvbnRhaW5lciA+IG1hdC1zaWRlbmF2LWNvbnRlbnQgPiBkaXYuZmlsdGVyLXJvdy5tYXQtZWxldmF0aW9uLXoxLnRleHQtbXV0ZWQubmctc3Rhci1pbnNlcnRlZCA+IGRpdjpudGgtY2hpbGQoMSkgPiBtYXQtZm9ybS1maWVsZCA+IGRpdiA+IGRpdi5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ucmliYm9uIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjI1cHg7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBtb3otYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIC1raHRtbC1ib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgLW8tYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlMWYyMSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ucmliYm9uLXRvcC1yaWdodCBzcGFuIHtcbiAgbGVmdDogLTcwcHg7XG4gIHRvcDogMjVweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmZyZWUtZGVsaXZlcnkge1xuICB3aWR0aDogOTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1N3B4O1xuICByaWdodDogMHB4O1xufVxuXG5tYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgZmxleDogMSAxIGF1dG87XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxubWF0LXNpZGVuYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsZXg6IDAgMSBhdXRvO1xufVxuXG4uYnRuLWNvbXByYXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTFmMjEgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDExMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogM3B4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjOTk5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/products-carousel/product-dialog/product-dialog.component */ "./src/app/shared/products-carousel/product-dialog/product-dialog.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/dialog/dialog.component */ "./src/app/shared/dialog/dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











let ProductsComponent = class ProductsComponent {
    constructor(appSettings, activatedRoute, appService, dialog, router, formBuilder, meta, title, snackBar) {
        this.appSettings = appSettings;
        this.activatedRoute = activatedRoute;
        this.appService = appService;
        this.dialog = dialog;
        this.router = router;
        this.formBuilder = formBuilder;
        this.meta = meta;
        this.title = title;
        this.snackBar = snackBar;
        this.busy = 1;
        this.sidenavOpen = true;
        this.viewType = 'grid';
        this.viewCol = 25;
        this.counts = [12, 24, 36];
        this.sortings = ['Más relevantes', 'Menor precio', 'Mayor precio'];
        this.products = [];
        this.brands = [];
        this.productTypes = [];
        this.additional = [];
        this.sections = [];
        this.listFilters = [];
        // ategoriesFilter probablemente no se utilizará
        this.categoriesFilter = [];
        this.orderByOption = 'relevant';
        this.activeFilters = [];
        this.busqueda = true;
        this.busquedaEmpty = false;
        this.textSearch = '';
        this.searchSend = false;
        this.faWhatsapp = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faWhatsapp"];
        this.distributions = [];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.products = [];
        this.count = this.counts[0];
        this.sort = this.sortings[0];
        this.form = this.formBuilder.group({
            comentario: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(4)])],
            nombre: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(4)])],
            telefono: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[0-9]*')])]
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
                    this.meta.updateTag({ name: 'description', content: res.result.metadescription.substr(0, 150) });
                    this.meta.updateTag({ name: 'keywords', content: res.result.keywords });
                    this.title.setTitle(res.result.metatitle.substr(0, 70));
                });
                this.titleProducts = this.nivel2;
            }
            else if (params['search'] !== undefined) {
                this.busqueda = false;
                this.busquedaEmpty = false;
                this.appService.getProductsSearch(params['search']).subscribe(data => {
                    this.textSearch = params['search'];
                    this.orderByOption = 'default';
                    // @ts-ignore
                    if (data === 'emptyProducts') {
                        this.busquedaEmpty = true;
                        this.products = [];
                    }
                    else {
                        this.products = data;
                    }
                    this.titleProducts = 'Buscaste: ' + this.textSearch;
                    this.meta.updateTag({ name: 'description', content: 'Busca los productos que necesites Jardepot' });
                    this.meta.updateTag({ name: 'keywords', content: 'Busca los productos que necesites Jardepot' });
                    this.title.setTitle('Jardepot, el lugar donde encuentras todo lo que necesitas');
                });
            }
            else {
                this.busqueda = false;
                this.appService.getProductsOffer().subscribe(data => {
                    this.meta.updateTag({ name: 'description', content: 'Busca los productos con las mejores ofertas en Jardepot' });
                    this.meta.updateTag({ name: 'keywords', content: 'Ofertas Jardepot' });
                    this.title.setTitle('Jardepot el lugar donde encuentras las mejores ofertas');
                    this.orderByOption = 'relevant';
                    // @ts-ignore
                    if (data === 'emptyProducts') {
                        this.busquedaEmpty = false;
                        this.products = [];
                        this.titleProducts = 'Sin productos en oferta: ';
                    }
                    else {
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
    addToCart(product) {
        let currentProduct = this.appService.Data.cartList.filter(item => item.id == product.id)[0];
        if (currentProduct) {
            if ((currentProduct.cartCount + 1) <= product.availibilityCount) {
                // this.busy = true;
                product.cartCount = currentProduct.cartCount + 1;
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
    handleImgError(ev) {
        const source = ev.srcElement;
        const imgSrc = `assets/images/productos/generico2.jpg`;
        source.src = imgSrc;
    }
    setTypeProductFilter($nivel1) {
        $nivel1 = $nivel1.toLowerCase();
        if ($nivel1 == "accesorios y consumibles" || $nivel1 == "equipos" || $nivel1 == "herramientas manuales" || $nivel1 == "refacciones" || $nivel1 == "fumigación") {
            this.typeProductFilter = 'marcas';
        }
        else if ($nivel1 == "marcas" || $nivel1 == "agricultura" || $nivel1 == "jardinería" || $nivel1 == "fumigación") {
            this.typeProductFilter = 'equipos';
        }
        else {
            this.typeProductFilter = '';
        }
    }
    moveToFirstPage() {
        this.page = 1;
        return;
    }
    addCategoriteFilter($section, $event) {
        if (this.activeFilters['brand'].length == 0 || this.activeFilters['brand'].length == this.sections.length) {
            var buttons = document.getElementsByClassName('btn-section');
            // @ts-ignore
            for (let button of buttons) {
                button.classList.add('selected');
            }
            this.activeFilters['brand'] = [];
            this.activeFilters['brand'].push($section);
            $event.currentTarget.classList.remove('selected');
        }
        else {
            let existCategory = this.activeFilters['brand'].filter(section => section == $section);
            if (existCategory.length > 0) {
                this.activeFilters['brand'] = this.activeFilters['brand'].filter(section => section != $section);
                $event.currentTarget.classList.add('selected');
            }
            else {
                this.activeFilters['brand'].push($section);
                $event.currentTarget.classList.remove('selected');
            }
        }
        if (this.nivel1 === 'Marcas' && this.activeFilters['brand'].length == 1) {
            this.filters(this.activeFilters['brand'][0]);
        }
        else if (this.nivel1 === 'Marcas') {
            this.listFilters = [];
            this.activeFilters['characteristic'] = [];
            this.activeFilters['range'] = [];
        }
        this.getProducts();
        this.closeSideMenu();
    }
    addCharacteristicFilter($characteristic, $filter, $event) {
        let characteristic = $filter.characteristic;
        let existFilter = this.activeFilters['characteristic'].filter(section => section.id == characteristic);
        if (existFilter.length > 0) {
            this.activeFilters['characteristic'].forEach((filter, key) => {
                if (filter.value == $characteristic && filter.id == characteristic) {
                    this.activeFilters['characteristic'].splice(key, 1);
                    $event.currentTarget.classList.add('selected');
                }
                else if (filter.id == characteristic) {
                    var buttons = document.getElementsByClassName('tipo-' + $filter.characteristic);
                    // @ts-ignore
                    for (let button of buttons) {
                        button.classList.add('selected');
                    }
                    this.activeFilters['characteristic'][key].value = $characteristic;
                    $event.currentTarget.classList.remove('selected');
                }
            });
        }
        else {
            $event.currentTarget.classList.remove('selected');
            this.activeFilters['characteristic'].push({ id: characteristic, value: $characteristic, type: $filter.type });
        }
        this.getProducts();
        this.closeSideMenu();
    }
    changeString($productType, $brand, $mpn) {
        $brand = $brand.replace(/ /g, '_').toLowerCase();
        $mpn = $mpn.replace(/-/g, '_').toLowerCase();
        $productType = $productType.replace(/ /g, '_').toLowerCase();
        return $productType + '-' + $brand + '-' + $mpn;
    }
    changeStringBrand($brand) {
        return $brand.replace(/ /g, '_').toLowerCase();
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
    getProducts() {
        if (this.busy) {
            this.busy = 0;
            let brandFilters = this.activeFilters['brand'];
            brandFilters = brandFilters.join();
            let characteristicsFilters = this.activeFilters['characteristic'];
            characteristicsFilters = JSON.stringify(characteristicsFilters);
            this.appService.getProducts(this.nivel1, this.nivel2, brandFilters, characteristicsFilters).subscribe(data => {
                this.busy = 1;
                if (brandFilters == "" && characteristicsFilters == "[]" && data.length < 1) {
                    this.router.navigate(['404']);
                }
                else {
                    this.products = data;
                }
            });
        }
    }
    getChangeRange(id) {
        this.activeFilters['characteristic'].forEach((filter, key) => {
            if (filter.id == id) {
                this.activeFilters['characteristic'][key].value = this.activeFilters['range'][id];
            }
        });
        this.getProducts();
        this.closeSideMenu();
    }
    getSectionsProducts(nivel1, nivel2) {
        this.appService.getSectionsProducts(nivel1, nivel2).subscribe(data => {
            this.sections = data;
        });
    }
    onWindowResize() {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    }
    changeCount(count) {
        this.count = count;
    }
    changeViewType(viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
    }
    openProductDialog(product) {
        let dialogRef = this.dialog.open(_shared_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ProductDialogComponent"], {
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
    filters(productType) {
        if (productType.substr(productType.length - 2, productType.length - 1) == 'as' || productType.substr(productType.length - 2, productType.length - 1) == 'os') {
            productType = productType.substr(0, productType.length - 1);
        }
        else if (productType.substr(productType.length - 2, productType.length - 1) == 'es') {
            productType = productType.substr(0, productType.length - 2);
        }
        this.appService.getFilters(productType).subscribe(data => {
            this.listFilters = data;
            for (let filter of this.listFilters) {
                if (filter.type == 2) {
                    this.activeFilters['characteristic'].push({ id: filter.characteristic, value: filter.valueMax, type: filter.type });
                    this.activeFilters['range'][filter.characteristic] = filter.valueMax;
                }
            }
        });
    }
    onPageChanged(event) {
        this.page = event;
        // this.getProducts();
        window.scrollTo(0, 0);
    }
    onSubmitTeLlamamos(values) {
        if (this.form.valid) {
            this.appService.enviarBusqueda(values, this.textSearch).subscribe(data => {
                const res = JSON.parse(JSON.stringify(data));
                this.searchSend = res.resultado;
            });
            this.form.reset();
        }
        else {
            this.searchSend = false;
        }
    }
    openDeliveryTermsDialog() {
        const text = 'Los envíos gratuitos que ofrece JarDepot son a la cobertura terrestre normal de las paqueterías con las que tenemos convenio (ODM).<br>' +
            'NO aplica a zonas extendidas (En extra coberturas se le indicará la diferencia a pagar para su consideración).<br>' +
            'Las compras deben ser mayor a $3,000.00 MXN<br>' +
            'NO aplica con otras paqueterías<br>' +
            'El tiempo de entrega estimado y sujeto a existencias es de 2 a 6 días hábiles, (Mínimo/Máximo) contados a partir de las siguientes ' +
            '24 hrs de que su depósito se ha verificado y de recibir su correo con los datos completos para facturar y enviar su producto.<br><br>';
        const dialogRef = this.dialog.open(_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], {
            panelClass: 'generic-dialog',
            direction: 'ltr'
        });
        dialogRef.componentInstance.title = 'Condiciones de envíos Gratis:';
        dialogRef.componentInstance.body = text;
    }
    getDistributions() {
        this.distributions = this.appService.getDistributions();
    }
    closeSideMenu() {
        if (!this.sidenavOpen) {
            this.sidenav.close();
        }
    }
};
ProductsComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav', { static: true }),
    __metadata("design:type", Object)
], ProductsComponent.prototype, "sidenav", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsComponent.prototype, "onWindowResize", null);
ProductsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/products/products.component.html"),
        styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/pages/products/products.component.scss")]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Meta"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], ProductsComponent);



/***/ }),

/***/ "./src/app/pages/products/products.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/*! exports provided: routes, ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../theme/pipes/pipes.module */ "./src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product.component */ "./src/app/pages/products/product/product.component.ts");
/* harmony import */ var _product_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product-zoom/product-zoom.component */ "./src/app/pages/products/product/product-zoom/product-zoom.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _ngx_lite_json_ld__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-lite/json-ld */ "./node_modules/@ngx-lite/json-ld/fesm2015/ngx-lite-json-ld.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













const routes = [
    { path: 'ofertas', component: _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"], breadcrumb: ':ofertas;' },
    { path: 'busqueda/:search', component: _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"], breadcrumb: ':busqueda;' },
    { path: 'catalogo/:brand/:product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"], breadcrumb: ':product' },
    { path: ':nivel1/:nivel2', component: _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"], breadcrumb: ':nivel1;:nivel2' }
];
let ProductsModule = class ProductsModule {
};
ProductsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
            _ngx_lite_json_ld__WEBPACK_IMPORTED_MODULE_12__["NgxJsonLdModule"]
        ],
        declarations: [
            _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
            _product_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_10__["ProductZoomComponent"]
        ],
        entryComponents: [
            _product_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_10__["ProductZoomComponent"]
        ]
    })
], ProductsModule);



/***/ })

}]);
//# sourceMappingURL=pages-products-products-module-es2015.js.map