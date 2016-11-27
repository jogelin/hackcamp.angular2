System.register(['./components/gallery-item/gallery-item.component', './components/book/book.component', './components/gallery/gallery.component', './components/menubar-category/menubar-category.component', './components/bookstore/bookstore.component', '@angular/core', '@angular/platform-browser', './components/dashboard/dashboard.component', './components/header/header.component', './components/menubar/menubar.component', './components/section/section.component'], function(exports_1, context_1) {
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
    var gallery_item_component_1, book_component_1, gallery_component_1, menubar_category_component_1, bookstore_component_1, core_1, platform_browser_1, dashboard_component_1, header_component_1, menubar_component_1, section_component_1;
    var AppModule;
    return {
        setters:[
            function (gallery_item_component_1_1) {
                gallery_item_component_1 = gallery_item_component_1_1;
            },
            function (book_component_1_1) {
                book_component_1 = book_component_1_1;
            },
            function (gallery_component_1_1) {
                gallery_component_1 = gallery_component_1_1;
            },
            function (menubar_category_component_1_1) {
                menubar_category_component_1 = menubar_category_component_1_1;
            },
            function (bookstore_component_1_1) {
                bookstore_component_1 = bookstore_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (menubar_component_1_1) {
                menubar_component_1 = menubar_component_1_1;
            },
            function (section_component_1_1) {
                section_component_1 = section_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule],
                        declarations: [
                            dashboard_component_1.DashboardComponent,
                            header_component_1.HeaderComponent,
                            menubar_component_1.MenubarComponent,
                            section_component_1.SectionComponent,
                            bookstore_component_1.BookStoreComponent,
                            menubar_category_component_1.MenubarCategoryComponent,
                            gallery_component_1.GalleryComponent,
                            book_component_1.BookComponent,
                            gallery_item_component_1.GalleryItemComponent
                        ],
                        bootstrap: [bookstore_component_1.BookStoreComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map