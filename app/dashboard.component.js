System.register(['@angular/core', './mocks/sections'], function(exports_1, context_1) {
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
    var core_1, sections_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sections_1_1) {
                sections_1 = sections_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent() {
                    this.title = "Amazon by @Hackages!";
                    this.sections = sections_1.sections;
                }
                DashboardComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        styles: ["\n     a.section {\n        text-align: center;\n        color: black;\n        font-size: 20px;\n        font-weight: 600;\n        background: aliceblue;\n     }\n    "],
                        selector: 'dashboard',
                        template: "\n        <bs-header [title]=\"title\"></bs-header>\n        <bs-menubar><div>Mon menu</div></bs-menubar>\n        <bs-section [sections]=\"sections\"></bs-section>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map