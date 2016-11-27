System.register(['./../../app.service', '@angular/core'], function(exports_1, context_1) {
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
    var app_service_1, core_1;
    var BookStoreComponent;
    return {
        setters:[
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BookStoreComponent = (function () {
                function BookStoreComponent(appService) {
                    this.appService = appService;
                    this.navClosed = true;
                    this.title = "Bookstore by Hackages";
                }
                BookStoreComponent.prototype.ngOnInit = function () {
                    this.getCategories();
                    this.getBooks();
                };
                BookStoreComponent.prototype.getCategories = function () {
                    this.categories = this.appService.getAsyncCategories();
                };
                BookStoreComponent.prototype.getBooks = function () {
                    this.books = this.appService.getAsyncBooks();
                };
                BookStoreComponent.prototype.getBookDetail = function () {
                    console.log('Will be implemented in the next section');
                };
                BookStoreComponent.prototype.changeCategory = function (selectedCategory) {
                    console.warn('not implemented yet!!');
                };
                BookStoreComponent.prototype.filterBooks = function (category) {
                    console.warn('not implemented yet!!');
                };
                BookStoreComponent.prototype.search = function () {
                    console.warn('not implemented yet!!');
                };
                BookStoreComponent.prototype.toggleSideBar = function () {
                    console.warn('not implemented yet!!');
                };
                BookStoreComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'bookstore',
                        templateUrl: 'bookstore.template.html',
                        providers: [app_service_1.AppService]
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService])
                ], BookStoreComponent);
                return BookStoreComponent;
            }());
            exports_1("BookStoreComponent", BookStoreComponent);
        }
    }
});
//# sourceMappingURL=bookstore.component.js.map