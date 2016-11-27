System.register(['@angular/core', '../../../app.service', 'rxjs/add/operator/switchMap', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, app_service_1, router_1;
    var BookStoreComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            BookStoreComponent = (function () {
                function BookStoreComponent(appServie, route) {
                    this.appServie = appServie;
                    this.route = route;
                    this.navClosed = true;
                    this.appTitleChanged = new core_1.EventEmitter();
                }
                BookStoreComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params
                        .subscribe(function (params) { return console.log(params); });
                    // Get the categories
                    this.appServie.getCategories()
                        .then(function (categories) {
                        _this.categories = categories;
                        /*  this.route.firstChild.params
                            .switchMap((params: Params) => {
                  
                              
                              params['category'];
                            })
                            .subscribe((category: string) => this.changeCategory(category));*/
                    });
                };
                BookStoreComponent.prototype.getBookDetail = function () {
                    console.log('Will be implemented in the next section');
                };
                BookStoreComponent.prototype.changeCategory = function (selectedCategory) {
                    this.categories = this.categories.map(function (category) {
                        category.selected = category.name === selectedCategory.name;
                        return category;
                    });
                };
                BookStoreComponent.prototype.search = function (searchTerm) {
                    searchTerm = searchTerm.toLowerCase();
                    this.books = this.initialData.books.filter(function (book) {
                        return book.title.toLowerCase().includes(searchTerm) ||
                            book.category.toLocaleLowerCase().includes(searchTerm);
                    });
                };
                BookStoreComponent.prototype.toggleSidebar = function (open) {
                    this.navClosed = open;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], BookStoreComponent.prototype, "appTitleChanged", void 0);
                BookStoreComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'bookstore',
                        templateUrl: 'bookstore.template.html',
                        providers: [app_service_1.AppService]
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService, router_1.ActivatedRoute])
                ], BookStoreComponent);
                return BookStoreComponent;
            }());
            exports_1("BookStoreComponent", BookStoreComponent);
        }
    }
});
//# sourceMappingURL=bookstore.component.js.map