System.register(['./app.service', './bs-section.component', './bs-menubar.component', './bs-header.component', '@angular/core', '@angular/platform-browser', './bs-dashboard.component'], function(exports_1, context_1) {
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
    var app_service_1, bs_section_component_1, bs_menubar_component_1, bs_header_component_1, core_1, platform_browser_1, bs_dashboard_component_1;
    var AppModule;
    return {
        setters:[
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (bs_section_component_1_1) {
                bs_section_component_1 = bs_section_component_1_1;
            },
            function (bs_menubar_component_1_1) {
                bs_menubar_component_1 = bs_menubar_component_1_1;
            },
            function (bs_header_component_1_1) {
                bs_header_component_1 = bs_header_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (bs_dashboard_component_1_1) {
                bs_dashboard_component_1 = bs_dashboard_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule],
                        declarations: [bs_dashboard_component_1.DashboardComponent, bs_header_component_1.HeaderComponent, bs_menubar_component_1.MenuBarComponent, bs_section_component_1.SectionComponent],
                        bootstrap: [bs_dashboard_component_1.DashboardComponent],
                        providers: [app_service_1.AppService]
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