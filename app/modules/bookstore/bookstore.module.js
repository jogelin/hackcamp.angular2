System.register(['./../shared/shared.module', './sidebar/sidebar.component', './filter-category/filter-category.component', './bookstore/bookstore.component', './book/book.component', '@angular/core', './routing.module', '@angular/common'], function(exports_1, context_1) {
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
    var shared_module_1, sidebar_component_1, filter_category_component_1, bookstore_component_1, book_component_1, core_1, routing_module_1, common_1;
    var BookstoreModule;
    return {
        setters:[
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (filter_category_component_1_1) {
                filter_category_component_1 = filter_category_component_1_1;
            },
            function (bookstore_component_1_1) {
                bookstore_component_1 = bookstore_component_1_1;
            },
            function (book_component_1_1) {
                book_component_1 = book_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (routing_module_1_1) {
                routing_module_1 = routing_module_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            BookstoreModule = (function () {
                function BookstoreModule() {
                }
                BookstoreModule = __decorate([
                    core_1.NgModule({
                        imports: [common_1.CommonModule, routing_module_1.RoutesModule, shared_module_1.SharedModule],
                        declarations: [
                            book_component_1.BookComponent,
                            bookstore_component_1.BookStoreComponent,
                            filter_category_component_1.FilterCategoryComponent,
                            sidebar_component_1.SidebarComponent
                        ],
                        exports: [bookstore_component_1.BookStoreComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BookstoreModule);
                return BookstoreModule;
            }());
            exports_1("BookstoreModule", BookstoreModule);
        }
    }
});
//# sourceMappingURL=bookstore.module.js.map