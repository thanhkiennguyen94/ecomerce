(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-errors-error-404-error-404-module"],{

/***/ "3MrV":
/*!**************************************************************!*\
  !*** ./src/app/main/errors/error-404/error-404.component.ts ***!
  \**************************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "sF+I");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @visurel/iconify-angular */ "VX/1");




class Error404Component {
    constructor() {
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_0___default.a;
    }
    ngOnInit() {
    }
}
Error404Component.ɵfac = function Error404Component_Factory(t) { return new (t || Error404Component)(); };
Error404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Error404Component, selectors: [["vex-error404"]], decls: 9, vars: 1, consts: [[1, "w-full", "p-gutter", "text-center"], ["src", "assets/img/illustrations/data_center.svg", 1, "w-full", "max-w-lg", "mx-auto", "mb-6"], [1, "display-3", "font-medium", "m-0"], [1, "headline", "m-0"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "bg-card", "rounded-full", "overflow-hidden", "relative", "ltr:pl-5", "rtl:pr-5", "h-12", "max-w-md", "w-full", "shadow-8", "mx-auto", "mt-6"], ["fxFlex", "none", "height", "24px", "width", "24px", 1, "text-secondary", 3, "icon"], ["fxFlex", "auto", "placeholder", "Search for other pages ...", "type", "text", 1, "border-0", "h-12", "outline-none", "ltr:pl-4", "rtl:pr-4", "placeholder:text-secondary", "bg-card"]], template: function Error404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Page not found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ic-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.icSearch);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_3__["IconDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci00MDQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "FDOz":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-quicklink/__ivy_ngcc__/fesm2015/ngx-quicklink.js ***!
  \***************************************************************************/
/*! exports provided: QuicklinkModule, QuicklinkStrategy, ɵa, ɵb, ɵc, ɵe, ɵɵLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuicklinkModule", function() { return QuicklinkModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuicklinkStrategy", function() { return QuicklinkStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return LinkHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ObservableLinkHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return PreloadLinkHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return PrefetchRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵɵLinkDirective", function() { return LinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");




// Using a global registry so we can keep it populated across lazy-loaded
// modules with different parent injectors which create instance of the registry.


const globalRegistry = [];
class PrefetchRegistry {
    constructor(router) {
        this.router = router;
        this.trees = globalRegistry;
    }
    add(tree) {
        this.trees.push(tree);
    }
    shouldPrefetch(url) {
        const tree = this.router.parseUrl(url);
        return this.trees.some(containsTree.bind(null, tree));
    }
}
PrefetchRegistry.ɵfac = function PrefetchRegistry_Factory(t) { return new (t || PrefetchRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PrefetchRegistry.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PrefetchRegistry, factory: PrefetchRegistry.ɵfac });
PrefetchRegistry.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrefetchRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();
function containsQueryParams(container, containee) {
    // TODO: This does not handle array params correctly.
    return (Object.keys(containee).length <= Object.keys(container).length &&
        Object.keys(containee).every(key => containee[key] === container[key]));
}
function containsTree(containee, container) {
    return (containsQueryParams(container.queryParams, containee.queryParams) &&
        containsSegmentGroup(container.root, containee.root, containee.root.segments));
}
function containsSegmentGroup(container, containee, containeePaths) {
    if (container.segments.length > containeePaths.length) {
        const current = container.segments.slice(0, containeePaths.length);
        if (!equalPath(current, containeePaths))
            return false;
        if (containee.hasChildren())
            return false;
        return true;
    }
    else if (container.segments.length === containeePaths.length) {
        if (!equalPath(container.segments, containeePaths))
            return false;
        if (!containee.hasChildren())
            return true;
        for (const c in containee.children) {
            if (!container.children[c])
                break;
            if (containsSegmentGroup(container.children[c], containee.children[c], containee.children[c].segments))
                return true;
        }
        return false;
    }
    else {
        const current = containeePaths.slice(0, container.segments.length);
        const next = containeePaths.slice(container.segments.length);
        if (!equalPath(container.segments, current))
            return false;
        if (!container.children[_angular_router__WEBPACK_IMPORTED_MODULE_1__["PRIMARY_OUTLET"]])
            return false;
        return containsSegmentGroup(container.children[_angular_router__WEBPACK_IMPORTED_MODULE_1__["PRIMARY_OUTLET"]], containee, next);
    }
}
function equalPath(as, bs) {
    if (as.length !== bs.length)
        return false;
    return as.every((a, i) => a.path === bs[i].path || a.path.startsWith(':') || bs[i].path.startsWith(':'));
}

const ɵ0 = function (cb) {
    const start = Date.now();
    return setTimeout(function () {
        cb({
            didTimeout: false,
            timeRemaining: function () {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
}, ɵ1 = () => { };
const requestIdleCallback = typeof window !== 'undefined'
    ? window.requestIdleCallback || ɵ0
    : ɵ1;
const observerSupported = () => typeof window !== 'undefined' ? !!window.IntersectionObserver : false;
const ɵ2 = observerSupported;
const LinkHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('LinkHandler');
class ObservableLinkHandler {
    constructor(loader, registry, ngZone) {
        this.loader = loader;
        this.registry = registry;
        this.ngZone = ngZone;
        this.elementLink = new Map();
        this.observer = observerSupported()
            ? new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const link = entry.target;
                        const routerLink = this.elementLink.get(link);
                        if (!routerLink || !routerLink.urlTree)
                            return;
                        this.registry.add(routerLink.urlTree);
                        this.observer.unobserve(link);
                        requestIdleCallback(() => {
                            this.loader.preload().subscribe(() => void 0);
                        });
                    }
                });
            })
            : null;
    }
    register(el) {
        this.elementLink.set(el.element, el);
        this.ngZone.runOutsideAngular(() => {
            this.observer.observe(el.element);
        });
    }
    // First call to unregister will not hit this.
    unregister(el) {
        if (this.elementLink.has(el.element)) {
            this.observer.unobserve(el.element);
            this.elementLink.delete(el.element);
        }
    }
    supported() {
        return observerSupported();
    }
}
ObservableLinkHandler.ɵfac = function ObservableLinkHandler_Factory(t) { return new (t || ObservableLinkHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterPreloader"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrefetchRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
ObservableLinkHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ObservableLinkHandler, factory: ObservableLinkHandler.ɵfac });
ObservableLinkHandler.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterPreloader"] },
    { type: PrefetchRegistry },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObservableLinkHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterPreloader"] }, { type: PrefetchRegistry }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();
class PreloadLinkHandler {
    constructor(loader, registry) {
        this.loader = loader;
        this.registry = registry;
    }
    register(el) {
        this.registry.add(el.urlTree);
        requestIdleCallback(() => this.loader.preload().subscribe(() => void 0));
    }
    unregister(_) { }
    supported() {
        return true;
    }
}
PreloadLinkHandler.ɵfac = function PreloadLinkHandler_Factory(t) { return new (t || PreloadLinkHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterPreloader"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrefetchRegistry)); };
PreloadLinkHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PreloadLinkHandler, factory: PreloadLinkHandler.ɵfac });
PreloadLinkHandler.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterPreloader"] },
    { type: PrefetchRegistry }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreloadLinkHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterPreloader"] }, { type: PrefetchRegistry }]; }, null); })();

class LinkDirective {
    constructor(linkHandlers, el, link, linkWithHref) {
        this.linkHandlers = linkHandlers;
        this.el = el;
        this.linkHandler = this.linkHandlers.filter(h => h.supported()).shift();
        this.rl = link || linkWithHref;
        if (this.element && this.element.setAttribute) {
            this.element.setAttribute('ngx-ql', '');
        }
    }
    ngOnChanges(c) {
        if (c.routerLink) {
            this.linkHandler.unregister(this);
            this.linkHandler.register(this);
        }
    }
    ngOnDestroy() {
        this.linkHandler.unregister(this);
    }
    get element() {
        return this.el.nativeElement;
    }
    get urlTree() {
        return this.rl.urlTree;
    }
}
LinkDirective.ɵfac = function LinkDirective_Factory(t) { return new (t || LinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LinkHandler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], 8)); };
LinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LinkDirective, selectors: [["", "routerLink", ""]], inputs: { routerLink: "routerLink" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
LinkDirective.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LinkHandler,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
LinkDirective.propDecorators = {
    routerLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[routerLink]'
            }]
    }], function () { return [{ type: Array, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [LinkHandler]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { routerLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class QuicklinkStrategy {
    constructor(registry, router) {
        this.registry = registry;
        this.router = router;
        this.loading = new Set();
    }
    preload(route, load) {
        if (this.loading.has(route)) {
            // Don't preload the same route twice
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        }
        const conn = typeof navigator !== 'undefined' ? navigator.connection : undefined;
        if (conn) {
            // Don't preload if the user is on 2G. or if Save-Data is enabled..
            if ((conn.effectiveType || '').includes('2g') || conn.saveData)
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        }
        // Prevent from preloading
        if (route.data && route.data.preload === false) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        }
        const fullPath = findPath(this.router.config, route);
        if (this.registry.shouldPrefetch(fullPath)) {
            this.loading.add(route);
            return load();
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
    }
}
QuicklinkStrategy.ɵfac = function QuicklinkStrategy_Factory(t) { return new (t || QuicklinkStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrefetchRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
QuicklinkStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuicklinkStrategy, factory: QuicklinkStrategy.ɵfac });
QuicklinkStrategy.ctorParameters = () => [
    { type: PrefetchRegistry },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuicklinkStrategy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: PrefetchRegistry }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();
const findPath = (config, route) => {
    config = config.slice();
    const parent = new Map();
    const visited = new Set();
    while (config.length) {
        const el = config.shift();
        visited.add(el);
        if (el === route)
            break;
        let children = el.children || [];
        const current = el._loadedConfig;
        if (current && current.routes) {
            children = children.concat(current.routes);
        }
        children.forEach((r) => {
            if (visited.has(r))
                return;
            parent.set(r, el);
            config.push(r);
        });
    }
    let path = '';
    let current = route;
    while (current) {
        if (isPrimaryRoute(current)) {
            path = `/${current.path}${path}`;
        }
        else {
            path = `/(${current.outlet}:${current.path}${path})`;
        }
        current = parent.get(current);
    }
    return path.replace(/\/\//, '/');
};
const ɵ0$1 = findPath;
function isPrimaryRoute(route) {
    return route.outlet === _angular_router__WEBPACK_IMPORTED_MODULE_1__["PRIMARY_OUTLET"] || !route.outlet;
}

class QuicklinkModule {
}
QuicklinkModule.ɵfac = function QuicklinkModule_Factory(t) { return new (t || QuicklinkModule)(); };
QuicklinkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QuicklinkModule });
QuicklinkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        {
            provide: LinkHandler,
            useClass: ObservableLinkHandler,
            multi: true
        },
        {
            provide: LinkHandler,
            useClass: PreloadLinkHandler,
            multi: true
        },
        PrefetchRegistry,
        QuicklinkStrategy
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QuicklinkModule, { declarations: [LinkDirective], exports: [LinkDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuicklinkModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [LinkDirective],
                providers: [
                    {
                        provide: LinkHandler,
                        useClass: ObservableLinkHandler,
                        multi: true
                    },
                    {
                        provide: LinkHandler,
                        useClass: PreloadLinkHandler,
                        multi: true
                    },
                    PrefetchRegistry,
                    QuicklinkStrategy
                ],
                exports: [LinkDirective]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-quicklink.js.map

/***/ }),

