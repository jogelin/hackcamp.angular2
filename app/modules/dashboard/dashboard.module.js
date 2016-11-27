System.register(['./../shared/shared.module', './section/section.component', './dashboard/dashboard.component', '@angular/core', './routing.module', '@angular/common'], function(exports_1, context_1) {
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
    var shared_module_1, section_component_1, dashboard_component_1, core_1, routing_module_1, common_1;
    var DashboardModule;
    return {
        setters:[
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (section_component_1_1) {
                section_component_1 = section_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
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
            DashboardModule = (function () {
                function DashboardModule() {
                }
                DashboardModule = __decorate([
                    core_1.NgModule({
                        imports: [common_1.CommonModule, routing_module_1.RoutesModule, shared_module_1.SharedModule],
                        declarations: [
                            dashboard_component_1.DashboardComponent,
                            section_component_1.SectionComponent
                        ],
                        exports: [dashboard_component_1.DashboardComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DashboardModule);
                return DashboardModule;
            }());
            exports_1("DashboardModule", DashboardModule);
        }
    }
});
//# sourceMappingURL=dashboard.module.js.map