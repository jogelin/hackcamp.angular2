System.register(['./../../../app.service', '@angular/core', '@angular/router', 'rxjs/Rx', 'rxjs/add/operator/combineLatest'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var app_service_1, core_1, router_1, Rx_1;
    var BookComponent;
    return {
        setters:[
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {}],
        execute: function() {
            BookComponent = (function () {
                function BookComponent(appService, route) {
                    this.appService = appService;
                    this.route = route;
                    this.initialData = { books: [], categories: [] };
                }
                BookComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // Get the books
                    var books$ = Rx_1.default.Observable.from(this.appService.getBooks());
                    var params$ = this.route.params;
                    Rx_1.default.Observable.combineLatest(books$, params$)
                        .subscribe(function (_a) {
                        var books = _a[0], params = _a[1];
                        _this.books = books;
                        _this.initialData.books = books;
                        _this.filterBooks(params.category);
                    });
                };
                BookComponent.prototype.filterBooks = function (category) {
                    if (category == undefined || category === "All") {
                        this.books = this.initialData.books;
                        return;
                    }
                    this.books = this.initialData.books.filter(function (book) { return book.category === category; });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], BookComponent.prototype, "navClosed", void 0);
                BookComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'bs-book',
                        templateUrl: 'book.template.html'
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService, router_1.ActivatedRoute])
                ], BookComponent);
                return BookComponent;
            }());
            exports_1("BookComponent", BookComponent);
        }
    }
});
//# sourceMappingURL=book.component.js.map