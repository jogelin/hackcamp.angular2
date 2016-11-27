System.register(['./mocks/books', '@angular/core', './mocks/sections', './mocks/categories'], function(exports_1, context_1) {
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
    var books_1, core_1, sections_1, categories_1;
    var AppService;
    return {
        setters:[
            function (books_1_1) {
                books_1 = books_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sections_1_1) {
                sections_1 = sections_1_1;
            },
            function (categories_1_1) {
                categories_1 = categories_1_1;
            }],
        execute: function() {
            AppService = (function () {
                function AppService() {
                }
                AppService.prototype.getSections = function () {
                    return sections_1.sections;
                };
                AppService.prototype.getAsyncSections = function () {
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve(sections_1.sections);
                        }, 20);
                    });
                };
                AppService.prototype.getCategories = function () {
                    return categories_1.categories;
                };
                AppService.prototype.getAsyncCategories = function () {
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve(categories_1.categories);
                        }, 2000);
                    });
                };
                AppService.prototype.getBooks = function () {
                    return books_1.mockBooks;
                };
                AppService.prototype.getAsyncBooks = function () {
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve(books_1.mockBooks);
                        }, 2000);
                    });
                };
                AppService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AppService);
                return AppService;
            }());
            exports_1("AppService", AppService);
        }
    }
});
//# sourceMappingURL=app.service.js.map