/***/ "Y6mU":
/*!***********************************************************!*\
  !*** ./src/app/main/errors/error-404/error-404.module.ts ***!
  \***********************************************************/
/*! exports provided: Error404Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Module", function() { return Error404Module; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _error_404_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-404-routing.module */ "dXvc");
/* harmony import */ var _error_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-404.component */ "3MrV");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @visurel/iconify-angular */ "VX/1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class Error404Module {
}
Error404Module.ɵfac = function Error404Module_Factory(t) { return new (t || Error404Module)(); };
Error404Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: Error404Module });
Error404Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _error_404_routing_module__WEBPACK_IMPORTED_MODULE_1__["Error404RoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](Error404Module, { declarations: [_error_404_component__WEBPACK_IMPORTED_MODULE_2__["Error404Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _error_404_routing_module__WEBPACK_IMPORTED_MODULE_1__["Error404RoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"]] }); })();


/***/ }),

/***/ "dXvc":
/*!*******************************************************************!*\
  !*** ./src/app/main/errors/error-404/error-404-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: Error404RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404RoutingModule", function() { return Error404RoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-quicklink */ "FDOz");
/* harmony import */ var _error_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-404.component */ "3MrV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _error_404_component__WEBPACK_IMPORTED_MODULE_2__["Error404Component"],
        data: {
            containerEnabled: true,
            toolbarShadowEnabled: true
        }
    }
];
class Error404RoutingModule {
}
Error404RoutingModule.ɵfac = function Error404RoutingModule_Factory(t) { return new (t || Error404RoutingModule)(); };
Error404RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: Error404RoutingModule });
Error404RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], ngx_quicklink__WEBPACK_IMPORTED_MODULE_1__["QuicklinkModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Error404RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], ngx_quicklink__WEBPACK_IMPORTED_MODULE_1__["QuicklinkModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=main-errors-error-404-error-404-module-es2015.js.map