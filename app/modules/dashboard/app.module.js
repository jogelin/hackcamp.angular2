System.register(['./routing.module', './components/shell/shell.component', '@angular/core', '@angular/platform-browser', '@angular/forms', './components/dashboard/dashboard.component', './components/header/header.component', './components/menubar/menubar.component', './components/section/section.component', './components/bookstore/bookstore.component', './components/filter-category/filter-category.component', './components/book/book.component', './components/sidebar/sidebar.component'], function(exports_1, context_1) {
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
    var routing_module_1, shell_component_1, core_1, platform_browser_1, forms_1, dashboard_component_1, header_component_1, menubar_component_1, section_component_1, bookstore_component_1, filter_category_component_1, book_component_1, sidebar_component_1;
    var AppModule;
    return {
        setters:[
            function (routing_module_1_1) {
                routing_module_1 = routing_module_1_1;
            },
            function (shell_component_1_1) {
                shell_component_1 = shell_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
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
            },
            function (bookstore_component_1_1) {
                bookstore_component_1 = bookstore_component_1_1;
            },
            function (filter_category_component_1_1) {
                filter_category_component_1 = filter_category_component_1_1;
            },
            function (book_component_1_1) {
                book_component_1 = book_component_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, routing_module_1.RoutesModule],
                        declarations: [
                            dashboard_component_1.DashboardComponent,
                            header_component_1.HeaderComponent,
                            menubar_component_1.MenubarComponent,
                            section_component_1.SectionComponent,
                            filter_category_component_1.FilterCategoryComponent,
                            book_component_1.BookComponent,
                            sidebar_component_1.SidebarComponent,
                            bookstore_component_1.BookStoreComponent,
                            shell_component_1.ShellComponent,
                        ],
                        bootstrap: [shell_component_1.ShellComponent]
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