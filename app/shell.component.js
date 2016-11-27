System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var ShellComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ShellComponent = (function () {
                function ShellComponent(route) {
                    this.route = route;
                }
                ShellComponent.prototype.ngOnInit = function () {
                    // Asynchronous process 
                    var _this = this;
                    this.route.events.subscribe(function (data) {
                        if (data instanceof router_1.RoutesRecognized) {
                            _this.title = data.state.root.firstChild.data.title;
                        }
                    });
                };
                ShellComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        styles: ["\n     a.section {\n        text-align: center;\n        color: black;\n        font-size: 20px;\n        font-weight: 600;\n        background: aliceblue;\n     }\n    "],
                        selector: 'bs-shell',
                        template: "\n        <bs-header [appTitle]=\"title\"></bs-header>\n\n        <main class=\"main-content\">\n            <router-outlet></router-outlet>\n        </main>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ShellComponent);
                return ShellComponent;
            }());
            exports_1("ShellComponent", ShellComponent);
        }
    }
});
//# sourceMappingURL=shell.component.js.map